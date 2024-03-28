import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { exportPlayer } from '@src/config/config';
import { Player } from './dto/player';
import { Stat } from './dto/stat';


@Injectable()
export class AppService {

    getSortedPlayersList(): Array<Player | null> {
        try {
            let playersList = exportPlayer;
            playersList.sort(function (a, b) {
                return a.data.rank - b.data.rank
            })
            return playersList

        } catch {
            throw new HttpException(
                `Failed`,
                HttpStatus.BAD_REQUEST
            );
        }
    }

    getPlayerById(id: Number): (Player | null) {
        let playersList = exportPlayer;
        let player = playersList.find(element => element.id === id);
        if (player === undefined) return (null);
        return player
    }

    getStat(): (Stat | null) {
        let playersList = exportPlayer;

        const objectStat = {
            GreatestCountry: this.getCountryWithGreatestVictory(playersList),
            AverageIMC: this.getAverageIMC(playersList),
            SizeMediane: this.getMedianeSize(playersList)
        } as Stat;
        return (objectStat);
    }

    private getCountryWithGreatestVictory(playersList: Array<Player | null>): string {

        const mappingCountry = new Map();

        /* List number of victories for a given country. */
        playersList.forEach(element => {
            let CountryCode = element.country.code;
            if (mappingCountry.has(CountryCode) === false) {
                mappingCountry.set(CountryCode, 1);
            } else {
                let value = mappingCountry.get(CountryCode);
                mappingCountry.set(CountryCode, value + 1);
            }
        });

        /* search the country with the most important number of victories */
        let numberVictory = 0;
        let countryname = '';

        for (var [key, value] of mappingCountry) {
            if (value > numberVictory) {
                numberVictory = value;
                countryname = key;
            }
        }
        return (countryname);
    }

    private getAverageIMC(playersList: Array<Player | null>): number {
        let IMCtotal = 0
        playersList.forEach(element => {
            IMCtotal += (element.data.weight / 1000) / (element.data.height / 100) / (element.data.height / 100)
        });
        return Math.round(IMCtotal / playersList.length * 100) / 100;  /* 2 décimales */
    }

    private getMedianeSize(playersList: Array<Player | null>): number {

        playersList.sort(function (a, b) {
            return a.data.height - b.data.height
        })

        if (playersList.length % 2 === 0) { /* even number of players */
            let Tmp1 = (playersList[(playersList.length / 2) - 1].data.height)
            let Tmp2 = (playersList[(playersList.length / 2) + 1].data.height)
            return ((Tmp1 + Tmp2) / 2)
        }
        if (playersList.length % 2 === 1) { /* odd number of players */
            return (playersList[(playersList.length - 1) / 2].data.height);
        }
    }
}





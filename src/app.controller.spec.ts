import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '@src/app.controller';
import { AppService } from '@src/app.service';
import { HttpException, HttpStatus } from '@nestjs/common';

import { exportPlayerSorted } from './../test/test-result';

describe('AppController', () => {
    let appController: AppController;

    beforeEach(async () => {
        const app: TestingModule = await Test.createTestingModule({
            controllers: [AppController],
            providers: [AppService],
        }).compile();

        appController = app.get<AppController>(AppController);
    });

    it('should be defined', () => {
        expect(appController).toBeDefined();
    });

    describe('list player', () => {
        it('should return "player list"', () => {
            expect(appController.SortedPlayersList()).toStrictEqual(exportPlayerSorted)
        });
    });

    describe('player id', () => {
        it('should return a player with a speficic id (SerenaWilliams)', () => {
            const id = '102'
            const SerenaWilliams = {
                "id": 102,
                "firstname": "Serena",
                "lastname": "Williams",
                "shortname": "S.WIL",
                "sex": "F",
                "country": {
                    "picture": "https://data.latelier.co/training/tennis_stats/resources/USA.png",
                    "code": "USA"
                },
                "picture": "https://data.latelier.co/training/tennis_stats/resources/Serena.png",
                "data": {
                    "rank": 10,
                    "points": 3521,
                    "weight": 72000,
                    "height": 175,
                    "age": 37,
                    "last": [0, 1, 1, 1, 0]
                }
            }
            expect(appController.getPlayersById(id)).toStrictEqual(SerenaWilliams)
        });

        it('should return a null player following an invalid id ', () => {
            const id = '10200';
            expect(appController.getPlayersById(id)).toBe(null)
        });
    });

    describe('stat', () => {
        it('should return a stat object', () => {
            expect(appController.getStat()).toStrictEqual({
                "GreatestCountry": "USA",
                "AverageIMC": 23.36,
                "SizeMediane": 185
            })
        });
    });

});

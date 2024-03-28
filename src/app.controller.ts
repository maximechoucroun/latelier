import { Controller, Get, Param } from "@nestjs/common";
import { AppService } from "@src/app.service";
import { Player } from "./dto/player";
import { Stat } from "./dto/stat";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {
    }

    @Get('sortedPlayersList')
    public SortedPlayersList(): Array<Player> {
        return this.appService.getSortedPlayersList();
    }

    @Get('player/:playerId')
    public getPlayersById(@Param('playerId') playerId: string): (Player | null) {
        var playerId_number: Number = +playerId;
        let player = this.appService.getPlayerById(playerId_number);
        return player;
    }

    @Get('stat')
    public getStat(): Stat {
        let object = this.appService.getStat();
        return object
    }
}



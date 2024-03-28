### 0/ création d'un projet sur gitlab avec la branche setup-et-debut, puis pasas sur main
Environnement Ubuntu v20 en environnement WSL2

maxime@Mandarine:~/tests/nestjs/latelier/latelier$ lsb_release -a
No LSB modules are available.
Distributor ID: Ubuntu
Description:    Ubuntu 20.04.4 LTS
Release:        20.04
Codename:       focal


On considere que nodeJs, npm, nestjs, microsoft vscode sont déja installés

node --version
v21.6.0
https://nodejs.org/en/download

npm --version
10.5.0
  
nest --version
10.3.2
https://docs.nestjs.com/first-steps

Microsoft VsCode sous Win mais en mode Ubuntu WSL2
(Version Win de VSCODE, mais travaillant à distance sur Ubuntu)
v 1.87

**Affichage**
Version: 1.87.2 (user setup)
Commit: 863d2581ecda6849923a2118d93a088b0745d9d6
Date: 2024-03-08T15:20:17.278Z
Electron: 27.3.2
ElectronBuildId: 26836302
Chromium: 118.0.5993.159
Node.js: 18.17.1   (différente de la version du projet)
V8: 11.8.172.18-electron.0
OS: Windows_NT x64 10.0.22631


Sont installés sur VScode:
prettier
typescript
eslint   


### 1/ Git
`Git clone https://github.com/maxime-choucroun/latelier`

### 2/ Install
 `npm i -g @nestjs/cli`
 `nest new latelier`



### 3/ Changement de repertoire 
`cd latelier`

le répertoire est dans mon cas:  maxime@Mandarine:~/tests/nestjs/latelier/latelier$
maxime user
mandarine nom de l'ordinateur


### 4/ Verification de l'installation du projet blanc

Indentation space 4 - UTF-8 LF

Sont installés



maxime@Mandarine:~/tests/nestjs/latelier/latelier$ `npm install`
(install des modules)

maxime@Mandarine:~/tests/nestjs/latelier/latelier$ `npm run start:dev`


Affichage:

[3:01:52 PM] Starting compilation in watch mode...

[3:01:54 PM] Found 0 errors. Watching for file changes.

[Nest] 16328  - 03/27/2024, 3:01:55 PM     LOG [NestFactory] Starting Nest application...
[Nest] 16328  - 03/27/2024, 3:01:55 PM     LOG [InstanceLoader] AppModule dependencies initialized +9ms
[Nest] 16328  - 03/27/2024, 3:01:55 PM     LOG [RoutesResolver] AppController {/}: +14ms
[Nest] 16328  - 03/27/2024, 3:01:55 PM     LOG [RouterExplorer] Mapped {/, GET} route +2ms
[Nest] 16328  - 03/27/2024, 3:01:55 PM     LOG [NestApplication] Nest application successfully started +3ms
</span>

### 5/ Tests jest
 `npm run test`

**Affichage**
maxime@Mandarine:~/tests/nestjs/latelier/latelier$ npm run test 

> latelier@0.0.1 test
> jest

 PASS  src/app.controller.spec.ts
  AppController
    ✓ should be defined (13 ms)
    list player
      ✓ should return "player list" (5 ms)
    player id
      ✓ should return a player with a speficic id (SerenaWilliams) (10 ms)
      ✓ should return a null player following an invalid id  (2 ms)
    stat
      ✓ should return a stat object (3 ms)

Test Suites: 1 passed, 1 total
Tests:       5 passed, 5 total
Snapshots:   0 total
Time:        2.097 s, estimated 3 s
Ran all test suites.
maxime@Mandarine:~/tests/nestjs/latelier/latelier$ 

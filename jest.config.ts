import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
    moduleFileExtensions: ['js', 'ts', 'json'],
    moduleDirectories: ['node_modules', 'src'],
    rootDir: './src',
    testRegex: '.*\\.spec\\.ts$',
    transform: {
        '^.+\\.(t|j)s$': 'ts-jest'
    },
    collectCoverageFrom: [
        '**/*.(t|j)s'
    ],
    coverageDirectory: '../coverage',
    testEnvironment: 'node',
    moduleNameMapper: {
        '@config/(.*)': '<rootDir>/config/$1',
        '@src/(.*)': '<rootDir>/$1',
    }
};

export default config;

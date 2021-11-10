import { damage } from './damage.js';

export function playerAttPhys(playerStats, compStats, moveData, computerHp) {
    let playerMoveDamage = damage(playerStats.atk, compStats.def, compStats.hp, moveData.basePower);
    computerHp = computerHp - playerMoveDamage;
    return computerHp;
}

export function computerAttPhys(compStats, playerStats, computerMove, currentHp) {
    let compMoveDamage = damage(compStats.atk, playerStats.def, playerStats.hp, computerMove.basePower);
    currentHp = currentHp - compMoveDamage;
    return currentHp;
}

export function playerAttSpe(playerStats, compStats, moveData, computerHp) {
    let playerMoveDamage = damage(playerStats.spa, compStats.spd, compStats.hp, moveData.basePower); 
    computerHp = computerHp - playerMoveDamage;
    return computerHp;
}

export function computerAttSpe(compStats, playerStats, computerMove, currentHp) {
    let compMoveDamage = damage(compStats.spa, playerStats.spd, playerStats.hp, computerMove.basePower);
    currentHp = currentHp - compMoveDamage;
    return currentHp;
}

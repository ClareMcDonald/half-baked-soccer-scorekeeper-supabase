// IMPORT MODULES under test here:
import { renderGame, renderTeam } from '../render-utils.js';

const test = QUnit.test;

test('renderGame(game)', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const game = {
        name1: 'Dolphins',
        score1: 6,
        name2: 'Bubbles',
        score2: 4
    };

    const expected = '<div class="game"><div class="team"><p class="name">Dolphins</p><p class="score">6</p></div><div class="team"><p class="name">Bubbles</p><p class="score">4</p></div></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderGame(game);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('renderTeam(name, score)', (expect) => {
    //Arrange
    // Set up your arguments and expectations

    const name = 'Dolphins';
    const score = 6;

    const expected = '<div class="team"><p class="name">Dolphins</p><p class="score">6</p></div>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTeam(name, score);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
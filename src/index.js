import './css/style.css';
import Team from './js/Generator';
import Character from './js/Character';

const bowman = new Character('Piter', 'Bowman');
const magician = new Character('Mag', 'Magician');

const iterTeam = new Team([bowman, magician]);

for (const i of iterTeam.teamList) {
  console.log(i);
}

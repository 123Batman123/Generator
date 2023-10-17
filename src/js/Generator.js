export default class Team {
  constructor(teamList) {
    this.teamList = teamList;
  }

  * [Symbol.iterator]() {
    for (const i of this.teamList) {
      yield i;
    }
  }
}

export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(obj) {
    function deepEqual(obj1, obj2) {
      return JSON.stringify(obj1) === JSON.stringify(obj2);
    }
    /* eslint-disable-next-line */
    for (const i of this.members) {
      if (deepEqual(i, obj)) { throw new Error('Данный герой уже добавлен'); }
    }

    this.members.add(obj);
  }

  addAll(...obj) {
    const unique = obj.filter(((set) => (f) => !set.has(f.name) && set.add(f.name))(new Set()));
    /* eslint-disable-next-line */
    for (const i of unique) {
      this.members.add(i);
    }
  }

  toArray() {
    const arr = Array.from(this.members);
    return arr;
  }
}

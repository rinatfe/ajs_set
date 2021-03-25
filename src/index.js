export default class Team {
    constructor() {
        this.members = new Set();
    }

    add(obj) {
        for(const i of this.members) {
            if(i.name == obj.name) 
               throw new Error('Данный герой уже добавлен');
        } 

        this.members.add(obj);
    }

    addAll(...obj) {
        let unique = obj.filter((set => f => !set.has(f.name) && set.add(f.name))(new Set));
        for(let i of unique) {
            this.members.add(i);
        }
    }

    toArray() {
        const arr = Array.from(this.members);
        return arr;
    }
}
export {};

// let profile: object = {name: 'hum'};
// profile = {birthYear: 1929};

// let pro2: {
//     name: string;
// } = {name: 'teet'};

// pro2 = {bird: 'fjae'};
type Profile = {
    name: string,
    age: number
}
let profile: Profile = {
    name: 'tet',
    age: 13
}

type Profile2 = typeof profile;
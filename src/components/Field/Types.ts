
type ULID = string;

export type Idea = {
    id: ULID;
    contents: string;
}

export type Group = {
    id: ULID;
    title: string;
    children: ULID[];
}

export type Item = Idea | Group;

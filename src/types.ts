export enum SortDirection {
    Ascending = 'ASC',
    Descending = 'DESC',
}

export enum QueryScope {
    Titles = 'titles',
}

export type Page = {
    author: string;
    book?: string;
    chapter: string;
    text?: string;
    title: string;
};

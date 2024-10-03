import wretch from 'wretch';
import QueryStringAddon from 'wretch/addons/queryString';

import { Page } from './types';
import { parsePage } from './utils/parser';

const w = wretch('https://alathar.net/home/esound').addon(QueryStringAddon);

export const getPage = async (id: number): Promise<Page> => {
    const response = await w.url('/index.php').query({ coid: id, op: 'codevi' }).get().text();

    if (!response) {
        throw new Error(`Page ${id} not found`);
    }

    return parsePage(response.toString());
};

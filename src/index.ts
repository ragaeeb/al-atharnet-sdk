import { Page } from './types';
import { buildUrl, httpsGet } from './utils/network';
import { parsePage } from './utils/parser';

export const getPage = async (id: number): Promise<Page> => {
    const response = (await httpsGet(buildUrl({ coid: id, op: 'codevi' }))).toString().trim();

    if (!response) {
        throw new Error(`Page ${id} not found`);
    }

    return parsePage(response.toString());
};

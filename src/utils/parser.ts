import { CheerioAPI, load } from 'cheerio';

import { Page } from '../types';

export const parsePage = (responseData: string): Page => {
    const $: CheerioAPI = load(responseData);
    const author = $('div.page-title > a:nth-child(1)').text().trim();
    const book = $('div.page-title > a:nth-child(2)').text().trim();
    const chapter = $('div.card-header.block-header').text().trim();

    const title = $('body > div > div > div:nth-child(1) > div > div.card.mb-4 > div.card-body > div:nth-child(1)')
        .children()
        .not('a')
        .text()
        .trim();

    const bodyHtml = $('div.text-justify').html();
    const bodyWithLineBreaks = bodyHtml?.replace(/<br\s*\/?>/gi, '\n');
    const body = bodyWithLineBreaks ? load(bodyWithLineBreaks).text().trim() : '';

    return { ...(body && { body }), author, book, chapter, title };
};

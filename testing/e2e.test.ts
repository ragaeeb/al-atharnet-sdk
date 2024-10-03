import { describe, expect, it } from 'vitest';

import { getPage } from '../src/index';

describe('e2e', () => {
    describe('getPage', () => {
        it(
            'should get book information',
            async () => {
                const page = await getPage(110022);

                expect(page).toEqual({
                    author: 'الشيخ محمد بن صالح العثيمين',
                    body: expect.any(String),
                    book: 'صحيح مسلم',
                    chapter: 'كتاب الصيام والإعتكاف-02b',
                    title: expect.any(String),
                });
            },
            { timeout: 5000 },
        );

        it(
            'should handle 404',
            async () => {
                await expect(getPage(99999999)).rejects.toThrow('Page 99999999 not found');
            },
            { timeout: 5000 },
        );
    });
});

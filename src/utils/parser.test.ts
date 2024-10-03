import { promises as fs } from 'fs';
import { describe, expect, it } from 'vitest';

import { parsePage } from './parser';

describe('parser', () => {
    describe('parsePage', () => {
        it('should handle request', async () => {
            const html = await fs.readFile('testing/110022.html', 'utf-8');
            const actual = parsePage(html);

            expect(actual).toEqual({
                author: 'الشيخ محمد بن صالح العثيمين',
                body: expect.any(String),
                book: 'صحيح مسلم',
                chapter: 'كتاب الصيام والإعتكاف-02b',
                title: expect.any(String),
            });
        });
    });
});

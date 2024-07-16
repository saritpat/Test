import { merge } from '../src/merge';

describe('merge', () => {
    test('same lengths arrays', () => {
        const collection_1 = [1, 3, 5];
        const collection_2 = [6, 4, 2];
        const collection_3 = [0, 7, 8];
        
        const result = merge(collection_1, collection_2, collection_3);
        
        expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8]);
    });

    test('empty arrays', () => {
        const collection_1: number[] = [];
        const collection_2: number[] = [];
        const collection_3: number[] = [];
        
        const result = merge(collection_1, collection_2, collection_3);
        
        expect(result).toEqual([]);
    });

    test('single element arrays', () => {
        const collection_1 = [1];
        const collection_2 = [3];
        const collection_3 = [2];
        
        const result = merge(collection_1, collection_2, collection_3);
        
        expect(result).toEqual([1, 2, 3]);
    });

    test('different lengths arrays', () => {
        const collection_1 = [0, 1];
        const collection_2 = [4, 3];
        const collection_3 = [5, 7, 8];
        
        const result = merge(collection_1, collection_2, collection_3);
        
        expect(result).toEqual([0, 1, 3, 4, 5, 7, 8]);
    });
});
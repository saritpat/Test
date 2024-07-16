export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const answer: number[] = [];
    let i = 0;
    
    // start from last index
    let j = collection_2.length - 1;
    let k = 0;

    while (i < collection_1.length && j >= 0 && k < collection_3.length) {
        if (collection_1[i] <= collection_2[j] && collection_1[i] <= collection_3[k]) {
            answer.push(collection_1[i]);
            i++;
        } else if (collection_2[j] <= collection_1[i] && collection_2[j] <= collection_3[k]) {
            answer.push(collection_2[j]);
            j--;
        } else {
            answer.push(collection_3[k]);
            k++;
        }
    }

    // col_3 empty
    while (i < collection_1.length && j >= 0) {
        if (collection_1[i] <= collection_2[j]) {
            answer.push(collection_1[i]);
            i++;
        } else {
            answer.push(collection_2[j]);
            j++;
        }
    }

    // col_2 empty
    while (i < collection_1.length && k < collection_3.length) {
        if (collection_1[i] <= collection_3[k]) {
            answer.push(collection_1[i]);
            i++;
        } else {
            answer.push(collection_3[k]);
            k++;
        }
    }

    // col_1 empty
    while (j >= 0 && k < collection_3.length) {
        if (collection_2[j] <= collection_3[k]) {
            answer.push(collection_2[j]);
            j--;
        } else {
            answer.push(collection_3[k]);
            k++;
        }
    }
    
    // col_2,3 empty
    while (i < collection_1.length) {
        answer.push(collection_1[i]);
        i++;
    }

    // col_1,3 empty
    while (j >= 0) {
        answer.push(collection_2[j]);
        j--;
    }

    // col_1,2 empty
    while (k < collection_3.length) {
        answer.push(collection_3[k]);
        k++;
    }
    return answer;
}

console.log(merge([1, 3, 5], [6, 4, 2], [0, 7, 8]));
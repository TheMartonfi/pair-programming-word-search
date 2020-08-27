const wordSearch = (letters, word) => {

    const transpose = (matrix) => {
        let retArr = [];
        for (let i = 0; i < matrix[0].length; i++) {
          let subArr = [];
          for (let j = 0; j < matrix.length; j++) {
            subArr.push(matrix[j][i]);
          }
          retArr.push(subArr);
        }
        return retArr;
      };

      
    const findWord = (array) => {
        for (let letters of array) {
            if (letters.includes(word)) {
                return true;
            }
        }
    };
        
    const horizontalJoin = letters.map(letter => letter.join(''));
    const verticalJoin = transpose(letters).map(letter => letter.join(''));

    if (findWord(horizontalJoin)) {
        return true;
    } else if (findWord(verticalJoin)) {
        return true;
    } else {
        return false;
    }
};

module.exports = wordSearch;

// const vertLen = sampleArr.length;
// let sampleWord = '';
// const targetWord = 'FIF';

// for (let i = 0; i < vertLen; i++) {
// 	let second = i;
// 	let first = 0;
// 	while (first <= i) {
// 		const char = sampleArr[first++][second--];
// 		if (char) {
// 			sampleWord += char;
// 		}
// 	}

// 	if (sampleWord.length >= targetWord.length && sampleWord.includes(targetWord)) {
// 		console.log(sampleWord);
// 		console.log('found');
// 	}

// 	sampleWord = '';
// }







function cyclotron(particle=null, matrix) {
    let lines = parseInt(matrix.split('x')[0]);
    let rows = parseInt(matrix.split('x')[1]);

    let cyclotron = [];

    for (let i = 0; i < lines; i += 1) {
        let newLine = [];

        for (let m = 0; m < rows; m +=1 ) {
            newLine.push(1);
        }

        cyclotron.push(newLine);
    }

    if (particle) {
        cyclotron[0].forEach((e, i) => {
            cyclotron[0][i] = particle;
        });
    }

    if (particle == 'e') {
        cyclotron.forEach((e) => {
            e[rows - 1] = 'e';
        });
    }

    if (particle == 'p') {
        cyclotron[lines - 1].forEach((e, i) => {
            if (i != rows - 1) cyclotron[lines - 1][i] = 'p';
        });

        cyclotron.forEach((e, i) => {
            e[0] = 'p';

            if (i != lines - 1) e[rows - 1] = 'p';
            
            if (i == lines - 2) e[rows - 2] = 'p';
        });
    }

    return cyclotron;
}

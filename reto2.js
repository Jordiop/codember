const string = '&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&';

let counter = 0
let arrayResult = []

string.split('').forEach((letter) => {
    switch (letter) {
        case '#':
            counter++
            return
        case '@':
            counter--
            return
        case '*':
            counter *= counter
            return
        case '&':
            arrayResult.push(counter)
            return
    }
})

console.log(arrayResult.join(''))
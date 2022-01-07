export default function Calc(val,unit) {
    switch (unit) {
        case 'F':
            return `
            ${(val-32)*5/9+273.15}K\n
             ${(val-32)*5/9}C
            `
        case 'K':
            return `
            ${(val-273.15)*1.8+32}F 
             ${val-273}C
            `
        case 'C':
            return `
            ${val/273}K\n
             ${(val*9/5)+32}F
            `

        default:
            return 'Nan'
    }
  }
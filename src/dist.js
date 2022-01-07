export default function Dist(val,unit) {
    switch (unit) {
        case 'KM':
            return `${val*0.621371192}M`
        case 'M':
            return `${val*1.609344}KM`
        default:
            return 'NaN'
    }
  }
import { Riddle } from '../../domain/riddleService/types';

export function getInterval(date: Date) {
    const hours = date.getHours()

    if (hours >= 5 && hours < 11) {
        return 'Busy times';
    }

    return "Easy jets"
}

export function getFormattedDate(date: Date) {
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    const hours = String(date.getHours()).padStart(2, '0')
    const minutes = String(date.getMinutes()).padStart(2, '0')

    return `${year}-${month}-${day} ${hours}${minutes}`
}

export function getRandomRiddleId(riddles: Riddle[]): string {
    if (riddles.length === 0) {
         return '';
    }

    const randomIndex = Math.floor(Math.random() * riddles.length);

    return riddles[randomIndex].id;
}


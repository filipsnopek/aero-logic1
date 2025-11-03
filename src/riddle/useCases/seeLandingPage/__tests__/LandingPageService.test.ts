import { describe, it, expect } from 'vitest'
import { getFormattedDate, getInterval, getRandomRiddleId } from '../LandingPageService';
import { Riddle } from '../../../domain/riddleService/types';

describe('LandingPageService', () => {
    describe('getInterval', () => {
        it('returns interval when there are busy times in airport', () => {
            const date = new Date()
            date.setHours(6)

            const result = getInterval(date)

            expect(result).toBe('Busy times')
        })

        it('returns interval when there are easy jets times in airport', () => {
            const date = new Date()
            date.setHours(12)

            const result = getInterval(date)

            expect(result).toBe('Easy jets')
        })
    })

    describe('getFormattedDate', () => {
        it('returns formatted date from timestamp', () => {
            const date = new Date()
            date.setDate(4)
            date.setMonth(10)
            date.setFullYear(2025)
            date.setHours(11)
            date.setMinutes(48)

            const result = getFormattedDate(date)

            expect(result).toBe('2025-11-04 1148')
        })
    })

    describe('getRandomRiddleId', () => {
        it('returns random riddle id from list of riddles', () => {
            const riddles: Riddle[] = [{
                "id": "1",
                "contents": "At my post, I watch them dance, moving dots both near and far, but one stands still and claims to cross the path of all who dare to pass.<br /><br />What is it?",
                "answers": [
                    {
                        "id": "1",
                        "text": "A holding pattern"
                    },
                    {
                        "id": "2",
                        "text": "An obstacle/tower"
                    },
                    {
                        "id": "3",
                        "text": "A runway intersection"
                    }
                ]
            }]

            const result = getRandomRiddleId(riddles)

            expect(result).toBe('1')
        })
    })
})

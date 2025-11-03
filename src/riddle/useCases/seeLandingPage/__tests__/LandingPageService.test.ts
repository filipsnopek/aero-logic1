import { describe, it, expect } from 'vitest'
import { getInterval } from '../LandingPageService';

describe('LandingPageService', () => {
    describe('getInterval', () => {
        it('returns interval when there are busy times in airport', () => {
            const date = new Date()
            date.setHours(6)

            const result = getInterval(date)

            expect(result).toBe('Busy times')
        })
    })
})

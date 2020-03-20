import { TypePointFourDirection } from './map.interface';

export interface OptionsFilterTimeSlotBlank {
    pointFourDirection?: TypePointFourDirection,
    limit?: number,
    page?: number,
    latitude?: number,
    longitude?: number,
    distance?: number,
    timeStart?: Date
}

export interface OptionsPaging {
    limit?: number,
    page?: number
}
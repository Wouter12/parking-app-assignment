export interface parking{
    id: number,
    lastModifiedDate: string,
    name: string,
    description: string,
    latitude: number,
    longitude: number,
    address: string,
    contactInfo: string,
    city: {
        id: number,
        name: string
    },
    parkingServer: {
        id: number,
        name: string    },
    suggestedFreeThreshold: number,
    suggestedFullThreshold: number,
    capacityRounding: number,
    totalCapacity: number,
    parkingStatus: {
        availableCapacity: number,
        totalCapacity: number,
        open: boolean,
        suggestedCapacity: string,
        activeRoute: string,
        lastModifiedDate: string
    }
}
import { Location } from "./location.interface";

export interface UnistsResponse {
    current_country_id: number,
    locations: Location[]
}
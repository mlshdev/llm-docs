> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/sirieventsuggestionsmarkup/rentalcarreservation](https://developer.apple.com/documentation/sirieventsuggestionsmarkup/rentalcarreservation)

# RentalCarReservation

**Interface language:** Data

**Framework:** Siri Event Suggestions Markup  
**Kind:** Object  
**Availability:** Siri Event Suggestions Markup 1.0+

A reservation to rent a car.

## Declaration

```
object RentalCarReservation
```

## Properties

- `@context` — `@context` (required):
- `@type` — `string` (required): **Allowed values:** `RentalCarReservation`
- `dropoffLocation` — `Place` (required): The place where the renter returns the car.
- `dropoffTime` — `dateTimeISO8601` (required): The latest time the renter may return the car.
- `pickupLocation` — `Place` (required): The place where the renter picks up the car.
- `pickupTime` — `dateTimeISO8601` (required): The earliest time the driver may pick up the car.
- `reservationFor` — `Car` (required): The type of vehicle to be rented.
- `reservationId` — `reservationId` (required): A unique identifier for the reservation, consistent in all markup.
- `reservationStatus` — `reservationStatus` (required): The reservation’s current status.
- `underName` — `Person` (required): The person renting the car.
- `provider` — `Organization`: The rental car agency.
- `broker` — `Organization`: An intermediary booking service.
- `url` — `URL`: A webpage the user can access to view reservation details.

## Topics

### Defining a Rental Car Reservation

- [Car](car.md): A description of a rental vehicle.
- [Brand](brand.md): A car brand.

## See Also

### Transportation

- [FlightReservation](flightreservation.md): An airplane flight reservation.
- [TrainReservation](trainreservation.md): A reservation for train travel.
- [BusReservation](busreservation.md): A reservation for bus travel.
- [BoatReservation](boatreservation.md): A reservation for boat travel.

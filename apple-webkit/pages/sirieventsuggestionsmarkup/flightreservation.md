> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/sirieventsuggestionsmarkup/flightreservation](https://developer.apple.com/documentation/sirieventsuggestionsmarkup/flightreservation)

# FlightReservation

**Interface language:** Data

**Framework:** Siri Event Suggestions Markup  
**Kind:** Object  
**Availability:** Siri Event Suggestions Markup 1.0+

An airplane flight reservation.

## Declaration

```
object FlightReservation
```

## Properties

- `@context` — `@context` (required):
- `@type` — `string` (required): **Allowed values:** `FlightReservation`
- `reservationFor` — `Flight` (required): Details about the flight.
- `reservationId` — `reservationId` (required): A unique identifier for the reservation, consistent in all markup.
- `reservationStatus` — `reservationStatus` (required): The reservation’s current status.
- `reservedTicket` — `Ticket`: Details about the attendee’s ticketed seat.
- `underName` — `Person` (required): The passenger, or a primary passenger if the event provider doesn’t require a name for each passenger.
- `broker` — `Organization`: An intermediary booking service.
- `url` — `URL`: A webpage the user can access to view reservation details.

## Topics

### Defining a Flight Reservation

- [Flight](flight.md): Location and scheduling information for an airplane flight.
- [Airline](airline.md): An airline’s name and identifier.
- [Airport](airport.md): The name and location of an airport.

## See Also

### Transportation

- [TrainReservation](trainreservation.md): A reservation for train travel.
- [BusReservation](busreservation.md): A reservation for bus travel.
- [BoatReservation](boatreservation.md): A reservation for boat travel.
- [RentalCarReservation](rentalcarreservation.md): A reservation to rent a car.

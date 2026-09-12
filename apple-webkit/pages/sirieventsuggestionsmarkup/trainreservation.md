> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/sirieventsuggestionsmarkup/trainreservation](https://developer.apple.com/documentation/sirieventsuggestionsmarkup/trainreservation)

# TrainReservation

**Interface language:** Data

**Framework:** Siri Event Suggestions Markup  
**Kind:** Object  
**Availability:** Siri Event Suggestions Markup 1.0+

A reservation for train travel.

## Declaration

```
object TrainReservation
```

## Properties

- `@context` — `@context` (required):
- `@type` — `string` (required): **Allowed values:** `TrainReservation`
- `reservationFor` — `TrainTrip` (required): Details about the train trip.
- `reservationId` — `reservationId` (required): A unique identifier for the reservation, consistent in all markup.
- `reservationStatus` — `reservationStatus` (required): The reservation’s current status.
- `reservedTicket` — `Ticket`: Details about the passenger’s ticket.
- `underName` — `Person` (required): The passenger, or the primary passenger of a multiperson reservation if the provider doesn’t require a name for each passenger.
- `broker` — `Organization`: An intermediary booking service.
- `url` — `URL`: A webpage the user can access to view reservation details.

## Topics

### Defining a Train Reservation

- [TrainTrip](traintrip.md): Location and scheduling information for a train trip.
- [TrainStation](trainstation.md): The name and location of a train station.

## See Also

### Transportation

- [FlightReservation](flightreservation.md): An airplane flight reservation.
- [BusReservation](busreservation.md): A reservation for bus travel.
- [BoatReservation](boatreservation.md): A reservation for boat travel.
- [RentalCarReservation](rentalcarreservation.md): A reservation to rent a car.

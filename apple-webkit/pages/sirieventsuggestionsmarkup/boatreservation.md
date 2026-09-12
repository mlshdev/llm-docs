> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/sirieventsuggestionsmarkup/boatreservation](https://developer.apple.com/documentation/sirieventsuggestionsmarkup/boatreservation)

# BoatReservation

**Interface language:** Data

**Framework:** Siri Event Suggestions Markup  
**Kind:** Object  
**Availability:** Siri Event Suggestions Markup 1.0+

A reservation for boat travel.

## Declaration

```
object BoatReservation
```

## Properties

- `@context` — `@context` (required):
- `@type` — `string` (required): **Allowed values:** `BoatReservation`
- `reservationFor` — `BoatTrip` (required): Details about the boat trip.
- `reservationId` — `reservationId` (required): A unique identifier for the reservation, consistent in all markup.
- `reservationStatus` — `reservationStatus` (required): The reservation’s current status.
- `reservedTicket` — `Ticket`: Details about the passenger’s ticket.
- `underName` — `Person` (required): The passenger, or the primary passenger of a multiperson reservation if the provider doesn’t require a name for each passenger.
- `broker` — `Organization`: An intermediary booking service.
- `url` — `URL`: A webpage the user can access to view reservation details.

## Topics

### Defining a Boat Reservation

- [BoatTrip](boattrip.md): Location and scheduling information for a boat trip.
- [BoatTerminal](boatterminal.md): The name and location of a boat terminal.

## See Also

### Transportation

- [FlightReservation](flightreservation.md): An airplane flight reservation.
- [TrainReservation](trainreservation.md): A reservation for train travel.
- [BusReservation](busreservation.md): A reservation for bus travel.
- [RentalCarReservation](rentalcarreservation.md): A reservation to rent a car.

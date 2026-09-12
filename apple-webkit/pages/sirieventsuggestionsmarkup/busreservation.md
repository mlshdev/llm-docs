> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/sirieventsuggestionsmarkup/busreservation](https://developer.apple.com/documentation/sirieventsuggestionsmarkup/busreservation)

# BusReservation

**Interface language:** Data

**Framework:** Siri Event Suggestions Markup  
**Kind:** Object  
**Availability:** Siri Event Suggestions Markup 1.0+

A reservation for bus travel.

## Declaration

```
object BusReservation
```

## Properties

- `@context` — `@context` (required):
- `@type` — `string` (required): **Allowed values:** `BusReservation`
- `reservationFor` — `BusTrip` (required): Details about the bus trip.
- `reservationId` — `reservationId` (required): A unique identifier for the reservation, consistent in all markup.
- `reservationStatus` — `reservationStatus` (required): The reservation’s current status.
- `reservedTicket` — `Ticket`: Details about the passenger’s ticket.
- `underName` — `Person` (required): The passenger, or the primary passenger of a multiperson reservation if the provider doesn’t require a name for each passenger.
- `broker` — `Organization`: An intermediary booking service.
- `url` — `URL`: A webpage the user can access to view reservation details.

## Topics

### Defining a Bus Reservation

- [BusTrip](bustrip.md): Location and scheduling information for a bus trip.
- [BusStation](busstation.md): The name and location of a bus station.

## See Also

### Transportation

- [FlightReservation](flightreservation.md): An airplane flight reservation.
- [TrainReservation](trainreservation.md): A reservation for train travel.
- [BoatReservation](boatreservation.md): A reservation for boat travel.
- [RentalCarReservation](rentalcarreservation.md): A reservation to rent a car.

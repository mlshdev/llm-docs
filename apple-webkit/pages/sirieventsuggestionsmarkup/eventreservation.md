> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/sirieventsuggestionsmarkup/eventreservation](https://developer.apple.com/documentation/sirieventsuggestionsmarkup/eventreservation)

# EventReservation

**Interface language:** Data

**Framework:** Siri Event Suggestions Markup  
**Kind:** Object  
**Availability:** Siri Event Suggestions Markup 1.0+

A reservation for a movie, sporting event, live show, or other scheduled event.

## Declaration

```
object EventReservation
```

## Properties

- `@context` — `@context` (required):
- `@type` — `string` (required): **Allowed values:** `EventReservation`
- `reservationFor` — `Event` (required): General information about the event.
- `reservationId` — `reservationId` (required): A unique identifier for the reservation, consistent in all markup.
- `reservationStatus` — `reservationStatus` (required): The reservation’s current status.
- `reservedTicket` — `Ticket`: Details about the attendee’s ticketed seat.
- `underName` — `Person` (required): The event attendee, or a primary attendee if the event provider doesn’t require a name for each attendee.
- `broker` — `Organization`: An intermediary booking service.
- `url` — `URL`: A webpage the user can access to view reservation details.

## Topics

### Defining an Event Reservation

- [Event](event.md): A sporting event, live show, or other scheduled event.

## See Also

### Food, Lodging, and Events

- [FoodEstablishmentReservation](foodestablishmentreservation.md): A restaurant reservation.
- [LodgingReservation](lodgingreservation.md): A hotel reservation or other booking for a place to stay.

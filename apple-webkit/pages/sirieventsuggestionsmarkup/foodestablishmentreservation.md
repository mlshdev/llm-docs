> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/sirieventsuggestionsmarkup/foodestablishmentreservation](https://developer.apple.com/documentation/sirieventsuggestionsmarkup/foodestablishmentreservation)

# FoodEstablishmentReservation

**Interface language:** Data

**Framework:** Siri Event Suggestions Markup  
**Kind:** Object  
**Availability:** Siri Event Suggestions Markup 1.0+

A restaurant reservation.

## Declaration

```
object FoodEstablishmentReservation
```

## Properties

- `@context` — `@context` (required):
- `@type` — `string` (required): **Allowed values:** `FoodEstablishmentReservation`
- `partySize` — `integer`: The number of people.
- `reservationFor` — `FoodEstablishment` (required): The restaurant or other food establishment hosting the reservation.
- `reservationId` — `reservationId` (required): A unique identifier for the reservation, consistent in all markup.
- `reservationStatus` — `reservationStatus` (required): The reservation’s current status.
- `startTime` — `dateTimeISO8601` (required): The beginning date and time for the reservation.
- `underName` — `Person` (required): The name of the person associated with the reservation, usually someone who will be dining.
- `broker` — `Organization`: An intermediary booking service.
- `url` — `URL`: A webpage the user can access to view reservation details.

## Topics

### Defining a Restaurant Reservation

- [FoodEstablishment](foodestablishment.md): The restaurant or other food establishment that will host the reservation.

## See Also

### Food, Lodging, and Events

- [EventReservation](eventreservation.md): A reservation for a movie, sporting event, live show, or other scheduled event.
- [LodgingReservation](lodgingreservation.md): A hotel reservation or other booking for a place to stay.

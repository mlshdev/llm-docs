> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/sirieventsuggestionsmarkup/seat](https://developer.apple.com/documentation/sirieventsuggestionsmarkup/seat)

# Seat

**Interface language:** Data

**Framework:** Siri Event Suggestions Markup  
**Kind:** Object  
**Availability:** Siri Event Suggestions Markup 1.0+

The specific location reserved for the passenger.

## Declaration

```
object Seat
```

## Properties

- `@type` — `string`: **Allowed values:** `Seat`
- `seatingType` — `string`: The reserved class of service.
- `seatNumber` — `string`: The identifier for a particular seat in a row of seats.
- `seatRow` — `string`: The identifier for a particular row in a section of seats.
- `seatSection` — `string`: The identifier for a particular group of seats.

## See Also

### Common Reservation Data

- [Person](person.md): A passenger, diner, lodging guest, or event attendee.
- [Ticket](ticket.md): Details about a ticket for transportation or an event.
- [Organization](organization.md): A business, transportation provider, or event organizer.
- [Place](place.md): A business, transportation hub, or event venue.
- [PostalAddress](postaladdress.md): A specific geographic location.

> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/sirieventsuggestionsmarkup/place](https://developer.apple.com/documentation/sirieventsuggestionsmarkup/place)

# Place

**Interface language:** Data

**Framework:** Siri Event Suggestions Markup  
**Kind:** Object  
**Availability:** Siri Event Suggestions Markup 1.0+

A business, transportation hub, or event venue.

## Declaration

```
object Place
```

## Properties

- `@type` — `string` (required): **Allowed values:** `Place`
- `address` — `PostalAddress` (required): The starting or ending location of a transportation reservation, or the location of a single-location reservation.
- `name` — `string` (required): The name of the location.
- `telephone` — `telephone`: A phone number for the location.

## See Also

### Common Reservation Data

- [Person](person.md): A passenger, diner, lodging guest, or event attendee.
- [Ticket](ticket.md): Details about a ticket for transportation or an event.
- [Seat](seat.md): The specific location reserved for the passenger.
- [Organization](organization.md): A business, transportation provider, or event organizer.
- [PostalAddress](postaladdress.md): A specific geographic location.

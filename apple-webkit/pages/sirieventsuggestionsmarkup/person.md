> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sirieventsuggestionsmarkup/person

# Person

**Interface language:** Data

**Framework:** Siri Event Suggestions Markup  
**Kind:** Object  
**Availability:** Siri Event Suggestions Markup 1.0+

A passenger, diner, lodging guest, or event attendee.

## Declaration

```
object Person
```

## Properties

- `@type` — `string` (required): **Allowed values:** `Person`
- `name` — `string` (required): The participant, or a primary participant of a multiperson reservation if the reservation provider doesn’t require a name for each participant.

## See Also

### Common Reservation Data

- [Ticket](ticket.md): Details about a ticket for transportation or an event.
- [Seat](seat.md): The specific location reserved for the passenger.
- [Organization](organization.md): A business, transportation provider, or event organizer.
- [Place](place.md): A business, transportation hub, or event venue.
- [PostalAddress](postaladdress.md): A specific geographic location.

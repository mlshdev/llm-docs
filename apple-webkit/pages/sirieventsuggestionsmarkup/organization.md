> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-a0a4b8d281c3; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sirieventsuggestionsmarkup/organization

# Organization

**Interface language:** Data

**Framework:** Siri Event Suggestions Markup  
**Kind:** Object  
**Availability:** Siri Event Suggestions Markup 1.0+

A business, transportation provider, or event organizer.

## Declaration

```
object Organization
```

## Properties

- `@type` — `string` (required): **Allowed values:** `Organization`
- `name` — `string` (required): The name of the organization.

## See Also

### Common Reservation Data

- [Person](person.md): A passenger, diner, lodging guest, or event attendee.
- [Ticket](ticket.md): Details about a ticket for transportation or an event.
- [Seat](seat.md): The specific location reserved for the passenger.
- [Place](place.md): A business, transportation hub, or event venue.
- [PostalAddress](postaladdress.md): A specific geographic location.

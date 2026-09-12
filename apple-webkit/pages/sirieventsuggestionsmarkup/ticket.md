> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/sirieventsuggestionsmarkup/ticket](https://developer.apple.com/documentation/sirieventsuggestionsmarkup/ticket)

# Ticket

**Interface language:** Data

**Framework:** Siri Event Suggestions Markup  
**Kind:** Object  
**Availability:** Siri Event Suggestions Markup 1.0+

Details about a ticket for transportation or an event.

## Declaration

```
object Ticket
```

## Properties

- `@type` — `string` (required): **Allowed values:** `Ticket`
- `ticketedSeat` — `Seat`: The seat reserved for the passenger or attendee.
- `ticketNumber` — `string`: An identifier for the ticket.

## See Also

### Common Reservation Data

- [Person](person.md): A passenger, diner, lodging guest, or event attendee.
- [Seat](seat.md): The specific location reserved for the passenger.
- [Organization](organization.md): A business, transportation provider, or event organizer.
- [Place](place.md): A business, transportation hub, or event venue.
- [PostalAddress](postaladdress.md): A specific geographic location.

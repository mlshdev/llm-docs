> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/sirieventsuggestionsmarkup/postaladdress](https://developer.apple.com/documentation/sirieventsuggestionsmarkup/postaladdress)

# PostalAddress

**Interface language:** Data

**Framework:** Siri Event Suggestions Markup  
**Kind:** Object  
**Availability:** Siri Event Suggestions Markup 1.0+

A specific geographic location.

## Declaration

```
object PostalAddress
```

## Properties

- `@type` — `string` (required): **Allowed values:** `PostalAddress`
- `addressCountry` — `string` (required): The country.
- `addressLocality` — `string` (required): The city or town.
- `addressRegion` — `string`: The region containing the locality.
- `postalCode` — `string`: The postal code.
- `streetAddress` — `string` (required): The street name and number.

<a id="Discussion"></a>

## Discussion

Prefer a physical address, not an administrative mailing address, to help Siri and Maps provide relevant information to the user.

## See Also

### Common Reservation Data

- [Person](person.md): A passenger, diner, lodging guest, or event attendee.
- [Ticket](ticket.md): Details about a ticket for transportation or an event.
- [Seat](seat.md): The specific location reserved for the passenger.
- [Organization](organization.md): A business, transportation provider, or event organizer.
- [Place](place.md): A business, transportation hub, or event venue.

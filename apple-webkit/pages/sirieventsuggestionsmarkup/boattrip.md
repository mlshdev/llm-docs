> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/sirieventsuggestionsmarkup/boattrip](https://developer.apple.com/documentation/sirieventsuggestionsmarkup/boattrip)

# BoatTrip

**Interface language:** Data

**Framework:** Siri Event Suggestions Markup  
**Kind:** Object  
**Availability:** Siri Event Suggestions Markup 1.0+

Location and scheduling information for a boat trip.

## Declaration

```
object BoatTrip
```

## Properties

- `@type` — `string` (required): **Allowed values:** `BoatTrip`
- `arrivalBoatTerminal` — `BoatTerminal` (required): The terminal where the boat reservation ends.
- `arrivalTime` — `dateTimeISO8601` (required): The scheduled time the boat arrives.
- `departureBoatTerminal` — `BoatTerminal` (required): The terminal where the boat reservation begins.
- `departureTime` — `dateTimeISO8601` (required): The scheduled time the boat departs.
- `identifier` — `string` (required): The boat’s number or other identifier.
- `name` — `string` (required): The boat or boat route’s name.
- `provider` — `Organization`: The organization providing the boat trip.

## See Also

### Defining a Boat Reservation

- [BoatTerminal](boatterminal.md): The name and location of a boat terminal.

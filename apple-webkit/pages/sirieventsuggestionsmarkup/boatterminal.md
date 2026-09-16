> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sirieventsuggestionsmarkup/boatterminal

# BoatTerminal

**Interface language:** Data

**Framework:** Siri Event Suggestions Markup  
**Kind:** Object  
**Availability:** Siri Event Suggestions Markup 1.0+

The name and location of a boat terminal.

## Declaration

```
object BoatTerminal
```

## Properties

- `@type` — `string` (required): **Allowed values:** `BoatTerminal`
- `address` — `PostalAddress` (required): The location of the boat terminal.
- `name` — `string` (required): The name of the boat terminal.

## See Also

### Defining a Boat Reservation

- [BoatTrip](boattrip.md): Location and scheduling information for a boat trip.

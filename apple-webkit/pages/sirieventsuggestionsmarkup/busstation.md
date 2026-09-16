> Snapshot-pinned source payload for Apple WebKit and Safari snapshot-f54edb363a08; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sirieventsuggestionsmarkup/busstation

# BusStation

**Interface language:** Data

**Framework:** Siri Event Suggestions Markup  
**Kind:** Object  
**Availability:** Siri Event Suggestions Markup 1.0+

The name and location of a bus station.

## Declaration

```
object BusStation
```

## Properties

- `@type` — `string` (required): **Allowed values:** `BusStation`
- `address` — `PostalAddress` (required): The location of the bus station.
- `name` — `string` (required): The name of the bus station.

## See Also

### Defining a Bus Reservation

- [BusTrip](bustrip.md): Location and scheduling information for a bus trip.

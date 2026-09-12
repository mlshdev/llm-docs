> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/sirieventsuggestionsmarkup/trainstation](https://developer.apple.com/documentation/sirieventsuggestionsmarkup/trainstation)

# TrainStation

**Interface language:** Data

**Framework:** Siri Event Suggestions Markup  
**Kind:** Object  
**Availability:** Siri Event Suggestions Markup 1.0+

The name and location of a train station.

## Declaration

```
object TrainStation
```

## Properties

- `@type` — `string` (required): **Allowed values:** `TrainStation`
- `address` — `PostalAddress` (required): The location of the train station.
- `name` — `string` (required): The name of the train station.

## See Also

### Defining a Train Reservation

- [TrainTrip](traintrip.md): Location and scheduling information for a train trip.

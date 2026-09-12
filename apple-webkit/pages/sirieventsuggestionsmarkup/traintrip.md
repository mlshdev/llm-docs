> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/sirieventsuggestionsmarkup/traintrip](https://developer.apple.com/documentation/sirieventsuggestionsmarkup/traintrip)

# TrainTrip

**Interface language:** Data

**Framework:** Siri Event Suggestions Markup  
**Kind:** Object  
**Availability:** Siri Event Suggestions Markup 1.0+

Location and scheduling information for a train trip.

## Declaration

```
object TrainTrip
```

## Properties

- `@type` — `string` (required): **Allowed values:** `TrainTrip`
- `arrivalStation` — `TrainStation` (required): The station where the train reservation ends.
- `arrivalTime` — `dateTimeISO8601` (required): The scheduled time the train arrives.
- `departureStation` — `TrainStation` (required): The station where the train reservation starts.
- `departureTime` — `dateTimeISO8601` (required): The scheduled time the train departs.
- `trainName` — `string` (required): The name of the train.
- `trainNumber` — `string` (required): The train’s route number or other identifier.
- `provider` — `Organization`: The railway providing the train trip.
- `arrivalPlatform` — `string`:
- `departurePlatform` — `string`:

## See Also

### Defining a Train Reservation

- [TrainStation](trainstation.md): The name and location of a train station.

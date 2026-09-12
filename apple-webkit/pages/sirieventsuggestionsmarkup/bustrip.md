> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/sirieventsuggestionsmarkup/bustrip](https://developer.apple.com/documentation/sirieventsuggestionsmarkup/bustrip)

# BusTrip

**Interface language:** Data

**Framework:** Siri Event Suggestions Markup  
**Kind:** Object  
**Availability:** Siri Event Suggestions Markup 1.0+

Location and scheduling information for a bus trip.

## Declaration

```
object BusTrip
```

## Properties

- `@type` — `string` (required): **Allowed values:** `BusTrip`
- `arrivalBusStop` — `BusStation` (required): The station where the bus reservation ends.
- `arrivalTime` — `dateTimeISO8601` (required): The scheduled time the bus arrives.
- `busName` — `string` (required): The name of the bus.
- `busNumber` — `string` (required): The bus’s route number or other identifier.
- `departureBusStop` — `BusStation` (required): The station where the bus reservation starts.
- `departureTime` — `dateTimeISO8601` (required): The scheduled time the bus departs.
- `provider` — `Organization`: The bus company.

## See Also

### Defining a Bus Reservation

- [BusStation](busstation.md): The name and location of a bus station.

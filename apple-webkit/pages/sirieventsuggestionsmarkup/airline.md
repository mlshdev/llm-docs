> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/sirieventsuggestionsmarkup/airline](https://developer.apple.com/documentation/sirieventsuggestionsmarkup/airline)

# Airline

**Interface language:** Data

**Framework:** Siri Event Suggestions Markup  
**Kind:** Object  
**Availability:** Siri Event Suggestions Markup 1.0+

An airline’s name and identifier.

## Declaration

```
object Airline
```

## Properties

- `@type` — `string` (required): **Allowed values:** `Airline`
- `iataCode` — `string` (required): The three-letter identifier of the airline.
  **Allowed values:** `/^[A-Z]{3}$/`
- `name` — `string` (required): The name of the airline.

## See Also

### Defining a Flight Reservation

- [Flight](flight.md): Location and scheduling information for an airplane flight.
- [Airport](airport.md): The name and location of an airport.

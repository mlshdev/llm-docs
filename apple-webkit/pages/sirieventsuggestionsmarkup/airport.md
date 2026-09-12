> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/sirieventsuggestionsmarkup/airport](https://developer.apple.com/documentation/sirieventsuggestionsmarkup/airport)

# Airport

**Interface language:** Data

**Framework:** Siri Event Suggestions Markup  
**Kind:** Object  
**Availability:** Siri Event Suggestions Markup 1.0+

The name and location of an airport.

## Declaration

```
object Airport
```

## Properties

- `@type` — `string` (required): **Allowed values:** `Airport`
- `iataCode` — `string` (required): The airport’s official three-letter identifier.
  **Allowed values:** `/^[A-Z]{3}$/`
- `name` — `string`: The name of the airport.
- `address` — `PostalAddress`: The location of the airport.

## See Also

### Defining a Flight Reservation

- [Flight](flight.md): Location and scheduling information for an airplane flight.
- [Airline](airline.md): An airline’s name and identifier.

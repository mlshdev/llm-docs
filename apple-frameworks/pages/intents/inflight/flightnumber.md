> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inflight/flightnumber

# flightNumber (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The number of a flight.

## Declaration

```swift
var flightNumber: String { get }
```

<a id="Discussion"></a>

## Discussion

This property doesn’t include the IATA or ICAO code of the airline associated with the flight.

## See Also

### Getting the Flight Information

- [airline](airline.md): The airline on which the user is flying.
- [boardingTime](boardingtime.md): The date and time during which the flight is boarding.
- [flightDuration](flightduration.md): The date and time range for the departure and arrival of the flight.
- [departureAirportGate](departureairportgate.md): The gate from which the flight departs.
- [arrivalAirportGate](arrivalairportgate.md): The gate at which the flight arrives

# flightNumber (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The number of a flight.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSString * flightNumber;
```

```objectivec
@property (atomic, copy, readonly) NSString * flightNumber;
```

<a id="Discussion"></a>

## Discussion

This property doesn’t include the IATA or ICAO code of the airline associated with the flight.

## See Also

### Getting the Flight Information

- [airline](airline.md): The airline on which the user is flying.
- [boardingTime](boardingtime.md): The date and time during which the flight is boarding.
- [flightDuration](flightduration.md): The date and time range for the departure and arrival of the flight.
- [departureAirportGate](departureairportgate.md): The gate from which the flight departs.
- [arrivalAirportGate](arrivalairportgate.md): The gate at which the flight arrives

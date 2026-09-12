> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inflight/airline](https://developer.apple.com/documentation/intents/inflight/airline)

# airline (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The airline on which the user is flying.

## Declaration

```swift
@NSCopying var airline: INAirline { get }
```

<a id="Discussion"></a>

## Discussion

This property contains information specific to the airline associated with the reservation.

## See Also

### Getting the Flight Information

- [flightNumber](flightnumber.md): The number of a flight.
- [boardingTime](boardingtime.md): The date and time during which the flight is boarding.
- [flightDuration](flightduration.md): The date and time range for the departure and arrival of the flight.
- [departureAirportGate](departureairportgate.md): The gate from which the flight departs.
- [arrivalAirportGate](arrivalairportgate.md): The gate at which the flight arrives

# airline (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The airline on which the user is flying.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) INAirline * airline;
```

```objectivec
@property (atomic, copy, readonly) INAirline * airline;
```

<a id="Discussion"></a>

## Discussion

This property contains information specific to the airline associated with the reservation.

## See Also

### Getting the Flight Information

- [flightNumber](flightnumber.md): The number of a flight.
- [boardingTime](boardingtime.md): The date and time during which the flight is boarding.
- [flightDuration](flightduration.md): The date and time range for the departure and arrival of the flight.
- [departureAirportGate](departureairportgate.md): The gate from which the flight departs.
- [arrivalAirportGate](arrivalairportgate.md): The gate at which the flight arrives

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inflight/boardingtime](https://developer.apple.com/documentation/intents/inflight/boardingtime)

# boardingTime (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The date and time during which the flight is boarding.

## Declaration

```swift
@NSCopying var boardingTime: INDateComponentsRange? { get }
```

## See Also

### Getting the Flight Information

- [airline](airline.md): The airline on which the user is flying.
- [flightNumber](flightnumber.md): The number of a flight.
- [flightDuration](flightduration.md): The date and time range for the departure and arrival of the flight.
- [departureAirportGate](departureairportgate.md): The gate from which the flight departs.
- [arrivalAirportGate](arrivalairportgate.md): The gate at which the flight arrives

# boardingTime (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The date and time during which the flight is boarding.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INDateComponentsRange * boardingTime;
```

```objectivec
@property (atomic, copy, readonly, nullable) INDateComponentsRange * boardingTime;
```

## See Also

### Getting the Flight Information

- [airline](airline.md): The airline on which the user is flying.
- [flightNumber](flightnumber.md): The number of a flight.
- [flightDuration](flightduration.md): The date and time range for the departure and arrival of the flight.
- [departureAirportGate](departureairportgate.md): The gate from which the flight departs.
- [arrivalAirportGate](arrivalairportgate.md): The gate at which the flight arrives

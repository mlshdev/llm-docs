> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inflight/flightduration](https://developer.apple.com/documentation/intents/inflight/flightduration)

# flightDuration (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The date and time range for the departure and arrival of the flight.

## Declaration

```swift
@NSCopying var flightDuration: INDateComponentsRange { get }
```

## See Also

### Getting the Flight Information

- [airline](airline.md): The airline on which the user is flying.
- [flightNumber](flightnumber.md): The number of a flight.
- [boardingTime](boardingtime.md): The date and time during which the flight is boarding.
- [departureAirportGate](departureairportgate.md): The gate from which the flight departs.
- [arrivalAirportGate](arrivalairportgate.md): The gate at which the flight arrives

# flightDuration (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The date and time range for the departure and arrival of the flight.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) INDateComponentsRange * flightDuration;
```

```objectivec
@property (atomic, copy, readonly) INDateComponentsRange * flightDuration;
```

## See Also

### Getting the Flight Information

- [airline](airline.md): The airline on which the user is flying.
- [flightNumber](flightnumber.md): The number of a flight.
- [boardingTime](boardingtime.md): The date and time during which the flight is boarding.
- [departureAirportGate](departureairportgate.md): The gate from which the flight departs.
- [arrivalAirportGate](arrivalairportgate.md): The gate at which the flight arrives

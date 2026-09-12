> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inflight/arrivalairportgate](https://developer.apple.com/documentation/intents/inflight/arrivalairportgate)

# arrivalAirportGate (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The gate at which the flight arrives

## Declaration

```swift
@NSCopying var arrivalAirportGate: INAirportGate { get }
```

<a id="Discussion"></a>

## Discussion

The [INAirportGate](../inairportgate.md) object contains information about the airport, gate, and terminal for the flight’s arrival.

## See Also

### Getting the Flight Information

- [airline](airline.md): The airline on which the user is flying.
- [flightNumber](flightnumber.md): The number of a flight.
- [boardingTime](boardingtime.md): The date and time during which the flight is boarding.
- [flightDuration](flightduration.md): The date and time range for the departure and arrival of the flight.
- [departureAirportGate](departureairportgate.md): The gate from which the flight departs.

# arrivalAirportGate (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The gate at which the flight arrives

## Declaration

```objectivec
@property (nonatomic, copy, readonly) INAirportGate * arrivalAirportGate;
```

```objectivec
@property (atomic, copy, readonly) INAirportGate * arrivalAirportGate;
```

<a id="Discussion"></a>

## Discussion

The [INAirportGate](../inairportgate.md) object contains information about the airport, gate, and terminal for the flight’s arrival.

## See Also

### Getting the Flight Information

- [airline](airline.md): The airline on which the user is flying.
- [flightNumber](flightnumber.md): The number of a flight.
- [boardingTime](boardingtime.md): The date and time during which the flight is boarding.
- [flightDuration](flightduration.md): The date and time range for the departure and arrival of the flight.
- [departureAirportGate](departureairportgate.md): The gate from which the flight departs.

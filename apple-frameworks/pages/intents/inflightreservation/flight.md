> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inflightreservation/flight](https://developer.apple.com/documentation/intents/inflightreservation/flight)

# flight (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The flight information associated with the reservation.

## Declaration

```swift
@NSCopying var flight: INFlight { get }
```

## See Also

### Getting the Flight Reservation Information

- [INFlight](../inflight.md): The information that describes a flight.
- [INAirline](../inairline.md): The information that describes an airline.
- [INAirport](../inairport.md): The information that describes an airport.
- [INAirportGate](../inairportgate.md): The information that describes an arrival or departure gate for a flight.
- [reservedSeat](reservedseat.md): The user’s seat for the flight.

# flight (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The flight information associated with the reservation.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) INFlight * flight;
```

```objectivec
@property (atomic, copy, readonly) INFlight * flight;
```

## See Also

### Getting the Flight Reservation Information

- [INFlight](../inflight.md): The information that describes a flight.
- [INAirline](../inairline.md): The information that describes an airline.
- [INAirport](../inairport.md): The information that describes an airport.
- [INAirportGate](../inairportgate.md): The information that describes an arrival or departure gate for a flight.
- [reservedSeat](reservedseat.md): The user’s seat for the flight.

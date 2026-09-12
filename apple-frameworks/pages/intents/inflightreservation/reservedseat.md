> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inflightreservation/reservedseat](https://developer.apple.com/documentation/intents/inflightreservation/reservedseat)

# reservedSeat (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The user’s seat for the flight.

## Declaration

```swift
@NSCopying var reservedSeat: INSeat? { get }
```

## See Also

### Getting the Flight Reservation Information

- [flight](flight.md): The flight information associated with the reservation.
- [INFlight](../inflight.md): The information that describes a flight.
- [INAirline](../inairline.md): The information that describes an airline.
- [INAirport](../inairport.md): The information that describes an airport.
- [INAirportGate](../inairportgate.md): The information that describes an arrival or departure gate for a flight.

# reservedSeat (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The user’s seat for the flight.

## Declaration

```objectivec
@property (nonatomic, copy, readonly, nullable) INSeat * reservedSeat;
```

```objectivec
@property (atomic, copy, readonly, nullable) INSeat * reservedSeat;
```

## See Also

### Getting the Flight Reservation Information

- [flight](flight.md): The flight information associated with the reservation.
- [INFlight](../inflight.md): The information that describes a flight.
- [INAirline](../inairline.md): The information that describes an airline.
- [INAirport](../inairport.md): The information that describes an airport.
- [INAirportGate](../inairportgate.md): The information that describes an arrival or departure gate for a flight.

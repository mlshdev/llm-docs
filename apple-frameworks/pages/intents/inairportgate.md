> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inairportgate](https://developer.apple.com/documentation/intents/inairportgate)

# INAirportGate (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The information that describes an arrival or departure gate for a flight.

## Declaration

```swift
class INAirportGate
```

<a id="overview"></a>

## Overview

This class contains all of the relevant information for a flight’s arrival or departure gate. Ensure that an instance of the object contains as much information as available. At a minimum, always include the airport for the flight.

## Topics

### Creating an Airport Gate

- [init(airport:terminal:gate:)](inairportgate/init%28airport_terminal_gate_%29.md): Creates a new gate object for a flight.

### Getting the Gate Information

- [airport](inairportgate/airport.md): The airport from which a flight departs or arrives.
- [terminal](inairportgate/terminal.md): The terminal from which a flight departs or arrives.
- [gate](inairportgate/gate.md): An identifier for the gate.

### Initializers

- [init(coder:)](inairportgate/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Getting the Flight Reservation Information

- [flight](inflightreservation/flight.md): The flight information associated with the reservation.
- [INFlight](inflight.md): The information that describes a flight.
- [INAirline](inairline.md): The information that describes an airline.
- [INAirport](inairport.md): The information that describes an airport.
- [reservedSeat](inflightreservation/reservedseat.md): The user’s seat for the flight.

# INAirportGate (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The information that describes an arrival or departure gate for a flight.

## Declaration

```objectivec
@interface INAirportGate : NSObject
```

<a id="overview"></a>

## Overview

This class contains all of the relevant information for a flight’s arrival or departure gate. Ensure that an instance of the object contains as much information as available. At a minimum, always include the airport for the flight.

## Topics

### Creating an Airport Gate

- [initWithAirport:terminal:gate:](inairportgate/init%28airport_terminal_gate_%29.md): Creates a new gate object for a flight.

### Getting the Gate Information

- [airport](inairportgate/airport.md): The airport from which a flight departs or arrives.
- [terminal](inairportgate/terminal.md): The terminal from which a flight departs or arrives.
- [gate](inairportgate/gate.md): An identifier for the gate.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Getting the Flight Reservation Information

- [flight](inflightreservation/flight.md): The flight information associated with the reservation.
- [INFlight](inflight.md): The information that describes a flight.
- [INAirline](inairline.md): The information that describes an airline.
- [INAirport](inairport.md): The information that describes an airport.
- [reservedSeat](inflightreservation/reservedseat.md): The user’s seat for the flight.

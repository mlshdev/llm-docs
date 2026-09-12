> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inairport](https://developer.apple.com/documentation/intents/inairport)

# INAirport (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The information that describes an airport.

## Declaration

```swift
class INAirport
```

## Topics

### Initializing an Airport Object

- [init(name:iataCode:icaoCode:)](inairport/init%28name_iatacode_icaocode_%29.md): Creates a new airport object with the specified contents and attributes.

### Describing the Airport

- [name](inairport/name.md): The name of the airport.
- [iataCode](inairport/iatacode.md): The three-letter International Air Transport Association (IATA) code for the airport.
- [icaoCode](inairport/icaocode.md): The four-letter International Civil Aviation Organization (ICAO) code for the airport.

### Initializers

- [init(coder:)](inairport/init%28coder_%29.md)

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
- [INAirportGate](inairportgate.md): The information that describes an arrival or departure gate for a flight.
- [reservedSeat](inflightreservation/reservedseat.md): The user’s seat for the flight.

# INAirport (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The information that describes an airport.

## Declaration

```objectivec
@interface INAirport : NSObject
```

## Topics

### Initializing an Airport Object

- [initWithName:iataCode:icaoCode:](inairport/init%28name_iatacode_icaocode_%29.md): Creates a new airport object with the specified contents and attributes.

### Describing the Airport

- [name](inairport/name.md): The name of the airport.
- [iataCode](inairport/iatacode.md): The three-letter International Air Transport Association (IATA) code for the airport.
- [icaoCode](inairport/icaocode.md): The four-letter International Civil Aviation Organization (ICAO) code for the airport.

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
- [INAirportGate](inairportgate.md): The information that describes an arrival or departure gate for a flight.
- [reservedSeat](inflightreservation/reservedseat.md): The user’s seat for the flight.

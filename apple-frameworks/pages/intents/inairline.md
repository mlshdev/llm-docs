> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inairline](https://developer.apple.com/documentation/intents/inairline)

# INAirline (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The information that describes an airline.

## Declaration

```swift
class INAirline
```

## Topics

### Initializing an Airline Object

- [init(name:iataCode:icaoCode:)](inairline/init%28name_iatacode_icaocode_%29.md): Creates a new airline object with the specified contents and attributes.

### Describing the Airline

- [name](inairline/name.md): The name of the airline.
- [iataCode](inairline/iatacode.md): The two-letter International Air Transport Association (IATA) code for the airline.
- [icaoCode](inairline/icaocode.md): The three-letter International Civil Aviation Organization (ICAO) code for the airline.

### Initializers

- [init(coder:)](inairline/init%28coder_%29.md)

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
- [INAirport](inairport.md): The information that describes an airport.
- [INAirportGate](inairportgate.md): The information that describes an arrival or departure gate for a flight.
- [reservedSeat](inflightreservation/reservedseat.md): The user’s seat for the flight.

# INAirline (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The information that describes an airline.

## Declaration

```objectivec
@interface INAirline : NSObject
```

## Topics

### Initializing an Airline Object

- [initWithName:iataCode:icaoCode:](inairline/init%28name_iatacode_icaocode_%29.md): Creates a new airline object with the specified contents and attributes.

### Describing the Airline

- [name](inairline/name.md): The name of the airline.
- [iataCode](inairline/iatacode.md): The two-letter International Air Transport Association (IATA) code for the airline.
- [icaoCode](inairline/icaocode.md): The three-letter International Civil Aviation Organization (ICAO) code for the airline.

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
- [INAirport](inairport.md): The information that describes an airport.
- [INAirportGate](inairportgate.md): The information that describes an arrival or departure gate for a flight.
- [reservedSeat](inflightreservation/reservedseat.md): The user’s seat for the flight.

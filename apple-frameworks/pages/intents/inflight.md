> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inflight](https://developer.apple.com/documentation/intents/inflight)

# INFlight (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The information that describes a flight.

## Declaration

```swift
class INFlight
```

## Topics

### Initializing a Flight Object

- [init(airline:flightNumber:boardingTime:flightDuration:departureAirportGate:arrivalAirportGate:)](inflight/init%28airline_flightnumber_boardingtime_flightduration_departureairportgate_arrivalairportgate_%29.md): Creates a new object containing information about a flight.

### Getting the Flight Information

- [airline](inflight/airline.md): The airline on which the user is flying.
- [flightNumber](inflight/flightnumber.md): The number of a flight.
- [boardingTime](inflight/boardingtime.md): The date and time during which the flight is boarding.
- [flightDuration](inflight/flightduration.md): The date and time range for the departure and arrival of the flight.
- [departureAirportGate](inflight/departureairportgate.md): The gate from which the flight departs.
- [arrivalAirportGate](inflight/arrivalairportgate.md): The gate at which the flight arrives

### Initializers

- [init(coder:)](inflight/init%28coder_%29.md)

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
- [INAirline](inairline.md): The information that describes an airline.
- [INAirport](inairport.md): The information that describes an airport.
- [INAirportGate](inairportgate.md): The information that describes an arrival or departure gate for a flight.
- [reservedSeat](inflightreservation/reservedseat.md): The user’s seat for the flight.

# INFlight (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The information that describes a flight.

## Declaration

```objectivec
@interface INFlight : NSObject
```

## Topics

### Initializing a Flight Object

- [initWithAirline:flightNumber:boardingTime:flightDuration:departureAirportGate:arrivalAirportGate:](inflight/init%28airline_flightnumber_boardingtime_flightduration_departureairportgate_arrivalairportgate_%29.md): Creates a new object containing information about a flight.

### Getting the Flight Information

- [airline](inflight/airline.md): The airline on which the user is flying.
- [flightNumber](inflight/flightnumber.md): The number of a flight.
- [boardingTime](inflight/boardingtime.md): The date and time during which the flight is boarding.
- [flightDuration](inflight/flightduration.md): The date and time range for the departure and arrival of the flight.
- [departureAirportGate](inflight/departureairportgate.md): The gate from which the flight departs.
- [arrivalAirportGate](inflight/arrivalairportgate.md): The gate at which the flight arrives

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Getting the Flight Reservation Information

- [flight](inflightreservation/flight.md): The flight information associated with the reservation.
- [INAirline](inairline.md): The information that describes an airline.
- [INAirport](inairport.md): The information that describes an airport.
- [INAirportGate](inairportgate.md): The information that describes an arrival or departure gate for a flight.
- [reservedSeat](inflightreservation/reservedseat.md): The user’s seat for the flight.

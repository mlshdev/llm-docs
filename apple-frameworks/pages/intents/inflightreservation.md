> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inflightreservation](https://developer.apple.com/documentation/intents/inflightreservation)

# INFlightReservation (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The information that describes a flight reservation.

## Declaration

```swift
class INFlightReservation
```

## Topics

### Creating a Flight Reservation

- [init(itemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:url:reservedSeat:flight:)](inflightreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_url_reservedseat_flight_%29-4b34z.md): Creates a flight reservation with the specified contents and attributes.
- [init(itemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:reservedSeat:flight:)](inflightreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_reservedseat_flight_%29.md): Creates a new flight reservation with the specified contents and attributes.

### Getting the Flight Reservation Information

- [flight](inflightreservation/flight.md): The flight information associated with the reservation.
- [INFlight](inflight.md): The information that describes a flight.
- [INAirline](inairline.md): The information that describes an airline.
- [INAirport](inairport.md): The information that describes an airport.
- [INAirportGate](inairportgate.md): The information that describes an arrival or departure gate for a flight.
- [reservedSeat](inflightreservation/reservedseat.md): The user’s seat for the flight.

### Initializers

- [init(itemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:URL:reservedSeat:flight:)](inflightreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_url_reservedseat_flight_%29-83jzi.md)

## Relationships

### Inherits From

- [INReservation](inreservation.md)

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

### Travel Reservations

- [INTrainReservation](intrainreservation.md): The information that describes a train reservation.
- [INBoatReservation](inboatreservation.md): The information that describes a boat reservation.
- [INBusReservation](inbusreservation.md): The information that describes a bus reservation.
- [INRentalCarReservation](inrentalcarreservation.md): The information that describes a rental car reservation.

# INFlightReservation (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The information that describes a flight reservation.

## Declaration

```objectivec
@interface INFlightReservation : INReservation
```

## Topics

### Creating a Flight Reservation

- [initWithItemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:URL:reservedSeat:flight:](inflightreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_url_reservedseat_flight_%29-4b34z.md): Creates a flight reservation with the specified contents and attributes.
- [initWithItemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:reservedSeat:flight:](inflightreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_reservedseat_flight_%29.md): Creates a new flight reservation with the specified contents and attributes.

### Getting the Flight Reservation Information

- [flight](inflightreservation/flight.md): The flight information associated with the reservation.
- [INFlight](inflight.md): The information that describes a flight.
- [INAirline](inairline.md): The information that describes an airline.
- [INAirport](inairport.md): The information that describes an airport.
- [INAirportGate](inairportgate.md): The information that describes an arrival or departure gate for a flight.
- [reservedSeat](inflightreservation/reservedseat.md): The user’s seat for the flight.

## Relationships

### Inherits From

- [INReservation](inreservation.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Travel Reservations

- [INTrainReservation](intrainreservation.md): The information that describes a train reservation.
- [INBoatReservation](inboatreservation.md): The information that describes a boat reservation.
- [INBusReservation](inbusreservation.md): The information that describes a bus reservation.
- [INRentalCarReservation](inrentalcarreservation.md): The information that describes a rental car reservation.

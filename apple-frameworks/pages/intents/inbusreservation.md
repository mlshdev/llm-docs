> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbusreservation](https://developer.apple.com/documentation/intents/inbusreservation)

# INBusReservation (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

The information that describes a bus reservation.

## Declaration

```swift
class INBusReservation
```

## Topics

### Creating a Bus Trip Reservation

- [init(itemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:url:reservedSeat:busTrip:)](inbusreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_url_reservedseat_bustrip_%29-4spk1.md): Creates a bus reservation with the specified contents and attributes.

### Getting the Bus Trip Reservation Information

- [busTrip](inbusreservation/bustrip.md): Information describing a bus trip.
- [INBusTrip](inbustrip.md): Information describing a bus trip.
- [reservedSeat](inbusreservation/reservedseat.md): Seat information for the bus reservation.

### Initializers

- [init(itemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:URL:reservedSeat:busTrip:)](inbusreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_url_reservedseat_bustrip_%29-95v54.md)

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

- [INFlightReservation](inflightreservation.md): The information that describes a flight reservation.
- [INTrainReservation](intrainreservation.md): The information that describes a train reservation.
- [INBoatReservation](inboatreservation.md): The information that describes a boat reservation.
- [INRentalCarReservation](inrentalcarreservation.md): The information that describes a rental car reservation.

# INBusReservation (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

The information that describes a bus reservation.

## Declaration

```objectivec
@interface INBusReservation : INReservation
```

## Topics

### Creating a Bus Trip Reservation

- [initWithItemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:URL:reservedSeat:busTrip:](inbusreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_url_reservedseat_bustrip_%29-4spk1.md): Creates a bus reservation with the specified contents and attributes.

### Getting the Bus Trip Reservation Information

- [busTrip](inbusreservation/bustrip.md): Information describing a bus trip.
- [INBusTrip](inbustrip.md): Information describing a bus trip.
- [reservedSeat](inbusreservation/reservedseat.md): Seat information for the bus reservation.

## Relationships

### Inherits From

- [INReservation](inreservation.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Travel Reservations

- [INFlightReservation](inflightreservation.md): The information that describes a flight reservation.
- [INTrainReservation](intrainreservation.md): The information that describes a train reservation.
- [INBoatReservation](inboatreservation.md): The information that describes a boat reservation.
- [INRentalCarReservation](inrentalcarreservation.md): The information that describes a rental car reservation.

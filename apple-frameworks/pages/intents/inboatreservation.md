> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inboatreservation](https://developer.apple.com/documentation/intents/inboatreservation)

# INBoatReservation (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

The information that describes a boat reservation.

## Declaration

```swift
class INBoatReservation
```

## Topics

### Creating a Boat Reservation

- [init(itemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:url:reservedSeat:boatTrip:)](inboatreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_url_reservedseat_boattrip_%29-6q5gl.md): Creates a boat reservation with the specified contents and attributes.

### Getting the Boat Reservation Information

- [boatTrip](inboatreservation/boattrip.md): Information describing a voyage.
- [INBoatTrip](inboattrip.md): The information that describes a boat trip.
- [reservedSeat](inboatreservation/reservedseat.md): The passenger’s seat on a boat reservation.

### Initializers

- [init(itemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:URL:reservedSeat:boatTrip:)](inboatreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_url_reservedseat_boattrip_%29-24kza.md)

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
- [INBusReservation](inbusreservation.md): The information that describes a bus reservation.
- [INRentalCarReservation](inrentalcarreservation.md): The information that describes a rental car reservation.

# INBoatReservation (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+ · watchOS 7.0+

The information that describes a boat reservation.

## Declaration

```objectivec
@interface INBoatReservation : INReservation
```

## Topics

### Creating a Boat Reservation

- [initWithItemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:URL:reservedSeat:boatTrip:](inboatreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_url_reservedseat_boattrip_%29-6q5gl.md): Creates a boat reservation with the specified contents and attributes.

### Getting the Boat Reservation Information

- [boatTrip](inboatreservation/boattrip.md): Information describing a voyage.
- [INBoatTrip](inboattrip.md): The information that describes a boat trip.
- [reservedSeat](inboatreservation/reservedseat.md): The passenger’s seat on a boat reservation.

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
- [INBusReservation](inbusreservation.md): The information that describes a bus reservation.
- [INRentalCarReservation](inrentalcarreservation.md): The information that describes a rental car reservation.

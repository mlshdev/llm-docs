> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/intrainreservation](https://developer.apple.com/documentation/intents/intrainreservation)

# INTrainReservation (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The information that describes a train reservation.

## Declaration

```swift
class INTrainReservation
```

## Topics

### Creating a Train Reservation

- [init(itemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:url:reservedSeat:trainTrip:)](intrainreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_url_reservedseat_traintrip_%29-3z3wm.md): Creates a train reservation with the specified contents and attributes.
- [init(itemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:reservedSeat:trainTrip:)](intrainreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_reservedseat_traintrip_%29.md): Creates a new train reservation with the specified contents and attributes.

### Getting the Train Reservation Information

- [reservedSeat](intrainreservation/reservedseat.md): The seat reserved for the user.
- [trainTrip](intrainreservation/traintrip.md): An object containing the detailed information about the train trip.
- [INTrainTrip](intraintrip.md): The information that describes a train trip.

### Initializers

- [init(itemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:URL:reservedSeat:trainTrip:)](intrainreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_url_reservedseat_traintrip_%29-5kkgr.md)

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
- [INBoatReservation](inboatreservation.md): The information that describes a boat reservation.
- [INBusReservation](inbusreservation.md): The information that describes a bus reservation.
- [INRentalCarReservation](inrentalcarreservation.md): The information that describes a rental car reservation.

# INTrainReservation (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The information that describes a train reservation.

## Declaration

```objectivec
@interface INTrainReservation : INReservation
```

## Topics

### Creating a Train Reservation

- [initWithItemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:URL:reservedSeat:trainTrip:](intrainreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_url_reservedseat_traintrip_%29-3z3wm.md): Creates a train reservation with the specified contents and attributes.
- [initWithItemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:reservedSeat:trainTrip:](intrainreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_reservedseat_traintrip_%29.md): Creates a new train reservation with the specified contents and attributes.

### Getting the Train Reservation Information

- [reservedSeat](intrainreservation/reservedseat.md): The seat reserved for the user.
- [trainTrip](intrainreservation/traintrip.md): An object containing the detailed information about the train trip.
- [INTrainTrip](intraintrip.md): The information that describes a train trip.

## Relationships

### Inherits From

- [INReservation](inreservation.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Travel Reservations

- [INFlightReservation](inflightreservation.md): The information that describes a flight reservation.
- [INBoatReservation](inboatreservation.md): The information that describes a boat reservation.
- [INBusReservation](inbusreservation.md): The information that describes a bus reservation.
- [INRentalCarReservation](inrentalcarreservation.md): The information that describes a rental car reservation.

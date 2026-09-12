> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inreservation](https://developer.apple.com/documentation/intents/inreservation)

# INReservation (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

An object that describes a reservation.

## Declaration

```swift
class INReservation
```

## Mentioned In

- [Donating Reservations](../sirikit/donating-reservations.md)

<a id="overview"></a>

## Overview

Don’t create instances of this class directly. Instead, use the subclass associated with the type of reservation created.

## Topics

### Describing the Reservation

- [reservationHolderName](inreservation/reservationholdername.md): The reservation holder’s name.
- [reservationNumber](inreservation/reservationnumber.md): The reservation number.
- [reservationStatus](inreservation/reservationstatus.md): The current status of the reservation.
- [bookingTime](inreservation/bookingtime.md): The date and time the user booked the reservation.
- [itemReference](inreservation/itemreference.md): A unique reference for the reservation.
- [actions](inreservation/actions.md): An array containing actions the user can perform on the reservation.
- [url](inreservation/url.md): A webpage the user can access to view reservation details.

### Initializers

- [init(coder:)](inreservation/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [INBoatReservation](inboatreservation.md)
- [INBusReservation](inbusreservation.md)
- [INFlightReservation](inflightreservation.md)
- [INLodgingReservation](inlodgingreservation.md)
- [INRentalCarReservation](inrentalcarreservation.md)
- [INRestaurantReservation](inrestaurantreservation.md)
- [INTicketedEventReservation](inticketedeventreservation.md)
- [INTrainReservation](intrainreservation.md)

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

### Common Reservation Data Objects

- [INReservationAction](inreservationaction.md): An action a user can perform that’s relevant to a reservation.
- [INReservationStatus](inreservationstatus.md): Constants that describe the current status of the reservation.
- [INSeat](inseat.md): An object containing seat information associated with a reservation.

# INReservation (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

An object that describes a reservation.

## Declaration

```objectivec
@interface INReservation : NSObject
```

## Mentioned In

- [Donating Reservations](../sirikit/donating-reservations.md)

<a id="overview"></a>

## Overview

Don’t create instances of this class directly. Instead, use the subclass associated with the type of reservation created.

## Topics

### Describing the Reservation

- [reservationHolderName](inreservation/reservationholdername.md): The reservation holder’s name.
- [reservationNumber](inreservation/reservationnumber.md): The reservation number.
- [reservationStatus](inreservation/reservationstatus.md): The current status of the reservation.
- [bookingTime](inreservation/bookingtime.md): The date and time the user booked the reservation.
- [itemReference](inreservation/itemreference.md): A unique reference for the reservation.
- [actions](inreservation/actions.md): An array containing actions the user can perform on the reservation.
- [URL](inreservation/url.md): A webpage the user can access to view reservation details.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [INBoatReservation](inboatreservation.md)
- [INBusReservation](inbusreservation.md)
- [INFlightReservation](inflightreservation.md)
- [INLodgingReservation](inlodgingreservation.md)
- [INRentalCarReservation](inrentalcarreservation.md)
- [INRestaurantReservation](inrestaurantreservation.md)
- [INTicketedEventReservation](inticketedeventreservation.md)
- [INTrainReservation](intrainreservation.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Common Reservation Data Objects

- [INReservationAction](inreservationaction.md): An action a user can perform that’s relevant to a reservation.
- [INReservationStatus](inreservationstatus.md): Constants that describe the current status of the reservation.
- [INSeat](inseat.md): An object containing seat information associated with a reservation.

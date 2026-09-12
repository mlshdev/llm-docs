> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlodgingreservation](https://developer.apple.com/documentation/intents/inlodgingreservation)

# INLodgingReservation (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The information that describes a lodging reservation.

## Declaration

```swift
class INLodgingReservation
```

## Topics

### Creating a Lodging Reservation

- [init(itemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:url:lodgingBusinessLocation:reservationDuration:numberOfAdults:numberOfChildren:)](inlodgingreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_url_lodgingbusinesslocation_reservationduration_numberofadults_numberofchildren_%29.md): Creates a lodging reservation with the specified contents and attributes.
- [init(itemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:lodgingBusinessLocation:reservationDuration:numberOfAdults:numberOfChildren:)](inlodgingreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_lodgingbusinesslocation_reservationduration_numberofadults_numberofchildren_%29.md): Creates a new lodging reservation with the provided information.

### Getting the Lodging Reservation Information

- [lodgingBusinessLocation](inlodgingreservation/lodgingbusinesslocation.md): The name and location of the lodging establishment.
- [reservationDuration](inlodgingreservation/reservationduration.md): The date and time range that indicates the beginning and end of the reservation.
- [numberOfAdults](inlodgingreservation/numberofadults-6fsnq.md): The number of adults staying at the lodging location.
- [numberOfChildren](inlodgingreservation/numberofchildren-1dm3g.md): The number of children staying at the lodging location.

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

### Food, Lodging, and Event Reservations

- [INRestaurantReservation](inrestaurantreservation.md): The information that describes a restaurant reservation.
- [INTicketedEventReservation](inticketedeventreservation.md): The information that describes a ticketed event reservation.

# INLodgingReservation (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The information that describes a lodging reservation.

## Declaration

```objectivec
@interface INLodgingReservation : INReservation
```

## Topics

### Creating a Lodging Reservation

- [initWithItemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:URL:lodgingBusinessLocation:reservationDuration:numberOfAdults:numberOfChildren:](https://developer.apple.com/documentation/intents/inlodgingreservation/initwithitemreference:reservationnumber:bookingtime:reservationstatus:reservationholdername:actions:url:lodgingbusinesslocation:reservationduration:numberofadults:numberofchildren:): Creates a lodging reservation with the specified contents and attributes.
- [initWithItemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:lodgingBusinessLocation:reservationDuration:numberOfAdults:numberOfChildren:](https://developer.apple.com/documentation/intents/inlodgingreservation/initwithitemreference:reservationnumber:bookingtime:reservationstatus:reservationholdername:actions:lodgingbusinesslocation:reservationduration:numberofadults:numberofchildren:): Creates a new lodging reservation with the provided information.

### Getting the Lodging Reservation Information

- [lodgingBusinessLocation](inlodgingreservation/lodgingbusinesslocation.md): The name and location of the lodging establishment.
- [reservationDuration](inlodgingreservation/reservationduration.md): The date and time range that indicates the beginning and end of the reservation.
- [numberOfAdults](https://developer.apple.com/documentation/intents/inlodgingreservation/numberofadults-9r4iw): The number of adults staying at the lodging location.
- [numberOfChildren](https://developer.apple.com/documentation/intents/inlodgingreservation/numberofchildren-2n3e2): The number of children staying at the lodging location.

## Relationships

### Inherits From

- [INReservation](inreservation.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Food, Lodging, and Event Reservations

- [INRestaurantReservation](inrestaurantreservation.md): The information that describes a restaurant reservation.
- [INTicketedEventReservation](inticketedeventreservation.md): The information that describes a ticketed event reservation.

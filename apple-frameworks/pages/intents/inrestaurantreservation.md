> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantreservation](https://developer.apple.com/documentation/intents/inrestaurantreservation)

# INRestaurantReservation (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The information that describes a restaurant reservation.

## Declaration

```swift
class INRestaurantReservation
```

## Topics

### Creating a Restaurant Reservation

- [init(itemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:url:reservationDuration:partySize:restaurantLocation:)](inrestaurantreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_url_reservationduration_partysize_restaurantlocation_%29.md): Creates a restaurant reservation with the specified contents and attributes.
- [init(itemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:reservationDuration:partySize:restaurantLocation:)](inrestaurantreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_reservationduration_partysize_restaurantlocation_%29.md): Creates a new restaurant reservation with the provided information.

### Getting the Restaurant Reservation Information

- [reservationDuration](inrestaurantreservation/reservationduration.md): The date and time range that defines beginning and end of the restaurant reservation.
- [restaurantLocation](inrestaurantreservation/restaurantlocation.md): The name and location of the restaurant.
- [partySize](inrestaurantreservation/partysize-9ux0p.md): The number of people in the party.

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

- [INLodgingReservation](inlodgingreservation.md): The information that describes a lodging reservation.
- [INTicketedEventReservation](inticketedeventreservation.md): The information that describes a ticketed event reservation.

# INRestaurantReservation (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The information that describes a restaurant reservation.

## Declaration

```objectivec
@interface INRestaurantReservation : INReservation
```

## Topics

### Creating a Restaurant Reservation

- [initWithItemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:URL:reservationDuration:partySize:restaurantLocation:](https://developer.apple.com/documentation/intents/inrestaurantreservation/initwithitemreference:reservationnumber:bookingtime:reservationstatus:reservationholdername:actions:url:reservationduration:partysize:restaurantlocation:): Creates a restaurant reservation with the provided information.
- [initWithItemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:reservationDuration:partySize:restaurantLocation:](https://developer.apple.com/documentation/intents/inrestaurantreservation/initwithitemreference:reservationnumber:bookingtime:reservationstatus:reservationholdername:actions:reservationduration:partysize:restaurantlocation:): Creates a new restaurant reservation with the provided information.

### Getting the Restaurant Reservation Information

- [reservationDuration](inrestaurantreservation/reservationduration.md): The date and time range that defines beginning and end of the restaurant reservation.
- [restaurantLocation](inrestaurantreservation/restaurantlocation.md): The name and location of the restaurant.
- [partySize](https://developer.apple.com/documentation/intents/inrestaurantreservation/partysize-9mtpk): The number of people in the party.

## Relationships

### Inherits From

- [INReservation](inreservation.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Food, Lodging, and Event Reservations

- [INLodgingReservation](inlodgingreservation.md): The information that describes a lodging reservation.
- [INTicketedEventReservation](inticketedeventreservation.md): The information that describes a ticketed event reservation.

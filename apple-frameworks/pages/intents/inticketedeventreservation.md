> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inticketedeventreservation](https://developer.apple.com/documentation/intents/inticketedeventreservation)

# INTicketedEventReservation (Swift)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The information that describes a ticketed event reservation.

## Declaration

```swift
class INTicketedEventReservation
```

## Topics

### Creating a Ticketed Event Reservation

- [init(itemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:url:reservedSeat:event:)](inticketedeventreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_url_reservedseat_event_%29-9i6f1.md): Creates a ticketed event reservation with the specified contents and attributes.
- [init(itemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:reservedSeat:event:)](inticketedeventreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_reservedseat_event_%29.md): Creates a new ticketed event reservation with the specified contents and attributes.

### Getting the Ticketed Event Reservation Information

- [event](inticketedeventreservation/event.md): An object containing detailed information about the ticketed event.
- [INTicketedEvent](inticketedevent.md): The information that describes a ticketed event.
- [reservedSeat](inticketedeventreservation/reservedseat.md): The user’s assigned seat for the ticketed event.

### Initializers

- [init(itemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:URL:reservedSeat:event:)](inticketedeventreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_url_reservedseat_event_%29-7vj6l.md)

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
- [INLodgingReservation](inlodgingreservation.md): The information that describes a lodging reservation.

# INTicketedEventReservation (Objective-C)

**Framework:** Intents  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The information that describes a ticketed event reservation.

## Declaration

```objectivec
@interface INTicketedEventReservation : INReservation
```

## Topics

### Creating a Ticketed Event Reservation

- [initWithItemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:URL:reservedSeat:event:](inticketedeventreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_url_reservedseat_event_%29-9i6f1.md): Creates a ticketed event reservation with the specified contents and attributes.
- [initWithItemReference:reservationNumber:bookingTime:reservationStatus:reservationHolderName:actions:reservedSeat:event:](inticketedeventreservation/init%28itemreference_reservationnumber_bookingtime_reservationstatus_reservationholdername_actions_reservedseat_event_%29.md): Creates a new ticketed event reservation with the specified contents and attributes.

### Getting the Ticketed Event Reservation Information

- [event](inticketedeventreservation/event.md): An object containing detailed information about the ticketed event.
- [INTicketedEvent](inticketedevent.md): The information that describes a ticketed event.
- [reservedSeat](inticketedeventreservation/reservedseat.md): The user’s assigned seat for the ticketed event.

## Relationships

### Inherits From

- [INReservation](inreservation.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Food, Lodging, and Event Reservations

- [INRestaurantReservation](inrestaurantreservation.md): The information that describes a restaurant reservation.
- [INLodgingReservation](inlodgingreservation.md): The information that describes a lodging reservation.

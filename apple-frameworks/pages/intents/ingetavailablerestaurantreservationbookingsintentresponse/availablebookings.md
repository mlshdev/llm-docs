> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetavailablerestaurantreservationbookingsintentresponse/availablebookings](https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingsintentresponse/availablebookings)

# availableBookings (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of available time slots for the reservation.

## Declaration

```swift
var availableBookings: [INRestaurantReservationBooking] { get }
```

<a id="Discussion"></a>

## Discussion

This property contains the details of the reservation time slots that you are offering to the user. Offering a time slot does not by itself complete the booking process. The user must choose a time slot, at which time the system sends your Intents extension a [INBookRestaurantReservationIntent](../inbookrestaurantreservationintent.md) object, which you use to complete the booking process.

The value of this property is set automatically at initialization time and can’t be changed later.

# availableBookings (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An array of available time slots for the reservation.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<INRestaurantReservationBooking *> * availableBookings;
```

```objectivec
@property (atomic, readonly) NSArray<INRestaurantReservationBooking *> * availableBookings;
```

<a id="Discussion"></a>

## Discussion

This property contains the details of the reservation time slots that you are offering to the user. Offering a time slot does not by itself complete the booking process. The user must choose a time slot, at which time the system sends your Intents extension a [INBookRestaurantReservationIntent](../inbookrestaurantreservationintent.md) object, which you use to complete the booking process.

The value of this property is set automatically at initialization time and can’t be changed later.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantreservationbooking/bookingdate](https://developer.apple.com/documentation/intents/inrestaurantreservationbooking/bookingdate)

# bookingDate (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The date and time of the reservation.

## Declaration

```swift
var bookingDate: Date { get set }
```

## See Also

### Accessing the Booking Information

- [bookingIdentifier](bookingidentifier.md): The unique identifier associated with this reservation.
- [isBookingAvailable](isbookingavailable.md): A Boolean value indicating whether the time slot is available for booking.
- [bookingDescription](bookingdescription.md): An optional description of the booking.

# bookingDate (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The date and time of the reservation.

## Declaration

```objectivec
@property (nonatomic, copy) NSDate * bookingDate;
```

```objectivec
@property (atomic, copy) NSDate * bookingDate;
```

## See Also

### Accessing the Booking Information

- [bookingIdentifier](bookingidentifier.md): The unique identifier associated with this reservation.
- [bookingAvailable](isbookingavailable.md): A Boolean value indicating whether the time slot is available for booking.
- [bookingDescription](bookingdescription.md): An optional description of the booking.

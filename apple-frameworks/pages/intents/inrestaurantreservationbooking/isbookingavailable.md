> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantreservationbooking/isbookingavailable](https://developer.apple.com/documentation/intents/inrestaurantreservationbooking/isbookingavailable)

# isBookingAvailable (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether the time slot is available for booking.

## Declaration

```swift
var isBookingAvailable: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true). Change it to [false](https://developer.apple.com/documentation/swift/false) if the specified time slot is unavailable, either because the restaurant is fully booked at that time or because it cannot accommodate a party of the specified size at that time.

## See Also

### Accessing the Booking Information

- [bookingIdentifier](bookingidentifier.md): The unique identifier associated with this reservation.
- [bookingDate](bookingdate.md): The date and time of the reservation.
- [bookingDescription](bookingdescription.md): An optional description of the booking.

# bookingAvailable (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

A Boolean value indicating whether the time slot is available for booking.

## Declaration

```objectivec
@property (nonatomic, getter=isBookingAvailable) BOOL bookingAvailable;
```

```objectivec
@property (atomic, getter=isBookingAvailable) BOOL bookingAvailable;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [true](https://developer.apple.com/documentation/swift/true). Change it to [false](https://developer.apple.com/documentation/swift/false) if the specified time slot is unavailable, either because the restaurant is fully booked at that time or because it cannot accommodate a party of the specified size at that time.

## See Also

### Accessing the Booking Information

- [bookingIdentifier](bookingidentifier.md): The unique identifier associated with this reservation.
- [bookingDate](bookingdate.md): The date and time of the reservation.
- [bookingDescription](bookingdescription.md): An optional description of the booking.

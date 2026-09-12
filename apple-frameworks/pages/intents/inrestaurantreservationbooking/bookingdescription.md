> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantreservationbooking/bookingdescription](https://developer.apple.com/documentation/intents/inrestaurantreservationbooking/bookingdescription)

# bookingDescription (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An optional description of the booking.

## Declaration

```swift
var bookingDescription: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to provide a user-readable description of the reservation. For example, you might use this property to summarize the restaurant, date, and party information.

## See Also

### Accessing the Booking Information

- [bookingIdentifier](bookingidentifier.md): The unique identifier associated with this reservation.
- [isBookingAvailable](isbookingavailable.md): A Boolean value indicating whether the time slot is available for booking.
- [bookingDate](bookingdate.md): The date and time of the reservation.

# bookingDescription (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

An optional description of the booking.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * bookingDescription;
```

```objectivec
@property (atomic, copy, nullable) NSString * bookingDescription;
```

<a id="Discussion"></a>

## Discussion

Use this property to provide a user-readable description of the reservation. For example, you might use this property to summarize the restaurant, date, and party information.

## See Also

### Accessing the Booking Information

- [bookingIdentifier](bookingidentifier.md): The unique identifier associated with this reservation.
- [bookingAvailable](isbookingavailable.md): A Boolean value indicating whether the time slot is available for booking.
- [bookingDate](bookingdate.md): The date and time of the reservation.

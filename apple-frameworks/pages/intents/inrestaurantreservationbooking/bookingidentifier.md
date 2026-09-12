> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantreservationbooking/bookingidentifier](https://developer.apple.com/documentation/intents/inrestaurantreservationbooking/bookingidentifier)

# bookingIdentifier (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The unique identifier associated with this reservation.

## Declaration

```swift
var bookingIdentifier: String { get set }
```

<a id="Discussion"></a>

## Discussion

Assign a unique identifier to this property that you can use later to complete the reservation. The identifier should be a string that you can use to look up the reservation details in your system.

## See Also

### Accessing the Booking Information

- [isBookingAvailable](isbookingavailable.md): A Boolean value indicating whether the time slot is available for booking.
- [bookingDate](bookingdate.md): The date and time of the reservation.
- [bookingDescription](bookingdescription.md): An optional description of the booking.

# bookingIdentifier (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The unique identifier associated with this reservation.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * bookingIdentifier;
```

```objectivec
@property (atomic, copy) NSString * bookingIdentifier;
```

<a id="Discussion"></a>

## Discussion

Assign a unique identifier to this property that you can use later to complete the reservation. The identifier should be a string that you can use to look up the reservation details in your system.

## See Also

### Accessing the Booking Information

- [bookingAvailable](isbookingavailable.md): A Boolean value indicating whether the time slot is available for booking.
- [bookingDate](bookingdate.md): The date and time of the reservation.
- [bookingDescription](bookingdescription.md): An optional description of the booking.

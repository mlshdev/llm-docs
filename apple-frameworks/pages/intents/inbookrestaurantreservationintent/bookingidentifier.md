> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbookrestaurantreservationintent/bookingidentifier](https://developer.apple.com/documentation/intents/inbookrestaurantreservationintent/bookingidentifier)

# bookingIdentifier (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The unique identifier associated with the initial reservation data.

## Declaration

```swift
var bookingIdentifier: String? { get set }
```

<a id="Discussion"></a>

## Discussion

Prior to booking, your Intents extension provides a set of potential reservation options in the form of [INRestaurantReservationBooking](../inrestaurantreservationbooking.md) objects, each of which contains a unique booking identifier. When the user selects a reservation time, this property receives the booking identifier from the corresponding [INRestaurantReservationBooking](../inrestaurantreservationbooking.md) object. Use that value to get the details about the reservation option chosen by the user.

## See Also

### Getting the Booking Details

- [bookingDateComponents](bookingdatecomponents.md): The date and time of the reservation.
- [partySize](partysize.md): The total number of people in the user’s party.
- [guest](guest.md): The identity of the guest associated with the reservation.

# bookingIdentifier (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The unique identifier associated with the initial reservation data.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSString * bookingIdentifier;
```

```objectivec
@property (atomic, copy, nullable) NSString * bookingIdentifier;
```

<a id="Discussion"></a>

## Discussion

Prior to booking, your Intents extension provides a set of potential reservation options in the form of [INRestaurantReservationBooking](../inrestaurantreservationbooking.md) objects, each of which contains a unique booking identifier. When the user selects a reservation time, this property receives the booking identifier from the corresponding [INRestaurantReservationBooking](../inrestaurantreservationbooking.md) object. Use that value to get the details about the reservation option chosen by the user.

## See Also

### Getting the Booking Details

- [bookingDateComponents](bookingdatecomponents.md): The date and time of the reservation.
- [partySize](partysize.md): The total number of people in the user’s party.
- [guest](guest.md): The identity of the guest associated with the reservation.

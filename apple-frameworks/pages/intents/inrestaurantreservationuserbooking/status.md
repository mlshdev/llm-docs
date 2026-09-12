> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inrestaurantreservationuserbooking/status](https://developer.apple.com/documentation/intents/inrestaurantreservationuserbooking/status)

# status (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The current status of the reservation.

## Declaration

```swift
var status: INRestaurantReservationUserBookingStatus { get set }
```

<a id="Discussion"></a>

## Discussion

Upon receipt of a reservation, your Intents extension works with the restaurant to place the reservation. This property contains the status of whether the restaurant accepted or declined the reservation, or whether the reservation is still pending while you communicate the details of the reservation to the restaurant.

When the value of this property changes, update the [dateStatusModified](datestatusmodified.md) property as well.

## See Also

### Accessing the Reservation Information

- [guest](guest.md): The guest associated with the reservation.
- [dateStatusModified](datestatusmodified.md): The date on which the status of the reservation changed.
- [guestProvidedSpecialRequestText](guestprovidedspecialrequesttext.md): Any special requests made by the user with the reservation.

# status (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The current status of the reservation.

## Declaration

```objectivec
@property (nonatomic) INRestaurantReservationUserBookingStatus status;
```

```objectivec
@property (atomic) INRestaurantReservationUserBookingStatus status;
```

<a id="Discussion"></a>

## Discussion

Upon receipt of a reservation, your Intents extension works with the restaurant to place the reservation. This property contains the status of whether the restaurant accepted or declined the reservation, or whether the reservation is still pending while you communicate the details of the reservation to the restaurant.

When the value of this property changes, update the [dateStatusModified](datestatusmodified.md) property as well.

## See Also

### Accessing the Reservation Information

- [guest](guest.md): The guest associated with the reservation.
- [dateStatusModified](datestatusmodified.md): The date on which the status of the reservation changed.
- [guestProvidedSpecialRequestText](guestprovidedspecialrequesttext.md): Any special requests made by the user with the reservation.

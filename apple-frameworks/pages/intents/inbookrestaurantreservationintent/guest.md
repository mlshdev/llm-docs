> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbookrestaurantreservationintent/guest](https://developer.apple.com/documentation/intents/inbookrestaurantreservationintent/guest)

# guest (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The identity of the guest associated with the reservation.

## Declaration

```swift
@NSCopying var guest: INRestaurantGuest? { get set }
```

<a id="Discussion"></a>

## Discussion

You can use this information to identify the user. After a reservation is successfully created, you can forward the user’s contact information to the restaurant so that it can communicate with the user directly.

## See Also

### Getting the Booking Details

- [bookingDateComponents](bookingdatecomponents.md): The date and time of the reservation.
- [bookingIdentifier](bookingidentifier.md): The unique identifier associated with the initial reservation data.
- [partySize](partysize.md): The total number of people in the user’s party.

# guest (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The identity of the guest associated with the reservation.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) INRestaurantGuest * guest;
```

```objectivec
@property (atomic, copy, nullable) INRestaurantGuest * guest;
```

<a id="Discussion"></a>

## Discussion

You can use this information to identify the user. After a reservation is successfully created, you can forward the user’s contact information to the restaurant so that it can communicate with the user directly.

## See Also

### Getting the Booking Details

- [bookingDateComponents](bookingdatecomponents.md): The date and time of the reservation.
- [bookingIdentifier](bookingidentifier.md): The unique identifier associated with the initial reservation data.
- [partySize](partysize.md): The total number of people in the user’s party.

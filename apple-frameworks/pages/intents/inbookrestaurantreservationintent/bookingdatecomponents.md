> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbookrestaurantreservationintent/bookingdatecomponents](https://developer.apple.com/documentation/intents/inbookrestaurantreservationintent/bookingdatecomponents)

# bookingDateComponents (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The date and time of the reservation.

## Declaration

```swift
var bookingDateComponents: DateComponents { get set }
```

<a id="Discussion"></a>

## Discussion

This date and time represent the values selected by the user.

## See Also

### Getting the Booking Details

- [bookingIdentifier](bookingidentifier.md): The unique identifier associated with the initial reservation data.
- [partySize](partysize.md): The total number of people in the user’s party.
- [guest](guest.md): The identity of the guest associated with the reservation.

# bookingDateComponents (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The date and time of the reservation.

## Declaration

```objectivec
@property (nonatomic, copy) NSDateComponents * bookingDateComponents;
```

```objectivec
@property (atomic, copy) NSDateComponents * bookingDateComponents;
```

<a id="Discussion"></a>

## Discussion

This date and time represent the values selected by the user.

## See Also

### Getting the Booking Details

- [bookingIdentifier](bookingidentifier.md): The unique identifier associated with the initial reservation data.
- [partySize](partysize.md): The total number of people in the user’s party.
- [guest](guest.md): The identity of the guest associated with the reservation.

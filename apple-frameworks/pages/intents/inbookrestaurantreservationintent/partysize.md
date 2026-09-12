> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inbookrestaurantreservationintent/partysize](https://developer.apple.com/documentation/intents/inbookrestaurantreservationintent/partysize)

# partySize (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The total number of people in the user’s party.

## Declaration

```swift
var partySize: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The party size includes the person who initiated the reservation and all additional party members.

## See Also

### Getting the Booking Details

- [bookingDateComponents](bookingdatecomponents.md): The date and time of the reservation.
- [bookingIdentifier](bookingidentifier.md): The unique identifier associated with the initial reservation data.
- [guest](guest.md): The identity of the guest associated with the reservation.

# partySize (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The total number of people in the user’s party.

## Declaration

```objectivec
@property (nonatomic) NSUInteger partySize;
```

```objectivec
@property (atomic) NSUInteger partySize;
```

<a id="Discussion"></a>

## Discussion

The party size includes the person who initiated the reservation and all additional party members.

## See Also

### Getting the Booking Details

- [bookingDateComponents](bookingdatecomponents.md): The date and time of the reservation.
- [bookingIdentifier](bookingidentifier.md): The unique identifier associated with the initial reservation data.
- [guest](guest.md): The identity of the guest associated with the reservation.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/ingetavailablerestaurantreservationbookingsintent/partysize](https://developer.apple.com/documentation/intents/ingetavailablerestaurantreservationbookingsintent/partysize)

# partySize (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The number of people in the guest’s party.

## Declaration

```swift
var partySize: Int { get set }
```

<a id="Discussion"></a>

## Discussion

Use this information to identify time slots available at the restaurant. For large parties, restaurants may have a more limited number of time slots available.

## See Also

### Getting the Reservation Details

- [preferredBookingDateComponents](preferredbookingdatecomponents.md): The date and time preferred by the user for the reservation.

# partySize (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The number of people in the guest’s party.

## Declaration

```objectivec
@property (nonatomic) NSUInteger partySize;
```

```objectivec
@property (atomic) NSUInteger partySize;
```

<a id="Discussion"></a>

## Discussion

Use this information to identify time slots available at the restaurant. For large parties, restaurants may have a more limited number of time slots available.

## See Also

### Getting the Reservation Details

- [preferredBookingDateComponents](preferredbookingdatecomponents.md): The date and time preferred by the user for the reservation.

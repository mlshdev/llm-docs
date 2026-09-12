> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inlodgingreservation/reservationduration](https://developer.apple.com/documentation/intents/inlodgingreservation/reservationduration)

# reservationDuration (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The date and time range that indicates the beginning and end of the reservation.

## Declaration

```swift
@NSCopying var reservationDuration: INDateComponentsRange { get }
```

<a id="Discussion"></a>

## Discussion

The beginning and end times for the reservation indicate the earliest time the user can check in and the latest time they can check out.

## See Also

### Getting the Lodging Reservation Information

- [lodgingBusinessLocation](lodgingbusinesslocation.md): The name and location of the lodging establishment.
- [numberOfAdults](numberofadults-6fsnq.md): The number of adults staying at the lodging location.
- [numberOfChildren](numberofchildren-1dm3g.md): The number of children staying at the lodging location.

# reservationDuration (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The date and time range that indicates the beginning and end of the reservation.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) INDateComponentsRange * reservationDuration;
```

```objectivec
@property (atomic, copy, readonly) INDateComponentsRange * reservationDuration;
```

<a id="Discussion"></a>

## Discussion

The beginning and end times for the reservation indicate the earliest time the user can check in and the latest time they can check out.

## See Also

### Getting the Lodging Reservation Information

- [lodgingBusinessLocation](lodgingbusinesslocation.md): The name and location of the lodging establishment.
- [numberOfAdults](https://developer.apple.com/documentation/intents/inlodgingreservation/numberofadults-9r4iw): The number of adults staying at the lodging location.
- [numberOfChildren](https://developer.apple.com/documentation/intents/inlodgingreservation/numberofchildren-2n3e2): The number of children staying at the lodging location.

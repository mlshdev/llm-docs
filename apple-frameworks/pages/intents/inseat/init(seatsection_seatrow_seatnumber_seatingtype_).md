> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inseat/init(seatsection:seatrow:seatnumber:seatingtype:)](https://developer.apple.com/documentation/intents/inseat/init(seatsection:seatrow:seatnumber:seatingtype:))

# init(seatSection:seatRow:seatNumber:seatingType:) (Swift)

**Framework:** Intents  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new seat object containing the required seat information.

## Declaration

```swift
init(seatSection: String?, seatRow: String?, seatNumber: String?, seatingType: String?)
```

## Parameters

- `seatSection`: The seat’s section.
- `seatRow`: The seat’s row.
- `seatNumber`: The seat’s number.
- `seatingType`: The seat’s type.

<a id="Discussion"></a>

## Discussion

Create a new seat object when the reservation includes a seat assignment, such as for a flight or train reservation.

# initWithSeatSection:seatRow:seatNumber:seatingType: (Objective-C)

**Framework:** Intents  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a new seat object containing the required seat information.

## Declaration

```objectivec
- (instancetype) initWithSeatSection:(NSString *) seatSection seatRow:(NSString *) seatRow seatNumber:(NSString *) seatNumber seatingType:(NSString *) seatingType;
```

## Parameters

- `seatSection`: The seat’s section.
- `seatRow`: The seat’s row.
- `seatNumber`: The seat’s number.
- `seatingType`: The seat’s type.

<a id="Discussion"></a>

## Discussion

Create a new seat object when the reservation includes a seat assignment, such as for a flight or train reservation.

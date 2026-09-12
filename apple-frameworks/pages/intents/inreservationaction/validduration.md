> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/intents/inreservationaction/validduration](https://developer.apple.com/documentation/intents/inreservationaction/validduration)

# validDuration (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The date and time range that the action is valid.

## Declaration

```swift
@NSCopying var validDuration: INDateComponentsRange { get }
```

## See Also

### Getting the Reservation Action Information

- [type](type.md): The type of action for the reservation.
- [INReservationActionType](../inreservationactiontype.md): Constants that describe the type of reservation action.
- [userActivity](useractivity.md): The user activity object used when launching your app.

# validDuration (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The date and time range that the action is valid.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) INDateComponentsRange * validDuration;
```

```objectivec
@property (atomic, copy, readonly) INDateComponentsRange * validDuration;
```

## See Also

### Getting the Reservation Action Information

- [type](type.md): The type of action for the reservation.
- [INReservationActionType](../inreservationactiontype.md): Constants that describe the type of reservation action.
- [userActivity](useractivity.md): The user activity object used when launching your app.

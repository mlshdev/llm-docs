> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/intents/inreservationaction/useractivity

# userActivity (Swift)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The user activity object used when launching your app.

## Declaration

```swift
@NSCopying var userActivity: NSUserActivity { get }
```

## See Also

### Getting the Reservation Action Information

- [type](type.md): The type of action for the reservation.
- [INReservationActionType](../inreservationactiontype.md): Constants that describe the type of reservation action.
- [validDuration](validduration.md): The date and time range that the action is valid.

# userActivity (Objective-C)

**Framework:** Intents  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 11.0+ · visionOS 1.0+ · watchOS 6.0+

The user activity object used when launching your app.

## Declaration

```objectivec
@property (nonatomic, copy, readonly) NSUserActivity * userActivity;
```

```objectivec
@property (atomic, copy, readonly) NSUserActivity * userActivity;
```

## See Also

### Getting the Reservation Action Information

- [type](type.md): The type of action for the reservation.
- [INReservationActionType](../inreservationactiontype.md): Constants that describe the type of reservation action.
- [validDuration](validduration.md): The date and time range that the action is valid.

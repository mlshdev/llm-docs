> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocussystem/movementdidfailnotification](https://developer.apple.com/documentation/uikit/uifocussystem/movementdidfailnotification)

# movementDidFailNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The focus failed to move to another item.

## Declaration

```swift
nonisolated class let movementDidFailNotification: NSNotification.Name
```

## Mentioned In

- [About focus interactions for Apple TV](../about-focus-interactions-for-apple-tv.md)

## See Also

### Responding to focus-related keys and notifications

- [animationCoordinatorUserInfoKey](animationcoordinatoruserinfokey.md): Updates the animation coordinator.
- [didUpdateNotification](didupdatenotification.md): The focus for the UI has been updated.
- [focusUpdateContextUserInfoKey](focusupdatecontextuserinfokey.md): Updates the context key.

# UIFocusMovementDidFailNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The focus failed to move to another item.

## Declaration

```objectivec
extern NSNotificationName const UIFocusMovementDidFailNotification;
```

## Mentioned In

- [About focus interactions for Apple TV](../about-focus-interactions-for-apple-tv.md)

## See Also

### Responding to focus-related keys and notifications

- [UIFocusUpdateAnimationCoordinatorKey](animationcoordinatoruserinfokey.md): Updates the animation coordinator.
- [UIFocusDidUpdateNotification](didupdatenotification.md): The focus for the UI has been updated.
- [UIFocusUpdateContextKey](focusupdatecontextuserinfokey.md): Updates the context key.

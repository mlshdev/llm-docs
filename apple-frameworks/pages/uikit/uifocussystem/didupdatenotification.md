> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocussystem/didupdatenotification](https://developer.apple.com/documentation/uikit/uifocussystem/didupdatenotification)

# didUpdateNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The focus for the UI has been updated.

## Declaration

```swift
nonisolated class let didUpdateNotification: NSNotification.Name
```

## See Also

### Responding to focus-related keys and notifications

- [animationCoordinatorUserInfoKey](animationcoordinatoruserinfokey.md): Updates the animation coordinator.
- [focusUpdateContextUserInfoKey](focusupdatecontextuserinfokey.md): Updates the context key.
- [movementDidFailNotification](movementdidfailnotification.md): The focus failed to move to another item.

# UIFocusDidUpdateNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

The focus for the UI has been updated.

## Declaration

```objectivec
extern NSNotificationName const UIFocusDidUpdateNotification;
```

## See Also

### Responding to focus-related keys and notifications

- [UIFocusUpdateAnimationCoordinatorKey](animationcoordinatoruserinfokey.md): Updates the animation coordinator.
- [UIFocusUpdateContextKey](focusupdatecontextuserinfokey.md): Updates the context key.
- [UIFocusMovementDidFailNotification](movementdidfailnotification.md): The focus failed to move to another item.

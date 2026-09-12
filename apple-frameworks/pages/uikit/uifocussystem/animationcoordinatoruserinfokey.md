> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocussystem/animationcoordinatoruserinfokey](https://developer.apple.com/documentation/uikit/uifocussystem/animationcoordinatoruserinfokey)

# animationCoordinatorUserInfoKey (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Updates the animation coordinator.

## Declaration

```swift
class let animationCoordinatorUserInfoKey: String
```

## See Also

### Responding to focus-related keys and notifications

- [didUpdateNotification](didupdatenotification.md): The focus for the UI has been updated.
- [focusUpdateContextUserInfoKey](focusupdatecontextuserinfokey.md): Updates the context key.
- [movementDidFailNotification](movementdidfailnotification.md): The focus failed to move to another item.

# UIFocusUpdateAnimationCoordinatorKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Updates the animation coordinator.

## Declaration

```objectivec
extern NSString * const UIFocusUpdateAnimationCoordinatorKey;
```

## See Also

### Responding to focus-related keys and notifications

- [UIFocusDidUpdateNotification](didupdatenotification.md): The focus for the UI has been updated.
- [UIFocusUpdateContextKey](focusupdatecontextuserinfokey.md): Updates the context key.
- [UIFocusMovementDidFailNotification](movementdidfailnotification.md): The focus failed to move to another item.

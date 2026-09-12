> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointerlockstate/didchangenotification](https://developer.apple.com/documentation/uikit/uipointerlockstate/didchangenotification)

# didChangeNotification (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A notification that posts when the value of the locked state for a scene changes.

## Declaration

```swift
nonisolated class let didChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This notification is sent when the value in the [isLocked](islocked.md) property changes. The `userInfo` dictionary of the notification contains the [sceneUserInfoKey](sceneuserinfokey.md) key, which reflects the new value of the [isLocked](islocked.md) property.

## See Also

### Updating the Lock State

- [sceneUserInfoKey](sceneuserinfokey.md): A key that reflects the new locked state.

# UIPointerLockStateDidChangeNotification (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A notification that posts when the value of the locked state for a scene changes.

## Declaration

```objectivec
extern NSNotificationName const UIPointerLockStateDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

This notification is sent when the value in the [locked](islocked.md) property changes. The `userInfo` dictionary of the notification contains the [UIPointerLockStateSceneUserInfoKey](sceneuserinfokey.md) key, which reflects the new value of the [locked](islocked.md) property.

## See Also

### Updating the Lock State

- [UIPointerLockStateSceneUserInfoKey](sceneuserinfokey.md): A key that reflects the new locked state.

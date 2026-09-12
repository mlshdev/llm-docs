> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uipointerlockstate/sceneuserinfokey](https://developer.apple.com/documentation/uikit/uipointerlockstate/sceneuserinfokey)

# sceneUserInfoKey (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A key that reflects the new locked state.

## Declaration

```swift
nonisolated class let sceneUserInfoKey: String
```

<a id="Discussion"></a>

## Discussion

The `userInfo` dictionary of the notification contains the [sceneUserInfoKey](sceneuserinfokey.md) key, which reflects the new value of the [isLocked](islocked.md) property.

## See Also

### Updating the Lock State

- [didChangeNotification](didchangenotification.md): A notification that posts when the value of the locked state for a scene changes.

# UIPointerLockStateSceneUserInfoKey (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · visionOS 1.0+

A key that reflects the new locked state.

## Declaration

```objectivec
extern NSString * const UIPointerLockStateSceneUserInfoKey;
```

<a id="Discussion"></a>

## Discussion

The `userInfo` dictionary of the notification contains the [UIPointerLockStateSceneUserInfoKey](sceneuserinfokey.md) key, which reflects the new value of the [locked](islocked.md) property.

## See Also

### Updating the Lock State

- [UIPointerLockStateDidChangeNotification](didchangenotification.md): A notification that posts when the value of the locked state for a scene changes.

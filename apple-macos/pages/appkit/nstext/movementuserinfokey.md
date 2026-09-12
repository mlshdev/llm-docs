> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext/movementuserinfokey](https://developer.apple.com/documentation/appkit/nstext/movementuserinfokey)

# movementUserInfoKey (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.13+

The `userInfo` dictionary key for the [didEndEditingNotification](didendeditingnotification.md) notification.

## Declaration

```swift
class let movementUserInfoKey: String
```

## See Also

### Notifications

- [didBeginEditingNotification](didbegineditingnotification.md): Posted when an `NSText` object begins any operation that changes characters or formatting attributes.
- [didChangeNotification](didchangenotification.md): Posted after an `NSText` object performs any operation that changes characters or formatting attributes.
- [didEndEditingNotification](didendeditingnotification.md): Posted when focus leaves an `NSText` object, whether or not any operation has changed characters or formatting attributes.
- [NSTextMovement](../nstextmovement.md)

# NSTextMovementUserInfoKey (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.13+

The `userInfo` dictionary key for the [NSTextDidEndEditingNotification](didendeditingnotification.md) notification.

## Declaration

```objectivec
extern NSString * const NSTextMovementUserInfoKey;
```

## See Also

### Notifications

- [NSTextDidBeginEditingNotification](didbegineditingnotification.md): Posted when an `NSText` object begins any operation that changes characters or formatting attributes.
- [NSTextDidChangeNotification](didchangenotification.md): Posted after an `NSText` object performs any operation that changes characters or formatting attributes.
- [NSTextDidEndEditingNotification](didendeditingnotification.md): Posted when focus leaves an `NSText` object, whether or not any operation has changed characters or formatting attributes.
- [NSTextMovement](../nstextmovement.md)

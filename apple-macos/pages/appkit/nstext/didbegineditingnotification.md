> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext/didbegineditingnotification](https://developer.apple.com/documentation/appkit/nstext/didbegineditingnotification)

# didBeginEditingNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted when an `NSText` object begins any operation that changes characters or formatting attributes.

## Declaration

```swift
class let didBeginEditingNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the notifying `NSText` object. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSTextView.DidBeginEditingMessage](../nstextview/didbegineditingmessage.md).

## See Also

### Notifications

- [didChangeNotification](didchangenotification.md): Posted after an `NSText` object performs any operation that changes characters or formatting attributes.
- [didEndEditingNotification](didendeditingnotification.md): Posted when focus leaves an `NSText` object, whether or not any operation has changed characters or formatting attributes.
- [movementUserInfoKey](movementuserinfokey.md): The `userInfo` dictionary key for the [didEndEditingNotification](didendeditingnotification.md) notification.
- [NSTextMovement](../nstextmovement.md)

# NSTextDidBeginEditingNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted when an `NSText` object begins any operation that changes characters or formatting attributes.

## Declaration

```objectivec
extern NSNotificationName NSTextDidBeginEditingNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the notifying `NSText` object. This notification does not contain a `userInfo` dictionary.

To observe this notification using Swift concurrency, use [NSTextView.DidBeginEditingMessage](../nstextview/didbegineditingmessage.md).

## See Also

### Notifications

- [NSTextDidChangeNotification](didchangenotification.md): Posted after an `NSText` object performs any operation that changes characters or formatting attributes.
- [NSTextDidEndEditingNotification](didendeditingnotification.md): Posted when focus leaves an `NSText` object, whether or not any operation has changed characters or formatting attributes.
- [NSTextMovementUserInfoKey](movementuserinfokey.md): The `userInfo` dictionary key for the [NSTextDidEndEditingNotification](didendeditingnotification.md) notification.
- [NSTextMovement](../nstextmovement.md)

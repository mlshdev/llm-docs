> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext/didendeditingnotification](https://developer.apple.com/documentation/appkit/nstext/didendeditingnotification)

# didEndEditingNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted when focus leaves an `NSText` object, whether or not any operation has changed characters or formatting attributes.

## Declaration

```swift
class let didEndEditingNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The notification object is the notifying `NSText` object. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| [movementUserInfoKey](movementuserinfokey.md) | One of the values in [NSTextMovement](../nstextmovement.md). |

| Key | Value |
| --- | --- |
| `@"NSTextMovement"` | Possible movement code values are described in [Movement Codes](../movement-codes.md). |

> **Note**

>  It is common for [didEndEditingNotification](didendeditingnotification.md) to be sent without a matching [didBeginEditingNotification](didbegineditingnotification.md). The begin notification is only sent if the user actually makes changes (that is, types something or changes formatting attributes). However, the end notification is sent when focus leaves the text view, regardless of whether there was a change.
>
> This distinction enables an application to know whether the user actually made a change to the text or just clicked in the text view and then clicked outside it. In both cases, [didEndEditingNotification](didendeditingnotification.md) is sent, but to tell the difference, the application can listen for [didBeginEditingNotification](didbegineditingnotification.md).

To observe this notification using Swift concurrency, use [NSTextView.DidEndEditingMessage](../nstextview/didendeditingmessage.md).

## See Also

### Notifications

- [didBeginEditingNotification](didbegineditingnotification.md): Posted when an `NSText` object begins any operation that changes characters or formatting attributes.
- [didChangeNotification](didchangenotification.md): Posted after an `NSText` object performs any operation that changes characters or formatting attributes.
- [movementUserInfoKey](movementuserinfokey.md): The `userInfo` dictionary key for the [didEndEditingNotification](didendeditingnotification.md) notification.
- [NSTextMovement](../nstextmovement.md)

# NSTextDidEndEditingNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted when focus leaves an `NSText` object, whether or not any operation has changed characters or formatting attributes.

## Declaration

```objectivec
extern NSNotificationName NSTextDidEndEditingNotification;
```

<a id="Discussion"></a>

## Discussion

The notification object is the notifying `NSText` object. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| [NSTextMovementUserInfoKey](movementuserinfokey.md) | One of the values in [NSTextMovement](../nstextmovement.md). |

| Key | Value |
| --- | --- |
| `@"NSTextMovement"` | Possible movement code values are described in [Movement Codes](../movement-codes.md). |

> **Note**

>  It is common for [NSTextDidEndEditingNotification](didendeditingnotification.md) to be sent without a matching [NSTextDidBeginEditingNotification](didbegineditingnotification.md). The begin notification is only sent if the user actually makes changes (that is, types something or changes formatting attributes). However, the end notification is sent when focus leaves the text view, regardless of whether there was a change.
>
> This distinction enables an application to know whether the user actually made a change to the text or just clicked in the text view and then clicked outside it. In both cases, [NSTextDidEndEditingNotification](didendeditingnotification.md) is sent, but to tell the difference, the application can listen for [NSTextDidBeginEditingNotification](didbegineditingnotification.md).

To observe this notification using Swift concurrency, use [NSTextView.DidEndEditingMessage](../nstextview/didendeditingmessage.md).

## See Also

### Notifications

- [NSTextDidBeginEditingNotification](didbegineditingnotification.md): Posted when an `NSText` object begins any operation that changes characters or formatting attributes.
- [NSTextDidChangeNotification](didchangenotification.md): Posted after an `NSText` object performs any operation that changes characters or formatting attributes.
- [NSTextMovementUserInfoKey](movementuserinfokey.md): The `userInfo` dictionary key for the [NSTextDidEndEditingNotification](didendeditingnotification.md) notification.
- [NSTextMovement](../nstextmovement.md)

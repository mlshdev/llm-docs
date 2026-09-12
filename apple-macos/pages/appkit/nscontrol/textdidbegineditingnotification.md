> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/textdidbegineditingnotification](https://developer.apple.com/documentation/appkit/nscontrol/textdidbegineditingnotification)

# textDidBeginEditingNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Sent when a control with editable cells begins an edit session.

## Declaration

```swift
class let textDidBeginEditingNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The field editor of the edited cell originally sends an [didBeginEditingNotification](../nstext/didbegineditingnotification.md) to the control, which passes it on in this form to its delegate. The notification object is the `NSControl` object posting the notification. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| `“NSFieldEditor”` | The edited cell’s field editor |

See the [controlTextDidEndEditing:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidendediting:) method for details. The system posts this notification on the main actor.

To observe this notification using Swift concurrency, use [NSControl.TextDidBeginEditingMessage](textdidbegineditingmessage.md).

## See Also

### Control-Editing Notifications

- [textDidChangeNotification](textdidchangenotification.md): Sent when the text in the receiving control changes.
- [textDidEndEditingNotification](textdidendeditingnotification.md): Sent when a control with editable cells ends an editing session.

# NSControlTextDidBeginEditingNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Sent when a control with editable cells begins an edit session.

## Declaration

```objectivec
extern NSNotificationName NSControlTextDidBeginEditingNotification;
```

<a id="Discussion"></a>

## Discussion

The field editor of the edited cell originally sends an [NSTextDidBeginEditingNotification](../nstext/didbegineditingnotification.md) to the control, which passes it on in this form to its delegate. The notification object is the `NSControl` object posting the notification. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| `“NSFieldEditor”` | The edited cell’s field editor |

See the [controlTextDidEndEditing:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidendediting:) method for details. The system posts this notification on the main actor.

To observe this notification using Swift concurrency, use [NSControl.TextDidBeginEditingMessage](textdidbegineditingmessage.md).

## See Also

### Control-Editing Notifications

- [NSControlTextDidChangeNotification](textdidchangenotification.md): Sent when the text in the receiving control changes.
- [NSControlTextDidEndEditingNotification](textdidendeditingnotification.md): Sent when a control with editable cells ends an editing session.

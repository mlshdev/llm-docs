> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/textdidchangenotification](https://developer.apple.com/documentation/appkit/nscontrol/textdidchangenotification)

# textDidChangeNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Sent when the text in the receiving control changes.

## Declaration

```swift
class let textDidChangeNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The field editor of the edited cell originally sends an [didChangeNotification](../nstext/didchangenotification.md) to the control, which passes it on in this form to its delegate. The notification object is the `NSControl` object posting the notification. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| `“NSFieldEditor”` | The edited cell’s field editor |

See the [controlTextDidChange:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidchange:) method for details. The system posts this notification on the main actor.

To observe this notification using Swift concurrency, use [NSControl.TextDidChangeMessage](textdidchangemessage.md).

## See Also

### Control-Editing Notifications

- [textDidBeginEditingNotification](textdidbegineditingnotification.md): Sent when a control with editable cells begins an edit session.
- [textDidEndEditingNotification](textdidendeditingnotification.md): Sent when a control with editable cells ends an editing session.

# NSControlTextDidChangeNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Sent when the text in the receiving control changes.

## Declaration

```objectivec
extern NSNotificationName NSControlTextDidChangeNotification;
```

<a id="Discussion"></a>

## Discussion

The field editor of the edited cell originally sends an [NSTextDidChangeNotification](../nstext/didchangenotification.md) to the control, which passes it on in this form to its delegate. The notification object is the `NSControl` object posting the notification. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| `“NSFieldEditor”` | The edited cell’s field editor |

See the [controlTextDidChange:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidchange:) method for details. The system posts this notification on the main actor.

To observe this notification using Swift concurrency, use [NSControl.TextDidChangeMessage](textdidchangemessage.md).

## See Also

### Control-Editing Notifications

- [NSControlTextDidBeginEditingNotification](textdidbegineditingnotification.md): Sent when a control with editable cells begins an edit session.
- [NSControlTextDidEndEditingNotification](textdidendeditingnotification.md): Sent when a control with editable cells ends an editing session.

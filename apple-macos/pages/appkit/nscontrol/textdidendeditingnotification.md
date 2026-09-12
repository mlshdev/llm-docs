> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscontrol/textdidendeditingnotification](https://developer.apple.com/documentation/appkit/nscontrol/textdidendeditingnotification)

# textDidEndEditingNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Sent when a control with editable cells ends an editing session.

## Declaration

```swift
class let textDidEndEditingNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The field editor of the edited cell originally sends an [textDidEndEditingNotification](textdidendeditingnotification.md) to the control, which passes it on in this form to its delegate. The notification object is the `NSControl` object posting the notification. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| `“NSFieldEditor”` | The edited cell’s field editor |

See the [controlTextDidEndEditing:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidendediting:) method for details. The system posts this notification on the main actor.

To observe this notification using Swift concurrency, use [NSControl.TextDidEndEditingMessage](textdidendeditingmessage.md).

## See Also

### Control-Editing Notifications

- [textDidBeginEditingNotification](textdidbegineditingnotification.md): Sent when a control with editable cells begins an edit session.
- [textDidChangeNotification](textdidchangenotification.md): Sent when the text in the receiving control changes.

# NSControlTextDidEndEditingNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Sent when a control with editable cells ends an editing session.

## Declaration

```objectivec
extern NSNotificationName NSControlTextDidEndEditingNotification;
```

<a id="Discussion"></a>

## Discussion

The field editor of the edited cell originally sends an [NSControlTextDidEndEditingNotification](textdidendeditingnotification.md) to the control, which passes it on in this form to its delegate. The notification object is the `NSControl` object posting the notification. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| `“NSFieldEditor”` | The edited cell’s field editor |

See the [controlTextDidEndEditing:](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/controltextdidendediting:) method for details. The system posts this notification on the main actor.

To observe this notification using Swift concurrency, use [NSControl.TextDidEndEditingMessage](textdidendeditingmessage.md).

## See Also

### Control-Editing Notifications

- [NSControlTextDidBeginEditingNotification](textdidbegineditingnotification.md): Sent when a control with editable cells begins an edit session.
- [NSControlTextDidChangeNotification](textdidchangenotification.md): Sent when the text in the receiving control changes.

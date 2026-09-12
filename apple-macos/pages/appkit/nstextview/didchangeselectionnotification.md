> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/didchangeselectionnotification](https://developer.apple.com/documentation/appkit/nstextview/didchangeselectionnotification)

# didChangeSelectionNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted when the selected range of characters changes.

## Declaration

```swift
class let didChangeSelectionNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

`NSTextView` posts this notification whenever [setSelectedRange(\_:affinity:stillSelecting:)](setselectedrange%28__affinity_stillselecting_%29.md) is invoked, either directly or through the many methods ([mouseDown(with:)](../nsresponder/mousedown%28with_%29.md), [selectAll(\_:)](../nstext/selectall%28__%29.md), and so on) that invoke it indirectly. When the user is selecting text, this notification is posted only once, at the end of the selection operation. The text view’s delegate receives a [textViewDidChangeSelection(\_:)](../nstextviewdelegate/textviewdidchangeselection%28__%29.md) message when this notification is posted.

The notification object is the notifying text view. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| `@"NSOldSelectedCharacterRange"` | An `NSValue` object containing an `NSRange` structure with the originally selected range. |

To observe this notification using Swift concurrency, use [NSTextView.DidChangeSelectionMessage](didchangeselectionmessage.md).

## See Also

### Notifications

- [willChangeNotifyingTextViewNotification](willchangenotifyingtextviewnotification.md): Posted when a new text view is established as the text view that sends notifications.
- [didChangeTypingAttributesNotification](didchangetypingattributesnotification.md): Posted when there is a change in the typing attributes within a text view.
- [didSwitchToNSLayoutManagerNotification](didswitchtonslayoutmanagernotification.md): Posted by the framework after switching to using the compatibility mode layout manager.
- [willSwitchToNSLayoutManagerNotification](willswitchtonslayoutmanagernotification.md): Posted by the framework before switching to the compatibility mode layout manager.

# NSTextViewDidChangeSelectionNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted when the selected range of characters changes.

## Declaration

```objectivec
extern NSNotificationName NSTextViewDidChangeSelectionNotification;
```

<a id="Discussion"></a>

## Discussion

`NSTextView` posts this notification whenever [setSelectedRange:affinity:stillSelecting:](setselectedrange%28__affinity_stillselecting_%29.md) is invoked, either directly or through the many methods ([mouseDown:](../nsresponder/mousedown%28with_%29.md), [selectAll:](../nstext/selectall%28__%29.md), and so on) that invoke it indirectly. When the user is selecting text, this notification is posted only once, at the end of the selection operation. The text view’s delegate receives a [textViewDidChangeSelection:](../nstextviewdelegate/textviewdidchangeselection%28__%29.md) message when this notification is posted.

The notification object is the notifying text view. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| `@"NSOldSelectedCharacterRange"` | An `NSValue` object containing an `NSRange` structure with the originally selected range. |

To observe this notification using Swift concurrency, use [NSTextView.DidChangeSelectionMessage](didchangeselectionmessage.md).

## See Also

### Notifications

- [NSTextViewWillChangeNotifyingTextViewNotification](willchangenotifyingtextviewnotification.md): Posted when a new text view is established as the text view that sends notifications.
- [NSTextViewDidChangeTypingAttributesNotification](didchangetypingattributesnotification.md): Posted when there is a change in the typing attributes within a text view.
- [NSTextViewDidSwitchToNSLayoutManagerNotification](didswitchtonslayoutmanagernotification.md): Posted by the framework after switching to using the compatibility mode layout manager.
- [NSTextViewWillSwitchToNSLayoutManagerNotification](willswitchtonslayoutmanagernotification.md): Posted by the framework before switching to the compatibility mode layout manager.

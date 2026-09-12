> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/didchangetypingattributesnotification](https://developer.apple.com/documentation/appkit/nstextview/didchangetypingattributesnotification)

# didChangeTypingAttributesNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted when there is a change in the typing attributes within a text view.

## Declaration

```swift
class let didChangeTypingAttributesNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This notification is posted, via the [textViewDidChangeTypingAttributes(\_:)](../nstextviewdelegate/textviewdidchangetypingattributes%28__%29.md) delegate method, whether or not text has changed as a result of the attribute change.

To observe this notification using Swift concurrency, use [NSTextView.DidChangeTypingAttributesMessage](didchangetypingattributesmessage.md).

## See Also

### Notifications

- [didChangeSelectionNotification](didchangeselectionnotification.md): Posted when the selected range of characters changes.
- [willChangeNotifyingTextViewNotification](willchangenotifyingtextviewnotification.md): Posted when a new text view is established as the text view that sends notifications.
- [didSwitchToNSLayoutManagerNotification](didswitchtonslayoutmanagernotification.md): Posted by the framework after switching to using the compatibility mode layout manager.
- [willSwitchToNSLayoutManagerNotification](willswitchtonslayoutmanagernotification.md): Posted by the framework before switching to the compatibility mode layout manager.

# NSTextViewDidChangeTypingAttributesNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted when there is a change in the typing attributes within a text view.

## Declaration

```objectivec
extern NSNotificationName NSTextViewDidChangeTypingAttributesNotification;
```

<a id="Discussion"></a>

## Discussion

This notification is posted, via the [textViewDidChangeTypingAttributes:](../nstextviewdelegate/textviewdidchangetypingattributes%28__%29.md) delegate method, whether or not text has changed as a result of the attribute change.

To observe this notification using Swift concurrency, use [NSTextView.DidChangeTypingAttributesMessage](didchangetypingattributesmessage.md).

## See Also

### Notifications

- [NSTextViewDidChangeSelectionNotification](didchangeselectionnotification.md): Posted when the selected range of characters changes.
- [NSTextViewWillChangeNotifyingTextViewNotification](willchangenotifyingtextviewnotification.md): Posted when a new text view is established as the text view that sends notifications.
- [NSTextViewDidSwitchToNSLayoutManagerNotification](didswitchtonslayoutmanagernotification.md): Posted by the framework after switching to using the compatibility mode layout manager.
- [NSTextViewWillSwitchToNSLayoutManagerNotification](willswitchtonslayoutmanagernotification.md): Posted by the framework before switching to the compatibility mode layout manager.

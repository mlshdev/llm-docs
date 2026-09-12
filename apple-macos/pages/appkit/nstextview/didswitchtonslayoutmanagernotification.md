> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/didswitchtonslayoutmanagernotification](https://developer.apple.com/documentation/appkit/nstextview/didswitchtonslayoutmanagernotification)

# didSwitchToNSLayoutManagerNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 12.0+

Posted by the framework after switching to using the compatibility mode layout manager.

## Declaration

```swift
class let didSwitchToNSLayoutManagerNotification: NSNotification.Name
```

## See Also

### Notifications

- [didChangeSelectionNotification](didchangeselectionnotification.md): Posted when the selected range of characters changes.
- [willChangeNotifyingTextViewNotification](willchangenotifyingtextviewnotification.md): Posted when a new text view is established as the text view that sends notifications.
- [didChangeTypingAttributesNotification](didchangetypingattributesnotification.md): Posted when there is a change in the typing attributes within a text view.
- [willSwitchToNSLayoutManagerNotification](willswitchtonslayoutmanagernotification.md): Posted by the framework before switching to the compatibility mode layout manager.

# NSTextViewDidSwitchToNSLayoutManagerNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 12.0+

Posted by the framework after switching to using the compatibility mode layout manager.

## Declaration

```objectivec
extern NSNotificationName NSTextViewDidSwitchToNSLayoutManagerNotification;
```

## See Also

### Notifications

- [NSTextViewDidChangeSelectionNotification](didchangeselectionnotification.md): Posted when the selected range of characters changes.
- [NSTextViewWillChangeNotifyingTextViewNotification](willchangenotifyingtextviewnotification.md): Posted when a new text view is established as the text view that sends notifications.
- [NSTextViewDidChangeTypingAttributesNotification](didchangetypingattributesnotification.md): Posted when there is a change in the typing attributes within a text view.
- [NSTextViewWillSwitchToNSLayoutManagerNotification](willswitchtonslayoutmanagernotification.md): Posted by the framework before switching to the compatibility mode layout manager.

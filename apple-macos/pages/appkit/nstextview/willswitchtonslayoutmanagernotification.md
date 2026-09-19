> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/appkit/nstextview/willswitchtonslayoutmanagernotification

# willSwitchToNSLayoutManagerNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 12.0+

Posted by the framework before switching to the compatibility mode layout manager.

## Declaration

```swift
class let willSwitchToNSLayoutManagerNotification: NSNotification.Name
```

## See Also

### Notifications

- [didChangeSelectionNotification](didchangeselectionnotification.md): Posted when the selected range of characters changes.
- [willChangeNotifyingTextViewNotification](willchangenotifyingtextviewnotification.md): Posted when a new text view is established as the text view that sends notifications.
- [didChangeTypingAttributesNotification](didchangetypingattributesnotification.md): Posted when there is a change in the typing attributes within a text view.
- [didSwitchToNSLayoutManagerNotification](didswitchtonslayoutmanagernotification.md): Posted by the framework after switching to using the compatibility mode layout manager.

# NSTextViewWillSwitchToNSLayoutManagerNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 12.0+

Posted by the framework before switching to the compatibility mode layout manager.

## Declaration

```objectivec
extern NSNotificationName NSTextViewWillSwitchToNSLayoutManagerNotification;
```

## See Also

### Notifications

- [NSTextViewDidChangeSelectionNotification](didchangeselectionnotification.md): Posted when the selected range of characters changes.
- [NSTextViewWillChangeNotifyingTextViewNotification](willchangenotifyingtextviewnotification.md): Posted when a new text view is established as the text view that sends notifications.
- [NSTextViewDidChangeTypingAttributesNotification](didchangetypingattributesnotification.md): Posted when there is a change in the typing attributes within a text view.
- [NSTextViewDidSwitchToNSLayoutManagerNotification](didswitchtonslayoutmanagernotification.md): Posted by the framework after switching to using the compatibility mode layout manager.

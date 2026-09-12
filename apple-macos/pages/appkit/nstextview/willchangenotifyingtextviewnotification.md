> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstextview/willchangenotifyingtextviewnotification](https://developer.apple.com/documentation/appkit/nstextview/willchangenotifyingtextviewnotification)

# willChangeNotifyingTextViewNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS

Posted when a new text view is established as the text view that sends notifications.

## Declaration

```swift
class let willChangeNotifyingTextViewNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

This notification allows observers to reregister themselves for the new text view. Methods such as [removeTextContainer(at:)](../nslayoutmanager/removetextcontainer%28at_%29.md), [textContainerChangedTextView(\_:)](../nslayoutmanager/textcontainerchangedtextview%28__%29.md), and [insertTextContainer(\_:at:)](../nslayoutmanager/inserttextcontainer%28__at_%29.md) cause this notification to be posted.

The notification object is the old notifying text view, or `nil`. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| `@"NSOldNotifyingTextView"` | The old `NSTextView`, if one exists, otherwise `nil`. |
| `@"NSNewNotifyingTextView"` | The new `NSTextView`, if one exists, otherwise `nil`. |

There’s no delegate method associated with this notification. The text-handling system ensures that when a new text view replaces an old one as the notifying text view, the existing delegate becomes the delegate of the new text view, and the delegate is registered to receive text view notifications from the new notifying text view. All other observers are responsible for registering themselves on receiving this notification.

## See Also

### Related Documentation

To observe this notification using Swift concurrency, use [NSTextView.WillChangeNotifyingTextViewMessage](willchangenotifyingtextviewmessage.md).

- [removeObserver(\_:)](https://developer.apple.com/documentation/foundation/notificationcenter/removeobserver%28_:%29-2yciv): Removes all entries specifying an observer from the notification center’s dispatch table.
- [addObserver(\_:selector:name:object:)](https://developer.apple.com/documentation/foundation/notificationcenter/addobserver%28_:selector:name:object:%29): Adds an entry to the notification center to call the provided selector with the notification.

### Notifications

- [didChangeSelectionNotification](didchangeselectionnotification.md): Posted when the selected range of characters changes.
- [didChangeTypingAttributesNotification](didchangetypingattributesnotification.md): Posted when there is a change in the typing attributes within a text view.
- [didSwitchToNSLayoutManagerNotification](didswitchtonslayoutmanagernotification.md): Posted by the framework after switching to using the compatibility mode layout manager.
- [willSwitchToNSLayoutManagerNotification](willswitchtonslayoutmanagernotification.md): Posted by the framework before switching to the compatibility mode layout manager.

# NSTextViewWillChangeNotifyingTextViewNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS

Posted when a new text view is established as the text view that sends notifications.

## Declaration

```objectivec
extern NSNotificationName NSTextViewWillChangeNotifyingTextViewNotification;
```

<a id="Discussion"></a>

## Discussion

This notification allows observers to reregister themselves for the new text view. Methods such as [removeTextContainerAtIndex:](../nslayoutmanager/removetextcontainer%28at_%29.md), [textContainerChangedTextView:](../nslayoutmanager/textcontainerchangedtextview%28__%29.md), and [insertTextContainer:atIndex:](../nslayoutmanager/inserttextcontainer%28__at_%29.md) cause this notification to be posted.

The notification object is the old notifying text view, or `nil`. The `userInfo` dictionary contains the following information:

| Key | Value |
| --- | --- |
| `@"NSOldNotifyingTextView"` | The old `NSTextView`, if one exists, otherwise `nil`. |
| `@"NSNewNotifyingTextView"` | The new `NSTextView`, if one exists, otherwise `nil`. |

There’s no delegate method associated with this notification. The text-handling system ensures that when a new text view replaces an old one as the notifying text view, the existing delegate becomes the delegate of the new text view, and the delegate is registered to receive text view notifications from the new notifying text view. All other observers are responsible for registering themselves on receiving this notification.

## See Also

### Related Documentation

To observe this notification using Swift concurrency, use [NSTextView.WillChangeNotifyingTextViewMessage](willchangenotifyingtextviewmessage.md).

- [removeObserver:](https://developer.apple.com/documentation/foundation/notificationcenter/removeobserver%28_:%29-2yciv): Removes all entries specifying an observer from the notification center’s dispatch table.
- [addObserver:selector:name:object:](https://developer.apple.com/documentation/foundation/notificationcenter/addobserver%28_:selector:name:object:%29): Adds an entry to the notification center to call the provided selector with the notification.

### Notifications

- [NSTextViewDidChangeSelectionNotification](didchangeselectionnotification.md): Posted when the selected range of characters changes.
- [NSTextViewDidChangeTypingAttributesNotification](didchangetypingattributesnotification.md): Posted when there is a change in the typing attributes within a text view.
- [NSTextViewDidSwitchToNSLayoutManagerNotification](didswitchtonslayoutmanagernotification.md): Posted by the framework after switching to using the compatibility mode layout manager.
- [NSTextViewWillSwitchToNSLayoutManagerNotification](willswitchtonslayoutmanagernotification.md): Posted by the framework before switching to the compatibility mode layout manager.

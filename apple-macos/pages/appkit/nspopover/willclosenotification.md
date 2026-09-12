> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopover/willclosenotification](https://developer.apple.com/documentation/appkit/nspopover/willclosenotification)

# willCloseNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

Sent before the popover is closed.

## Declaration

```swift
class let willCloseNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The `userInfo` key [closeReasonUserInfoKey](closereasonuserinfokey.md) specifies the reason for closing. It can currently be either [standard](closereason/standard.md) or [detachToWindow](closereason/detachtowindow.md), although more reasons for closing may be added in the future.

To observe this notification using Swift concurrency, use [NSPopover.WillCloseMessage](willclosemessage.md).

## See Also

### Notifications

- [willShowNotification](willshownotification.md): Sent before the popover is shown.
- [didShowNotification](didshownotification.md): Sent after the popover has finished animating onscreen.
- [didCloseNotification](didclosenotification.md): Sent after the popover has finished animating offscreen.

# NSPopoverWillCloseNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

Sent before the popover is closed.

## Declaration

```objectivec
extern NSNotificationName const NSPopoverWillCloseNotification;
```

<a id="Discussion"></a>

## Discussion

The `userInfo` key [NSPopoverCloseReasonKey](closereasonuserinfokey.md) specifies the reason for closing. It can currently be either [NSPopoverCloseReasonStandard](closereason/standard.md) or [NSPopoverCloseReasonDetachToWindow](closereason/detachtowindow.md), although more reasons for closing may be added in the future.

To observe this notification using Swift concurrency, use [NSPopover.WillCloseMessage](willclosemessage.md).

## See Also

### Notifications

- [NSPopoverWillShowNotification](willshownotification.md): Sent before the popover is shown.
- [NSPopoverDidShowNotification](didshownotification.md): Sent after the popover has finished animating onscreen.
- [NSPopoverDidCloseNotification](didclosenotification.md): Sent after the popover has finished animating offscreen.

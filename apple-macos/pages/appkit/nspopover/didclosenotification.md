> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopover/didclosenotification](https://developer.apple.com/documentation/appkit/nspopover/didclosenotification)

# didCloseNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

Sent after the popover has finished animating offscreen.

## Declaration

```swift
class let didCloseNotification: NSNotification.Name
```

<a id="Discussion"></a>

## Discussion

The value of the `userInfo` key [closeReasonUserInfoKey](closereasonuserinfokey.md) specifies the reason for closing. It can currently be either [standard](closereason/standard.md) or [detachToWindow](closereason/detachtowindow.md), although more reasons for closing may be added in the future.

To observe this notification using Swift concurrency, use [NSPopover.DidCloseMessage](didclosemessage.md).

## See Also

### Notifications

- [willShowNotification](willshownotification.md): Sent before the popover is shown.
- [didShowNotification](didshownotification.md): Sent after the popover has finished animating onscreen.
- [willCloseNotification](willclosenotification.md): Sent before the popover is closed.

# NSPopoverDidCloseNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

Sent after the popover has finished animating offscreen.

## Declaration

```objectivec
extern NSNotificationName const NSPopoverDidCloseNotification;
```

<a id="Discussion"></a>

## Discussion

The value of the `userInfo` key [NSPopoverCloseReasonKey](closereasonuserinfokey.md) specifies the reason for closing. It can currently be either [NSPopoverCloseReasonStandard](closereason/standard.md) or [NSPopoverCloseReasonDetachToWindow](closereason/detachtowindow.md), although more reasons for closing may be added in the future.

To observe this notification using Swift concurrency, use [NSPopover.DidCloseMessage](didclosemessage.md).

## See Also

### Notifications

- [NSPopoverWillShowNotification](willshownotification.md): Sent before the popover is shown.
- [NSPopoverDidShowNotification](didshownotification.md): Sent after the popover has finished animating onscreen.
- [NSPopoverWillCloseNotification](willclosenotification.md): Sent before the popover is closed.

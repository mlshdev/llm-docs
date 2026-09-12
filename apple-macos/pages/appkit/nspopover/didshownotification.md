> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopover/didshownotification](https://developer.apple.com/documentation/appkit/nspopover/didshownotification)

# didShowNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

Sent after the popover has finished animating onscreen.

## Declaration

```swift
class let didShowNotification: NSNotification.Name
```

<a id="discussion"></a>

## Discussion

To observe this notification using Swift concurrency, use [NSPopover.DidShowMessage](didshowmessage.md).

## See Also

### Notifications

- [willShowNotification](willshownotification.md): Sent before the popover is shown.
- [willCloseNotification](willclosenotification.md): Sent before the popover is closed.
- [didCloseNotification](didclosenotification.md): Sent after the popover has finished animating offscreen.

# NSPopoverDidShowNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

Sent after the popover has finished animating onscreen.

## Declaration

```objectivec
extern NSNotificationName const NSPopoverDidShowNotification;
```

<a id="discussion"></a>

## Discussion

To observe this notification using Swift concurrency, use [NSPopover.DidShowMessage](didshowmessage.md).

## See Also

### Notifications

- [NSPopoverWillShowNotification](willshownotification.md): Sent before the popover is shown.
- [NSPopoverWillCloseNotification](willclosenotification.md): Sent before the popover is closed.
- [NSPopoverDidCloseNotification](didclosenotification.md): Sent after the popover has finished animating offscreen.

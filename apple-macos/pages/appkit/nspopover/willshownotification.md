> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopover/willshownotification](https://developer.apple.com/documentation/appkit/nspopover/willshownotification)

# willShowNotification (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

Sent before the popover is shown.

## Declaration

```swift
class let willShowNotification: NSNotification.Name
```

<a id="discussion"></a>

## Discussion

To observe this notification using Swift concurrency, use [NSPopover.WillShowMessage](willshowmessage.md).

## See Also

### Notifications

- [didShowNotification](didshownotification.md): Sent after the popover has finished animating onscreen.
- [willCloseNotification](willclosenotification.md): Sent before the popover is closed.
- [didCloseNotification](didclosenotification.md): Sent after the popover has finished animating offscreen.

# NSPopoverWillShowNotification (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

Sent before the popover is shown.

## Declaration

```objectivec
extern NSNotificationName const NSPopoverWillShowNotification;
```

<a id="discussion"></a>

## Discussion

To observe this notification using Swift concurrency, use [NSPopover.WillShowMessage](willshowmessage.md).

## See Also

### Notifications

- [NSPopoverDidShowNotification](didshownotification.md): Sent after the popover has finished animating onscreen.
- [NSPopoverWillCloseNotification](willclosenotification.md): Sent before the popover is closed.
- [NSPopoverDidCloseNotification](didclosenotification.md): Sent after the popover has finished animating offscreen.

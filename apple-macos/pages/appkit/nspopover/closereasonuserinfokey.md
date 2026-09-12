> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopover/closereasonuserinfokey](https://developer.apple.com/documentation/appkit/nspopover/closereasonuserinfokey)

# closeReasonUserInfoKey (Swift)

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 10.7+

The `userInfo` key containing the reason for the [willCloseNotification](willclosenotification.md).

## Declaration

```swift
class let closeReasonUserInfoKey: String
```

## See Also

### Constants

- [NSPopover.Behavior](behavior-swift.enum.md): The appearance and disappearance behavior of a popover.
- [NSPopover.CloseReason](closereason.md): Values that specify the reason for the [willCloseNotification](willclosenotification.md) notification.
- [NSPopover.Appearance](appearance-swift.enum.md): Deprecated. The set of predefined appearances for a popover.

# NSPopoverCloseReasonKey (Objective-C)

**Framework:** AppKit  
**Kind:** Global Variable  
**Availability:** macOS 10.7+

The `userInfo` key containing the reason for the [NSPopoverWillCloseNotification](willclosenotification.md).

## Declaration

```objectivec
extern NSString * const NSPopoverCloseReasonKey;
```

## See Also

### Constants

- [NSPopoverBehavior](behavior-swift.enum.md): The appearance and disappearance behavior of a popover.
- [NSPopoverCloseReasonValue](closereason.md): Values that specify the reason for the [NSPopoverWillCloseNotification](willclosenotification.md) notification.
- [NSPopoverAppearance](appearance-swift.enum.md): Deprecated. The set of predefined appearances for a popover.

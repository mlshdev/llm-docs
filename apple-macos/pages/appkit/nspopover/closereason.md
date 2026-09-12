> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopover/closereason](https://developer.apple.com/documentation/appkit/nspopover/closereason)

# NSPopover.CloseReason (Swift)

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS

Values that specify the reason for the [willCloseNotification](willclosenotification.md) notification.

## Declaration

```swift
struct CloseReason
```

## Topics

### Constants

- [detachToWindow](closereason/detachtowindow.md): Specifies that the popover has been closed because it is being detached to a window.
- [standard](closereason/standard.md): Specifies that the popover has been closed in a standard way.

### Initializers

- [init(rawValue:)](closereason/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [NSPopover.Behavior](behavior-swift.enum.md): The appearance and disappearance behavior of a popover.
- [closeReasonUserInfoKey](closereasonuserinfokey.md): The `userInfo` key containing the reason for the [willCloseNotification](willclosenotification.md).
- [NSPopover.Appearance](appearance-swift.enum.md): Deprecated. The set of predefined appearances for a popover.

# NSPopoverCloseReasonValue (Objective-C)

**Framework:** AppKit  
**Kind:** Type Alias  
**Availability:** macOS

Values that specify the reason for the [NSPopoverWillCloseNotification](willclosenotification.md) notification.

## Declaration

```objectivec
typedef NSString * NSPopoverCloseReasonValue;
```

## Topics

### Constants

- [NSPopoverCloseReasonDetachToWindow](closereason/detachtowindow.md): Specifies that the popover has been closed because it is being detached to a window.
- [NSPopoverCloseReasonStandard](closereason/standard.md): Specifies that the popover has been closed in a standard way.

## See Also

### Constants

- [NSPopoverBehavior](behavior-swift.enum.md): The appearance and disappearance behavior of a popover.
- [NSPopoverCloseReasonKey](closereasonuserinfokey.md): The `userInfo` key containing the reason for the [NSPopoverWillCloseNotification](willclosenotification.md).
- [NSPopoverAppearance](appearance-swift.enum.md): Deprecated. The set of predefined appearances for a popover.

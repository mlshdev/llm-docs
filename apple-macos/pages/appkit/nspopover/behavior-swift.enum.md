> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopover/behavior-swift.enum](https://developer.apple.com/documentation/appkit/nspopover/behavior-swift.enum)

# NSPopover.Behavior (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The appearance and disappearance behavior of a popover.

## Declaration

```swift
enum Behavior
```

## Topics

### Constants

- [NSPopover.Behavior.applicationDefined](behavior-swift.enum/applicationdefined.md): Your application assumes responsibility for closing the popover.
- [NSPopover.Behavior.transient](behavior-swift.enum/transient.md): The system will close the popover when the user interacts with a user interface element outside the popover.
- [NSPopover.Behavior.semitransient](behavior-swift.enum/semitransient.md): The system will close the popover when the user interacts with user interface elements in the window containing the popover’s positioning view.

### Initializers

- [init(rawValue:)](behavior-swift.enum/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Constants

- [closeReasonUserInfoKey](closereasonuserinfokey.md): The `userInfo` key containing the reason for the [willCloseNotification](willclosenotification.md).
- [NSPopover.CloseReason](closereason.md): Values that specify the reason for the [willCloseNotification](willclosenotification.md) notification.
- [NSPopover.Appearance](appearance-swift.enum.md): Deprecated. The set of predefined appearances for a popover.

# NSPopoverBehavior (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

The appearance and disappearance behavior of a popover.

## Declaration

```objectivec
enum NSPopoverBehavior : NSInteger;
```

## Topics

### Constants

- [NSPopoverBehaviorApplicationDefined](behavior-swift.enum/applicationdefined.md): Your application assumes responsibility for closing the popover.
- [NSPopoverBehaviorTransient](behavior-swift.enum/transient.md): The system will close the popover when the user interacts with a user interface element outside the popover.
- [NSPopoverBehaviorSemitransient](behavior-swift.enum/semitransient.md): The system will close the popover when the user interacts with user interface elements in the window containing the popover’s positioning view.

## See Also

### Constants

- [NSPopoverCloseReasonKey](closereasonuserinfokey.md): The `userInfo` key containing the reason for the [NSPopoverWillCloseNotification](willclosenotification.md).
- [NSPopoverCloseReasonValue](closereason.md): Values that specify the reason for the [NSPopoverWillCloseNotification](willclosenotification.md) notification.
- [NSPopoverAppearance](appearance-swift.enum.md): Deprecated. The set of predefined appearances for a popover.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nspopover/appearance-swift.enum](https://developer.apple.com/documentation/appkit/nspopover/appearance-swift.enum)

# NSPopover.Appearance (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.7+ (deprecated in 10.10)

The set of predefined appearances for a popover.

## Declaration

```swift
enum Appearance
```

## Topics

### Constants

- [NSPopover.Appearance.minimal](appearance-swift.enum/minimal.md): Deprecated. The popover draws with a minimal appearance.
- [NSPopover.Appearance.hud](appearance-swift.enum/hud.md): Deprecated. The popover draws with a HUD appearance.

### Initializers

- [init(rawValue:)](appearance-swift.enum/init%28rawvalue_%29.md): Deprecated.

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

- [NSPopover.Behavior](behavior-swift.enum.md): The appearance and disappearance behavior of a popover.
- [closeReasonUserInfoKey](closereasonuserinfokey.md): The `userInfo` key containing the reason for the [willCloseNotification](willclosenotification.md).
- [NSPopover.CloseReason](closereason.md): Values that specify the reason for the [willCloseNotification](willclosenotification.md) notification.

# NSPopoverAppearance (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 10.7+ (deprecated in 10.10)

The set of predefined appearances for a popover.

## Declaration

```objectivec
enum NSPopoverAppearance : NSInteger;
```

## Topics

### Constants

- [NSPopoverAppearanceMinimal](appearance-swift.enum/minimal.md): Deprecated. The popover draws with a minimal appearance.
- [NSPopoverAppearanceHUD](appearance-swift.enum/hud.md): Deprecated. The popover draws with a HUD appearance.

## See Also

### Constants

- [NSPopoverBehavior](behavior-swift.enum.md): The appearance and disappearance behavior of a popover.
- [NSPopoverCloseReasonKey](closereasonuserinfokey.md): The `userInfo` key containing the reason for the [NSPopoverWillCloseNotification](willclosenotification.md).
- [NSPopoverCloseReasonValue](closereason.md): Values that specify the reason for the [NSPopoverWillCloseNotification](willclosenotification.md) notification.

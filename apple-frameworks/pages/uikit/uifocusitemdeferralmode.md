> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusitemdeferralmode](https://developer.apple.com/documentation/uikit/uifocusitemdeferralmode)

# UIFocusItemDeferralMode (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```swift
enum UIFocusItemDeferralMode
```

## Topics

### Enumeration Cases

- [UIFocusItemDeferralMode.always](uifocusitemdeferralmode/always.md): Always defer focus for this item, even if deferral is disabled right now. This means a programmatic update to this item would result in focus disappearing until the user interacts with the focus engine again.
- [UIFocusItemDeferralMode.automatic](uifocusitemdeferralmode/automatic.md): Use the system default behavior.
- [UIFocusItemDeferralMode.never](uifocusitemdeferralmode/never.md): Never defer focus for this item. When a programmatic focus update lands on this item, it will always be and appear focused even if focus deferral is currently enabled.

### Initializers

- [init(rawValue:)](uifocusitemdeferralmode/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Enumerations

- [UIAccessibility.ExpandedStatus](uiaccessibility/expandedstatus.md)
- [UITextFormattingViewController.ComponentSize](uitextformattingviewcontroller/componentsize.md): Sizes of text formatting view controller components.
- [UIBarMinimizationBehavior](uibarminimizationbehavior.md)
- [UIBarMinimizationRestorationBehavior](uibarminimizationrestorationbehavior.md)
- [UIBarMinimizationSafeAreaAdjustment](uibarminimizationsafeareaadjustment.md)

# UIFocusItemDeferralMode (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · tvOS 18.0+ · visionOS 2.0+

## Declaration

```objectivec
enum UIFocusItemDeferralMode : NSInteger;
```

## Topics

### Enumeration Cases

- [UIFocusItemDeferralModeAlways](uifocusitemdeferralmode/always.md): Always defer focus for this item, even if deferral is disabled right now. This means a programmatic update to this item would result in focus disappearing until the user interacts with the focus engine again.
- [UIFocusItemDeferralModeAutomatic](uifocusitemdeferralmode/automatic.md): Use the system default behavior.
- [UIFocusItemDeferralModeNever](uifocusitemdeferralmode/never.md): Never defer focus for this item. When a programmatic focus update lands on this item, it will always be and appear focused even if focus deferral is currently enabled.

## See Also

### Enumerations

- [UIAccessibilityExpandedStatus](uiaccessibility/expandedstatus.md)
- [UITextFormattingViewControllerComponentSize](uitextformattingviewcontroller/componentsize.md): Sizes of text formatting view controller components.
- [UIPreferredPresentationStyle](uipreferredpresentationstyle.md): The presentation styles that determine how a view shows an item provider’s data.
- [UIBarMinimizationBehavior](uibarminimizationbehavior.md)
- [UIBarMinimizationRestorationBehavior](uibarminimizationrestorationbehavior.md)
- [UIBarMinimizationSafeAreaAdjustment](uibarminimizationsafeareaadjustment.md)

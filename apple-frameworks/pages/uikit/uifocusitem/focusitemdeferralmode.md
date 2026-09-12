> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusitem/focusitemdeferralmode](https://developer.apple.com/documentation/uikit/uifocusitem/focusitemdeferralmode)

# focusItemDeferralMode (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

If this property is present and returns `UIFocusItemDeferralModeNever`, the focus deferral will not be enabled again after the user engagement timeout has expired if this item is currently focused and programmatic focus updates pointing to this item will be executed immediatly. If it returns `UIFocusItemDeferralModeAlways` focus will always be deferred when this item is supposed to be focused. Does nothing when focus deferral is not supported on the platform.

## Declaration

```swift
optional var focusItemDeferralMode: UIFocusItemDeferralMode { get }
```

# focusItemDeferralMode (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

If this property is present and returns `UIFocusItemDeferralModeNever`, the focus deferral will not be enabled again after the user engagement timeout has expired if this item is currently focused and programmatic focus updates pointing to this item will be executed immediatly. If it returns `UIFocusItemDeferralModeAlways` focus will always be deferred when this item is supposed to be focused. Does nothing when focus deferral is not supported on the platform.

## Declaration

```objectivec
@property (nonatomic, readonly) UIFocusItemDeferralMode focusItemDeferralMode;
```

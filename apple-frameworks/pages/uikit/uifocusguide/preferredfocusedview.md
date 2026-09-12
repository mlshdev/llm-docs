> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusguide/preferredfocusedview](https://developer.apple.com/documentation/uikit/uifocusguide/preferredfocusedview)

# preferredFocusedView (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 10.0) · iPadOS 9.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 10.0)

The view that the focus will be redirected to if this guide is focused.

> Use [preferredFocusEnvironments](preferredfocusenvironments.md) instead.

## Declaration

```swift
weak var preferredFocusedView: UIView? { get set }
```

<a id="Discussion"></a>

## Discussion

If the guide is focused, it indirects the focus to this view. This view, or at least one view along its [preferredFocusedView](preferredfocusedview.md) chain, must be focusable in order for the guide to be focusable. Otherwise, it’s effectively disabled.

## See Also

### Enabling focus

- [isEnabled](isenabled.md): A Boolean value that indicates whether the guide is focusable.
- [preferredFocusEnvironments](preferredfocusenvironments.md): An array of focus environments to which the guide directs focus, ordered by priority.

# preferredFocusedView (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 10.0) · iPadOS 9.0+ (deprecated in 10.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · tvOS 9.0+ (deprecated in 10.0)

The view that the focus will be redirected to if this guide is focused.

> Use [preferredFocusEnvironments](preferredfocusenvironments.md) instead.

## Declaration

```objectivec
@property (nonatomic, weak, nullable) UIView * preferredFocusedView;
```

<a id="Discussion"></a>

## Discussion

If the guide is focused, it indirects the focus to this view. This view, or at least one view along its [preferredFocusedView](preferredfocusedview.md) chain, must be focusable in order for the guide to be focusable. Otherwise, it’s effectively disabled.

## See Also

### Enabling focus

- [enabled](isenabled.md): A Boolean value that indicates whether the guide is focusable.
- [preferredFocusEnvironments](preferredfocusenvironments.md): An array of focus environments to which the guide directs focus, ordered by priority.

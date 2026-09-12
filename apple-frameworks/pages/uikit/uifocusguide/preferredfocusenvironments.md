> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uifocusguide/preferredfocusenvironments](https://developer.apple.com/documentation/uikit/uifocusguide/preferredfocusenvironments)

# preferredFocusEnvironments (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

An array of focus environments to which the guide directs focus, ordered by priority.

## Declaration

```swift
var preferredFocusEnvironments: [any UIFocusEnvironment]! { get set }
```

## Mentioned In

- [About focus interactions for Apple TV](../about-focus-interactions-for-apple-tv.md)
- [Creating custom navigation interactions](../creating-custom-navigation-interactions.md)

<a id="Discussion"></a>

## Discussion

Setting this property to a nonempty array marks this guide’s [layoutFrame](../uilayoutguide/layoutframe.md) as focusable. If empty, this guide is effectively disabled.

If focused, the guide attempts to redirect focus to each environment in the array, in order, stopping when a focusable item in an environment has been found.

## See Also

### Enabling focus

- [isEnabled](isenabled.md): A Boolean value that indicates whether the guide is focusable.
- [preferredFocusedView](preferredfocusedview.md): Deprecated. The view that the focus will be redirected to if this guide is focused.

# preferredFocusEnvironments (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 13.1+ · tvOS 10.0+ · visionOS 1.0+

An array of focus environments to which the guide directs focus, ordered by priority.

## Declaration

```objectivec
@property (nonatomic, copy, null_resettable) NSArray<id<UIFocusEnvironment>> * preferredFocusEnvironments;
```

## Mentioned In

- [About focus interactions for Apple TV](../about-focus-interactions-for-apple-tv.md)
- [Creating custom navigation interactions](../creating-custom-navigation-interactions.md)

<a id="Discussion"></a>

## Discussion

Setting this property to a nonempty array marks this guide’s [layoutFrame](../uilayoutguide/layoutframe.md) as focusable. If empty, this guide is effectively disabled.

If focused, the guide attempts to redirect focus to each environment in the array, in order, stopping when a focusable item in an environment has been found.

## See Also

### Enabling focus

- [enabled](isenabled.md): A Boolean value that indicates whether the guide is focusable.
- [preferredFocusedView](preferredfocusedview.md): Deprecated. The view that the focus will be redirected to if this guide is focused.

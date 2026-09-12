> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/preservessuperviewlayoutmargins](https://developer.apple.com/documentation/uikit/uiview/preservessuperviewlayoutmargins)

# preservesSuperviewLayoutMargins (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

A Boolean value indicating whether the current view also respects the margins of its superview.

## Declaration

```swift
var preservesSuperviewLayoutMargins: Bool { get set }
```

## Mentioned In

- [Positioning content within layout margins](../positioning-content-within-layout-margins.md)

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the superview’s margins are also considered when laying out content. This margin affects layouts where the distance between the edge of a view and its superview is smaller than the corresponding margin. For example, you might have a content view whose frame precisely matches the bounds of its superview. When any of the superview’s margins is inside the area represented by the content view and its own margins, UIKit adjusts the content view’s layout to respect the superview’s margins. The amount of the adjustment is the smallest amount needed to ensure that content is also inside the superview’s margins.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring content margins

- [Positioning content within layout margins](../positioning-content-within-layout-margins.md): Position views so that they aren’t crowded by other content.
- [directionalLayoutMargins](directionallayoutmargins.md): The default spacing to use when laying out content in a view, taking into account the current language direction.
- [layoutMargins](layoutmargins.md): The default spacing to use when laying out content in the view.
- [layoutMarginsDidChange()](layoutmarginsdidchange%28%29.md): Notifies the view that the layout margins changed.

# preservesSuperviewLayoutMargins (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

A Boolean value indicating whether the current view also respects the margins of its superview.

## Declaration

```objectivec
@property (nonatomic) BOOL preservesSuperviewLayoutMargins;
```

## Mentioned In

- [Positioning content within layout margins](../positioning-content-within-layout-margins.md)

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the superview’s margins are also considered when laying out content. This margin affects layouts where the distance between the edge of a view and its superview is smaller than the corresponding margin. For example, you might have a content view whose frame precisely matches the bounds of its superview. When any of the superview’s margins is inside the area represented by the content view and its own margins, UIKit adjusts the content view’s layout to respect the superview’s margins. The amount of the adjustment is the smallest amount needed to ensure that content is also inside the superview’s margins.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring content margins

- [Positioning content within layout margins](../positioning-content-within-layout-margins.md): Position views so that they aren’t crowded by other content.
- [directionalLayoutMargins](directionallayoutmargins.md): The default spacing to use when laying out content in a view, taking into account the current language direction.
- [layoutMargins](layoutmargins.md): The default spacing to use when laying out content in the view.
- [layoutMarginsDidChange](layoutmarginsdidchange%28%29.md): Notifies the view that the layout margins changed.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/viewrespectssystemminimumlayoutmargins](https://developer.apple.com/documentation/uikit/uiviewcontroller/viewrespectssystemminimumlayoutmargins)

# viewRespectsSystemMinimumLayoutMargins (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value indicating whether the view controller’s view uses the system-defined minimum layout margins.

## Declaration

```swift
var viewRespectsSystemMinimumLayoutMargins: Bool { get set }
```

## Mentioned In

- [Positioning content within layout margins](../positioning-content-within-layout-margins.md)

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the root view’s layout margins are guaranteed to be no smaller than the values in the [systemMinimumLayoutMargins](systemminimumlayoutmargins.md) property. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

Changing this property to [false](https://developer.apple.com/documentation/swift/false) causes the view to obtain its margins solely from its [directionalLayoutMargins](../uiview/directionallayoutmargins.md) property. Setting the margins in that property to `0` allows you to eliminate the view’s margins altogether.

## See Also

### Managing the view’s margins

- [Positioning content within layout margins](../positioning-content-within-layout-margins.md): Position views so that they aren’t crowded by other content.
- [systemMinimumLayoutMargins](systemminimumlayoutmargins.md): The minimum layout margins for the view controller’s root view.
- [viewLayoutMarginsDidChange()](viewlayoutmarginsdidchange%28%29.md): Called to notify the view controller that the layout margins of its root view changed.

# viewRespectsSystemMinimumLayoutMargins (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

A Boolean value indicating whether the view controller’s view uses the system-defined minimum layout margins.

## Declaration

```objectivec
@property (nonatomic) BOOL viewRespectsSystemMinimumLayoutMargins;
```

## Mentioned In

- [Positioning content within layout margins](../positioning-content-within-layout-margins.md)

<a id="Discussion"></a>

## Discussion

When the value of this property is [true](https://developer.apple.com/documentation/swift/true), the root view’s layout margins are guaranteed to be no smaller than the values in the [systemMinimumLayoutMargins](systemminimumlayoutmargins.md) property. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

Changing this property to [false](https://developer.apple.com/documentation/swift/false) causes the view to obtain its margins solely from its [directionalLayoutMargins](../uiview/directionallayoutmargins.md) property. Setting the margins in that property to `0` allows you to eliminate the view’s margins altogether.

## See Also

### Managing the view’s margins

- [Positioning content within layout margins](../positioning-content-within-layout-margins.md): Position views so that they aren’t crowded by other content.
- [systemMinimumLayoutMargins](systemminimumlayoutmargins.md): The minimum layout margins for the view controller’s root view.
- [viewLayoutMarginsDidChange](viewlayoutmarginsdidchange%28%29.md): Called to notify the view controller that the layout margins of its root view changed.

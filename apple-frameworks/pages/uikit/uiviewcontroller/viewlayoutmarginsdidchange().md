> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/viewlayoutmarginsdidchange()](https://developer.apple.com/documentation/uikit/uiviewcontroller/viewlayoutmarginsdidchange())

# viewLayoutMarginsDidChange() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Called to notify the view controller that the layout margins of its root view changed.

## Declaration

```swift
func viewLayoutMarginsDidChange()
```

## Mentioned In

- [Displaying and managing views with a view controller](../displaying-and-managing-views-with-a-view-controller.md)

<a id="Discussion"></a>

## Discussion

Use this method to update the position of content based on the new margin values.

## See Also

### Managing the view’s margins

- [Positioning content within layout margins](../positioning-content-within-layout-margins.md): Position views so that they aren’t crowded by other content.
- [viewRespectsSystemMinimumLayoutMargins](viewrespectssystemminimumlayoutmargins.md): A Boolean value indicating whether the view controller’s view uses the system-defined minimum layout margins.
- [systemMinimumLayoutMargins](systemminimumlayoutmargins.md): The minimum layout margins for the view controller’s root view.

# viewLayoutMarginsDidChange (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Called to notify the view controller that the layout margins of its root view changed.

## Declaration

```objectivec
- (void) viewLayoutMarginsDidChange;
```

## Mentioned In

- [Displaying and managing views with a view controller](../displaying-and-managing-views-with-a-view-controller.md)

<a id="Discussion"></a>

## Discussion

Use this method to update the position of content based on the new margin values.

## See Also

### Managing the view’s margins

- [Positioning content within layout margins](../positioning-content-within-layout-margins.md): Position views so that they aren’t crowded by other content.
- [viewRespectsSystemMinimumLayoutMargins](viewrespectssystemminimumlayoutmargins.md): A Boolean value indicating whether the view controller’s view uses the system-defined minimum layout margins.
- [systemMinimumLayoutMargins](systemminimumlayoutmargins.md): The minimum layout margins for the view controller’s root view.

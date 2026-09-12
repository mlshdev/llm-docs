> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewcontroller/viewwilllayoutsubviews()](https://developer.apple.com/documentation/uikit/uiviewcontroller/viewwilllayoutsubviews())

# viewWillLayoutSubviews() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the view controller that its view is about to lay out its subviews.

## Declaration

```swift
func viewWillLayoutSubviews()
```

## Mentioned In

- [Displaying and managing views with a view controller](../displaying-and-managing-views-with-a-view-controller.md)
- [Updating views automatically with observation tracking in UIKit](../updating-views-automatically-with-observation-tracking-in-uikit.md)

<a id="Discussion"></a>

## Discussion

When a view’s bounds change, the view adjusts the position of its subviews. Your view controller can override this method to make changes before the view lays out its subviews. The default implementation of this method does nothing.

In iOS 18 and later, UIKit supports automatic trait tracking inside this method for traits from this view controller’s `traitCollection` and the `traitCollection` of its [view](view.md). For more information, see [Automatic trait tracking](../automatic-trait-tracking.md).

This method supports automatic observation tracking. For more information, see [Updating views automatically with observation tracking in UIKit](../updating-views-automatically-with-observation-tracking-in-uikit.md).

## See Also

### Observing data in view controllers

- [updateProperties()](updateproperties%28%29.md): Configures the view controller’s content and styling properties.
- [viewDidLayoutSubviews()](viewdidlayoutsubviews%28%29.md): Notifies the view controller when its view finishes laying out its subviews.
- [updateViewConstraints()](updateviewconstraints%28%29.md): Notifies the view controller when its view needs to update its constraints.
- [updateContentUnavailableConfiguration(using:)](updatecontentunavailableconfiguration%28using_%29.md): Updates the content-unavailable configuration for the provided state.

# viewWillLayoutSubviews (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the view controller that its view is about to lay out its subviews.

## Declaration

```objectivec
- (void) viewWillLayoutSubviews;
```

## Mentioned In

- [Displaying and managing views with a view controller](../displaying-and-managing-views-with-a-view-controller.md)
- [Updating views automatically with observation tracking in UIKit](../updating-views-automatically-with-observation-tracking-in-uikit.md)

<a id="Discussion"></a>

## Discussion

When a view’s bounds change, the view adjusts the position of its subviews. Your view controller can override this method to make changes before the view lays out its subviews. The default implementation of this method does nothing.

In iOS 18 and later, UIKit supports automatic trait tracking inside this method for traits from this view controller’s `traitCollection` and the `traitCollection` of its [view](view.md). For more information, see [Automatic trait tracking](../automatic-trait-tracking.md).

This method supports automatic observation tracking. For more information, see [Updating views automatically with observation tracking in UIKit](../updating-views-automatically-with-observation-tracking-in-uikit.md).

## See Also

### Observing data in view controllers

- [updateProperties](updateproperties%28%29.md): Configures the view controller’s content and styling properties.
- [viewDidLayoutSubviews](viewdidlayoutsubviews%28%29.md): Notifies the view controller when its view finishes laying out its subviews.
- [updateViewConstraints](updateviewconstraints%28%29.md): Notifies the view controller when its view needs to update its constraints.

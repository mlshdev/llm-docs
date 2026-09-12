> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/layoutsubviews()](https://developer.apple.com/documentation/uikit/uiview/layoutsubviews())

# layoutSubviews() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Lays out subviews.

## Declaration

```swift
func layoutSubviews()
```

## Mentioned In

- [Adapting your app when traits change](../adapting-your-app-when-traits-change.md)
- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md)
- [Updating views automatically with observation tracking in UIKit](../updating-views-automatically-with-observation-tracking-in-uikit.md)

<a id="Discussion"></a>

## Discussion

The default implementation uses any constraints you set to determine the size and position of any subviews.

Subclasses can override this method as needed to perform more precise layout of their subviews. You should override this method only if the autoresizing and constraint-based behaviors of the subviews don’t offer the behavior you want. You can use your implementation to set the frame rectangles of your subviews directly.

Don’t call this method directly. If you want to force a layout update, call the [setNeedsLayout()](setneedslayout%28%29.md) method instead to do so prior to the next drawing update. If you want to update the layout of your views immediately, call the [layoutIfNeeded()](layoutifneeded%28%29.md) method.

In iOS 18 and later, UIKit supports automatic trait tracking inside this method for traits from this view’s `traitCollection`. For more information, see [Automatic trait tracking](../automatic-trait-tracking.md).

This method supports automatic observation tracking. For more information, see [Updating views automatically with observation tracking in UIKit](../updating-views-automatically-with-observation-tracking-in-uikit.md).

## See Also

### Observing data in views

- [updateProperties()](updateproperties%28%29.md): Configures the view’s content and styling properties before layout.
- [updateConstraints()](updateconstraints%28%29.md): Updates constraints for the view.
- [draw(\_:)](draw%28__%29.md): Draws the view’s image within the passed-in rectangle.

# layoutSubviews (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS · watchOS

Lays out subviews.

## Declaration

```objectivec
- (void) layoutSubviews;
```

## Mentioned In

- [Adapting your app when traits change](../adapting-your-app-when-traits-change.md)
- [Presenting content on a connected display](../presenting-content-on-a-connected-display.md)
- [Updating views automatically with observation tracking in UIKit](../updating-views-automatically-with-observation-tracking-in-uikit.md)

<a id="Discussion"></a>

## Discussion

The default implementation uses any constraints you set to determine the size and position of any subviews.

Subclasses can override this method as needed to perform more precise layout of their subviews. You should override this method only if the autoresizing and constraint-based behaviors of the subviews don’t offer the behavior you want. You can use your implementation to set the frame rectangles of your subviews directly.

Don’t call this method directly. If you want to force a layout update, call the [setNeedsLayout](setneedslayout%28%29.md) method instead to do so prior to the next drawing update. If you want to update the layout of your views immediately, call the [layoutIfNeeded](layoutifneeded%28%29.md) method.

In iOS 18 and later, UIKit supports automatic trait tracking inside this method for traits from this view’s `traitCollection`. For more information, see [Automatic trait tracking](../automatic-trait-tracking.md).

This method supports automatic observation tracking. For more information, see [Updating views automatically with observation tracking in UIKit](../updating-views-automatically-with-observation-tracking-in-uikit.md).

## See Also

### Observing data in views

- [updateProperties](updateproperties%28%29.md): Configures the view’s content and styling properties before layout.
- [updateConstraints](updateconstraints%28%29.md): Updates constraints for the view.
- [drawRect:](draw%28__%29.md): Draws the view’s image within the passed-in rectangle.

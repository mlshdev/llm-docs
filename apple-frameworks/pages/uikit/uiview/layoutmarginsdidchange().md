> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/layoutmarginsdidchange()](https://developer.apple.com/documentation/uikit/uiview/layoutmarginsdidchange())

# layoutMarginsDidChange() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Notifies the view that the layout margins changed.

## Declaration

```swift
func layoutMarginsDidChange()
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override this method and use it to respond when the value in the view’s [layoutMargins](layoutmargins.md) property changes. For example, you might override this method if your view subclass handles layout manually or uses the layout margins during drawing. In both cases, you could use this method to initiate a drawing or layout update.

## See Also

### Configuring content margins

- [Positioning content within layout margins](../positioning-content-within-layout-margins.md): Position views so that they aren’t crowded by other content.
- [directionalLayoutMargins](directionallayoutmargins.md): The default spacing to use when laying out content in a view, taking into account the current language direction.
- [layoutMargins](layoutmargins.md): The default spacing to use when laying out content in the view.
- [preservesSuperviewLayoutMargins](preservessuperviewlayoutmargins.md): A Boolean value indicating whether the current view also respects the margins of its superview.

# layoutMarginsDidChange (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Notifies the view that the layout margins changed.

## Declaration

```objectivec
- (void) layoutMarginsDidChange;
```

<a id="Discussion"></a>

## Discussion

The default implementation of this method does nothing. Subclasses can override this method and use it to respond when the value in the view’s [layoutMargins](layoutmargins.md) property changes. For example, you might override this method if your view subclass handles layout manually or uses the layout margins during drawing. In both cases, you could use this method to initiate a drawing or layout update.

## See Also

### Configuring content margins

- [Positioning content within layout margins](../positioning-content-within-layout-margins.md): Position views so that they aren’t crowded by other content.
- [directionalLayoutMargins](directionallayoutmargins.md): The default spacing to use when laying out content in a view, taking into account the current language direction.
- [layoutMargins](layoutmargins.md): The default spacing to use when laying out content in the view.
- [preservesSuperviewLayoutMargins](preservessuperviewlayoutmargins.md): A Boolean value indicating whether the current view also respects the margins of its superview.

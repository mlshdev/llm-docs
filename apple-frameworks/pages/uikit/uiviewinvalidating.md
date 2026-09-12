> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewinvalidating](https://developer.apple.com/documentation/uikit/uiviewinvalidating)

# UIViewInvalidating

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS · Swift 5.1+

Implements a type of invalidation that can occur on a view that requires an update.

## Declaration

```swift
protocol UIViewInvalidating
```

## Topics

### Specifying invalidation types

- [configuration](uiviewinvalidating/configuration.md): Conforms when `Self` is `UIView.Invalidations.Configuration`. A change that invalidates a view’s configuration.
- [constraints](uiviewinvalidating/constraints.md): Conforms when `Self` is `UIView.Invalidations.Constraints`. A change that invalidates a view’s constraints.
- [display](uiviewinvalidating/display.md): Conforms when `Self` is `UIView.Invalidations.Display`. A change that requires the system to redraw a view’s content.
- [intrinsicContentSize](uiviewinvalidating/intrinsiccontentsize.md): Conforms when `Self` is `UIView.Invalidations.IntrinsicContentSize`. A change that invalidates a view’s intrinsic size.
- [layout](uiviewinvalidating/layout.md): Conforms when `Self` is `UIView.Invalidations.Layout`. A change that invalidates the layout of the containing view’s subviews.

### Invalidating the view

- [invalidate(view:)](uiviewinvalidating/invalidate%28view_%29.md): Indicates to the system that an aspect of a view is invalid and triggers the necessary update.
- [UIView.Invalidations](uiview/invalidations.md): Changes that cause an aspect of a view to be invalid and require an update.

### Type Properties

- [properties](uiviewinvalidating/properties.md): Conforms when `Self` is `UIView.Invalidations.Properties`.

## Relationships

### Conforming Types

- [UIView.Invalidations.Configuration](uiview/invalidations/configuration.md)
- [UIView.Invalidations.Constraints](uiview/invalidations/constraints.md)
- [UIView.Invalidations.Display](uiview/invalidations/display.md)
- [UIView.Invalidations.IntrinsicContentSize](uiview/invalidations/intrinsiccontentsize.md)
- [UIView.Invalidations.Layout](uiview/invalidations/layout.md)
- [UIView.Invalidations.Properties](uiview/invalidations/properties.md)
- [UIView.Invalidations.Tuple](uiview/invalidations/tuple.md)

## See Also

### Updating the view when property values change

- [UIView.Invalidating](uiview/invalidating.md): A property wrapper that notifies the system that a property value change has invalidated an aspect of the containing view.

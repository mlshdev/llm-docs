> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewinvalidating](https://developer.apple.com/documentation/appkit/nsviewinvalidating)

# NSViewInvalidating

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS 12.0+ · Swift 5.1+

Implements a type of invalidation that can occur on a view that requires an update.

## Declaration

```swift
protocol NSViewInvalidating
```

## Topics

### Types of Invalidations

- [constraints](nsviewinvalidating/constraints.md): Conforms when `Self` is `NSView.Invalidations.Constraints`. A change that invalidates a view’s constraints.
- [display](nsviewinvalidating/display.md): Conforms when `Self` is `NSView.Invalidations.Display`. A change that requires the system to redraw a view’s content.
- [intrinsicContentSize](nsviewinvalidating/intrinsiccontentsize.md): Conforms when `Self` is `NSView.Invalidations.IntrinsicContentSize`. A change that invalidates a view’s intrinsic size.
- [layout](nsviewinvalidating/layout.md): Conforms when `Self` is `NSView.Invalidations.Layout`. A change that invalidates the layout of the containing view’s subviews.
- [restorableState](nsviewinvalidating/restorablestate.md): A change that invalidates the restorable state of the view.

### Supporting Types

- [invalidate(view:)](nsviewinvalidating/invalidate%28view_%29.md): Indicates to the system that an aspect of a view is invalid and triggers the necessary update.
- [NSView.Invalidations](nsview/invalidations.md): Changes that cause aspects of a view to be invalid and require an update.

## Relationships

### Conforming Types

- [NSView.Invalidations.Constraints](nsview/invalidations/constraints.md)
- [NSView.Invalidations.Display](nsview/invalidations/display.md)
- [NSView.Invalidations.IntrinsicContentSize](nsview/invalidations/intrinsiccontentsize.md)
- [NSView.Invalidations.Layout](nsview/invalidations/layout.md)
- [NSView.Invalidations.RestorableState](nsview/invalidations/restorablestate.md)
- [NSView.Invalidations.Tuple](nsview/invalidations/tuple.md)

## See Also

### Updating the View When Property Values Change

- [NSView.Invalidating](nsview/invalidating.md): A property wrapper that notifies the system that a property value change has invalidated an aspect of the containing view.

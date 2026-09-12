> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/invalidations](https://developer.apple.com/documentation/appkit/nsview/invalidations)

# NSView.Invalidations

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS 12.0+ · Swift 5.1+

Changes that cause aspects of a view to be invalid and require an update.

## Declaration

```swift
enum Invalidations
```

## Topics

### Types of Invalidations

- [NSView.Invalidations.Constraints](invalidations/constraints.md): A change that invalidates a view’s constraints.
- [NSView.Invalidations.Display](invalidations/display.md): A change that requires the system to redraw a view’s content.
- [NSView.Invalidations.IntrinsicContentSize](invalidations/intrinsiccontentsize.md): A change that invalidates a view’s intrinsic size.
- [NSView.Invalidations.Layout](invalidations/layout.md): A change that invalidates the layout of the containing view’s subviews.
- [NSView.Invalidations.RestorableState](invalidations/restorablestate.md): A change that invalidates the restorable state of the view.
- [NSView.Invalidations.Tuple](invalidations/tuple.md): A change that invalidates a combination of factors covered by the other invalidation types.

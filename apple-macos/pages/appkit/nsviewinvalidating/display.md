> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewinvalidating/display](https://developer.apple.com/documentation/appkit/nsviewinvalidating/display)

# display

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 12.0+ · Swift 5.1+

A change that requires the system to redraw a view’s content.

## Declaration

```swift
static var display: NSView.Invalidations.Display { get }
```

<a id="Discussion"></a>

## Discussion

Use this invalidation type to set [needsDisplay](../nsview/needsdisplay.md) so that a change in property value triggers the system to redraw the containing view’s content.

## See Also

### Types of Invalidations

- [constraints](constraints.md): Conforms when `Self` is `NSView.Invalidations.Constraints`. A change that invalidates a view’s constraints.
- [intrinsicContentSize](intrinsiccontentsize.md): Conforms when `Self` is `NSView.Invalidations.IntrinsicContentSize`. A change that invalidates a view’s intrinsic size.
- [layout](layout.md): Conforms when `Self` is `NSView.Invalidations.Layout`. A change that invalidates the layout of the containing view’s subviews.
- [restorableState](restorablestate.md): A change that invalidates the restorable state of the view.

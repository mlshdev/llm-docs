> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewinvalidating/layout](https://developer.apple.com/documentation/appkit/nsviewinvalidating/layout)

# layout

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 12.0+ · Swift 5.1+

A change that invalidates the layout of the containing view’s subviews.

## Declaration

```swift
static var layout: NSView.Invalidations.Layout { get }
```

<a id="Discussion"></a>

## Discussion

Use this invalidation type to set [needsLayout](../nsview/needslayout.md) so that a change in property value triggers the system to update the layout of the containing view’s subviews.

## See Also

### Types of Invalidations

- [constraints](constraints.md): Conforms when `Self` is `NSView.Invalidations.Constraints`. A change that invalidates a view’s constraints.
- [display](display.md): Conforms when `Self` is `NSView.Invalidations.Display`. A change that requires the system to redraw a view’s content.
- [intrinsicContentSize](intrinsiccontentsize.md): Conforms when `Self` is `NSView.Invalidations.IntrinsicContentSize`. A change that invalidates a view’s intrinsic size.
- [restorableState](restorablestate.md): A change that invalidates the restorable state of the view.

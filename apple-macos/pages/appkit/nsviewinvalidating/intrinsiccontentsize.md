> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewinvalidating/intrinsiccontentsize](https://developer.apple.com/documentation/appkit/nsviewinvalidating/intrinsiccontentsize)

# intrinsicContentSize

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 12.0+ · Swift 5.1+

A change that invalidates a view’s intrinsic size.

## Declaration

```swift
static var intrinsicContentSize: NSView.Invalidations.IntrinsicContentSize { get }
```

<a id="Discussion"></a>

## Discussion

Use this invalidation type to call [invalidateIntrinsicContentSize()](../nsview/invalidateintrinsiccontentsize%28%29.md) so that a change in property value invalidates the containing view’s intrinsic content size. This allows the constraint-based layout system to account for the change the next time it updates the layout.

## See Also

### Types of Invalidations

- [constraints](constraints.md): Conforms when `Self` is `NSView.Invalidations.Constraints`. A change that invalidates a view’s constraints.
- [display](display.md): Conforms when `Self` is `NSView.Invalidations.Display`. A change that requires the system to redraw a view’s content.
- [layout](layout.md): Conforms when `Self` is `NSView.Invalidations.Layout`. A change that invalidates the layout of the containing view’s subviews.
- [restorableState](restorablestate.md): A change that invalidates the restorable state of the view.

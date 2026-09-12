> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsviewinvalidating/constraints](https://developer.apple.com/documentation/appkit/nsviewinvalidating/constraints)

# constraints

**Framework:** AppKit  
**Kind:** Type Property  
**Availability:** macOS 12.0+ · Swift 5.1+

A change that invalidates a view’s constraints.

## Declaration

```swift
static var constraints: NSView.Invalidations.Constraints { get }
```

<a id="Discussion"></a>

## Discussion

Use this invalidation type to set [needsUpdateConstraints](../nsview/needsupdateconstraints.md) so that a change in property value triggers the containing view to update constraints.

## See Also

### Types of Invalidations

- [display](display.md): Conforms when `Self` is `NSView.Invalidations.Display`. A change that requires the system to redraw a view’s content.
- [intrinsicContentSize](intrinsiccontentsize.md): Conforms when `Self` is `NSView.Invalidations.IntrinsicContentSize`. A change that invalidates a view’s intrinsic size.
- [layout](layout.md): Conforms when `Self` is `NSView.Invalidations.Layout`. A change that invalidates the layout of the containing view’s subviews.
- [restorableState](restorablestate.md): A change that invalidates the restorable state of the view.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewinvalidating/constraints](https://developer.apple.com/documentation/uikit/uiviewinvalidating/constraints)

# constraints

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS · Swift 5.1+

A change that invalidates a view’s constraints.

## Declaration

```swift
static var constraints: UIView.Invalidations.Constraints { get }
```

<a id="Discussion"></a>

## Discussion

Use this invalidation type to call [setNeedsUpdateConstraints()](../uiview/setneedsupdateconstraints%28%29.md) when a change in property value should cause the containing view to update constraints.

## See Also

### Specifying invalidation types

- [configuration](configuration.md): Conforms when `Self` is `UIView.Invalidations.Configuration`. A change that invalidates a view’s configuration.
- [display](display.md): Conforms when `Self` is `UIView.Invalidations.Display`. A change that requires the system to redraw a view’s content.
- [intrinsicContentSize](intrinsiccontentsize.md): Conforms when `Self` is `UIView.Invalidations.IntrinsicContentSize`. A change that invalidates a view’s intrinsic size.
- [layout](layout.md): Conforms when `Self` is `UIView.Invalidations.Layout`. A change that invalidates the layout of the containing view’s subviews.

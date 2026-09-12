> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewinvalidating/display](https://developer.apple.com/documentation/uikit/uiviewinvalidating/display)

# display

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS · Swift 5.1+

A change that requires the system to redraw a view’s content.

## Declaration

```swift
static var display: UIView.Invalidations.Display { get }
```

<a id="Discussion"></a>

## Discussion

Use this invalidation type to call [setNeedsDisplay()](../uiview/setneedsdisplay%28%29.md) when a change in property value should cause the system to redraw the containing view’s content.

## See Also

### Specifying invalidation types

- [configuration](configuration.md): Conforms when `Self` is `UIView.Invalidations.Configuration`. A change that invalidates a view’s configuration.
- [constraints](constraints.md): Conforms when `Self` is `UIView.Invalidations.Constraints`. A change that invalidates a view’s constraints.
- [intrinsicContentSize](intrinsiccontentsize.md): Conforms when `Self` is `UIView.Invalidations.IntrinsicContentSize`. A change that invalidates a view’s intrinsic size.
- [layout](layout.md): Conforms when `Self` is `UIView.Invalidations.Layout`. A change that invalidates the layout of the containing view’s subviews.

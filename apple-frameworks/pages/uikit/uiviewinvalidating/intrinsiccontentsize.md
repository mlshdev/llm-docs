> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewinvalidating/intrinsiccontentsize](https://developer.apple.com/documentation/uikit/uiviewinvalidating/intrinsiccontentsize)

# intrinsicContentSize

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS · Swift 5.1+

A change that invalidates a view’s intrinsic size.

## Declaration

```swift
static var intrinsicContentSize: UIView.Invalidations.IntrinsicContentSize { get }
```

<a id="Discussion"></a>

## Discussion

Use this type of invalidation type to call [invalidateIntrinsicContentSize()](../uiview/invalidateintrinsiccontentsize%28%29.md) when a change in property value invalidates the containing view’s intrinsic content size. When you use this type, the constraint-based layout system accounts for the change the next time it updates the layout.

## See Also

### Specifying invalidation types

- [configuration](configuration.md): Conforms when `Self` is `UIView.Invalidations.Configuration`. A change that invalidates a view’s configuration.
- [constraints](constraints.md): Conforms when `Self` is `UIView.Invalidations.Constraints`. A change that invalidates a view’s constraints.
- [display](display.md): Conforms when `Self` is `UIView.Invalidations.Display`. A change that requires the system to redraw a view’s content.
- [layout](layout.md): Conforms when `Self` is `UIView.Invalidations.Layout`. A change that invalidates the layout of the containing view’s subviews.

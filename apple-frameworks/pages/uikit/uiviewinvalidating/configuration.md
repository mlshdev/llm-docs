> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiviewinvalidating/configuration](https://developer.apple.com/documentation/uikit/uiviewinvalidating/configuration)

# configuration

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS · Swift 5.1+

A change that invalidates a view’s configuration.

## Declaration

```swift
static var configuration: UIView.Invalidations.Configuration { get }
```

<a id="Discussion"></a>

## Discussion

Use this invalidation type to call [setNeedsUpdateConfiguration()](../uibutton/setneedsupdateconfiguration%28%29.md) when a change in property value should cause the containing view to update the configuration.

> **Note**

>  You only use this invalidation type on [UIView](../uiview.md) subclasses that support a configuration pattern, using [setNeedsUpdateConfiguration()](../uibutton/setneedsupdateconfiguration%28%29.md) and [updateConfiguration()](../uibutton/updateconfiguration%28%29.md) pattern. For example, use this type on [UIButton](../uibutton.md), [UICollectionViewCell](../uicollectionviewcell.md), [UITableViewCell](../uitableviewcell.md), or [UITableViewHeaderFooterView](../uitableviewheaderfooterview.md). This type has no effect on [UIView](../uiview.md) subclasses that don’t use a configuration pattern.

## See Also

### Specifying invalidation types

- [constraints](constraints.md): Conforms when `Self` is `UIView.Invalidations.Constraints`. A change that invalidates a view’s constraints.
- [display](display.md): Conforms when `Self` is `UIView.Invalidations.Display`. A change that requires the system to redraw a view’s content.
- [intrinsicContentSize](intrinsiccontentsize.md): Conforms when `Self` is `UIView.Invalidations.IntrinsicContentSize`. A change that invalidates a view’s intrinsic size.
- [layout](layout.md): Conforms when `Self` is `UIView.Invalidations.Layout`. A change that invalidates the layout of the containing view’s subviews.

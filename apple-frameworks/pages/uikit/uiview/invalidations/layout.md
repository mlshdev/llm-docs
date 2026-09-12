> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/invalidations/layout](https://developer.apple.com/documentation/uikit/uiview/invalidations/layout)

# UIView.Invalidations.Layout

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS · Swift 5.1+

A change that invalidates the layout of the containing view’s subviews.

## Declaration

```swift
struct Layout
```

<a id="overview"></a>

## Overview

Use [layout](../../uiviewinvalidating/layout.md) to create an instance of this type.

## Topics

### Creating the invalidation structure

- [init()](layout/init%28%29.md): Creates a layout invalidation structure.

## Relationships

### Conforms To

- [UIViewInvalidating](../../uiviewinvalidating.md)

## See Also

### Invalidation types

- [UIView.Invalidations.Configuration](configuration.md): A change that invalidates a view’s configuration.
- [UIView.Invalidations.Constraints](constraints.md): A change that invalidates a view’s constraints.
- [UIView.Invalidations.Display](display.md): A change that requires the system to redraw a view’s content.
- [UIView.Invalidations.IntrinsicContentSize](intrinsiccontentsize.md): A change that invalidates a view’s intrinsic size.
- [UIView.Invalidations.Tuple](tuple.md): A change that invalidates a combination of factors covered by the other invalidation types.

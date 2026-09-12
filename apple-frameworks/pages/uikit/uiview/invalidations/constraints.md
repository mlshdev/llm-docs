> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/invalidations/constraints](https://developer.apple.com/documentation/uikit/uiview/invalidations/constraints)

# UIView.Invalidations.Constraints

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS · Swift 5.1+

A change that invalidates a view’s constraints.

## Declaration

```swift
struct Constraints
```

<a id="overview"></a>

## Overview

Use [constraints](../../uiviewinvalidating/constraints.md) to create an instance of this type.

## Topics

### Creating the invalidation structure

- [constraints](../constraints.md): The constraints held by the view.
- [init()](constraints/init%28%29.md): Creates a constraints invalidation structure.

## Relationships

### Conforms To

- [UIViewInvalidating](../../uiviewinvalidating.md)

## See Also

### Invalidation types

- [UIView.Invalidations.Configuration](configuration.md): A change that invalidates a view’s configuration.
- [UIView.Invalidations.Display](display.md): A change that requires the system to redraw a view’s content.
- [UIView.Invalidations.IntrinsicContentSize](intrinsiccontentsize.md): A change that invalidates a view’s intrinsic size.
- [UIView.Invalidations.Layout](layout.md): A change that invalidates the layout of the containing view’s subviews.
- [UIView.Invalidations.Tuple](tuple.md): A change that invalidates a combination of factors covered by the other invalidation types.

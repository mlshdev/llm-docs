> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/invalidations/tuple](https://developer.apple.com/documentation/uikit/uiview/invalidations/tuple)

# UIView.Invalidations.Tuple

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS · Swift 5.1+

A change that invalidates a combination of factors covered by the other invalidation types.

## Declaration

```swift
struct Tuple<Invalidation1, Invalidation2> where Invalidation1 : UIViewInvalidating, Invalidation2 : UIViewInvalidating
```

<a id="overview"></a>

## Overview

The system uses this type when a change invalidates multiple aspects of a view. Use a tuple of the static values defined in [UIViewInvalidating](../../uiviewinvalidating.md) when more than one invalidation type applies to a change.

## Topics

### Creating the invalidation structure

- [init(\_:\_:)](tuple/init%28____%29.md): Creates an invalidation structure with multiple invalidations.

## Relationships

### Conforms To

- [UIViewInvalidating](../../uiviewinvalidating.md)

## See Also

### Invalidation types

- [UIView.Invalidations.Configuration](configuration.md): A change that invalidates a view’s configuration.
- [UIView.Invalidations.Constraints](constraints.md): A change that invalidates a view’s constraints.
- [UIView.Invalidations.Display](display.md): A change that requires the system to redraw a view’s content.
- [UIView.Invalidations.IntrinsicContentSize](intrinsiccontentsize.md): A change that invalidates a view’s intrinsic size.
- [UIView.Invalidations.Layout](layout.md): A change that invalidates the layout of the containing view’s subviews.

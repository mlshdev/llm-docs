> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/invalidations/configuration](https://developer.apple.com/documentation/uikit/uiview/invalidations/configuration)

# UIView.Invalidations.Configuration

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · tvOS 15.0+ · visionOS · Swift 5.1+

A change that invalidates a view’s configuration.

## Declaration

```swift
struct Configuration
```

<a id="overview"></a>

## Overview

Use [configuration](../../uiviewinvalidating/configuration.md) to create an instance of this type.

## Topics

### Creating the invalidation structure

- [init()](configuration/init%28%29.md): Creates a configuration invalidation structure.

## Relationships

### Conforms To

- [UIViewInvalidating](../../uiviewinvalidating.md)

## See Also

### Invalidation types

- [UIView.Invalidations.Constraints](constraints.md): A change that invalidates a view’s constraints.
- [UIView.Invalidations.Display](display.md): A change that requires the system to redraw a view’s content.
- [UIView.Invalidations.IntrinsicContentSize](intrinsiccontentsize.md): A change that invalidates a view’s intrinsic size.
- [UIView.Invalidations.Layout](layout.md): A change that invalidates the layout of the containing view’s subviews.
- [UIView.Invalidations.Tuple](tuple.md): A change that invalidates a combination of factors covered by the other invalidation types.

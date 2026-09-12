> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/invalidations/restorablestate](https://developer.apple.com/documentation/appkit/nsview/invalidations/restorablestate)

# NSView.Invalidations.RestorableState

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 12.0+ · Swift 5.1+

A change that invalidates the restorable state of the view.

## Declaration

```swift
struct RestorableState
```

<a id="overview"></a>

## Overview

Use [restorableState](../../nsviewinvalidating/restorablestate.md) to create an instance of this type.

## Topics

### Creating the invalidation type

- [restorableState](../../nsviewinvalidating/restorablestate.md): A change that invalidates the restorable state of the view.
- [init()](restorablestate/init%28%29.md): Creates the invalidation type.

### Invalidating the restorable state

- [invalidate(view:)](../../nsviewinvalidating/invalidate%28view_%29.md): Indicates to the system that an aspect of a view is invalid and triggers the necessary update.

## Relationships

### Conforms To

- [NSViewInvalidating](../../nsviewinvalidating.md)

## See Also

### Types of Invalidations

- [NSView.Invalidations.Constraints](constraints.md): A change that invalidates a view’s constraints.
- [NSView.Invalidations.Display](display.md): A change that requires the system to redraw a view’s content.
- [NSView.Invalidations.IntrinsicContentSize](intrinsiccontentsize.md): A change that invalidates a view’s intrinsic size.
- [NSView.Invalidations.Layout](layout.md): A change that invalidates the layout of the containing view’s subviews.
- [NSView.Invalidations.Tuple](tuple.md): A change that invalidates a combination of factors covered by the other invalidation types.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/invalidations/tuple](https://developer.apple.com/documentation/appkit/nsview/invalidations/tuple)

# NSView.Invalidations.Tuple

**Framework:** AppKit  
**Kind:** Structure  
**Availability:** macOS 12.0+ · Swift 5.1+

A change that invalidates a combination of factors covered by the other invalidation types.

## Declaration

```swift
struct Tuple<Invalidation1, Invalidation2> where Invalidation1 : NSViewInvalidating, Invalidation2 : NSViewInvalidating
```

<a id="overview"></a>

## Overview

The system uses this type when a change invalidates multiple aspects of a view. Use a tuple of the static values defined in [NSViewInvalidating](../../nsviewinvalidating.md) when more than one invalidation type applies to a change.

## Topics

### Creating the invalidation type

- [init(\_:\_:)](tuple/init%28____%29.md): Creates the invalidation type.

### Invalidating the view

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
- [NSView.Invalidations.RestorableState](restorablestate.md): A change that invalidates the restorable state of the view.

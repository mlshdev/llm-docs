> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/detachedviews](https://developer.apple.com/documentation/appkit/nsstackview/detachedviews)

# detachedViews (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

An array that contains the detached views from all the stack view’s gravity areas.

## Declaration

```swift
var detachedViews: [NSView] { get }
```

<a id="Discussion"></a>

## Discussion

A view in a detached state is not present in the stack view’s view hierarchy, but it still consumes memory.

> **Note**

>  There is no guaranteed ordering of the views in the detached views array.

## See Also

### Inspecting a Stack View

- [views](views.md): The array of views owned by the stack view.
- [views(in:)](views%28in_%29.md): Returns the array of views in the specified gravity area in the stack view.
- [clippingResistancePriority(for:)](clippingresistancepriority%28for_%29.md): Returns the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.
- [huggingPriority(for:)](huggingpriority%28for_%29.md): Returns the Auto Layout priority for the stack view to minimize its size to fit its contained views as closely as possible, for a specified user interface axis.

# detachedViews (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.9+

An array that contains the detached views from all the stack view’s gravity areas.

## Declaration

```objectivec
@property (copy, readonly) NSArray<__kindof NSView *> * detachedViews;
```

<a id="Discussion"></a>

## Discussion

A view in a detached state is not present in the stack view’s view hierarchy, but it still consumes memory.

> **Note**

>  There is no guaranteed ordering of the views in the detached views array.

## See Also

### Inspecting a Stack View

- [views](views.md): The array of views owned by the stack view.
- [viewsInGravity:](views%28in_%29.md): Returns the array of views in the specified gravity area in the stack view.
- [clippingResistancePriorityForOrientation:](clippingresistancepriority%28for_%29.md): Returns the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.
- [huggingPriorityForOrientation:](huggingpriority%28for_%29.md): Returns the Auto Layout priority for the stack view to minimize its size to fit its contained views as closely as possible, for a specified user interface axis.

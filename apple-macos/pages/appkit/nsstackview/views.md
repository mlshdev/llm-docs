> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsstackview/views](https://developer.apple.com/documentation/appkit/nsstackview/views)

# views (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The array of views owned by the stack view.

## Declaration

```swift
var views: [NSView] { get }
```

<a id="Discussion"></a>

## Discussion

The `views` array always contains all of the views owned and managed by the stack view, regardless of their gravity area placement and regardless of whether or not they are attached. The index position of each view in the array matches the view ordering within the stack view. A detached view’s index position is its stack view position when attached.

## See Also

### Inspecting a Stack View

- [views(in:)](views%28in_%29.md): Returns the array of views in the specified gravity area in the stack view.
- [detachedViews](detachedviews.md): An array that contains the detached views from all the stack view’s gravity areas.
- [clippingResistancePriority(for:)](clippingresistancepriority%28for_%29.md): Returns the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.
- [huggingPriority(for:)](huggingpriority%28for_%29.md): Returns the Auto Layout priority for the stack view to minimize its size to fit its contained views as closely as possible, for a specified user interface axis.

# views (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The array of views owned by the stack view.

## Declaration

```objectivec
@property (copy, readonly) NSArray<__kindof NSView *> * views;
```

<a id="Discussion"></a>

## Discussion

The `views` array always contains all of the views owned and managed by the stack view, regardless of their gravity area placement and regardless of whether or not they are attached. The index position of each view in the array matches the view ordering within the stack view. A detached view’s index position is its stack view position when attached.

## See Also

### Inspecting a Stack View

- [viewsInGravity:](views%28in_%29.md): Returns the array of views in the specified gravity area in the stack view.
- [detachedViews](detachedviews.md): An array that contains the detached views from all the stack view’s gravity areas.
- [clippingResistancePriorityForOrientation:](clippingresistancepriority%28for_%29.md): Returns the Auto Layout priority for resisting clipping of views in the stack view when Auto Layout attempts to reduce the stack view’s size.
- [huggingPriorityForOrientation:](huggingpriority%28for_%29.md): Returns the Auto Layout priority for the stack view to minimize its size to fit its contained views as closely as possible, for a specified user interface axis.

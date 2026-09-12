> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/ancestorshared(with:)](https://developer.apple.com/documentation/appkit/nsview/ancestorshared(with:))

# ancestorShared(with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the closest ancestor shared by the view and another specified view.

## Declaration

```swift
func ancestorShared(with view: NSView) -> NSView?
```

## Parameters

- `view`: Another view to test for closest shared ancestor with the view.

<a id="return-value"></a>

## Return Value

The closest ancestor or `nil` if there’s no such object. Returns `self` if `aView` is identical to the view.

## See Also

### Getting the Related Objects

- [superview](superview.md): The view that is the parent of the current view.
- [subviews](subviews.md): The array of views embedded in the current view.
- [window](window.md): The view’s window object, if it is installed in a window.
- [opaqueAncestor](opaqueancestor.md): The view’s closest opaque ancestor, which might be the view itself.
- [isDescendant(of:)](isdescendant%28of_%29.md): Returns a Boolean value that indicates whether the view is a subview of the specified view.
- [enclosingMenuItem](enclosingmenuitem.md): The menu item containing the view or any of its superviews in the view hierarchy.
- [enclosingScrollView](enclosingscrollview.md): The nearest ancestor scroll view that contains the current view.

# ancestorSharedWithView: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the closest ancestor shared by the view and another specified view.

## Declaration

```objectivec
- (NSView *) ancestorSharedWithView:(NSView *) view;
```

## Parameters

- `view`: Another view to test for closest shared ancestor with the view.

<a id="return-value"></a>

## Return Value

The closest ancestor or `nil` if there’s no such object. Returns `self` if `aView` is identical to the view.

## See Also

### Getting the Related Objects

- [superview](superview.md): The view that is the parent of the current view.
- [subviews](subviews.md): The array of views embedded in the current view.
- [window](window.md): The view’s window object, if it is installed in a window.
- [opaqueAncestor](opaqueancestor.md): The view’s closest opaque ancestor, which might be the view itself.
- [isDescendantOf:](isdescendant%28of_%29.md): Returns a Boolean value that indicates whether the view is a subview of the specified view.
- [enclosingMenuItem](enclosingmenuitem.md): The menu item containing the view or any of its superviews in the view hierarchy.
- [enclosingScrollView](enclosingscrollview.md): The nearest ancestor scroll view that contains the current view.

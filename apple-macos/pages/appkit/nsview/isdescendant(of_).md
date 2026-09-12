> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/isdescendant(of:)](https://developer.apple.com/documentation/appkit/nsview/isdescendant(of:))

# isDescendant(of:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the view is a subview of the specified view.

## Declaration

```swift
func isDescendant(of view: NSView) -> Bool
```

## Parameters

- `view`: The view to test for subview relationship within the view hierarchy.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view is a subview, or distant subview, of the specified view.

<a id="Discussion"></a>

## Discussion

The method returns [true](https://developer.apple.com/documentation/swift/true) if the view is either an immediate or distant subview of `aView`.

## See Also

### Getting the Related Objects

- [superview](superview.md): The view that is the parent of the current view.
- [subviews](subviews.md): The array of views embedded in the current view.
- [window](window.md): The view’s window object, if it is installed in a window.
- [opaqueAncestor](opaqueancestor.md): The view’s closest opaque ancestor, which might be the view itself.
- [ancestorShared(with:)](ancestorshared%28with_%29.md): Returns the closest ancestor shared by the view and another specified view.
- [enclosingMenuItem](enclosingmenuitem.md): The menu item containing the view or any of its superviews in the view hierarchy.
- [enclosingScrollView](enclosingscrollview.md): The nearest ancestor scroll view that contains the current view.

# isDescendantOf: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns a Boolean value that indicates whether the view is a subview of the specified view.

## Declaration

```objectivec
- (BOOL) isDescendantOf:(NSView *) view;
```

## Parameters

- `view`: The view to test for subview relationship within the view hierarchy.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the view is a subview, or distant subview, of the specified view.

<a id="Discussion"></a>

## Discussion

The method returns [true](https://developer.apple.com/documentation/swift/true) if the view is either an immediate or distant subview of `aView`.

## See Also

### Getting the Related Objects

- [superview](superview.md): The view that is the parent of the current view.
- [subviews](subviews.md): The array of views embedded in the current view.
- [window](window.md): The view’s window object, if it is installed in a window.
- [opaqueAncestor](opaqueancestor.md): The view’s closest opaque ancestor, which might be the view itself.
- [ancestorSharedWithView:](ancestorshared%28with_%29.md): Returns the closest ancestor shared by the view and another specified view.
- [enclosingMenuItem](enclosingmenuitem.md): The menu item containing the view or any of its superviews in the view hierarchy.
- [enclosingScrollView](enclosingscrollview.md): The nearest ancestor scroll view that contains the current view.

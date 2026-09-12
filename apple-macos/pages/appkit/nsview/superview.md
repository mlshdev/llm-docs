> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/superview](https://developer.apple.com/documentation/appkit/nsview/superview)

# superview (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The view that is the parent of the current view.

## Declaration

```swift
unowned(unsafe) var superview: NSView? { get }
```

<a id="Discussion"></a>

## Discussion

The superview is the immediate ancestor of the current view. The value of this property is `nil` when the view is not installed in a view hierarchy. To set the value of this property, use the [addSubview(\_:)](addsubview%28__%29.md) method to embed the current view inside another view.

When checking the value of this property iteratively or recursively, be sure to compare the superview object to the content view of the window to avoid proceeding out of the view hierarchy.

## See Also

### Related Documentation

- [removeFromSuperview()](removefromsuperview%28%29.md): Unlinks the view from its superview and its window, removes it from the responder chain, and invalidates its cursor rectangles.

### Getting the Related Objects

- [subviews](subviews.md): The array of views embedded in the current view.
- [window](window.md): The view’s window object, if it is installed in a window.
- [opaqueAncestor](opaqueancestor.md): The view’s closest opaque ancestor, which might be the view itself.
- [isDescendant(of:)](isdescendant%28of_%29.md): Returns a Boolean value that indicates whether the view is a subview of the specified view.
- [ancestorShared(with:)](ancestorshared%28with_%29.md): Returns the closest ancestor shared by the view and another specified view.
- [enclosingMenuItem](enclosingmenuitem.md): The menu item containing the view or any of its superviews in the view hierarchy.
- [enclosingScrollView](enclosingscrollview.md): The nearest ancestor scroll view that contains the current view.

# superview (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The view that is the parent of the current view.

## Declaration

```objectivec
@property (unsafe_unretained, readonly, nullable) NSView * superview;
```

<a id="Discussion"></a>

## Discussion

The superview is the immediate ancestor of the current view. The value of this property is `nil` when the view is not installed in a view hierarchy. To set the value of this property, use the [addSubview:](addsubview%28__%29.md) method to embed the current view inside another view.

When checking the value of this property iteratively or recursively, be sure to compare the superview object to the content view of the window to avoid proceeding out of the view hierarchy.

## See Also

### Related Documentation

- [removeFromSuperview](removefromsuperview%28%29.md): Unlinks the view from its superview and its window, removes it from the responder chain, and invalidates its cursor rectangles.

### Getting the Related Objects

- [subviews](subviews.md): The array of views embedded in the current view.
- [window](window.md): The view’s window object, if it is installed in a window.
- [opaqueAncestor](opaqueancestor.md): The view’s closest opaque ancestor, which might be the view itself.
- [isDescendantOf:](isdescendant%28of_%29.md): Returns a Boolean value that indicates whether the view is a subview of the specified view.
- [ancestorSharedWithView:](ancestorshared%28with_%29.md): Returns the closest ancestor shared by the view and another specified view.
- [enclosingMenuItem](enclosingmenuitem.md): The menu item containing the view or any of its superviews in the view hierarchy.
- [enclosingScrollView](enclosingscrollview.md): The nearest ancestor scroll view that contains the current view.

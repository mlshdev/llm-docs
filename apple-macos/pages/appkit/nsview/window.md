> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/window](https://developer.apple.com/documentation/appkit/nsview/window)

# window (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The view’s window object, if it is installed in a window.

## Declaration

```swift
unowned(unsafe) var window: NSWindow? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if the view is not currently installed in a window.

## See Also

### Getting the Related Objects

- [superview](superview.md): The view that is the parent of the current view.
- [subviews](subviews.md): The array of views embedded in the current view.
- [opaqueAncestor](opaqueancestor.md): The view’s closest opaque ancestor, which might be the view itself.
- [isDescendant(of:)](isdescendant%28of_%29.md): Returns a Boolean value that indicates whether the view is a subview of the specified view.
- [ancestorShared(with:)](ancestorshared%28with_%29.md): Returns the closest ancestor shared by the view and another specified view.
- [enclosingMenuItem](enclosingmenuitem.md): The menu item containing the view or any of its superviews in the view hierarchy.
- [enclosingScrollView](enclosingscrollview.md): The nearest ancestor scroll view that contains the current view.

# window (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The view’s window object, if it is installed in a window.

## Declaration

```objectivec
@property (unsafe_unretained, readonly, nullable) NSWindow * window;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if the view is not currently installed in a window.

## See Also

### Getting the Related Objects

- [superview](superview.md): The view that is the parent of the current view.
- [subviews](subviews.md): The array of views embedded in the current view.
- [opaqueAncestor](opaqueancestor.md): The view’s closest opaque ancestor, which might be the view itself.
- [isDescendantOf:](isdescendant%28of_%29.md): Returns a Boolean value that indicates whether the view is a subview of the specified view.
- [ancestorSharedWithView:](ancestorshared%28with_%29.md): Returns the closest ancestor shared by the view and another specified view.
- [enclosingMenuItem](enclosingmenuitem.md): The menu item containing the view or any of its superviews in the view hierarchy.
- [enclosingScrollView](enclosingscrollview.md): The nearest ancestor scroll view that contains the current view.

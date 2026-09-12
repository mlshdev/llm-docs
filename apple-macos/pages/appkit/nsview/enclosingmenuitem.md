> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/enclosingmenuitem](https://developer.apple.com/documentation/appkit/nsview/enclosingmenuitem)

# enclosingMenuItem (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The menu item containing the view or any of its superviews in the view hierarchy.

## Declaration

```swift
var enclosingMenuItem: NSMenuItem? { get }
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if the view is not in a menu item.

## See Also

### Getting the Related Objects

- [superview](superview.md): The view that is the parent of the current view.
- [subviews](subviews.md): The array of views embedded in the current view.
- [window](window.md): The view’s window object, if it is installed in a window.
- [opaqueAncestor](opaqueancestor.md): The view’s closest opaque ancestor, which might be the view itself.
- [isDescendant(of:)](isdescendant%28of_%29.md): Returns a Boolean value that indicates whether the view is a subview of the specified view.
- [ancestorShared(with:)](ancestorshared%28with_%29.md): Returns the closest ancestor shared by the view and another specified view.
- [enclosingScrollView](enclosingscrollview.md): The nearest ancestor scroll view that contains the current view.

# enclosingMenuItem (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.5+

The menu item containing the view or any of its superviews in the view hierarchy.

## Declaration

```objectivec
@property (strong, readonly, nullable) NSMenuItem * enclosingMenuItem;
```

<a id="Discussion"></a>

## Discussion

The value of this property is `nil` if the view is not in a menu item.

## See Also

### Getting the Related Objects

- [superview](superview.md): The view that is the parent of the current view.
- [subviews](subviews.md): The array of views embedded in the current view.
- [window](window.md): The view’s window object, if it is installed in a window.
- [opaqueAncestor](opaqueancestor.md): The view’s closest opaque ancestor, which might be the view itself.
- [isDescendantOf:](isdescendant%28of_%29.md): Returns a Boolean value that indicates whether the view is a subview of the specified view.
- [ancestorSharedWithView:](ancestorshared%28with_%29.md): Returns the closest ancestor shared by the view and another specified view.
- [enclosingScrollView](enclosingscrollview.md): The nearest ancestor scroll view that contains the current view.

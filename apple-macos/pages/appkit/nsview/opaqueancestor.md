> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/opaqueancestor](https://developer.apple.com/documentation/appkit/nsview/opaqueancestor)

# opaqueAncestor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The view’s closest opaque ancestor, which might be the view itself.

## Declaration

```swift
unowned(unsafe) var opaqueAncestor: NSView? { get }
```

## See Also

### Related Documentation

- [displayIfNeededIgnoringOpacity()](displayifneededignoringopacity%28%29.md): Acts as [displayIfNeeded()](displayifneeded%28%29.md), except that this method doesn’t back up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [displayIgnoringOpacity(\_:)](displayignoringopacity%28__%29.md): Displays the view but confines drawing to a specified region and does not back up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [displayIfNeededIgnoringOpacity(\_:)](displayifneededignoringopacity%28__%29.md): Acts as [displayIfNeeded()](displayifneeded%28%29.md), but confining drawing to `aRect` and not backing up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [isOpaque](isopaque.md): A Boolean value indicating whether the view fills its frame rectangle with opaque content.

### Getting the Related Objects

- [superview](superview.md): The view that is the parent of the current view.
- [subviews](subviews.md): The array of views embedded in the current view.
- [window](window.md): The view’s window object, if it is installed in a window.
- [isDescendant(of:)](isdescendant%28of_%29.md): Returns a Boolean value that indicates whether the view is a subview of the specified view.
- [ancestorShared(with:)](ancestorshared%28with_%29.md): Returns the closest ancestor shared by the view and another specified view.
- [enclosingMenuItem](enclosingmenuitem.md): The menu item containing the view or any of its superviews in the view hierarchy.
- [enclosingScrollView](enclosingscrollview.md): The nearest ancestor scroll view that contains the current view.

# opaqueAncestor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The view’s closest opaque ancestor, which might be the view itself.

## Declaration

```objectivec
@property (assign, readonly, nullable) NSView * opaqueAncestor;
```

## See Also

### Related Documentation

- [displayIfNeededIgnoringOpacity](displayifneededignoringopacity%28%29.md): Acts as [displayIfNeeded](displayifneeded%28%29.md), except that this method doesn’t back up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [displayRectIgnoringOpacity:](displayignoringopacity%28__%29.md): Displays the view but confines drawing to a specified region and does not back up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [displayIfNeededInRectIgnoringOpacity:](displayifneededignoringopacity%28__%29.md): Acts as [displayIfNeeded](displayifneeded%28%29.md), but confining drawing to `aRect` and not backing up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [opaque](isopaque.md): A Boolean value indicating whether the view fills its frame rectangle with opaque content.

### Getting the Related Objects

- [superview](superview.md): The view that is the parent of the current view.
- [subviews](subviews.md): The array of views embedded in the current view.
- [window](window.md): The view’s window object, if it is installed in a window.
- [isDescendantOf:](isdescendant%28of_%29.md): Returns a Boolean value that indicates whether the view is a subview of the specified view.
- [ancestorSharedWithView:](ancestorshared%28with_%29.md): Returns the closest ancestor shared by the view and another specified view.
- [enclosingMenuItem](enclosingmenuitem.md): The menu item containing the view or any of its superviews in the view hierarchy.
- [enclosingScrollView](enclosingscrollview.md): The nearest ancestor scroll view that contains the current view.

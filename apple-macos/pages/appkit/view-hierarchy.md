> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/view-hierarchy](https://developer.apple.com/documentation/appkit/view-hierarchy)

# View Hierarchy (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Manage the subviews, superview, and window of a view and respond to notifications when the view hierarchy changes.

## Topics

### Getting the Related Objects

- [superview](nsview/superview.md): The view that is the parent of the current view.
- [subviews](nsview/subviews.md): The array of views embedded in the current view.
- [window](nsview/window.md): The view’s window object, if it is installed in a window.
- [opaqueAncestor](nsview/opaqueancestor.md): The view’s closest opaque ancestor, which might be the view itself.
- [isDescendant(of:)](nsview/isdescendant%28of_%29.md): Returns a Boolean value that indicates whether the view is a subview of the specified view.
- [ancestorShared(with:)](nsview/ancestorshared%28with_%29.md): Returns the closest ancestor shared by the view and another specified view.
- [enclosingMenuItem](nsview/enclosingmenuitem.md): The menu item containing the view or any of its superviews in the view hierarchy.
- [enclosingScrollView](nsview/enclosingscrollview.md): The nearest ancestor scroll view that contains the current view.

### Adding and Removing Subviews

- [addSubview(\_:)](nsview/addsubview%28__%29.md): Adds a view to the view’s subviews so it’s displayed above its siblings.
- [addSubview(\_:positioned:relativeTo:)](nsview/addsubview%28__positioned_relativeto_%29.md): Inserts a view among the view’s subviews so it’s displayed immediately above or below another view.
- [removeFromSuperview()](nsview/removefromsuperview%28%29.md): Unlinks the view from its superview and its window, removes it from the responder chain, and invalidates its cursor rectangles.
- [removeFromSuperviewWithoutNeedingDisplay()](nsview/removefromsuperviewwithoutneedingdisplay%28%29.md): Unlinks the view from its superview and its window and removes it from the responder chain, but does not invalidate its cursor rectangles to cause redrawing.
- [replaceSubview(\_:with:)](nsview/replacesubview%28__with_%29.md): Replaces one of the view’s subviews with another view.
- [sortSubviews(\_:context:)](nsview/sortsubviews%28__context_%29.md): Orders the view’s immediate subviews using the specified comparator function.

### Responding to View-Related Notifications

- [didAddSubview(\_:)](nsview/didaddsubview%28__%29.md): Overridden by subclasses to perform additional actions when subviews are added to the view.
- [viewDidMoveToSuperview()](nsview/viewdidmovetosuperview%28%29.md): Informs the view that its superview has changed (possibly to `nil`).
- [viewDidMoveToWindow()](nsview/viewdidmovetowindow%28%29.md): Informs the view that it has been added to a new view hierarchy.
- [viewWillMove(toSuperview:)](nsview/viewwillmove%28tosuperview_%29.md): Informs the view that its superview is about to change to the specified superview (which may be `nil`).
- [viewWillMove(toWindow:)](nsview/viewwillmove%28towindow_%29.md): Informs the view that it’s being added to the view hierarchy of the specified window object (which may be `nil`).
- [willRemoveSubview(\_:)](nsview/willremovesubview%28__%29.md): Overridden by subclasses to perform additional actions before subviews are removed from the view.

### Identifying Views by Tag

- [viewWithTag(\_:)](nsview/viewwithtag%28__%29.md): Returns the view’s nearest descendant (including itself) with a specific tag, or `nil` if no subview has that tag.
- [tag](nsview/tag.md): The view’s tag, which is an integer that you use to identify the view within your app.

## See Also

### Configuring the view

- [View Coordinates](view-coordinates.md): Manage the frame and bounds rectangles that determine the size and position of the view in the view hierarchy.
- [Appearance](nsview-appearance.md): Change the view’s visibility, vibrancy, and focus ring and respond to appearance-related changes.
- [Core Animation Support](core-animation-support.md): Manage the layer object that provides the view’s visual representation and accelerates drawing operations.
- [Related UI](related-ui.md): Manage contextual menus, cursors, tool tips, and other system-provided windows and content.

# View Hierarchy (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Manage the subviews, superview, and window of a view and respond to notifications when the view hierarchy changes.

## Topics

### Getting the Related Objects

- [superview](nsview/superview.md): The view that is the parent of the current view.
- [subviews](nsview/subviews.md): The array of views embedded in the current view.
- [window](nsview/window.md): The view’s window object, if it is installed in a window.
- [opaqueAncestor](nsview/opaqueancestor.md): The view’s closest opaque ancestor, which might be the view itself.
- [isDescendantOf:](nsview/isdescendant%28of_%29.md): Returns a Boolean value that indicates whether the view is a subview of the specified view.
- [ancestorSharedWithView:](nsview/ancestorshared%28with_%29.md): Returns the closest ancestor shared by the view and another specified view.
- [enclosingMenuItem](nsview/enclosingmenuitem.md): The menu item containing the view or any of its superviews in the view hierarchy.
- [enclosingScrollView](nsview/enclosingscrollview.md): The nearest ancestor scroll view that contains the current view.

### Adding and Removing Subviews

- [addSubview:](nsview/addsubview%28__%29.md): Adds a view to the view’s subviews so it’s displayed above its siblings.
- [addSubview:positioned:relativeTo:](nsview/addsubview%28__positioned_relativeto_%29.md): Inserts a view among the view’s subviews so it’s displayed immediately above or below another view.
- [removeFromSuperview](nsview/removefromsuperview%28%29.md): Unlinks the view from its superview and its window, removes it from the responder chain, and invalidates its cursor rectangles.
- [removeFromSuperviewWithoutNeedingDisplay](nsview/removefromsuperviewwithoutneedingdisplay%28%29.md): Unlinks the view from its superview and its window and removes it from the responder chain, but does not invalidate its cursor rectangles to cause redrawing.
- [replaceSubview:with:](nsview/replacesubview%28__with_%29.md): Replaces one of the view’s subviews with another view.
- [sortSubviewsUsingFunction:context:](nsview/sortsubviews%28__context_%29.md): Orders the view’s immediate subviews using the specified comparator function.

### Responding to View-Related Notifications

- [didAddSubview:](nsview/didaddsubview%28__%29.md): Overridden by subclasses to perform additional actions when subviews are added to the view.
- [viewDidMoveToSuperview](nsview/viewdidmovetosuperview%28%29.md): Informs the view that its superview has changed (possibly to `nil`).
- [viewDidMoveToWindow](nsview/viewdidmovetowindow%28%29.md): Informs the view that it has been added to a new view hierarchy.
- [viewWillMoveToSuperview:](nsview/viewwillmove%28tosuperview_%29.md): Informs the view that its superview is about to change to the specified superview (which may be `nil`).
- [viewWillMoveToWindow:](nsview/viewwillmove%28towindow_%29.md): Informs the view that it’s being added to the view hierarchy of the specified window object (which may be `nil`).
- [willRemoveSubview:](nsview/willremovesubview%28__%29.md): Overridden by subclasses to perform additional actions before subviews are removed from the view.

### Identifying Views by Tag

- [viewWithTag:](nsview/viewwithtag%28__%29.md): Returns the view’s nearest descendant (including itself) with a specific tag, or `nil` if no subview has that tag.
- [tag](nsview/tag.md): The view’s tag, which is an integer that you use to identify the view within your app.

## See Also

### Configuring the view

- [View Coordinates](view-coordinates.md): Manage the frame and bounds rectangles that determine the size and position of the view in the view hierarchy.
- [Appearance](nsview-appearance.md): Change the view’s visibility, vibrancy, and focus ring and respond to appearance-related changes.
- [Core Animation Support](core-animation-support.md): Manage the layer object that provides the view’s visual representation and accelerates drawing operations.
- [Related UI](related-ui.md): Manage contextual menus, cursors, tool tips, and other system-provided windows and content.

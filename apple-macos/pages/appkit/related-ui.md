> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/related-ui](https://developer.apple.com/documentation/appkit/related-ui)

# Related UI (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Manage contextual menus, cursors, tool tips, and other system-provided windows and content.

## Topics

### Managing Contextual Menus

- [menu(for:)](nsview/menu%28for_%29.md): Overridden by subclasses to return a context-sensitive pop-up menu for a given mouse-down event.
- [defaultMenu](nsview/defaultmenu.md): Overridden by subclasses to return the default pop-up menu for instances of the receiving class.
- [willOpenMenu(\_:with:)](nsview/willopenmenu%28__with_%29.md): Called just before a contextual menu for a view is opened on screen.
- [didCloseMenu(\_:with:)](nsview/didclosemenu%28__with_%29.md): Called after a contextual menu that was displayed from the receiving view has been closed.

### Responding to Cursor Movements

- [addCursorRect(\_:cursor:)](nsview/addcursorrect%28__cursor_%29.md): Establishes the cursor to be used when the mouse pointer lies within a specified region.
- [removeCursorRect(\_:cursor:)](nsview/removecursorrect%28__cursor_%29.md): Completely removes a cursor rectangle from the view.
- [discardCursorRects()](nsview/discardcursorrects%28%29.md): Invalidates all cursor rectangles set up using [addCursorRect(\_:cursor:)](nsview/addcursorrect%28__cursor_%29.md).
- [resetCursorRects()](nsview/resetcursorrects%28%29.md): Overridden by subclasses to define their default cursor rectangles.

### Providing a Tool Tip

- [toolTip](nsview/tooltip.md): The text for the view’s tooltip.
- [addToolTip(\_:owner:userData:)](nsview/addtooltip%28__owner_userdata_%29.md): Creates a tooltip for a defined area in the view and returns a tag that identifies the tooltip rectangle.
- [removeAllToolTips()](nsview/removealltooltips%28%29.md): Removes all tooltips assigned to the view.
- [removeToolTip(\_:)](nsview/removetooltip%28__%29.md): Removes the tooltip identified by specified tag.
- [NSView.ToolTipTag](nsview/tooltiptag.md): This type describes the rectangle used to identify a tooltip rectangle.

### Displaying Definition Windows

- [showDefinition(for:at:)](nsview/showdefinition%28for_at_%29.md): Shows a window displaying the definition of the attributed string at the specified point.
- [showDefinition(for:range:options:baselineOriginProvider:)](nsview/showdefinition%28for_range_options_baselineoriginprovider_%29.md): Shows a window displaying the definition of the specified range of the attributed string.
- [NSView.DefinitionOptionKey](nsview/definitionoptionkey.md): Keys to include in your definition.
- [NSView.DefinitionPresentationType](nsview/definitionpresentationtype.md): Presentation options for the window.

### Getting the Focus View

- [focusView](nsview/focusview.md): The currently focused view object.

### Synchronizing with Ruler Views

- [rulerView(\_:didAdd:)](nsview/rulerview%28__didadd_%29.md): Informs the client that `aRulerView` allowed the user to add `aMarker`.
- [rulerView(\_:didMove:)](nsview/rulerview%28__didmove_%29.md): Informs the client that `aRulerView` allowed the user to move `aMarker`.
- [rulerView(\_:didRemove:)](nsview/rulerview%28__didremove_%29.md): Informs the client that `aRulerView` allowed the user to remove `aMarker`.
- [rulerView(\_:handleMouseDownWith:)](nsview/rulerview%28__handlemousedownwith_%29.md): Informs the client that the user has pressed the mouse button while the cursor is in the ruler area of `aRulerView`.
- [rulerView(\_:locationFor:)](nsview/rulerview%28__locationfor_%29.md)
- [rulerView(\_:pointForLocation:)](nsview/rulerview%28__pointforlocation_%29.md)
- [rulerView(\_:shouldAdd:)](nsview/rulerview%28__shouldadd_%29.md): Requests permission for `aRulerView` to add `aMarker`, an NSRulerMarker being dragged onto the ruler by the user.
- [rulerView(\_:shouldMove:)](nsview/rulerview%28__shouldmove_%29.md): Requests permission for `aRulerView` to move `aMarker`.
- [rulerView(\_:shouldRemove:)](nsview/rulerview%28__shouldremove_%29.md): Requests permission for `aRulerView` to remove `aMarker`.
- [rulerView(\_:willAdd:atLocation:)](nsview/rulerview%28__willadd_atlocation_%29.md): Informs the client that `aRulerView` will add the new NSRulerMarker, `aMarker`.
- [rulerView(\_:willMove:toLocation:)](nsview/rulerview%28__willmove_tolocation_%29.md): Informs the client that `aRulerView` will move `aMarker`, an NSRulerMarker already on the ruler view.
- [rulerView(\_:willSetClientView:)](nsview/rulerview%28__willsetclientview_%29.md): Informs the client view that `aRulerView` is about to be appropriated by `newClient`.

### Synchronizing with the display’s refresh rate

- [displayLink(target:selector:)](nsview/displaylink%28target_selector_%29.md): Returns a new display link whose callback will be invoked in-sync with the display the view is on.

## See Also

### Configuring the view

- [View Hierarchy](view-hierarchy.md): Manage the subviews, superview, and window of a view and respond to notifications when the view hierarchy changes.
- [View Coordinates](view-coordinates.md): Manage the frame and bounds rectangles that determine the size and position of the view in the view hierarchy.
- [Appearance](nsview-appearance.md): Change the view’s visibility, vibrancy, and focus ring and respond to appearance-related changes.
- [Core Animation Support](core-animation-support.md): Manage the layer object that provides the view’s visual representation and accelerates drawing operations.

# Related UI (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Manage contextual menus, cursors, tool tips, and other system-provided windows and content.

## Topics

### Managing Contextual Menus

- [menuForEvent:](nsview/menu%28for_%29.md): Overridden by subclasses to return a context-sensitive pop-up menu for a given mouse-down event.
- [defaultMenu](nsview/defaultmenu.md): Overridden by subclasses to return the default pop-up menu for instances of the receiving class.
- [willOpenMenu:withEvent:](nsview/willopenmenu%28__with_%29.md): Called just before a contextual menu for a view is opened on screen.
- [didCloseMenu:withEvent:](nsview/didclosemenu%28__with_%29.md): Called after a contextual menu that was displayed from the receiving view has been closed.

### Responding to Cursor Movements

- [addCursorRect:cursor:](nsview/addcursorrect%28__cursor_%29.md): Establishes the cursor to be used when the mouse pointer lies within a specified region.
- [removeCursorRect:cursor:](nsview/removecursorrect%28__cursor_%29.md): Completely removes a cursor rectangle from the view.
- [discardCursorRects](nsview/discardcursorrects%28%29.md): Invalidates all cursor rectangles set up using [addCursorRect:cursor:](nsview/addcursorrect%28__cursor_%29.md).
- [resetCursorRects](nsview/resetcursorrects%28%29.md): Overridden by subclasses to define their default cursor rectangles.

### Providing a Tool Tip

- [toolTip](nsview/tooltip.md): The text for the view’s tooltip.
- [addToolTipRect:owner:userData:](nsview/addtooltip%28__owner_userdata_%29.md): Creates a tooltip for a defined area in the view and returns a tag that identifies the tooltip rectangle.
- [removeAllToolTips](nsview/removealltooltips%28%29.md): Removes all tooltips assigned to the view.
- [removeToolTip:](nsview/removetooltip%28__%29.md): Removes the tooltip identified by specified tag.
- [NSToolTipTag](nsview/tooltiptag.md): This type describes the rectangle used to identify a tooltip rectangle.

### Displaying Definition Windows

- [showDefinitionForAttributedString:atPoint:](nsview/showdefinition%28for_at_%29.md): Shows a window displaying the definition of the attributed string at the specified point.
- [showDefinitionForAttributedString:range:options:baselineOriginProvider:](nsview/showdefinition%28for_range_options_baselineoriginprovider_%29.md): Shows a window displaying the definition of the specified range of the attributed string.
- [NSDefinitionOptionKey](nsview/definitionoptionkey.md): Keys to include in your definition.
- [NSDefinitionPresentationType](nsview/definitionpresentationtype.md): Presentation options for the window.

### Getting the Focus View

- [focusView](nsview/focusview.md): The currently focused view object.

### Synchronizing with Ruler Views

- [rulerView:didAddMarker:](nsview/rulerview%28__didadd_%29.md): Informs the client that `aRulerView` allowed the user to add `aMarker`.
- [rulerView:didMoveMarker:](nsview/rulerview%28__didmove_%29.md): Informs the client that `aRulerView` allowed the user to move `aMarker`.
- [rulerView:didRemoveMarker:](nsview/rulerview%28__didremove_%29.md): Informs the client that `aRulerView` allowed the user to remove `aMarker`.
- [rulerView:handleMouseDown:](nsview/rulerview%28__handlemousedownwith_%29.md): Informs the client that the user has pressed the mouse button while the cursor is in the ruler area of `aRulerView`.
- [rulerView:locationForPoint:](nsview/rulerview%28__locationfor_%29.md)
- [rulerView:pointForLocation:](nsview/rulerview%28__pointforlocation_%29.md)
- [rulerView:shouldAddMarker:](nsview/rulerview%28__shouldadd_%29.md): Requests permission for `aRulerView` to add `aMarker`, an NSRulerMarker being dragged onto the ruler by the user.
- [rulerView:shouldMoveMarker:](nsview/rulerview%28__shouldmove_%29.md): Requests permission for `aRulerView` to move `aMarker`.
- [rulerView:shouldRemoveMarker:](nsview/rulerview%28__shouldremove_%29.md): Requests permission for `aRulerView` to remove `aMarker`.
- [rulerView:willAddMarker:atLocation:](nsview/rulerview%28__willadd_atlocation_%29.md): Informs the client that `aRulerView` will add the new NSRulerMarker, `aMarker`.
- [rulerView:willMoveMarker:toLocation:](nsview/rulerview%28__willmove_tolocation_%29.md): Informs the client that `aRulerView` will move `aMarker`, an NSRulerMarker already on the ruler view.
- [rulerView:willSetClientView:](nsview/rulerview%28__willsetclientview_%29.md): Informs the client view that `aRulerView` is about to be appropriated by `newClient`.

### Synchronizing with the display’s refresh rate

- [displayLinkWithTarget:selector:](nsview/displaylink%28target_selector_%29.md): Returns a new display link whose callback will be invoked in-sync with the display the view is on.

## See Also

### Configuring the view

- [View Hierarchy](view-hierarchy.md): Manage the subviews, superview, and window of a view and respond to notifications when the view hierarchy changes.
- [View Coordinates](view-coordinates.md): Manage the frame and bounds rectangles that determine the size and position of the view in the view hierarchy.
- [Appearance](nsview-appearance.md): Change the view’s visibility, vibrancy, and focus ring and respond to appearance-related changes.
- [Core Animation Support](core-animation-support.md): Manage the layer object that provides the view’s visual representation and accelerates drawing operations.

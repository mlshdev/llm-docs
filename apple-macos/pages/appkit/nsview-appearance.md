> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview-appearance](https://developer.apple.com/documentation/appkit/nsview-appearance)

# Appearance (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Change the view’s visibility, vibrancy, and focus ring and respond to appearance-related changes.

## Topics

### Showing and Hiding the View

- [isHidden](nsview/ishidden.md): A Boolean value indicating whether the view is hidden.
- [isHiddenOrHasHiddenAncestor](nsview/ishiddenorhashiddenancestor.md): A Boolean value indicating whether the view is hidden from sight because it, or one of its ancestors, is marked as hidden.
- [viewDidHide()](nsview/viewdidhide%28%29.md): Invoked when the view is hidden, either directly, or in response to an ancestor being hidden.
- [viewDidUnhide()](nsview/viewdidunhide%28%29.md): Invoked when the view is unhidden, either directly, or in response to an ancestor being unhidden

### Responding to Appearance Changes

- [viewDidChangeEffectiveAppearance()](nsview/viewdidchangeeffectiveappearance%28%29.md): Informs the view that its effective appearance changed.
- [viewDidChangeBackingProperties()](nsview/viewdidchangebackingproperties%28%29.md): Responds when the view’s backing store properties change.

### Getting the Vibrancy Setting

- [allowsVibrancy](nsview/allowsvibrancy.md): A Boolean value indicating whether the view ensures it is vibrant on top of other content.

### Drawing the Focus Ring

- [focusRingType](nsview/focusringtype.md): The type of focus ring drawn around the view.
- [focusRingMaskBounds](nsview/focusringmaskbounds.md): The focus ring mask bounds, specified in the view’s coordinate space.
- [drawFocusRingMask()](nsview/drawfocusringmask%28%29.md): Draws the focus ring mask for the view.
- [noteFocusRingMaskChanged()](nsview/notefocusringmaskchanged%28%29.md): Invoked to notify the view that the focus ring mask requires updating.
- [setKeyboardFocusRingNeedsDisplay(\_:)](nsview/setkeyboardfocusringneedsdisplay%28__%29.md): Invalidates the area around the focus ring.
- [defaultFocusRingType](nsview/defaultfocusringtype.md): Returns the default focus ring type.

### Displaying a Find Indicator

- [isDrawingFindIndicator](nsview/isdrawingfindindicator.md): A Boolean value indicating whether the view or one of its ancestors is being drawn for a find indicator.

### Configuring a Cell’s Background

- [NSView.BackgroundStyle](nsview/backgroundstyle.md): Background styles to apply to a view’s cell.

## See Also

### Configuring the view

- [View Hierarchy](view-hierarchy.md): Manage the subviews, superview, and window of a view and respond to notifications when the view hierarchy changes.
- [View Coordinates](view-coordinates.md): Manage the frame and bounds rectangles that determine the size and position of the view in the view hierarchy.
- [Core Animation Support](core-animation-support.md): Manage the layer object that provides the view’s visual representation and accelerates drawing operations.
- [Related UI](related-ui.md): Manage contextual menus, cursors, tool tips, and other system-provided windows and content.

# Appearance (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Change the view’s visibility, vibrancy, and focus ring and respond to appearance-related changes.

## Topics

### Showing and Hiding the View

- [hidden](nsview/ishidden.md): A Boolean value indicating whether the view is hidden.
- [hiddenOrHasHiddenAncestor](nsview/ishiddenorhashiddenancestor.md): A Boolean value indicating whether the view is hidden from sight because it, or one of its ancestors, is marked as hidden.
- [viewDidHide](nsview/viewdidhide%28%29.md): Invoked when the view is hidden, either directly, or in response to an ancestor being hidden.
- [viewDidUnhide](nsview/viewdidunhide%28%29.md): Invoked when the view is unhidden, either directly, or in response to an ancestor being unhidden

### Responding to Appearance Changes

- [viewDidChangeEffectiveAppearance](nsview/viewdidchangeeffectiveappearance%28%29.md): Informs the view that its effective appearance changed.
- [viewDidChangeBackingProperties](nsview/viewdidchangebackingproperties%28%29.md): Responds when the view’s backing store properties change.

### Getting the Vibrancy Setting

- [allowsVibrancy](nsview/allowsvibrancy.md): A Boolean value indicating whether the view ensures it is vibrant on top of other content.

### Drawing the Focus Ring

- [focusRingType](nsview/focusringtype.md): The type of focus ring drawn around the view.
- [focusRingMaskBounds](nsview/focusringmaskbounds.md): The focus ring mask bounds, specified in the view’s coordinate space.
- [drawFocusRingMask](nsview/drawfocusringmask%28%29.md): Draws the focus ring mask for the view.
- [noteFocusRingMaskChanged](nsview/notefocusringmaskchanged%28%29.md): Invoked to notify the view that the focus ring mask requires updating.
- [setKeyboardFocusRingNeedsDisplayInRect:](nsview/setkeyboardfocusringneedsdisplay%28__%29.md): Invalidates the area around the focus ring.
- [defaultFocusRingType](nsview/defaultfocusringtype.md): Returns the default focus ring type.

### Displaying a Find Indicator

- [drawingFindIndicator](nsview/isdrawingfindindicator.md): A Boolean value indicating whether the view or one of its ancestors is being drawn for a find indicator.

### Configuring a Cell’s Background

- [NSBackgroundStyle](nsview/backgroundstyle.md): Background styles to apply to a view’s cell.

## See Also

### Configuring the view

- [View Hierarchy](view-hierarchy.md): Manage the subviews, superview, and window of a view and respond to notifications when the view hierarchy changes.
- [View Coordinates](view-coordinates.md): Manage the frame and bounds rectangles that determine the size and position of the view in the view hierarchy.
- [Core Animation Support](core-animation-support.md): Manage the layer object that provides the view’s visual representation and accelerates drawing operations.
- [Related UI](related-ui.md): Manage contextual menus, cursors, tool tips, and other system-provided windows and content.

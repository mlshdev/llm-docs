> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview-drawing](https://developer.apple.com/documentation/appkit/nsview-drawing)

# Drawing (Swift)

**Framework:** AppKit  
**Kind:** API Collection

Draw the content of custom views and update that content when the view’s size or appearance changes.

## Topics

### Drawing the View’s Content

- [updateLayer()](nsview/updatelayer%28%29.md): Updates the view’s content by modifying its underlying layer.
- [draw(\_:)](nsview/draw%28__%29.md): Overridden by subclasses to draw the view’s image within the specified rectangle.
- [clipsToBounds](nsview/clipstobounds.md): A Boolean value that indicates whether the view, and its subviews, confine their drawing areas to the bounds of the view.
- [canDrawConcurrently](nsview/candrawconcurrently.md): A Boolean value indicating whether the view can draw its contents on a background thread.
- [visibleRect](nsview/visiblerect.md): The portion of the view that isn’t clipped by its superviews.
- [getRectsBeingDrawn(\_:count:)](nsview/getrectsbeingdrawn%28__count_%29.md): Returns by indirection a list of nonoverlapping rectangles that define the area the view is being asked to draw in [draw(\_:)](nsview/draw%28__%29.md).
- [needsToDraw(\_:)](nsview/needstodraw%28__%29.md): Returns a Boolean value indicating whether the specified rectangle intersects any part of the area that the view is being asked to draw.
- [wantsDefaultClipping](nsview/wantsdefaultclipping.md): A Boolean value indicating whether AppKit’s default clipping behavior is in effect.
- [bitmapImageRepForCachingDisplay(in:)](nsview/bitmapimagerepforcachingdisplay%28in_%29.md): Returns a bitmap-representation object suitable for caching the specified portion of the view.
- [cacheDisplay(in:to:)](nsview/cachedisplay%28in_to_%29.md): Draws the specified area of the view, and its descendants, into a provided bitmap-representation object.
- [NSBorderType](nsbordertype.md): These constants specify the type of a view’s border.

### Drawing the View in Fullscreen Mode

- [enterFullScreenMode(\_:withOptions:)](nsview/enterfullscreenmode%28__withoptions_%29.md): Sets the view to full screen mode.
- [exitFullScreenMode(options:)](nsview/exitfullscreenmode%28options_%29.md): Instructs the view to exit full screen mode.
- [isInFullScreenMode](nsview/isinfullscreenmode.md): A Boolean value indicating whether the view is in full screen mode.
- [NSView.FullScreenModeOptionKey](nsview/fullscreenmodeoptionkey.md): These constants are keys that you can use in the options dictionary in [enterFullScreenMode(\_:withOptions:)](nsview/enterfullscreenmode%28__withoptions_%29.md) and [exitFullScreenMode(options:)](nsview/exitfullscreenmode%28options_%29.md).

### Invalidating the View’s Content

- [setNeedsDisplay(\_:)](nsview/setneedsdisplay%28__%29.md): Marks the region of the view within the specified rectangle as needing display, increasing the view’s existing invalid region to include it.
- [needsDisplay](nsview/needsdisplay.md): A Boolean value that determines whether the view needs to be redrawn before being displayed.
- [display()](nsview/display%28%29.md): Displays the view and all its subviews if possible, invoking each of the `NSView` methods [lockFocus()](nsview/lockfocus%28%29.md), [draw(\_:)](nsview/draw%28__%29.md), and [unlockFocus()](nsview/unlockfocus%28%29.md) as necessary.
- [display(\_:)](nsview/display%28__%29.md): Acts as [display()](nsview/display%28%29.md), but confining drawing to a rectangular region of the view.
- [displayIgnoringOpacity(\_:)](nsview/displayignoringopacity%28__%29.md): Displays the view but confines drawing to a specified region and does not back up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [displayIgnoringOpacity(\_:in:)](nsview/displayignoringopacity%28__in_%29.md): Causes the view and its descendants to be redrawn to the specified graphics context.
- [displayIfNeeded()](nsview/displayifneeded%28%29.md): Displays the view and all its subviews if any part of the view has been marked as needing display.
- [displayIfNeeded(\_:)](nsview/displayifneeded%28__%29.md): Acts as [displayIfNeeded()](nsview/displayifneeded%28%29.md), confining drawing to a specified region of the view.
- [displayIfNeededIgnoringOpacity()](nsview/displayifneededignoringopacity%28%29.md): Acts as [displayIfNeeded()](nsview/displayifneeded%28%29.md), except that this method doesn’t back up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [displayIfNeededIgnoringOpacity(\_:)](nsview/displayifneededignoringopacity%28__%29.md): Acts as [displayIfNeeded()](nsview/displayifneeded%28%29.md), but confining drawing to `aRect` and not backing up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [translateRectsNeedingDisplay(in:by:)](nsview/translaterectsneedingdisplay%28in_by_%29.md): Translates the display rectangles by the specified delta.
- [isOpaque](nsview/isopaque.md): A Boolean value indicating whether the view fills its frame rectangle with opaque content.
- [viewWillDraw()](nsview/viewwilldraw%28%29.md): Informs the view that it’s required to draw content.

### Updating the View When Property Values Change

- [NSView.Invalidating](nsview/invalidating.md): A property wrapper that notifies the system that a property value change has invalidated an aspect of the containing view.
- [NSViewInvalidating](nsviewinvalidating.md): Implements a type of invalidation that can occur on a view that requires an update.

### Managing Live Resize

- [inLiveResize](nsview/inliveresize.md): A Boolean value indicating whether the view is being rendered as part of a live resizing operation.
- [preservesContentDuringLiveResize](nsview/preservescontentduringliveresize.md): A Boolean value indicating whether the view optimizes live-resize operations by preserving content that has not moved.
- [getRectsExposedDuringLiveResize(\_:count:)](nsview/getrectsexposedduringliveresize%28__count_%29.md): Returns a list of rectangles indicating the newly exposed areas of the view.
- [rectPreservedDuringLiveResize](nsview/rectpreservedduringliveresize.md): The rectangle identifying the portion of your view that did not change during a live resize operation.
- [viewWillStartLiveResize()](nsview/viewwillstartliveresize%28%29.md): Informs the view of the start of a live resize—the user has started resizing the view.
- [viewDidEndLiveResize()](nsview/viewdidendliveresize%28%29.md): Informs the view of the end of a live resize—the user has finished resizing the view.

## See Also

### Managing the view’s content

- [Layout](layout.md): Specify the size and position your view relative to other nearby views using rules that update your view hierarchy automatically.
- [Printing](nsview-printing.md): Create a printable version of your view’s content and handle pagination and printer-related behaviors.
- [NSViewContentSelectionInfo](nsviewcontentselectioninfo.md)

# Drawing (Objective-C)

**Framework:** AppKit  
**Kind:** API Collection

Draw the content of custom views and update that content when the view’s size or appearance changes.

## Topics

### Drawing the View’s Content

- [updateLayer](nsview/updatelayer%28%29.md): Updates the view’s content by modifying its underlying layer.
- [drawRect:](nsview/draw%28__%29.md): Overridden by subclasses to draw the view’s image within the specified rectangle.
- [clipsToBounds](nsview/clipstobounds.md): A Boolean value that indicates whether the view, and its subviews, confine their drawing areas to the bounds of the view.
- [canDrawConcurrently](nsview/candrawconcurrently.md): A Boolean value indicating whether the view can draw its contents on a background thread.
- [visibleRect](nsview/visiblerect.md): The portion of the view that isn’t clipped by its superviews.
- [getRectsBeingDrawn:count:](nsview/getrectsbeingdrawn%28__count_%29.md): Returns by indirection a list of nonoverlapping rectangles that define the area the view is being asked to draw in [drawRect:](nsview/draw%28__%29.md).
- [needsToDrawRect:](nsview/needstodraw%28__%29.md): Returns a Boolean value indicating whether the specified rectangle intersects any part of the area that the view is being asked to draw.
- [wantsDefaultClipping](nsview/wantsdefaultclipping.md): A Boolean value indicating whether AppKit’s default clipping behavior is in effect.
- [bitmapImageRepForCachingDisplayInRect:](nsview/bitmapimagerepforcachingdisplay%28in_%29.md): Returns a bitmap-representation object suitable for caching the specified portion of the view.
- [cacheDisplayInRect:toBitmapImageRep:](nsview/cachedisplay%28in_to_%29.md): Draws the specified area of the view, and its descendants, into a provided bitmap-representation object.
- [NSBorderType](nsbordertype.md): These constants specify the type of a view’s border.

### Drawing the View in Fullscreen Mode

- [enterFullScreenMode:withOptions:](nsview/enterfullscreenmode%28__withoptions_%29.md): Sets the view to full screen mode.
- [exitFullScreenModeWithOptions:](nsview/exitfullscreenmode%28options_%29.md): Instructs the view to exit full screen mode.
- [inFullScreenMode](nsview/isinfullscreenmode.md): A Boolean value indicating whether the view is in full screen mode.
- [NSViewFullScreenModeOptionKey](nsview/fullscreenmodeoptionkey.md): These constants are keys that you can use in the options dictionary in [enterFullScreenMode:withOptions:](nsview/enterfullscreenmode%28__withoptions_%29.md) and [exitFullScreenModeWithOptions:](nsview/exitfullscreenmode%28options_%29.md).

### Invalidating the View’s Content

- [setNeedsDisplayInRect:](nsview/setneedsdisplay%28__%29.md): Marks the region of the view within the specified rectangle as needing display, increasing the view’s existing invalid region to include it.
- [needsDisplay](nsview/needsdisplay.md): A Boolean value that determines whether the view needs to be redrawn before being displayed.
- [display](nsview/display%28%29.md): Displays the view and all its subviews if possible, invoking each of the `NSView` methods [lockFocus](nsview/lockfocus%28%29.md), [drawRect:](nsview/draw%28__%29.md), and [unlockFocus](nsview/unlockfocus%28%29.md) as necessary.
- [displayRect:](nsview/display%28__%29.md): Acts as [display](nsview/display%28%29.md), but confining drawing to a rectangular region of the view.
- [displayRectIgnoringOpacity:](nsview/displayignoringopacity%28__%29.md): Displays the view but confines drawing to a specified region and does not back up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [displayRectIgnoringOpacity:inContext:](nsview/displayignoringopacity%28__in_%29.md): Causes the view and its descendants to be redrawn to the specified graphics context.
- [displayIfNeeded](nsview/displayifneeded%28%29.md): Displays the view and all its subviews if any part of the view has been marked as needing display.
- [displayIfNeededInRect:](nsview/displayifneeded%28__%29.md): Acts as [displayIfNeeded](nsview/displayifneeded%28%29.md), confining drawing to a specified region of the view.
- [displayIfNeededIgnoringOpacity](nsview/displayifneededignoringopacity%28%29.md): Acts as [displayIfNeeded](nsview/displayifneeded%28%29.md), except that this method doesn’t back up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [displayIfNeededInRectIgnoringOpacity:](nsview/displayifneededignoringopacity%28__%29.md): Acts as [displayIfNeeded](nsview/displayifneeded%28%29.md), but confining drawing to `aRect` and not backing up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [translateRectsNeedingDisplayInRect:by:](nsview/translaterectsneedingdisplay%28in_by_%29.md): Translates the display rectangles by the specified delta.
- [opaque](nsview/isopaque.md): A Boolean value indicating whether the view fills its frame rectangle with opaque content.
- [viewWillDraw](nsview/viewwilldraw%28%29.md): Informs the view that it’s required to draw content.

### Managing Live Resize

- [inLiveResize](nsview/inliveresize.md): A Boolean value indicating whether the view is being rendered as part of a live resizing operation.
- [preservesContentDuringLiveResize](nsview/preservescontentduringliveresize.md): A Boolean value indicating whether the view optimizes live-resize operations by preserving content that has not moved.
- [getRectsExposedDuringLiveResize:count:](nsview/getrectsexposedduringliveresize%28__count_%29.md): Returns a list of rectangles indicating the newly exposed areas of the view.
- [rectPreservedDuringLiveResize](nsview/rectpreservedduringliveresize.md): The rectangle identifying the portion of your view that did not change during a live resize operation.
- [viewWillStartLiveResize](nsview/viewwillstartliveresize%28%29.md): Informs the view of the start of a live resize—the user has started resizing the view.
- [viewDidEndLiveResize](nsview/viewdidendliveresize%28%29.md): Informs the view of the end of a live resize—the user has finished resizing the view.

## See Also

### Managing the view’s content

- [Layout](layout.md): Specify the size and position your view relative to other nearby views using rules that update your view hierarchy automatically.
- [Printing](nsview-printing.md): Create a printable version of your view’s content and handle pagination and printer-related behaviors.
- [NSViewContentSelectionInfo](nsviewcontentselectioninfo.md)

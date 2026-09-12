> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/display(_:)](https://developer.apple.com/documentation/appkit/nsview/display(_:))

# display(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Acts as [display()](display%28%29.md), but confining drawing to a rectangular region of the view.

## Declaration

```swift
func display(_ rect: NSRect)
```

## Parameters

- `rect`: A rectangle defining the region of the view to be redrawn; it should be specified in the coordinate system of the view.

## See Also

### Invalidating the View’s Content

- [setNeedsDisplay(\_:)](setneedsdisplay%28__%29.md): Marks the region of the view within the specified rectangle as needing display, increasing the view’s existing invalid region to include it.
- [needsDisplay](needsdisplay.md): A Boolean value that determines whether the view needs to be redrawn before being displayed.
- [display()](display%28%29.md): Displays the view and all its subviews if possible, invoking each of the `NSView` methods [lockFocus()](lockfocus%28%29.md), [draw(\_:)](draw%28__%29.md), and [unlockFocus()](unlockfocus%28%29.md) as necessary.
- [displayIgnoringOpacity(\_:)](displayignoringopacity%28__%29.md): Displays the view but confines drawing to a specified region and does not back up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [displayIgnoringOpacity(\_:in:)](displayignoringopacity%28__in_%29.md): Causes the view and its descendants to be redrawn to the specified graphics context.
- [displayIfNeeded()](displayifneeded%28%29.md): Displays the view and all its subviews if any part of the view has been marked as needing display.
- [displayIfNeeded(\_:)](displayifneeded%28__%29.md): Acts as [displayIfNeeded()](displayifneeded%28%29.md), confining drawing to a specified region of the view.
- [displayIfNeededIgnoringOpacity()](displayifneededignoringopacity%28%29.md): Acts as [displayIfNeeded()](displayifneeded%28%29.md), except that this method doesn’t back up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [displayIfNeededIgnoringOpacity(\_:)](displayifneededignoringopacity%28__%29.md): Acts as [displayIfNeeded()](displayifneeded%28%29.md), but confining drawing to `aRect` and not backing up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [translateRectsNeedingDisplay(in:by:)](translaterectsneedingdisplay%28in_by_%29.md): Translates the display rectangles by the specified delta.
- [isOpaque](isopaque.md): A Boolean value indicating whether the view fills its frame rectangle with opaque content.
- [viewWillDraw()](viewwilldraw%28%29.md): Informs the view that it’s required to draw content.

# displayRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Acts as [display](display%28%29.md), but confining drawing to a rectangular region of the view.

## Declaration

```objectivec
- (void) displayRect:(NSRect) rect;
```

## Parameters

- `rect`: A rectangle defining the region of the view to be redrawn; it should be specified in the coordinate system of the view.

## See Also

### Invalidating the View’s Content

- [setNeedsDisplayInRect:](setneedsdisplay%28__%29.md): Marks the region of the view within the specified rectangle as needing display, increasing the view’s existing invalid region to include it.
- [needsDisplay](needsdisplay.md): A Boolean value that determines whether the view needs to be redrawn before being displayed.
- [display](display%28%29.md): Displays the view and all its subviews if possible, invoking each of the `NSView` methods [lockFocus](lockfocus%28%29.md), [drawRect:](draw%28__%29.md), and [unlockFocus](unlockfocus%28%29.md) as necessary.
- [displayRectIgnoringOpacity:](displayignoringopacity%28__%29.md): Displays the view but confines drawing to a specified region and does not back up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [displayRectIgnoringOpacity:inContext:](displayignoringopacity%28__in_%29.md): Causes the view and its descendants to be redrawn to the specified graphics context.
- [displayIfNeeded](displayifneeded%28%29.md): Displays the view and all its subviews if any part of the view has been marked as needing display.
- [displayIfNeededInRect:](displayifneeded%28__%29.md): Acts as [displayIfNeeded](displayifneeded%28%29.md), confining drawing to a specified region of the view.
- [displayIfNeededIgnoringOpacity](displayifneededignoringopacity%28%29.md): Acts as [displayIfNeeded](displayifneeded%28%29.md), except that this method doesn’t back up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [displayIfNeededInRectIgnoringOpacity:](displayifneededignoringopacity%28__%29.md): Acts as [displayIfNeeded](displayifneeded%28%29.md), but confining drawing to `aRect` and not backing up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [translateRectsNeedingDisplayInRect:by:](translaterectsneedingdisplay%28in_by_%29.md): Translates the display rectangles by the specified delta.
- [opaque](isopaque.md): A Boolean value indicating whether the view fills its frame rectangle with opaque content.
- [viewWillDraw](viewwilldraw%28%29.md): Informs the view that it’s required to draw content.

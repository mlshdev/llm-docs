> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/setneedsdisplay(_:)](https://developer.apple.com/documentation/appkit/nsview/setneedsdisplay(_:))

# setNeedsDisplay(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Marks the region of the view within the specified rectangle as needing display, increasing the view’s existing invalid region to include it.

## Declaration

```swift
func setNeedsDisplay(_ invalidRect: NSRect)
```

## Parameters

- `invalidRect`: The rectangular region of the view to mark as invalid; it should be specified in the coordinate system of the view.

<a id="Discussion"></a>

## Discussion

A later `displayIfNeeded` method will then perform drawing only within the invalid region. View objects marked as needing display are automatically redisplayed on each pass through the application’s event loop. (View objects that need to redisplay before the event loop comes around can of course immediately be sent the appropriate `display` method.)

## See Also

### Invalidating the View’s Content

- [needsDisplay](needsdisplay.md): A Boolean value that determines whether the view needs to be redrawn before being displayed.
- [display()](display%28%29.md): Displays the view and all its subviews if possible, invoking each of the `NSView` methods [lockFocus()](lockfocus%28%29.md), [draw(\_:)](draw%28__%29.md), and [unlockFocus()](unlockfocus%28%29.md) as necessary.
- [display(\_:)](display%28__%29.md): Acts as [display()](display%28%29.md), but confining drawing to a rectangular region of the view.
- [displayIgnoringOpacity(\_:)](displayignoringopacity%28__%29.md): Displays the view but confines drawing to a specified region and does not back up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [displayIgnoringOpacity(\_:in:)](displayignoringopacity%28__in_%29.md): Causes the view and its descendants to be redrawn to the specified graphics context.
- [displayIfNeeded()](displayifneeded%28%29.md): Displays the view and all its subviews if any part of the view has been marked as needing display.
- [displayIfNeeded(\_:)](displayifneeded%28__%29.md): Acts as [displayIfNeeded()](displayifneeded%28%29.md), confining drawing to a specified region of the view.
- [displayIfNeededIgnoringOpacity()](displayifneededignoringopacity%28%29.md): Acts as [displayIfNeeded()](displayifneeded%28%29.md), except that this method doesn’t back up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [displayIfNeededIgnoringOpacity(\_:)](displayifneededignoringopacity%28__%29.md): Acts as [displayIfNeeded()](displayifneeded%28%29.md), but confining drawing to `aRect` and not backing up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [translateRectsNeedingDisplay(in:by:)](translaterectsneedingdisplay%28in_by_%29.md): Translates the display rectangles by the specified delta.
- [isOpaque](isopaque.md): A Boolean value indicating whether the view fills its frame rectangle with opaque content.
- [viewWillDraw()](viewwilldraw%28%29.md): Informs the view that it’s required to draw content.

# setNeedsDisplayInRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Marks the region of the view within the specified rectangle as needing display, increasing the view’s existing invalid region to include it.

## Declaration

```objectivec
- (void) setNeedsDisplayInRect:(NSRect) invalidRect;
```

## Parameters

- `invalidRect`: The rectangular region of the view to mark as invalid; it should be specified in the coordinate system of the view.

<a id="Discussion"></a>

## Discussion

A later `displayIfNeeded` method will then perform drawing only within the invalid region. View objects marked as needing display are automatically redisplayed on each pass through the application’s event loop. (View objects that need to redisplay before the event loop comes around can of course immediately be sent the appropriate `display` method.)

## See Also

### Invalidating the View’s Content

- [needsDisplay](needsdisplay.md): A Boolean value that determines whether the view needs to be redrawn before being displayed.
- [display](display%28%29.md): Displays the view and all its subviews if possible, invoking each of the `NSView` methods [lockFocus](lockfocus%28%29.md), [drawRect:](draw%28__%29.md), and [unlockFocus](unlockfocus%28%29.md) as necessary.
- [displayRect:](display%28__%29.md): Acts as [display](display%28%29.md), but confining drawing to a rectangular region of the view.
- [displayRectIgnoringOpacity:](displayignoringopacity%28__%29.md): Displays the view but confines drawing to a specified region and does not back up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [displayRectIgnoringOpacity:inContext:](displayignoringopacity%28__in_%29.md): Causes the view and its descendants to be redrawn to the specified graphics context.
- [displayIfNeeded](displayifneeded%28%29.md): Displays the view and all its subviews if any part of the view has been marked as needing display.
- [displayIfNeededInRect:](displayifneeded%28__%29.md): Acts as [displayIfNeeded](displayifneeded%28%29.md), confining drawing to a specified region of the view.
- [displayIfNeededIgnoringOpacity](displayifneededignoringopacity%28%29.md): Acts as [displayIfNeeded](displayifneeded%28%29.md), except that this method doesn’t back up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [displayIfNeededInRectIgnoringOpacity:](displayifneededignoringopacity%28__%29.md): Acts as [displayIfNeeded](displayifneeded%28%29.md), but confining drawing to `aRect` and not backing up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [translateRectsNeedingDisplayInRect:by:](translaterectsneedingdisplay%28in_by_%29.md): Translates the display rectangles by the specified delta.
- [opaque](isopaque.md): A Boolean value indicating whether the view fills its frame rectangle with opaque content.
- [viewWillDraw](viewwilldraw%28%29.md): Informs the view that it’s required to draw content.

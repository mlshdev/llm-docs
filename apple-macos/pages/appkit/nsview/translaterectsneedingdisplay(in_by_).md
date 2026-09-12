> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/translaterectsneedingdisplay(in:by:)](https://developer.apple.com/documentation/appkit/nsview/translaterectsneedingdisplay(in:by:))

# translateRectsNeedingDisplay(in:by:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Translates the display rectangles by the specified delta.

## Declaration

```swift
func translateRectsNeedingDisplay(in clipRect: NSRect, by delta: NSSize)
```

## Parameters

- `clipRect`: A rectangle defining the region of the view, typically the view’s bounds.
- `delta`: A NSSize structure that specifies an offset from aRect’s origin.

<a id="Discussion"></a>

## Discussion

This method performs the shifting of dirty rectangles that an equivalent [scroll(\_:by:)](scroll%28__by_%29.md) operation would cause, without performing the actual scroll operation.  It is only useful in very rare cases where a view implements its own low-level scrolling mechanics.

This method:

1. Collects the receiving view’s dirty rectangles.
2. Clears all dirty rectangles in the intersection of `clipRect` and the view’s bounds.
3. Shifts the retrieved rectangles by the `delta` offset.
4. Clips the result to the intersection of `clipRect` and the view’s bounds
5. Marks the resultant rectangles as needing display.

The developer must ensure that `clipRect` and `delta` are pixel-aligned in order to guarantee correct drawing.

## See Also

### Invalidating the View’s Content

- [setNeedsDisplay(\_:)](setneedsdisplay%28__%29.md): Marks the region of the view within the specified rectangle as needing display, increasing the view’s existing invalid region to include it.
- [needsDisplay](needsdisplay.md): A Boolean value that determines whether the view needs to be redrawn before being displayed.
- [display()](display%28%29.md): Displays the view and all its subviews if possible, invoking each of the `NSView` methods [lockFocus()](lockfocus%28%29.md), [draw(\_:)](draw%28__%29.md), and [unlockFocus()](unlockfocus%28%29.md) as necessary.
- [display(\_:)](display%28__%29.md): Acts as [display()](display%28%29.md), but confining drawing to a rectangular region of the view.
- [displayIgnoringOpacity(\_:)](displayignoringopacity%28__%29.md): Displays the view but confines drawing to a specified region and does not back up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [displayIgnoringOpacity(\_:in:)](displayignoringopacity%28__in_%29.md): Causes the view and its descendants to be redrawn to the specified graphics context.
- [displayIfNeeded()](displayifneeded%28%29.md): Displays the view and all its subviews if any part of the view has been marked as needing display.
- [displayIfNeeded(\_:)](displayifneeded%28__%29.md): Acts as [displayIfNeeded()](displayifneeded%28%29.md), confining drawing to a specified region of the view.
- [displayIfNeededIgnoringOpacity()](displayifneededignoringopacity%28%29.md): Acts as [displayIfNeeded()](displayifneeded%28%29.md), except that this method doesn’t back up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [displayIfNeededIgnoringOpacity(\_:)](displayifneededignoringopacity%28__%29.md): Acts as [displayIfNeeded()](displayifneeded%28%29.md), but confining drawing to `aRect` and not backing up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [isOpaque](isopaque.md): A Boolean value indicating whether the view fills its frame rectangle with opaque content.
- [viewWillDraw()](viewwilldraw%28%29.md): Informs the view that it’s required to draw content.

# translateRectsNeedingDisplayInRect:by: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.5+

Translates the display rectangles by the specified delta.

## Declaration

```objectivec
- (void) translateRectsNeedingDisplayInRect:(NSRect) clipRect by:(NSSize) delta;
```

## Parameters

- `clipRect`: A rectangle defining the region of the view, typically the view’s bounds.
- `delta`: A NSSize structure that specifies an offset from aRect’s origin.

<a id="Discussion"></a>

## Discussion

This method performs the shifting of dirty rectangles that an equivalent [scrollRect:by:](scroll%28__by_%29.md) operation would cause, without performing the actual scroll operation.  It is only useful in very rare cases where a view implements its own low-level scrolling mechanics.

This method:

1. Collects the receiving view’s dirty rectangles.
2. Clears all dirty rectangles in the intersection of `clipRect` and the view’s bounds.
3. Shifts the retrieved rectangles by the `delta` offset.
4. Clips the result to the intersection of `clipRect` and the view’s bounds
5. Marks the resultant rectangles as needing display.

The developer must ensure that `clipRect` and `delta` are pixel-aligned in order to guarantee correct drawing.

## See Also

### Invalidating the View’s Content

- [setNeedsDisplayInRect:](setneedsdisplay%28__%29.md): Marks the region of the view within the specified rectangle as needing display, increasing the view’s existing invalid region to include it.
- [needsDisplay](needsdisplay.md): A Boolean value that determines whether the view needs to be redrawn before being displayed.
- [display](display%28%29.md): Displays the view and all its subviews if possible, invoking each of the `NSView` methods [lockFocus](lockfocus%28%29.md), [drawRect:](draw%28__%29.md), and [unlockFocus](unlockfocus%28%29.md) as necessary.
- [displayRect:](display%28__%29.md): Acts as [display](display%28%29.md), but confining drawing to a rectangular region of the view.
- [displayRectIgnoringOpacity:](displayignoringopacity%28__%29.md): Displays the view but confines drawing to a specified region and does not back up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [displayRectIgnoringOpacity:inContext:](displayignoringopacity%28__in_%29.md): Causes the view and its descendants to be redrawn to the specified graphics context.
- [displayIfNeeded](displayifneeded%28%29.md): Displays the view and all its subviews if any part of the view has been marked as needing display.
- [displayIfNeededInRect:](displayifneeded%28__%29.md): Acts as [displayIfNeeded](displayifneeded%28%29.md), confining drawing to a specified region of the view.
- [displayIfNeededIgnoringOpacity](displayifneededignoringopacity%28%29.md): Acts as [displayIfNeeded](displayifneeded%28%29.md), except that this method doesn’t back up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [displayIfNeededInRectIgnoringOpacity:](displayifneededignoringopacity%28__%29.md): Acts as [displayIfNeeded](displayifneeded%28%29.md), but confining drawing to `aRect` and not backing up to the first opaque ancestor—it simply causes the view and its descendants to execute their drawing code.
- [opaque](isopaque.md): A Boolean value indicating whether the view fills its frame rectangle with opaque content.
- [viewWillDraw](viewwilldraw%28%29.md): Informs the view that it’s required to draw content.

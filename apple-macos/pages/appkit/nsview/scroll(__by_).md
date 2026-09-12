> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/scroll(_:by:)](https://developer.apple.com/documentation/appkit/nsview/scroll(_:by:))

# scroll(\_:by:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Copies the visible portion of the view’s rendered image within a region and lays that portion down again at a specified offset .

> Use NSScrollView to achieve scrolling views.

## Declaration

```swift
func scroll(_ rect: NSRect, by delta: NSSize)
```

## Parameters

- `rect`: A rectangle defining a region of the view.
- `delta`: A `NSSize` structure that specifies an offset from `aRect`’s origin.

<a id="Discussion"></a>

## Discussion

This method is useful during scrolling or translation of the coordinate system to efficiently move as much of the view’s rendered image as possible without requiring it to be redrawn, following these steps:

1. Invoke [scroll(\_:by:)](scroll%28__by_%29.md) to copy the rendered image.
2. Move the view object’s origin or scroll it within its superview.
3. Calculate the newly exposed rectangles and either set the [needsDisplay](needsdisplay.md) property to [true](https://developer.apple.com/documentation/swift/true) or call [setNeedsDisplay(\_:)](setneedsdisplay%28__%29.md) to draw them.

You should rarely need to use this method, however. The [scroll(\_:)](scroll%28__%29.md), [scrollToVisible(\_:)](scrolltovisible%28__%29.md), and [autoscroll(with:)](autoscroll%28with_%29.md) methods automatically perform optimized scrolling.

## See Also

### Related Documentation

- [setBoundsOrigin(\_:)](setboundsorigin%28__%29.md): Sets the origin of the view’s bounds rectangle to a specified point.
- [translateOrigin(to:)](translateorigin%28to_%29.md): Translates the view’s coordinate system so that its origin moves to a new location.

### Methods

- [lockFocus()](lockfocus%28%29.md): Deprecated. Locks the focus on the view, so subsequent commands take effect in the view’s window and coordinate system.
- [lockFocusIfCanDraw()](lockfocusifcandraw%28%29.md): Deprecated. Locks the focus to the view atomically if the `canDraw` method returns `true` and returns the value of `canDraw`.
- [lockFocusIfCanDraw(in:)](lockfocusifcandraw%28in_%29.md): Deprecated. Locks the focus to the view atomically if drawing can occur in the specified graphics context.
- [unlockFocus()](unlockfocus%28%29.md): Deprecated. Unlocks focus from the current view.
- [shouldDrawColor()](shoulddrawcolor%28%29.md): Deprecated. Returns a Boolean value indicating whether the view is being drawn to an environment that supports color.
- [allocateGState()](allocategstate%28%29.md): Deprecated. Causes the view to maintain a private graphics state object, which encapsulates all parameters of the graphics environment.
- [gState()](gstate%28%29.md): Deprecated. Returns the identifier for the view’s graphics state object, or 0 if the view doesn’t have a graphics state object.
- [setUpGState()](setupgstate%28%29.md): Deprecated. Overridden by subclasses to (re)initialize the view’s graphics state object.
- [renewGState()](renewgstate%28%29.md): Deprecated. Invalidates the view’s graphics state object, if it has one.
- [releaseGState()](releasegstate%28%29.md): Deprecated. Frees the view’s graphics state object, if it has one.
- [dragFile(\_:from:slideBack:event:)](dragfile%28__from_slideback_event_%29.md): Deprecated. Initiates a dragging operation from the view, allowing the user to drag a file icon to any application that has window or view objects that accept files.
- [dragPromisedFiles(ofTypes:from:source:slideBack:event:)](dragpromisedfiles%28oftypes_from_source_slideback_event_%29.md): Deprecated. Initiates a dragging operation from the view, allowing the user to drag one or more promised files (or directories) into any application that has window or view objects that accept promised file data.

# scrollRect:by: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Copies the visible portion of the view’s rendered image within a region and lays that portion down again at a specified offset .

> Use NSScrollView to achieve scrolling views.

## Declaration

```objectivec
- (void) scrollRect:(NSRect) rect by:(NSSize) delta;
```

## Parameters

- `rect`: A rectangle defining a region of the view.
- `delta`: A `NSSize` structure that specifies an offset from `aRect`’s origin.

<a id="Discussion"></a>

## Discussion

This method is useful during scrolling or translation of the coordinate system to efficiently move as much of the view’s rendered image as possible without requiring it to be redrawn, following these steps:

1. Invoke [scrollRect:by:](scroll%28__by_%29.md) to copy the rendered image.
2. Move the view object’s origin or scroll it within its superview.
3. Calculate the newly exposed rectangles and either set the [needsDisplay](needsdisplay.md) property to [true](https://developer.apple.com/documentation/swift/true) or call [setNeedsDisplayInRect:](setneedsdisplay%28__%29.md) to draw them.

You should rarely need to use this method, however. The [scrollPoint:](scroll%28__%29.md), [scrollRectToVisible:](scrolltovisible%28__%29.md), and [autoscroll:](autoscroll%28with_%29.md) methods automatically perform optimized scrolling.

## See Also

### Related Documentation

- [setBoundsOrigin:](setboundsorigin%28__%29.md): Sets the origin of the view’s bounds rectangle to a specified point.
- [translateOriginToPoint:](translateorigin%28to_%29.md): Translates the view’s coordinate system so that its origin moves to a new location.

### Methods

- [lockFocus](lockfocus%28%29.md): Deprecated. Locks the focus on the view, so subsequent commands take effect in the view’s window and coordinate system.
- [lockFocusIfCanDraw](lockfocusifcandraw%28%29.md): Deprecated. Locks the focus to the view atomically if the `canDraw` method returns `true` and returns the value of `canDraw`.
- [lockFocusIfCanDrawInContext:](lockfocusifcandraw%28in_%29.md): Deprecated. Locks the focus to the view atomically if drawing can occur in the specified graphics context.
- [unlockFocus](unlockfocus%28%29.md): Deprecated. Unlocks focus from the current view.
- [convertPointToBase:](convertpointtobase_.md): Deprecated. Converts the point from the view’s coordinate system to the base coordinate system.
- [convertPointFromBase:](convertpointfrombase_.md): Deprecated. Converts the point from the base coordinate system to the view’s coordinate system.
- [convertSizeToBase:](convertsizetobase_.md): Deprecated. Converts the size from the view’s coordinate system to the base coordinate system.
- [convertSizeFromBase:](convertsizefrombase_.md): Deprecated. Converts the size from the base coordinate system to the view’s coordinate system.
- [convertRectToBase:](convertrecttobase_.md): Deprecated. Converts the rectangle from the view’s coordinate system to the base coordinate system.
- [convertRectFromBase:](convertrectfrombase_.md): Deprecated. Converts the rectangle from the base coordinate system to the view’s coordinate system.
- [performMnemonic:](performmnemonic_.md): Deprecated. Implemented by subclasses to respond to mnemonics.
- [shouldDrawColor](shoulddrawcolor%28%29.md): Deprecated. Returns a Boolean value indicating whether the view is being drawn to an environment that supports color.
- [allocateGState](allocategstate%28%29.md): Deprecated. Causes the view to maintain a private graphics state object, which encapsulates all parameters of the graphics environment.
- [gState](gstate%28%29.md): Deprecated. Returns the identifier for the view’s graphics state object, or 0 if the view doesn’t have a graphics state object.
- [setUpGState](setupgstate%28%29.md): Deprecated. Overridden by subclasses to (re)initialize the view’s graphics state object.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/setupgstate()](https://developer.apple.com/documentation/appkit/nsview/setupgstate())

# setUpGState() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Overridden by subclasses to (re)initialize the view’s graphics state object.

> Manage graphics state using an [NSGraphicsContext](../nsgraphicscontext.md) object.

## Declaration

```swift
func setUpGState()
```

<a id="Discussion"></a>

## Discussion

This method is automatically invoked when the graphics state object created using [allocateGState()](allocategstate%28%29.md) needs to be initialized. The default implementation does nothing. Your subclass can override it to set the current font, line width, or any other graphics state parameter except coordinate transformations and the clipping path—these are established by the frame and bounds rectangles and by methods such as [scaleUnitSquare(to:)](scaleunitsquare%28to_%29.md) and [translateOrigin(to:)](translateorigin%28to_%29.md). Note that `drawRect:` can further transform the coordinate system and clipping path for whatever temporary effects it needs.

## See Also

### Methods

- [lockFocus()](lockfocus%28%29.md): Deprecated. Locks the focus on the view, so subsequent commands take effect in the view’s window and coordinate system.
- [lockFocusIfCanDraw()](lockfocusifcandraw%28%29.md): Deprecated. Locks the focus to the view atomically if the `canDraw` method returns `true` and returns the value of `canDraw`.
- [lockFocusIfCanDraw(in:)](lockfocusifcandraw%28in_%29.md): Deprecated. Locks the focus to the view atomically if drawing can occur in the specified graphics context.
- [unlockFocus()](unlockfocus%28%29.md): Deprecated. Unlocks focus from the current view.
- [scroll(\_:by:)](scroll%28__by_%29.md): Deprecated. Copies the visible portion of the view’s rendered image within a region and lays that portion down again at a specified offset .
- [shouldDrawColor()](shoulddrawcolor%28%29.md): Deprecated. Returns a Boolean value indicating whether the view is being drawn to an environment that supports color.
- [allocateGState()](allocategstate%28%29.md): Deprecated. Causes the view to maintain a private graphics state object, which encapsulates all parameters of the graphics environment.
- [gState()](gstate%28%29.md): Deprecated. Returns the identifier for the view’s graphics state object, or 0 if the view doesn’t have a graphics state object.
- [renewGState()](renewgstate%28%29.md): Deprecated. Invalidates the view’s graphics state object, if it has one.
- [releaseGState()](releasegstate%28%29.md): Deprecated. Frees the view’s graphics state object, if it has one.
- [dragFile(\_:from:slideBack:event:)](dragfile%28__from_slideback_event_%29.md): Deprecated. Initiates a dragging operation from the view, allowing the user to drag a file icon to any application that has window or view objects that accept files.
- [dragPromisedFiles(ofTypes:from:source:slideBack:event:)](dragpromisedfiles%28oftypes_from_source_slideback_event_%29.md): Deprecated. Initiates a dragging operation from the view, allowing the user to drag one or more promised files (or directories) into any application that has window or view objects that accept promised file data.

# setUpGState (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Overridden by subclasses to (re)initialize the view’s graphics state object.

> Manage graphics state using an [NSGraphicsContext](../nsgraphicscontext.md) object.

## Declaration

```objectivec
- (void) setUpGState;
```

<a id="Discussion"></a>

## Discussion

This method is automatically invoked when the graphics state object created using [allocateGState](allocategstate%28%29.md) needs to be initialized. The default implementation does nothing. Your subclass can override it to set the current font, line width, or any other graphics state parameter except coordinate transformations and the clipping path—these are established by the frame and bounds rectangles and by methods such as [scaleUnitSquareToSize:](scaleunitsquare%28to_%29.md) and [translateOriginToPoint:](translateorigin%28to_%29.md). Note that `drawRect:` can further transform the coordinate system and clipping path for whatever temporary effects it needs.

## See Also

### Methods

- [lockFocus](lockfocus%28%29.md): Deprecated. Locks the focus on the view, so subsequent commands take effect in the view’s window and coordinate system.
- [lockFocusIfCanDraw](lockfocusifcandraw%28%29.md): Deprecated. Locks the focus to the view atomically if the `canDraw` method returns `true` and returns the value of `canDraw`.
- [lockFocusIfCanDrawInContext:](lockfocusifcandraw%28in_%29.md): Deprecated. Locks the focus to the view atomically if drawing can occur in the specified graphics context.
- [unlockFocus](unlockfocus%28%29.md): Deprecated. Unlocks focus from the current view.
- [scrollRect:by:](scroll%28__by_%29.md): Deprecated. Copies the visible portion of the view’s rendered image within a region and lays that portion down again at a specified offset .
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

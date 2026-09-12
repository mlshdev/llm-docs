> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/allocategstate()](https://developer.apple.com/documentation/appkit/nsview/allocategstate())

# allocateGState() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Causes the view to maintain a private graphics state object, which encapsulates all parameters of the graphics environment.

> Manage graphics state using an [NSGraphicsContext](../nsgraphicscontext.md) object.

## Declaration

```swift
func allocateGState()
```

<a id="Discussion"></a>

## Discussion

If you do not invoke [allocateGState()](allocategstate%28%29.md), a graphics state object is constructed from scratch each time the NSView is focused.

The view builds the graphics state parameters using [setUpGState()](setupgstate%28%29.md), then automatically establishes this graphics state each time the focus is locked on it. A graphics state may improve performance for view objects that are focused often and need to set many parameters, but use of standard rendering operators is normally efficient enough.

Because graphics states occupy a fair amount of memory, they can actually degrade performance. Be sure to test application performance with and without the private graphics state before committing to its use.

## See Also

### Methods

- [lockFocus()](lockfocus%28%29.md): Deprecated. Locks the focus on the view, so subsequent commands take effect in the view’s window and coordinate system.
- [lockFocusIfCanDraw()](lockfocusifcandraw%28%29.md): Deprecated. Locks the focus to the view atomically if the `canDraw` method returns `true` and returns the value of `canDraw`.
- [lockFocusIfCanDraw(in:)](lockfocusifcandraw%28in_%29.md): Deprecated. Locks the focus to the view atomically if drawing can occur in the specified graphics context.
- [unlockFocus()](unlockfocus%28%29.md): Deprecated. Unlocks focus from the current view.
- [scroll(\_:by:)](scroll%28__by_%29.md): Deprecated. Copies the visible portion of the view’s rendered image within a region and lays that portion down again at a specified offset .
- [shouldDrawColor()](shoulddrawcolor%28%29.md): Deprecated. Returns a Boolean value indicating whether the view is being drawn to an environment that supports color.
- [gState()](gstate%28%29.md): Deprecated. Returns the identifier for the view’s graphics state object, or 0 if the view doesn’t have a graphics state object.
- [setUpGState()](setupgstate%28%29.md): Deprecated. Overridden by subclasses to (re)initialize the view’s graphics state object.
- [renewGState()](renewgstate%28%29.md): Deprecated. Invalidates the view’s graphics state object, if it has one.
- [releaseGState()](releasegstate%28%29.md): Deprecated. Frees the view’s graphics state object, if it has one.
- [dragFile(\_:from:slideBack:event:)](dragfile%28__from_slideback_event_%29.md): Deprecated. Initiates a dragging operation from the view, allowing the user to drag a file icon to any application that has window or view objects that accept files.
- [dragPromisedFiles(ofTypes:from:source:slideBack:event:)](dragpromisedfiles%28oftypes_from_source_slideback_event_%29.md): Deprecated. Initiates a dragging operation from the view, allowing the user to drag one or more promised files (or directories) into any application that has window or view objects that accept promised file data.

# allocateGState (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.10)

Causes the view to maintain a private graphics state object, which encapsulates all parameters of the graphics environment.

> Manage graphics state using an [NSGraphicsContext](../nsgraphicscontext.md) object.

## Declaration

```objectivec
- (void) allocateGState;
```

<a id="Discussion"></a>

## Discussion

If you do not invoke [allocateGState](allocategstate%28%29.md), a graphics state object is constructed from scratch each time the NSView is focused.

The view builds the graphics state parameters using [setUpGState](setupgstate%28%29.md), then automatically establishes this graphics state each time the focus is locked on it. A graphics state may improve performance for view objects that are focused often and need to set many parameters, but use of standard rendering operators is normally efficient enough.

Because graphics states occupy a fair amount of memory, they can actually degrade performance. Be sure to test application performance with and without the private graphics state before committing to its use.

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
- [gState](gstate%28%29.md): Deprecated. Returns the identifier for the view’s graphics state object, or 0 if the view doesn’t have a graphics state object.
- [setUpGState](setupgstate%28%29.md): Deprecated. Overridden by subclasses to (re)initialize the view’s graphics state object.

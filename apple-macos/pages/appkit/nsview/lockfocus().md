> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/lockfocus()](https://developer.apple.com/documentation/appkit/nsview/lockfocus())

# lockFocus() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Locks the focus on the view, so subsequent commands take effect in the view’s window and coordinate system.

> Subclass the view and implement [draw(\_:)](draw%28__%29.md) instead.

## Declaration

```swift
func lockFocus()
```

<a id="Discussion"></a>

## Discussion

If you don’t use a `display` method to draw an `NSView` object, you must invoke [lockFocus()](lockfocus%28%29.md) before invoking methods that send commands to the window server, and must balance it with an [unlockFocus()](unlockfocus%28%29.md) message when finished.

Hiding or miniaturizing a one-shot window causes the backing store for that window to be released. (A one-shot window frees its window device when the window is hidden and another is created when it’s returned to the screen.) If you don’t use the standard display mechanism to draw, you should use [lockFocusIfCanDraw()](lockfocusifcandraw%28%29.md) rather than [lockFocus()](lockfocus%28%29.md) if there is a chance of drawing while the window is either miniaturized or hidden. This method throws an exception if the view is hidden or if drawing cannot happen for some other reason. To ensure that you can lock focus successfully, make sure the [canDraw](candraw.md) property is [true](https://developer.apple.com/documentation/swift/true); you can also call [lockFocusIfCanDraw()](lockfocusifcandraw%28%29.md) instead and use the return value of that method to determine if focus was obtained successfully.

## See Also

### Related Documentation

- [draw(\_:)](draw%28__%29.md): Overridden by subclasses to draw the view’s image within the specified rectangle.
- [focusView](focusview.md): The currently focused view object.
- [display()](display%28%29.md): Displays the view and all its subviews if possible, invoking each of the `NSView` methods [lockFocus()](lockfocus%28%29.md), [draw(\_:)](draw%28__%29.md), and [unlockFocus()](unlockfocus%28%29.md) as necessary.

### Methods

- [lockFocusIfCanDraw()](lockfocusifcandraw%28%29.md): Deprecated. Locks the focus to the view atomically if the `canDraw` method returns `true` and returns the value of `canDraw`.
- [lockFocusIfCanDraw(in:)](lockfocusifcandraw%28in_%29.md): Deprecated. Locks the focus to the view atomically if drawing can occur in the specified graphics context.
- [unlockFocus()](unlockfocus%28%29.md): Deprecated. Unlocks focus from the current view.
- [scroll(\_:by:)](scroll%28__by_%29.md): Deprecated. Copies the visible portion of the view’s rendered image within a region and lays that portion down again at a specified offset .
- [shouldDrawColor()](shoulddrawcolor%28%29.md): Deprecated. Returns a Boolean value indicating whether the view is being drawn to an environment that supports color.
- [allocateGState()](allocategstate%28%29.md): Deprecated. Causes the view to maintain a private graphics state object, which encapsulates all parameters of the graphics environment.
- [gState()](gstate%28%29.md): Deprecated. Returns the identifier for the view’s graphics state object, or 0 if the view doesn’t have a graphics state object.
- [setUpGState()](setupgstate%28%29.md): Deprecated. Overridden by subclasses to (re)initialize the view’s graphics state object.
- [renewGState()](renewgstate%28%29.md): Deprecated. Invalidates the view’s graphics state object, if it has one.
- [releaseGState()](releasegstate%28%29.md): Deprecated. Frees the view’s graphics state object, if it has one.
- [dragFile(\_:from:slideBack:event:)](dragfile%28__from_slideback_event_%29.md): Deprecated. Initiates a dragging operation from the view, allowing the user to drag a file icon to any application that has window or view objects that accept files.
- [dragPromisedFiles(ofTypes:from:source:slideBack:event:)](dragpromisedfiles%28oftypes_from_source_slideback_event_%29.md): Deprecated. Initiates a dragging operation from the view, allowing the user to drag one or more promised files (or directories) into any application that has window or view objects that accept promised file data.

# lockFocus (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.14)

Locks the focus on the view, so subsequent commands take effect in the view’s window and coordinate system.

> Subclass the view and implement [drawRect:](draw%28__%29.md) instead.

## Declaration

```objectivec
- (void) lockFocus;
```

<a id="Discussion"></a>

## Discussion

If you don’t use a `display` method to draw an `NSView` object, you must invoke [lockFocus](lockfocus%28%29.md) before invoking methods that send commands to the window server, and must balance it with an [unlockFocus](unlockfocus%28%29.md) message when finished.

Hiding or miniaturizing a one-shot window causes the backing store for that window to be released. (A one-shot window frees its window device when the window is hidden and another is created when it’s returned to the screen.) If you don’t use the standard display mechanism to draw, you should use [lockFocusIfCanDraw](lockfocusifcandraw%28%29.md) rather than [lockFocus](lockfocus%28%29.md) if there is a chance of drawing while the window is either miniaturized or hidden. This method throws an exception if the view is hidden or if drawing cannot happen for some other reason. To ensure that you can lock focus successfully, make sure the [canDraw](candraw.md) property is [true](https://developer.apple.com/documentation/swift/true); you can also call [lockFocusIfCanDraw](lockfocusifcandraw%28%29.md) instead and use the return value of that method to determine if focus was obtained successfully.

## See Also

### Related Documentation

- [drawRect:](draw%28__%29.md): Overridden by subclasses to draw the view’s image within the specified rectangle.
- [focusView](focusview.md): The currently focused view object.
- [display](display%28%29.md): Displays the view and all its subviews if possible, invoking each of the `NSView` methods [lockFocus](lockfocus%28%29.md), [drawRect:](draw%28__%29.md), and [unlockFocus](unlockfocus%28%29.md) as necessary.

### Methods

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
- [setUpGState](setupgstate%28%29.md): Deprecated. Overridden by subclasses to (re)initialize the view’s graphics state object.

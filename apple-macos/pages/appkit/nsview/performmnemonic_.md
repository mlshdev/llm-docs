> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsview/performmnemonic:](https://developer.apple.com/documentation/appkit/nsview/performmnemonic:)

# performMnemonic:

**Interface language:** Objective-C

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+ (deprecated in 10.8)

Implemented by subclasses to respond to mnemonics.

> The behavior offered by this method is no longer necessary.

## Declaration

```objectivec
- (BOOL) performMnemonic:(NSString *) string;
```

## Parameters

- `string`: A string representing the mnemonic to handle.

<a id="Discussion"></a>

## Discussion

If the view’s mnemonic is the same as the characters of the string `aString`, the view should take the appropriate action and return [true](https://developer.apple.com/documentation/swift/true). Otherwise, it should return the result of invoking `super`‘s implementation. The default implementation of this method simply passes the message down the view hierarchy (from superviews to subviews) and returns [false](https://developer.apple.com/documentation/swift/false) if none of the view’s subviews responds [true](https://developer.apple.com/documentation/swift/true). Mnemonics are not supported in macOS.

## See Also

### Related Documentation

- [performKeyEquivalent:](performkeyequivalent%28with_%29.md): Implemented by subclasses to respond to key equivalents (also known as keyboard shortcuts).

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
- [shouldDrawColor](shoulddrawcolor%28%29.md): Deprecated. Returns a Boolean value indicating whether the view is being drawn to an environment that supports color.
- [allocateGState](allocategstate%28%29.md): Deprecated. Causes the view to maintain a private graphics state object, which encapsulates all parameters of the graphics environment.
- [gState](gstate%28%29.md): Deprecated. Returns the identifier for the view’s graphics state object, or 0 if the view doesn’t have a graphics state object.
- [setUpGState](setupgstate%28%29.md): Deprecated. Overridden by subclasses to (re)initialize the view’s graphics state object.

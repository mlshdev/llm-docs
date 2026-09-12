> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscroller/usableparts-swift.property](https://developer.apple.com/documentation/appkit/nsscroller/usableparts-swift.property)

# usableParts (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A value that indicates which parts of the receiver are displayed and usable.

## Declaration

```swift
var usableParts: NSScroller.UsableParts { get }
```

<a id="Discussion"></a>

## Discussion

See [NSScroller.UsableParts](usableparts-swift.enum.md) for a list of possible values.

## See Also

### Related Documentation

- [arrowsPosition](arrowsposition.md): Deprecated. The location of the scroll buttons within the scroller, as described in [NSScroller.ArrowPosition](arrowposition.md).

### Calculating Layout

- [rect(for:)](rect%28for_%29.md): Returns the rectangle occupied by `aPart`, which for this method is interpreted literally rather than as an indicator of scrolling direction.
- [testPart(\_:)](testpart%28__%29.md): Returns the part that would be hit by a mouse-down event at `aPoint` (expressed in the window’s coordinate system).
- [checkSpaceForParts()](checkspaceforparts%28%29.md): Checks to see if there is enough room in the receiver to display the knob and buttons.

# usableParts (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

A value that indicates which parts of the receiver are displayed and usable.

## Declaration

```objectivec
@property (readonly) NSUsableScrollerParts usableParts;
```

<a id="Discussion"></a>

## Discussion

See [NSUsableScrollerParts](usableparts-swift.enum.md) for a list of possible values.

## See Also

### Related Documentation

- [arrowsPosition](arrowsposition.md): Deprecated. The location of the scroll buttons within the scroller, as described in [NSScrollArrowPosition](arrowposition.md).

### Calculating Layout

- [rectForPart:](rect%28for_%29.md): Returns the rectangle occupied by `aPart`, which for this method is interpreted literally rather than as an indicator of scrolling direction.
- [testPart:](testpart%28__%29.md): Returns the part that would be hit by a mouse-down event at `aPoint` (expressed in the window’s coordinate system).
- [checkSpaceForParts](checkspaceforparts%28%29.md): Checks to see if there is enough room in the receiver to display the knob and buttons.

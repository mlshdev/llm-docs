> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsscreen/backingscalefactor](https://developer.apple.com/documentation/appkit/nsscreen/backingscalefactor)

# backingScaleFactor (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The backing store pixel scale factor for the screen.

## Declaration

```swift
var backingScaleFactor: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

This is the scale factor representing the number of backing store pixels corresponding to each linear unit in screen space on this screen.

This method is provided for rare cases when the explicit scale factor is needed.  As often as possible, you should use the [NSView](../nsview.md) class’s convert backing methods.

## See Also

### Converting Between Screen and Backing Coordinates

- [backingAlignedRect(\_:options:)](backingalignedrect%28__options_%29.md): Converts a rectangle in global screen coordinates to a pixel aligned rectangle.
- [convertRectFromBacking(\_:)](convertrectfrombacking%28__%29.md): Converts the rectangle from the device pixel aligned coordinates system of a screen.
- [convertRectToBacking(\_:)](convertrecttobacking%28__%29.md): Converts the rectangle to the device pixel aligned coordinates system of a screen.

# backingScaleFactor (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS 10.7+

The backing store pixel scale factor for the screen.

## Declaration

```objectivec
@property (readonly) CGFloat backingScaleFactor;
```

<a id="Discussion"></a>

## Discussion

This is the scale factor representing the number of backing store pixels corresponding to each linear unit in screen space on this screen.

This method is provided for rare cases when the explicit scale factor is needed.  As often as possible, you should use the [NSView](../nsview.md) class’s convert backing methods.

## See Also

### Converting Between Screen and Backing Coordinates

- [backingAlignedRect:options:](backingalignedrect%28__options_%29.md): Converts a rectangle in global screen coordinates to a pixel aligned rectangle.
- [convertRectFromBacking:](convertrectfrombacking%28__%29.md): Converts the rectangle from the device pixel aligned coordinates system of a screen.
- [convertRectToBacking:](convertrecttobacking%28__%29.md): Converts the rectangle to the device pixel aligned coordinates system of a screen.

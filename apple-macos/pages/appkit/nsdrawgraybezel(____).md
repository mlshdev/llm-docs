> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsdrawgraybezel(_:_:)](https://developer.apple.com/documentation/appkit/nsdrawgraybezel(_:_:))

# NSDrawGrayBezel(\_:\_:) (Swift)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Draws a gray-filled rectangle with a bezel border.

## Declaration

```swift
func NSDrawGrayBezel(_ rect: NSRect, _ clipRect: NSRect)
```

## Parameters

- `rect`: The bounding rectangle (in the current coordinate system) in which to draw. Only those parts of `aRect` that lie within the `clipRect` are actually drawn.
- `clipRect`: The clipping rectangle to use during drawing.

## See Also

### Related Documentation

- [NSDrawTiledRects(\_:\_:\_:\_:\_:)](nsdrawtiledrects%28__________%29.md): Draws rectangles with borders.

### Drawing Bezels

- [NSDrawDarkBezel(\_:\_:)](nsdrawdarkbezel%28____%29.md): Draws a dark gray-filled rectangle with a bezel border.
- [NSDrawLightBezel(\_:\_:)](nsdrawlightbezel%28____%29.md): Draws a white-filled rectangle with a bezel border.
- [NSDrawWhiteBezel(\_:\_:)](nsdrawwhitebezel%28____%29.md): Draws a white-filled rectangle with a bezel border.

# NSDrawGrayBezel (Objective-C)

**Framework:** AppKit  
**Kind:** Function  
**Availability:** macOS

Draws a gray-filled rectangle with a bezel border.

## Declaration

```objectivec
extern void NSDrawGrayBezel(NSRect rect, NSRect clipRect);
```

## Parameters

- `rect`: The bounding rectangle (in the current coordinate system) in which to draw. Only those parts of `aRect` that lie within the `clipRect` are actually drawn.
- `clipRect`: The clipping rectangle to use during drawing.

## See Also

### Related Documentation

- [NSDrawTiledRects](nsdrawtiledrects%28__________%29.md): Draws rectangles with borders.

### Drawing Bezels

- [NSDrawDarkBezel](nsdrawdarkbezel%28____%29.md): Draws a dark gray-filled rectangle with a bezel border.
- [NSDrawLightBezel](nsdrawlightbezel%28____%29.md): Draws a white-filled rectangle with a bezel border.
- [NSDrawWhiteBezel](nsdrawwhitebezel%28____%29.md): Draws a white-filled rectangle with a bezel border.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctlinedraw(_:_:)](https://developer.apple.com/documentation/coretext/ctlinedraw(_:_:))

# CTLineDraw(\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Draws a complete line.

## Declaration

```swift
func CTLineDraw(_ line: CTLine, _ context: CGContext)
```

## Parameters

- `line`: The line to draw.
- `context`: The context into which the line is drawn.

<a id="Discussion"></a>

## Discussion

This is a convenience function because the line could be drawn run-by-run by getting the glyph runs, getting the glyphs out of them, and calling a function such as [CGContextShowGlyphsAtPositions](../coregraphics/cgcontextshowglyphsatpositions.md). This call can leave the graphics context in any state and does not flush the context after the draw operation.

# CTLineDraw (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Draws a complete line.

## Declaration

```objectivec
extern void CTLineDraw(CTLineRef line, CGContextRef context);
```

## Parameters

- `line`: The line to draw.
- `context`: The context into which the line is drawn.

<a id="Discussion"></a>

## Discussion

This is a convenience function because the line could be drawn run-by-run by getting the glyph runs, getting the glyphs out of them, and calling a function such as [CGContextShowGlyphsAtPositions](../coregraphics/cgcontextshowglyphsatpositions.md). This call can leave the graphics context in any state and does not flush the context after the draw operation.

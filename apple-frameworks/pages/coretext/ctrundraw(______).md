> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctrundraw(_:_:_:)](https://developer.apple.com/documentation/coretext/ctrundraw(_:_:_:))

# CTRunDraw(\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Draws a complete run or part of one.

## Declaration

```swift
func CTRunDraw(_ run: CTRun, _ context: CGContext, _ range: CFRange)
```

## Parameters

- `run`: The run to draw.
- `context`: The context into which to draw the run.
- `range`: The portion of the run to draw. If the length of the range is set to `0`, then the draw operation continues from the start index of the range to the end of the run.

<a id="Discussion"></a>

## Discussion

This is a convenience call, because the run could be drawn by accessing the glyphs. This call can leave the graphics context in any state and does not flush the context after the draw operation.

## See Also

### Drawing the Glyph Run

- [CTRunGetTextMatrix(\_:)](ctrungettextmatrix%28__%29.md): Returns the text matrix needed to draw this run.

# CTRunDraw (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Draws a complete run or part of one.

## Declaration

```objectivec
extern void CTRunDraw(CTRunRef run, CGContextRef context, CFRange range);
```

## Parameters

- `run`: The run to draw.
- `context`: The context into which to draw the run.
- `range`: The portion of the run to draw. If the length of the range is set to `0`, then the draw operation continues from the start index of the range to the end of the run.

<a id="Discussion"></a>

## Discussion

This is a convenience call, because the run could be drawn by accessing the glyphs. This call can leave the graphics context in any state and does not flush the context after the draw operation.

## See Also

### Drawing the Glyph Run

- [CTRunGetTextMatrix](ctrungettextmatrix%28__%29.md): Returns the text matrix needed to draw this run.

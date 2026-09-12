> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctlinegetpenoffsetforflush(_:_:_:)](https://developer.apple.com/documentation/coretext/ctlinegetpenoffsetforflush(_:_:_:))

# CTLineGetPenOffsetForFlush(\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Gets the pen offset required to draw flush text.

## Declaration

```swift
func CTLineGetPenOffsetForFlush(_ line: CTLine, _ flushFactor: CGFloat, _ flushWidth: Double) -> Double
```

## Parameters

- `line`: The line from which to obtain a flush position.
- `flushFactor`: Determines the type of flushness. A `flushFactor` of `0` or less indicates left flush. A `flushFactor` of `1.0` or more indicates right flush. Flush factors between `0` and `1.0` indicate varying degrees of center flush, with a value of `0.5` being totally center flush.
- `flushWidth`: Specifies the width to which the flushness operation should apply.

<a id="return-value"></a>

## Return Value

The offset from the current pen position for the flush operation.

## See Also

### Getting Line Data

- [CTLineGetGlyphCount(\_:)](ctlinegetglyphcount%28__%29.md): Returns the total glyph count for the line object.
- [CTLineGetGlyphRuns(\_:)](ctlinegetglyphruns%28__%29.md): Returns the array of glyph runs that make up the line object.
- [CTLineGetStringRange(\_:)](ctlinegetstringrange%28__%29.md): Gets the range of characters that originally spawned the glyphs in the line.

# CTLineGetPenOffsetForFlush (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Gets the pen offset required to draw flush text.

## Declaration

```objectivec
extern double CTLineGetPenOffsetForFlush(CTLineRef line, CGFloat flushFactor, double flushWidth);
```

## Parameters

- `line`: The line from which to obtain a flush position.
- `flushFactor`: Determines the type of flushness. A `flushFactor` of `0` or less indicates left flush. A `flushFactor` of `1.0` or more indicates right flush. Flush factors between `0` and `1.0` indicate varying degrees of center flush, with a value of `0.5` being totally center flush.
- `flushWidth`: Specifies the width to which the flushness operation should apply.

<a id="return-value"></a>

## Return Value

The offset from the current pen position for the flush operation.

## See Also

### Getting Line Data

- [CTLineGetGlyphCount](ctlinegetglyphcount%28__%29.md): Returns the total glyph count for the line object.
- [CTLineGetGlyphRuns](ctlinegetglyphruns%28__%29.md): Returns the array of glyph runs that make up the line object.
- [CTLineGetStringRange](ctlinegetstringrange%28__%29.md): Gets the range of characters that originally spawned the glyphs in the line.

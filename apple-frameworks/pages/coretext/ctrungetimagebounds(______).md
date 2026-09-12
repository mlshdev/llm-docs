> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctrungetimagebounds(_:_:_:)](https://developer.apple.com/documentation/coretext/ctrungetimagebounds(_:_:_:))

# CTRunGetImageBounds(\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Calculates the image bounds for a glyph range.

## Declaration

```swift
func CTRunGetImageBounds(_ run: CTRun, _ context: CGContext?, _ range: CFRange) -> CGRect
```

## Parameters

- `run`: The run for which to calculate the image bounds.
- `context`: The context for the image bounds being calculated. This is required because the context could have settings in it that would cause changes in the image bounds.
- `range`: The portion of the run to measure. If the length of the range is set to `0`, then the measure operation continues from the start index of the range to the end of the run.

<a id="return-value"></a>

## Return Value

A rectangle that tightly encloses the paths of the run’s glyphs, or, if `run`, `context`, or `range` is invalid, [CGRectNull](../coregraphics/cgrectnull.md).

## See Also

### Measuring the Glyph Run

- [CTLineGetBoundsWithOptions(\_:\_:)](ctlinegetboundswithoptions%28____%29.md): Calculates the bounds for a line.
- [CTRunGetTypographicBounds(\_:\_:\_:\_:\_:)](ctrungettypographicbounds%28__________%29.md): Gets the typographic bounds of the run.
- [CTRunGetBaseAdvancesAndOrigins(\_:\_:\_:\_:)](ctrungetbaseadvancesandorigins%28________%29.md): Copies a range of base advances and origins into user-provided buffers.

# CTRunGetImageBounds (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Calculates the image bounds for a glyph range.

## Declaration

```objectivec
extern CGRect CTRunGetImageBounds(CTRunRef run, CGContextRef context, CFRange range);
```

## Parameters

- `run`: The run for which to calculate the image bounds.
- `context`: The context for the image bounds being calculated. This is required because the context could have settings in it that would cause changes in the image bounds.
- `range`: The portion of the run to measure. If the length of the range is set to `0`, then the measure operation continues from the start index of the range to the end of the run.

<a id="return-value"></a>

## Return Value

A rectangle that tightly encloses the paths of the run’s glyphs, or, if `run`, `context`, or `range` is invalid, [CGRectNull](../coregraphics/cgrectnull.md).

## See Also

### Measuring the Glyph Run

- [CTLineGetBoundsWithOptions](ctlinegetboundswithoptions%28____%29.md): Calculates the bounds for a line.
- [CTRunGetTypographicBounds](ctrungettypographicbounds%28__________%29.md): Gets the typographic bounds of the run.
- [CTRunGetBaseAdvancesAndOrigins](ctrungetbaseadvancesandorigins%28________%29.md): Copies a range of base advances and origins into user-provided buffers.

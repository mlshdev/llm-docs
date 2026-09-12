> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctrungettypographicbounds(_:_:_:_:_:)](https://developer.apple.com/documentation/coretext/ctrungettypographicbounds(_:_:_:_:_:))

# CTRunGetTypographicBounds(\_:\_:\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Gets the typographic bounds of the run.

## Declaration

```swift
func CTRunGetTypographicBounds(_ run: CTRun, _ range: CFRange, _ ascent: UnsafeMutablePointer<CGFloat>?, _ descent: UnsafeMutablePointer<CGFloat>?, _ leading: UnsafeMutablePointer<CGFloat>?) -> Double
```

## Parameters

- `run`: The run for which to calculate the typographic bounds.
- `range`: The portion of the run to measure. If the length of the range is set to `0`, then the measure operation continues from the range’s start index to the end of the run.
- `ascent`: On output, the ascent of the run. This can be set to `NULL` if not needed.
- `descent`: On output, the descent of the run. This can be set to `NULL` if not needed.
- `leading`: On output, the leading of the run. This can be set to `NULL` if not needed.

<a id="return-value"></a>

## Return Value

The typographic width of the run, or if `run` or `range` is invalid, `0`.

## See Also

### Measuring the Glyph Run

- [CTLineGetBoundsWithOptions(\_:\_:)](ctlinegetboundswithoptions%28____%29.md): Calculates the bounds for a line.
- [CTRunGetImageBounds(\_:\_:\_:)](ctrungetimagebounds%28______%29.md): Calculates the image bounds for a glyph range.
- [CTRunGetBaseAdvancesAndOrigins(\_:\_:\_:\_:)](ctrungetbaseadvancesandorigins%28________%29.md): Copies a range of base advances and origins into user-provided buffers.

# CTRunGetTypographicBounds (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Gets the typographic bounds of the run.

## Declaration

```objectivec
extern double CTRunGetTypographicBounds(CTRunRef run, CFRange range, CGFloat *ascent, CGFloat *descent, CGFloat *leading);
```

## Parameters

- `run`: The run for which to calculate the typographic bounds.
- `range`: The portion of the run to measure. If the length of the range is set to `0`, then the measure operation continues from the range’s start index to the end of the run.
- `ascent`: On output, the ascent of the run. This can be set to `NULL` if not needed.
- `descent`: On output, the descent of the run. This can be set to `NULL` if not needed.
- `leading`: On output, the leading of the run. This can be set to `NULL` if not needed.

<a id="return-value"></a>

## Return Value

The typographic width of the run, or if `run` or `range` is invalid, `0`.

## See Also

### Measuring the Glyph Run

- [CTLineGetBoundsWithOptions](ctlinegetboundswithoptions%28____%29.md): Calculates the bounds for a line.
- [CTRunGetImageBounds](ctrungetimagebounds%28______%29.md): Calculates the image bounds for a glyph range.
- [CTRunGetBaseAdvancesAndOrigins](ctrungetbaseadvancesandorigins%28________%29.md): Copies a range of base advances and origins into user-provided buffers.

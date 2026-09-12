> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctrungetbaseadvancesandorigins(_:_:_:_:)](https://developer.apple.com/documentation/coretext/ctrungetbaseadvancesandorigins(_:_:_:_:))

# CTRunGetBaseAdvancesAndOrigins(\_:\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies a range of base advances and origins into user-provided buffers.

## Declaration

```swift
func CTRunGetBaseAdvancesAndOrigins(_ runRef: CTRun, _ range: CFRange, _ advancesBuffer: UnsafeMutablePointer<CGSize>?, _ originsBuffer: UnsafeMutablePointer<CGPoint>?)
```

## Parameters

- `runRef`: The run that contains the base advances and origins you wish to copy.
- `range`: The range of values to be copied. If the length of the range is set to `0`, the copy operation continues from the range’s start index to the end of the run.
- `advancesBuffer`: The buffer to which the base advances will be copied, or `NULL`. If not `NULL`, the buffer must allow for at least as many elements as specified by the range’s length.
- `originsBuffer`: The buffer to which the origins will be copied, or `NULL`. If not `NULL`, the buffer must allow for at least as many elements as specified by the range’s length.

<a id="Discussion"></a>

## Discussion

A run’s base advances and origins determine the positions of its glyphs but require additional processing before being used for drawing.

Similar to the advances returned by [CTRunGetAdvances(\_:\_:\_:)](ctrungetadvances%28______%29.md), base advances are the displacement from the origin of a glyph to the origin of the next glyph, except base advances do not include any positioning the font layout tables may have done relative to another glyph (such as a mark relative to its base).

The displacement of the current glyph’s origin from the starting position determines the glyph’s actual position, and the displacement of the current glyph’s base advance from the starting position determines the position of the next glyph.

## See Also

### Related Documentation

- [CTRunGetAdvances(\_:\_:\_:)](ctrungetadvances%28______%29.md): Copies a range of glyph advances into a user-provided buffer.

### Measuring the Glyph Run

- [CTLineGetBoundsWithOptions(\_:\_:)](ctlinegetboundswithoptions%28____%29.md): Calculates the bounds for a line.
- [CTRunGetTypographicBounds(\_:\_:\_:\_:\_:)](ctrungettypographicbounds%28__________%29.md): Gets the typographic bounds of the run.
- [CTRunGetImageBounds(\_:\_:\_:)](ctrungetimagebounds%28______%29.md): Calculates the image bounds for a glyph range.

# CTRunGetBaseAdvancesAndOrigins (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Copies a range of base advances and origins into user-provided buffers.

## Declaration

```objectivec
extern void CTRunGetBaseAdvancesAndOrigins(CTRunRef runRef, CFRange range, CGSize advancesBuffer[], CGPoint originsBuffer[]);
```

## Parameters

- `runRef`: The run that contains the base advances and origins you wish to copy.
- `range`: The range of values to be copied. If the length of the range is set to `0`, the copy operation continues from the range’s start index to the end of the run.
- `advancesBuffer`: The buffer to which the base advances will be copied, or `NULL`. If not `NULL`, the buffer must allow for at least as many elements as specified by the range’s length.
- `originsBuffer`: The buffer to which the origins will be copied, or `NULL`. If not `NULL`, the buffer must allow for at least as many elements as specified by the range’s length.

<a id="Discussion"></a>

## Discussion

A run’s base advances and origins determine the positions of its glyphs but require additional processing before being used for drawing.

Similar to the advances returned by [CTRunGetAdvances](ctrungetadvances%28______%29.md), base advances are the displacement from the origin of a glyph to the origin of the next glyph, except base advances do not include any positioning the font layout tables may have done relative to another glyph (such as a mark relative to its base).

The displacement of the current glyph’s origin from the starting position determines the glyph’s actual position, and the displacement of the current glyph’s base advance from the starting position determines the position of the next glyph.

## See Also

### Related Documentation

- [CTRunGetAdvances](ctrungetadvances%28______%29.md): Copies a range of glyph advances into a user-provided buffer.

### Measuring the Glyph Run

- [CTLineGetBoundsWithOptions](ctlinegetboundswithoptions%28____%29.md): Calculates the bounds for a line.
- [CTRunGetTypographicBounds](ctrungettypographicbounds%28__________%29.md): Gets the typographic bounds of the run.
- [CTRunGetImageBounds](ctrungetimagebounds%28______%29.md): Calculates the image bounds for a glyph range.

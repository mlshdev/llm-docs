> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctlinegetboundswithoptions(_:_:)](https://developer.apple.com/documentation/coretext/ctlinegetboundswithoptions(_:_:))

# CTLineGetBoundsWithOptions(\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Calculates the bounds for a line.

## Declaration

```swift
func CTLineGetBoundsWithOptions(_ line: CTLine, _ options: CTLineBoundsOptions) -> CGRect
```

## Parameters

- `line`: The line for which you calculate the bounds.
- `options`: Desired options or `0` if none.

<a id="return-value"></a>

## Return Value

The bounds of the line as specified by the type and options, such that the coordinate origin is coincident with the line origin and the rect origin is at the bottom left. If the line is invalid, this function will return [CGRectNull](../coregraphics/cgrectnull.md).

## See Also

### Related Documentation

- [CTLineBoundsOptions](ctlineboundsoptions.md): Options for getting the bounds of a line of text.

### Measuring the Glyph Run

- [CTRunGetTypographicBounds(\_:\_:\_:\_:\_:)](ctrungettypographicbounds%28__________%29.md): Gets the typographic bounds of the run.
- [CTRunGetImageBounds(\_:\_:\_:)](ctrungetimagebounds%28______%29.md): Calculates the image bounds for a glyph range.
- [CTRunGetBaseAdvancesAndOrigins(\_:\_:\_:\_:)](ctrungetbaseadvancesandorigins%28________%29.md): Copies a range of base advances and origins into user-provided buffers.

# CTLineGetBoundsWithOptions (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.8+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Calculates the bounds for a line.

## Declaration

```objectivec
extern CGRect CTLineGetBoundsWithOptions(CTLineRef line, CTLineBoundsOptions options);
```

## Parameters

- `line`: The line for which you calculate the bounds.
- `options`: Desired options or `0` if none.

<a id="return-value"></a>

## Return Value

The bounds of the line as specified by the type and options, such that the coordinate origin is coincident with the line origin and the rect origin is at the bottom left. If the line is invalid, this function will return [CGRectNull](../coregraphics/cgrectnull.md).

## See Also

### Related Documentation

- [CTLineBoundsOptions](ctlineboundsoptions.md): Options for getting the bounds of a line of text.

### Measuring the Glyph Run

- [CTRunGetTypographicBounds](ctrungettypographicbounds%28__________%29.md): Gets the typographic bounds of the run.
- [CTRunGetImageBounds](ctrungetimagebounds%28______%29.md): Calculates the image bounds for a glyph range.
- [CTRunGetBaseAdvancesAndOrigins](ctrungetbaseadvancesandorigins%28________%29.md): Copies a range of base advances and origins into user-provided buffers.

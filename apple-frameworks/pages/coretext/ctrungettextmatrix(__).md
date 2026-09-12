> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctrungettextmatrix(_:)](https://developer.apple.com/documentation/coretext/ctrungettextmatrix(_:))

# CTRunGetTextMatrix(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the text matrix needed to draw this run.

## Declaration

```swift
func CTRunGetTextMatrix(_ run: CTRun) -> CGAffineTransform
```

## Parameters

- `run`: The run object from which to get the text matrix.

<a id="return-value"></a>

## Return Value

A [CGAffineTransform](../corefoundation/cgaffinetransform.md) structure.

<a id="Discussion"></a>

## Discussion

To properly draw the glyphs in a run, the fields `tx` and `ty` of the [CGAffineTransform](../corefoundation/cgaffinetransform.md) returned by this function should be set to the current text position.

## See Also

### Drawing the Glyph Run

- [CTRunDraw(\_:\_:\_:)](ctrundraw%28______%29.md): Draws a complete run or part of one.

# CTRunGetTextMatrix (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the text matrix needed to draw this run.

## Declaration

```objectivec
extern CGAffineTransform CTRunGetTextMatrix(CTRunRef run);
```

## Parameters

- `run`: The run object from which to get the text matrix.

<a id="return-value"></a>

## Return Value

A [CGAffineTransform](../corefoundation/cgaffinetransform.md) structure.

<a id="Discussion"></a>

## Discussion

To properly draw the glyphs in a run, the fields `tx` and `ty` of the [CGAffineTransform](../corefoundation/cgaffinetransform.md) returned by this function should be set to the current text position.

## See Also

### Drawing the Glyph Run

- [CTRunDraw](ctrundraw%28______%29.md): Draws a complete run or part of one.

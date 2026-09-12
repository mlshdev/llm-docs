> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctlinegetimagebounds(_:_:)](https://developer.apple.com/documentation/coretext/ctlinegetimagebounds(_:_:))

# CTLineGetImageBounds(\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Calculates the image bounds for a line.

## Declaration

```swift
func CTLineGetImageBounds(_ line: CTLine, _ context: CGContext?) -> CGRect
```

## Parameters

- `line`: The line whose image bounds are calculated.
- `context`: The context for which the image bounds are calculated. This is required because the context could have settings in it that would cause changes in the image bounds.

<a id="return-value"></a>

## Return Value

A rectangle that tightly encloses the paths of the line’s glyphs, or, if the line or context is invalid, [CGRectNull](../coregraphics/cgrectnull.md).

## See Also

### Measuring Lines

- [CTLineGetTypographicBounds(\_:\_:\_:\_:)](ctlinegettypographicbounds%28________%29.md): Calculates the typographic bounds of a line.
- [CTLineGetTrailingWhitespaceWidth(\_:)](ctlinegettrailingwhitespacewidth%28__%29.md): Returns the trailing whitespace width for a line.

# CTLineGetImageBounds (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Calculates the image bounds for a line.

## Declaration

```objectivec
extern CGRect CTLineGetImageBounds(CTLineRef line, CGContextRef context);
```

## Parameters

- `line`: The line whose image bounds are calculated.
- `context`: The context for which the image bounds are calculated. This is required because the context could have settings in it that would cause changes in the image bounds.

<a id="return-value"></a>

## Return Value

A rectangle that tightly encloses the paths of the line’s glyphs, or, if the line or context is invalid, [CGRectNull](../coregraphics/cgrectnull.md).

## See Also

### Measuring Lines

- [CTLineGetTypographicBounds](ctlinegettypographicbounds%28________%29.md): Calculates the typographic bounds of a line.
- [CTLineGetTrailingWhitespaceWidth](ctlinegettrailingwhitespacewidth%28__%29.md): Returns the trailing whitespace width for a line.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctlinegettypographicbounds(_:_:_:_:)](https://developer.apple.com/documentation/coretext/ctlinegettypographicbounds(_:_:_:_:))

# CTLineGetTypographicBounds(\_:\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Calculates the typographic bounds of a line.

## Declaration

```swift
func CTLineGetTypographicBounds(_ line: CTLine, _ ascent: UnsafeMutablePointer<CGFloat>?, _ descent: UnsafeMutablePointer<CGFloat>?, _ leading: UnsafeMutablePointer<CGFloat>?) -> Double
```

## Parameters

- `line`: The line whose typographic bounds are calculated.
- `ascent`: On output, the ascent of the line. This parameter can be set to `NULL` if not needed.
- `descent`: On output, the descent of the line. This parameter can be set to `NULL` if not needed.
- `leading`: On output, the leading of the line. This parameter can be set to `NULL` if not needed.

<a id="return-value"></a>

## Return Value

The typographic width of the line. If the line is invalid, this function returns `0`.

## See Also

### Measuring Lines

- [CTLineGetImageBounds(\_:\_:)](ctlinegetimagebounds%28____%29.md): Calculates the image bounds for a line.
- [CTLineGetTrailingWhitespaceWidth(\_:)](ctlinegettrailingwhitespacewidth%28__%29.md): Returns the trailing whitespace width for a line.

# CTLineGetTypographicBounds (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Calculates the typographic bounds of a line.

## Declaration

```objectivec
extern double CTLineGetTypographicBounds(CTLineRef line, CGFloat *ascent, CGFloat *descent, CGFloat *leading);
```

## Parameters

- `line`: The line whose typographic bounds are calculated.
- `ascent`: On output, the ascent of the line. This parameter can be set to `NULL` if not needed.
- `descent`: On output, the descent of the line. This parameter can be set to `NULL` if not needed.
- `leading`: On output, the leading of the line. This parameter can be set to `NULL` if not needed.

<a id="return-value"></a>

## Return Value

The typographic width of the line. If the line is invalid, this function returns `0`.

## See Also

### Measuring Lines

- [CTLineGetImageBounds](ctlinegetimagebounds%28____%29.md): Calculates the image bounds for a line.
- [CTLineGetTrailingWhitespaceWidth](ctlinegettrailingwhitespacewidth%28__%29.md): Returns the trailing whitespace width for a line.

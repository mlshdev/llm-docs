> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctlinegettrailingwhitespacewidth(_:)](https://developer.apple.com/documentation/coretext/ctlinegettrailingwhitespacewidth(_:))

# CTLineGetTrailingWhitespaceWidth(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the trailing whitespace width for a line.

## Declaration

```swift
func CTLineGetTrailingWhitespaceWidth(_ line: CTLine) -> Double
```

## Parameters

- `line`: The line whose trailing whitespace width is calculated.

<a id="return-value"></a>

## Return Value

The width of the line’s trailing whitespace. If the line is invalid, this function will always return zero.

<a id="Discussion"></a>

## Discussion

Creating a line for a width can result in a line that is actually longer than the desired width due to trailing whitespace. Although this is typically not an issue due to whitespace being invisible, this function can be used to determine what amount of a line’s width is due to trailing whitespace.

## See Also

### Measuring Lines

- [CTLineGetImageBounds(\_:\_:)](ctlinegetimagebounds%28____%29.md): Calculates the image bounds for a line.
- [CTLineGetTypographicBounds(\_:\_:\_:\_:)](ctlinegettypographicbounds%28________%29.md): Calculates the typographic bounds of a line.

# CTLineGetTrailingWhitespaceWidth (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the trailing whitespace width for a line.

## Declaration

```objectivec
extern double CTLineGetTrailingWhitespaceWidth(CTLineRef line);
```

## Parameters

- `line`: The line whose trailing whitespace width is calculated.

<a id="return-value"></a>

## Return Value

The width of the line’s trailing whitespace. If the line is invalid, this function will always return zero.

<a id="Discussion"></a>

## Discussion

Creating a line for a width can result in a line that is actually longer than the desired width due to trailing whitespace. Although this is typically not an issue due to whitespace being invisible, this function can be used to determine what amount of a line’s width is due to trailing whitespace.

## See Also

### Measuring Lines

- [CTLineGetImageBounds](ctlinegetimagebounds%28____%29.md): Calculates the image bounds for a line.
- [CTLineGetTypographicBounds](ctlinegettypographicbounds%28________%29.md): Calculates the typographic bounds of a line.

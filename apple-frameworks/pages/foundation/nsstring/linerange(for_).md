> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/linerange(for:)](https://developer.apple.com/documentation/foundation/nsstring/linerange(for:))

# lineRange(for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the range of characters representing the line or lines containing a given range.

## Declaration

```swift
func lineRange(for range: NSRange) -> NSRange
```

## Parameters

- `range`: A range within the receiver. The value must not exceed the bounds of the receiver.

<a id="return-value"></a>

## Return Value

The range of characters representing the line or lines containing `aRange`, including the line termination characters. See [getLineStart(\_:end:contentsEnd:for:)](getlinestart%28__end_contentsend_for_%29.md) for a discussion of line terminators.

## See Also

### Related Documentation

- [substring(with:)](substring%28with_%29.md): Returns a string object containing the characters of the receiver that lie within a given range.

### Determining Line and Paragraph Ranges

- [getLineStart(\_:end:contentsEnd:for:)](getlinestart%28__end_contentsend_for_%29.md): Returns by reference the beginning of the first line and the end of the last line touched by the given range.
- [getParagraphStart(\_:end:contentsEnd:for:)](getparagraphstart%28__end_contentsend_for_%29.md): Returns by reference the beginning of the first paragraph and the end of the last paragraph touched by the given range.
- [paragraphRange(for:)](paragraphrange%28for_%29.md): Returns the range of characters representing the paragraph or paragraphs containing a given range.

# lineRangeForRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the range of characters representing the line or lines containing a given range.

## Declaration

```objectivec
- (NSRange) lineRangeForRange:(NSRange) range;
```

## Parameters

- `range`: A range within the receiver. The value must not exceed the bounds of the receiver.

<a id="return-value"></a>

## Return Value

The range of characters representing the line or lines containing `aRange`, including the line termination characters. See [getLineStart:end:contentsEnd:forRange:](getlinestart%28__end_contentsend_for_%29.md) for a discussion of line terminators.

## See Also

### Related Documentation

- [substringWithRange:](substring%28with_%29.md): Returns a string object containing the characters of the receiver that lie within a given range.

### Determining Line and Paragraph Ranges

- [getLineStart:end:contentsEnd:forRange:](getlinestart%28__end_contentsend_for_%29.md): Returns by reference the beginning of the first line and the end of the last line touched by the given range.
- [getParagraphStart:end:contentsEnd:forRange:](getparagraphstart%28__end_contentsend_for_%29.md): Returns by reference the beginning of the first paragraph and the end of the last paragraph touched by the given range.
- [paragraphRangeForRange:](paragraphrange%28for_%29.md): Returns the range of characters representing the paragraph or paragraphs containing a given range.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/paragraphrange(for:)](https://developer.apple.com/documentation/foundation/nsstring/paragraphrange(for:))

# paragraphRange(for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the range of characters representing the paragraph or paragraphs containing a given range.

## Declaration

```swift
func paragraphRange(for range: NSRange) -> NSRange
```

## Parameters

- `range`: A range within the receiver. The range must not exceed the bounds of the receiver.

<a id="return-value"></a>

## Return Value

The range of characters representing the paragraph or paragraphs containing `aRange`, including the paragraph termination characters.

<a id="Discussion"></a>

## Discussion

A paragraph is any segment of text delimited by a carriage return (`U+000D`), newline (`U+000A`), or paragraph separator (`U+2029`).

## See Also

### Determining Line and Paragraph Ranges

- [getLineStart(\_:end:contentsEnd:for:)](getlinestart%28__end_contentsend_for_%29.md): Returns by reference the beginning of the first line and the end of the last line touched by the given range.
- [lineRange(for:)](linerange%28for_%29.md): Returns the range of characters representing the line or lines containing a given range.
- [getParagraphStart(\_:end:contentsEnd:for:)](getparagraphstart%28__end_contentsend_for_%29.md): Returns by reference the beginning of the first paragraph and the end of the last paragraph touched by the given range.

# paragraphRangeForRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns the range of characters representing the paragraph or paragraphs containing a given range.

## Declaration

```objectivec
- (NSRange) paragraphRangeForRange:(NSRange) range;
```

## Parameters

- `range`: A range within the receiver. The range must not exceed the bounds of the receiver.

<a id="return-value"></a>

## Return Value

The range of characters representing the paragraph or paragraphs containing `aRange`, including the paragraph termination characters.

<a id="Discussion"></a>

## Discussion

A paragraph is any segment of text delimited by a carriage return (`U+000D`), newline (`U+000A`), or paragraph separator (`U+2029`).

## See Also

### Determining Line and Paragraph Ranges

- [getLineStart:end:contentsEnd:forRange:](getlinestart%28__end_contentsend_for_%29.md): Returns by reference the beginning of the first line and the end of the last line touched by the given range.
- [lineRangeForRange:](linerange%28for_%29.md): Returns the range of characters representing the line or lines containing a given range.
- [getParagraphStart:end:contentsEnd:forRange:](getparagraphstart%28__end_contentsend_for_%29.md): Returns by reference the beginning of the first paragraph and the end of the last paragraph touched by the given range.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsstring/getparagraphstart(_:end:contentsend:for:)](https://developer.apple.com/documentation/foundation/nsstring/getparagraphstart(_:end:contentsend:for:))

# getParagraphStart(\_:end:contentsEnd:for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns by reference the beginning of the first paragraph and the end of the last paragraph touched by the given range.

## Declaration

```swift
func getParagraphStart(_ startPtr: UnsafeMutablePointer<Int>?, end parEndPtr: UnsafeMutablePointer<Int>?, contentsEnd contentsEndPtr: UnsafeMutablePointer<Int>?, for range: NSRange)
```

## Parameters

- `startPtr`: Upon return, contains the index of the first character of the paragraph containing the beginning of `aRange`. Pass `NULL` if you do not need this value (in which case the work to compute the value isn’t performed).
- `parEndPtr`: Upon return, contains the index of the first character past the terminator of the paragraph containing the end of `aRange`. Pass `NULL` if you do not need this value (in which case the work to compute the value isn’t performed).
- `contentsEndPtr`: Upon return, contains the index of the first character of the terminator of the paragraph containing the end of `aRange`. Pass `NULL` if you do not need this value (in which case the work to compute the value isn’t performed).
- `range`: A range within the receiver. The value must not exceed the bounds of the receiver.

<a id="Discussion"></a>

## Discussion

A paragraph is any segment of text delimited by a carriage return (`U+000D`), newline (`U+000A`), or paragraph separator (`U+2029`).

If `aRange` is contained with a single paragraph, of course, the returned indexes all belong to that paragraph. Similar to [getLineStart(\_:end:contentsEnd:for:)](getlinestart%28__end_contentsend_for_%29.md), you can use the results of this method to construct the ranges for paragraphs.

## See Also

### Determining Line and Paragraph Ranges

- [getLineStart(\_:end:contentsEnd:for:)](getlinestart%28__end_contentsend_for_%29.md): Returns by reference the beginning of the first line and the end of the last line touched by the given range.
- [lineRange(for:)](linerange%28for_%29.md): Returns the range of characters representing the line or lines containing a given range.
- [paragraphRange(for:)](paragraphrange%28for_%29.md): Returns the range of characters representing the paragraph or paragraphs containing a given range.

# getParagraphStart:end:contentsEnd:forRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns by reference the beginning of the first paragraph and the end of the last paragraph touched by the given range.

## Declaration

```objectivec
- (void) getParagraphStart:(NSUInteger *) startPtr end:(NSUInteger *) parEndPtr contentsEnd:(NSUInteger *) contentsEndPtr forRange:(NSRange) range;
```

## Parameters

- `startPtr`: Upon return, contains the index of the first character of the paragraph containing the beginning of `aRange`. Pass `NULL` if you do not need this value (in which case the work to compute the value isn’t performed).
- `parEndPtr`: Upon return, contains the index of the first character past the terminator of the paragraph containing the end of `aRange`. Pass `NULL` if you do not need this value (in which case the work to compute the value isn’t performed).
- `contentsEndPtr`: Upon return, contains the index of the first character of the terminator of the paragraph containing the end of `aRange`. Pass `NULL` if you do not need this value (in which case the work to compute the value isn’t performed).
- `range`: A range within the receiver. The value must not exceed the bounds of the receiver.

<a id="Discussion"></a>

## Discussion

A paragraph is any segment of text delimited by a carriage return (`U+000D`), newline (`U+000A`), or paragraph separator (`U+2029`).

If `aRange` is contained with a single paragraph, of course, the returned indexes all belong to that paragraph. Similar to [getLineStart:end:contentsEnd:forRange:](getlinestart%28__end_contentsend_for_%29.md), you can use the results of this method to construct the ranges for paragraphs.

## See Also

### Determining Line and Paragraph Ranges

- [getLineStart:end:contentsEnd:forRange:](getlinestart%28__end_contentsend_for_%29.md): Returns by reference the beginning of the first line and the end of the last line touched by the given range.
- [lineRangeForRange:](linerange%28for_%29.md): Returns the range of characters representing the line or lines containing a given range.
- [paragraphRangeForRange:](paragraphrange%28for_%29.md): Returns the range of characters representing the paragraph or paragraphs containing a given range.

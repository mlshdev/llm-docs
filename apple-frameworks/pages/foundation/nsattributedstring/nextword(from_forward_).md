> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/nextword(from:forward:)](https://developer.apple.com/documentation/foundation/nsattributedstring/nextword(from:forward:))

# nextWord(from:forward:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the index of the first character of the word after or before the specified index.

## Declaration

```swift
func nextWord(from location: Int, forward isForward: Bool) -> Int
```

## Parameters

- `location`: The index in the attribute string.
- `isForward`: [true](https://developer.apple.com/documentation/swift/true) if the search should be forward, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if this is the first character after `index` that begins a word; if `flag` is [false](https://developer.apple.com/documentation/swift/false), it’s the first character before `index` that begins a word, whether `index` is located within a word or not.

<a id="Discussion"></a>

## Discussion

If `index` lies at either end of the string and the search direction would progress past that end, it’s returned unchanged.

This method is intended for moving the insertion point during editing, not for linguistic analysis or parsing of text.

Raises an [rangeException](../nsexceptionname/rangeexception.md) if `index` lies beyond the end of the receiver’s characters.

## See Also

### Calculating linguistic units

- [doubleClick(at:)](doubleclick%28at_%29.md): Returns the range of characters that form a word (or other linguistic unit) surrounding the specified index, taking language characteristics into account.
- [lineBreak(before:within:)](linebreak%28before_within_%29.md): Returns the appropriate line break when the character at the index doesn’t fit on the same line as the character at the beginning of the range.
- [lineBreakByHyphenating(before:within:)](linebreakbyhyphenating%28before_within_%29.md): Returns the index of the closest character before the specified index, and within the specified range, that can fit on a new line by hyphenating.

# nextWordFromIndex:forward: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the index of the first character of the word after or before the specified index.

## Declaration

```objectivec
- (NSUInteger) nextWordFromIndex:(NSUInteger) location forward:(BOOL) isForward;
```

## Parameters

- `location`: The index in the attribute string.
- `isForward`: [true](https://developer.apple.com/documentation/swift/true) if the search should be forward, otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if this is the first character after `index` that begins a word; if `flag` is [false](https://developer.apple.com/documentation/swift/false), it’s the first character before `index` that begins a word, whether `index` is located within a word or not.

<a id="Discussion"></a>

## Discussion

If `index` lies at either end of the string and the search direction would progress past that end, it’s returned unchanged.

This method is intended for moving the insertion point during editing, not for linguistic analysis or parsing of text.

Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if `index` lies beyond the end of the receiver’s characters.

## See Also

### Calculating linguistic units

- [doubleClickAtIndex:](doubleclick%28at_%29.md): Returns the range of characters that form a word (or other linguistic unit) surrounding the specified index, taking language characteristics into account.
- [lineBreakBeforeIndex:withinRange:](linebreak%28before_within_%29.md): Returns the appropriate line break when the character at the index doesn’t fit on the same line as the character at the beginning of the range.
- [lineBreakByHyphenatingBeforeIndex:withinRange:](linebreakbyhyphenating%28before_within_%29.md): Returns the index of the closest character before the specified index, and within the specified range, that can fit on a new line by hyphenating.

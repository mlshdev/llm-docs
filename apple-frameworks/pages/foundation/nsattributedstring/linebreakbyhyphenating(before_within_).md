> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/linebreakbyhyphenating(before:within:)](https://developer.apple.com/documentation/foundation/nsattributedstring/linebreakbyhyphenating(before:within:))

# lineBreakByHyphenating(before:within:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the index of the closest character before the specified index, and within the specified range, that can fit on a new line by hyphenating.

## Declaration

```swift
func lineBreakByHyphenating(before location: Int, within aRange: NSRange) -> Int
```

## Parameters

- `location`: The location in the attributed string.
- `aRange`: The range.

<a id="return-value"></a>

## Return Value

Returns the index of the closest character before  `index` within `aRange`, that can be placed on a new line by hyphenating. Returns `NSNotFound` if no line break by hyphenation is possible before `index`.

<a id="Discussion"></a>

## Discussion

In other words, during text layout, finds the appropriate line break by hyphenation (the character index at which the hyphen glyph should be inserted) when the character at `index` won’t fit on the same line as the character at the beginning of `aRange`.

Raises an [rangeException](../nsexceptionname/rangeexception.md) if `index` or any part of `aRange` lies beyond the end of the receiver’s characters.

## See Also

### Calculating linguistic units

- [doubleClick(at:)](doubleclick%28at_%29.md): Returns the range of characters that form a word (or other linguistic unit) surrounding the specified index, taking language characteristics into account.
- [lineBreak(before:within:)](linebreak%28before_within_%29.md): Returns the appropriate line break when the character at the index doesn’t fit on the same line as the character at the beginning of the range.
- [nextWord(from:forward:)](nextword%28from_forward_%29.md): Returns the index of the first character of the word after or before the specified index.

# lineBreakByHyphenatingBeforeIndex:withinRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the index of the closest character before the specified index, and within the specified range, that can fit on a new line by hyphenating.

## Declaration

```objectivec
- (NSUInteger) lineBreakByHyphenatingBeforeIndex:(NSUInteger) location withinRange:(NSRange) aRange;
```

## Parameters

- `location`: The location in the attributed string.
- `aRange`: The range.

<a id="return-value"></a>

## Return Value

Returns the index of the closest character before  `index` within `aRange`, that can be placed on a new line by hyphenating. Returns `NSNotFound` if no line break by hyphenation is possible before `index`.

<a id="Discussion"></a>

## Discussion

In other words, during text layout, finds the appropriate line break by hyphenation (the character index at which the hyphen glyph should be inserted) when the character at `index` won’t fit on the same line as the character at the beginning of `aRange`.

Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if `index` or any part of `aRange` lies beyond the end of the receiver’s characters.

## See Also

### Calculating linguistic units

- [doubleClickAtIndex:](doubleclick%28at_%29.md): Returns the range of characters that form a word (or other linguistic unit) surrounding the specified index, taking language characteristics into account.
- [lineBreakBeforeIndex:withinRange:](linebreak%28before_within_%29.md): Returns the appropriate line break when the character at the index doesn’t fit on the same line as the character at the beginning of the range.
- [nextWordFromIndex:forward:](nextword%28from_forward_%29.md): Returns the index of the first character of the word after or before the specified index.

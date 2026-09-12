> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/linebreak(before:within:)](https://developer.apple.com/documentation/foundation/nsattributedstring/linebreak(before:within:))

# lineBreak(before:within:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the appropriate line break when the character at the index doesn’t fit on the same line as the character at the beginning of the range.

## Declaration

```swift
func lineBreak(before location: Int, within aRange: NSRange) -> Int
```

## Parameters

- `location`: The index in the attributed string.
- `aRange`: The range.

<a id="return-value"></a>

## Return Value

 Returns the index of the closest character before `index` within `aRange`, that can be placed on a new line when laying out text. Returns `NSNotFound` if no line break is possible before `index`.

<a id="Discussion"></a>

## Discussion

Raises an [rangeException](../nsexceptionname/rangeexception.md) if `index` or any part of `aRange` lies beyond the end of the receiver’s characters.

## See Also

### Calculating linguistic units

- [doubleClick(at:)](doubleclick%28at_%29.md): Returns the range of characters that form a word (or other linguistic unit) surrounding the specified index, taking language characteristics into account.
- [lineBreakByHyphenating(before:within:)](linebreakbyhyphenating%28before_within_%29.md): Returns the index of the closest character before the specified index, and within the specified range, that can fit on a new line by hyphenating.
- [nextWord(from:forward:)](nextword%28from_forward_%29.md): Returns the index of the first character of the word after or before the specified index.

# lineBreakBeforeIndex:withinRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the appropriate line break when the character at the index doesn’t fit on the same line as the character at the beginning of the range.

## Declaration

```objectivec
- (NSUInteger) lineBreakBeforeIndex:(NSUInteger) location withinRange:(NSRange) aRange;
```

## Parameters

- `location`: The index in the attributed string.
- `aRange`: The range.

<a id="return-value"></a>

## Return Value

 Returns the index of the closest character before `index` within `aRange`, that can be placed on a new line when laying out text. Returns `NSNotFound` if no line break is possible before `index`.

<a id="Discussion"></a>

## Discussion

Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if `index` or any part of `aRange` lies beyond the end of the receiver’s characters.

## See Also

### Calculating linguistic units

- [doubleClickAtIndex:](doubleclick%28at_%29.md): Returns the range of characters that form a word (or other linguistic unit) surrounding the specified index, taking language characteristics into account.
- [lineBreakByHyphenatingBeforeIndex:withinRange:](linebreakbyhyphenating%28before_within_%29.md): Returns the index of the closest character before the specified index, and within the specified range, that can fit on a new line by hyphenating.
- [nextWordFromIndex:forward:](nextword%28from_forward_%29.md): Returns the index of the first character of the word after or before the specified index.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsattributedstring/doubleclick(at:)](https://developer.apple.com/documentation/foundation/nsattributedstring/doubleclick(at:))

# doubleClick(at:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the range of characters that form a word (or other linguistic unit) surrounding the specified index, taking language characteristics into account.

## Declaration

```swift
func doubleClick(at location: Int) -> NSRange
```

## Parameters

- `location`: The index in the attributed string.

<a id="return-value"></a>

## Return Value

Returns the range of characters that form a word (or other linguistic unit) surrounding the given index, taking language characteristics into account.

<a id="Discussion"></a>

## Discussion

Raises an [rangeException](../nsexceptionname/rangeexception.md) if `index` lies beyond the end of the receiver’s characters.

## See Also

### Calculating linguistic units

- [lineBreak(before:within:)](linebreak%28before_within_%29.md): Returns the appropriate line break when the character at the index doesn’t fit on the same line as the character at the beginning of the range.
- [lineBreakByHyphenating(before:within:)](linebreakbyhyphenating%28before_within_%29.md): Returns the index of the closest character before the specified index, and within the specified range, that can fit on a new line by hyphenating.
- [nextWord(from:forward:)](nextword%28from_forward_%29.md): Returns the index of the first character of the word after or before the specified index.

# doubleClickAtIndex: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the range of characters that form a word (or other linguistic unit) surrounding the specified index, taking language characteristics into account.

## Declaration

```objectivec
- (NSRange) doubleClickAtIndex:(NSUInteger) location;
```

## Parameters

- `location`: The index in the attributed string.

<a id="return-value"></a>

## Return Value

Returns the range of characters that form a word (or other linguistic unit) surrounding the given index, taking language characteristics into account.

<a id="Discussion"></a>

## Discussion

Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if `index` lies beyond the end of the receiver’s characters.

## See Also

### Calculating linguistic units

- [lineBreakBeforeIndex:withinRange:](linebreak%28before_within_%29.md): Returns the appropriate line break when the character at the index doesn’t fit on the same line as the character at the beginning of the range.
- [lineBreakByHyphenatingBeforeIndex:withinRange:](linebreakbyhyphenating%28before_within_%29.md): Returns the index of the closest character before the specified index, and within the specified range, that can fit on a new line by hyphenating.
- [nextWordFromIndex:forward:](nextword%28from_forward_%29.md): Returns the index of the first character of the word after or before the specified index.

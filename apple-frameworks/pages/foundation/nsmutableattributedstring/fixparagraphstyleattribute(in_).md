> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableattributedstring/fixparagraphstyleattribute(in:)](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/fixparagraphstyleattribute(in:))

# fixParagraphStyleAttribute(in:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Fixes the paragraph style attributes in the specified range and assigns a paragraph style to all characters in the paragraph.

## Declaration

```swift
func fixParagraphStyleAttribute(in range: NSRange)
```

## Parameters

- `range`: The range of characters.

<a id="Discussion"></a>

## Discussion

This method assigns the first paragraph style attribute value in each paragraph to all characters of the paragraph. This method extends the range as needed to cover the last paragraph partially contained. A paragraph is delimited by any of these characters, the longest possible sequence being preferred to any shorter:

- U+000D (`\r` or CR)
- U+000A (`\n` or LF)
- U+2029 (Unicode paragraph separator)  `\r\n`, in that order (also known as CRLF)

Raises an [rangeException](../nsexceptionname/rangeexception.md) if any part of `range` lies beyond the end of the receiver’s characters.

## See Also

### Fixing Attributes After Changes

- [fixAttributes(in:)](fixattributes%28in_%29.md): Cleans up font, paragraph style, and attachment attributes within the given range.
- [fixAttachmentAttribute(in:)](fixattachmentattribute%28in_%29.md): Cleans up attachment attributes in the specified range and removes all attachment attributes assigned to characters except the designated attachment character.
- [fixFontAttribute(in:)](fixfontattribute%28in_%29.md): Fixes the font attribute in the specified range and assigns default fonts where appropriate.

# fixParagraphStyleAttributeInRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Fixes the paragraph style attributes in the specified range and assigns a paragraph style to all characters in the paragraph.

## Declaration

```objectivec
- (void) fixParagraphStyleAttributeInRange:(NSRange) range;
```

## Parameters

- `range`: The range of characters.

<a id="Discussion"></a>

## Discussion

This method assigns the first paragraph style attribute value in each paragraph to all characters of the paragraph. This method extends the range as needed to cover the last paragraph partially contained. A paragraph is delimited by any of these characters, the longest possible sequence being preferred to any shorter:

- U+000D (`\r` or CR)
- U+000A (`\n` or LF)
- U+2029 (Unicode paragraph separator)  `\r\n`, in that order (also known as CRLF)

Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if any part of `range` lies beyond the end of the receiver’s characters.

## See Also

### Fixing Attributes After Changes

- [fixAttributesInRange:](fixattributes%28in_%29.md): Cleans up font, paragraph style, and attachment attributes within the given range.
- [fixAttachmentAttributeInRange:](fixattachmentattribute%28in_%29.md): Cleans up attachment attributes in the specified range and removes all attachment attributes assigned to characters except the designated attachment character.
- [fixFontAttributeInRange:](fixfontattribute%28in_%29.md): Fixes the font attribute in the specified range and assigns default fonts where appropriate.

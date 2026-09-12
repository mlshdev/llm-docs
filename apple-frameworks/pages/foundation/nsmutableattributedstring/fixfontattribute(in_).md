> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableattributedstring/fixfontattribute(in:)](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/fixfontattribute(in:))

# fixFontAttribute(in:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Fixes the font attribute in the specified range and assigns default fonts where appropriate.

## Declaration

```swift
func fixFontAttribute(in range: NSRange)
```

## Parameters

- `range`: The range of characters.

<a id="Discussion"></a>

## Discussion

This method assigns default fonts to characters with illegal fonts for their scripts and corrects other font attribute assignments. For example, Kanji characters assigned a Latin font are reassigned an appropriate Kanji font. Raises an [rangeException](../nsexceptionname/rangeexception.md) if any part of `range` lies beyond the end of the receiver’s characters.

## See Also

### Fixing Attributes After Changes

- [fixAttributes(in:)](fixattributes%28in_%29.md): Cleans up font, paragraph style, and attachment attributes within the given range.
- [fixAttachmentAttribute(in:)](fixattachmentattribute%28in_%29.md): Cleans up attachment attributes in the specified range and removes all attachment attributes assigned to characters except the designated attachment character.
- [fixParagraphStyleAttribute(in:)](fixparagraphstyleattribute%28in_%29.md): Fixes the paragraph style attributes in the specified range and assigns a paragraph style to all characters in the paragraph.

# fixFontAttributeInRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Fixes the font attribute in the specified range and assigns default fonts where appropriate.

## Declaration

```objectivec
- (void) fixFontAttributeInRange:(NSRange) range;
```

## Parameters

- `range`: The range of characters.

<a id="Discussion"></a>

## Discussion

This method assigns default fonts to characters with illegal fonts for their scripts and corrects other font attribute assignments. For example, Kanji characters assigned a Latin font are reassigned an appropriate Kanji font. Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if any part of `range` lies beyond the end of the receiver’s characters.

## See Also

### Fixing Attributes After Changes

- [fixAttributesInRange:](fixattributes%28in_%29.md): Cleans up font, paragraph style, and attachment attributes within the given range.
- [fixAttachmentAttributeInRange:](fixattachmentattribute%28in_%29.md): Cleans up attachment attributes in the specified range and removes all attachment attributes assigned to characters except the designated attachment character.
- [fixParagraphStyleAttributeInRange:](fixparagraphstyleattribute%28in_%29.md): Fixes the paragraph style attributes in the specified range and assigns a paragraph style to all characters in the paragraph.

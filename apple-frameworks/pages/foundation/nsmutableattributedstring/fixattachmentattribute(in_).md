> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableattributedstring/fixattachmentattribute(in:)](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/fixattachmentattribute(in:))

# fixAttachmentAttribute(in:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Cleans up attachment attributes in the specified range and removes all attachment attributes assigned to characters except the designated attachment character.

## Declaration

```swift
func fixAttachmentAttribute(in range: NSRange)
```

## Parameters

- `range`: The range of characters.

<a id="Discussion"></a>

## Discussion

The method preserves the attachment attribute on the [character](https://developer.apple.com/documentation/appkit/nstextattachment/character) special character. The method raises a [rangeException](../nsexceptionname/rangeexception.md) if any part of `range` lies beyond the end of the string’s characters.

## See Also

### Fixing Attributes After Changes

- [fixAttributes(in:)](fixattributes%28in_%29.md): Cleans up font, paragraph style, and attachment attributes within the given range.
- [fixFontAttribute(in:)](fixfontattribute%28in_%29.md): Fixes the font attribute in the specified range and assigns default fonts where appropriate.
- [fixParagraphStyleAttribute(in:)](fixparagraphstyleattribute%28in_%29.md): Fixes the paragraph style attributes in the specified range and assigns a paragraph style to all characters in the paragraph.

# fixAttachmentAttributeInRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Cleans up attachment attributes in the specified range and removes all attachment attributes assigned to characters except the designated attachment character.

## Declaration

```objectivec
- (void) fixAttachmentAttributeInRange:(NSRange) range;
```

## Parameters

- `range`: The range of characters.

<a id="Discussion"></a>

## Discussion

The method preserves the attachment attribute on the [NSAttachmentCharacter](https://developer.apple.com/documentation/appkit/nstextattachment/character) special character. The method raises a [NSRangeException](../nsexceptionname/rangeexception.md) if any part of `range` lies beyond the end of the string’s characters.

## See Also

### Fixing Attributes After Changes

- [fixAttributesInRange:](fixattributes%28in_%29.md): Cleans up font, paragraph style, and attachment attributes within the given range.
- [fixFontAttributeInRange:](fixfontattribute%28in_%29.md): Fixes the font attribute in the specified range and assigns default fonts where appropriate.
- [fixParagraphStyleAttributeInRange:](fixparagraphstyleattribute%28in_%29.md): Fixes the paragraph style attributes in the specified range and assigns a paragraph style to all characters in the paragraph.

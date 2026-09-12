> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsmutableattributedstring/fixattributes(in:)](https://developer.apple.com/documentation/foundation/nsmutableattributedstring/fixattributes(in:))

# fixAttributes(in:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cleans up font, paragraph style, and attachment attributes within the given range.

## Declaration

```swift
func fixAttributes(in range: NSRange)
```

## Parameters

- `range`: The character range within which to fix attributes. Raises an [rangeException](../nsexceptionname/rangeexception.md) if any part of `range` lies beyond the end of the receiver’s characters.

<a id="Discussion"></a>

## Discussion

Removes attachment attributes assigned to characters other than [character](https://developer.apple.com/documentation/appkit/nstextattachment/character), assigns default fonts to characters with illegal fonts for their scripts and otherwise corrects font attribute assignments, and assigns the first paragraph style attribute value in each paragraph to all characters of the paragraph.

This method extends the range as needed to cover the last paragraph partially contained.

Raises an [rangeException](../nsexceptionname/rangeexception.md) if any part of aRange lies beyond the end of the receiver’s characters.

`NSTextStorage` subclasses that return [true](https://developer.apple.com/documentation/swift/true) from the [fixesAttributesLazily](https://developer.apple.com/documentation/appkit/nstextstorage/fixesattributeslazily) method should avoid directly calling [fixAttributes(in:)](fixattributes%28in_%29.md) or else bracket such calls with [beginEditing()](beginediting%28%29.md) and [endEditing()](endediting%28%29.md) messages.

## See Also

### Fixing Attributes After Changes

- [fixAttachmentAttribute(in:)](fixattachmentattribute%28in_%29.md): Cleans up attachment attributes in the specified range and removes all attachment attributes assigned to characters except the designated attachment character.
- [fixFontAttribute(in:)](fixfontattribute%28in_%29.md): Fixes the font attribute in the specified range and assigns default fonts where appropriate.
- [fixParagraphStyleAttribute(in:)](fixparagraphstyleattribute%28in_%29.md): Fixes the paragraph style attributes in the specified range and assigns a paragraph style to all characters in the paragraph.

# fixAttributesInRange: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Cleans up font, paragraph style, and attachment attributes within the given range.

## Declaration

```objectivec
- (void) fixAttributesInRange:(NSRange) range;
```

## Parameters

- `range`: The character range within which to fix attributes. Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if any part of `range` lies beyond the end of the receiver’s characters.

<a id="Discussion"></a>

## Discussion

Removes attachment attributes assigned to characters other than [NSAttachmentCharacter](https://developer.apple.com/documentation/appkit/nstextattachment/character), assigns default fonts to characters with illegal fonts for their scripts and otherwise corrects font attribute assignments, and assigns the first paragraph style attribute value in each paragraph to all characters of the paragraph.

This method extends the range as needed to cover the last paragraph partially contained.

Raises an [NSRangeException](../nsexceptionname/rangeexception.md) if any part of aRange lies beyond the end of the receiver’s characters.

`NSTextStorage` subclasses that return [true](https://developer.apple.com/documentation/swift/true) from the [fixesAttributesLazily](https://developer.apple.com/documentation/appkit/nstextstorage/fixesattributeslazily) method should avoid directly calling [fixAttributesInRange:](fixattributes%28in_%29.md) or else bracket such calls with [beginEditing](beginediting%28%29.md) and [endEditing](endediting%28%29.md) messages.

## See Also

### Fixing Attributes After Changes

- [fixAttachmentAttributeInRange:](fixattachmentattribute%28in_%29.md): Cleans up attachment attributes in the specified range and removes all attachment attributes assigned to characters except the designated attachment character.
- [fixFontAttributeInRange:](fixfontattribute%28in_%29.md): Fixes the font attribute in the specified range and assigns default fonts where appropriate.
- [fixParagraphStyleAttributeInRange:](fixparagraphstyleattribute%28in_%29.md): Fixes the paragraph style attributes in the specified range and assigns a paragraph style to all characters in the paragraph.

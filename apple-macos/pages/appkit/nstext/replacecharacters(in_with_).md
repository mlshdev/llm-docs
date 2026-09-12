> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext/replacecharacters(in:with:)](https://developer.apple.com/documentation/appkit/nstext/replacecharacters(in:with:))

# replaceCharacters(in:with:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Replaces the characters in the given range with those in the given string.

## Declaration

```swift
func replaceCharacters(in range: NSRange, with string: String)
```

## Parameters

- `range`: The range of characters to be replaced.
- `string`: The replacement string.

<a id="Discussion"></a>

## Discussion

For a rich text object, the text of `aString` is assigned the formatting attributes of the first character of the text it replaces, or of the character immediately before `aRange` if the range’s length is 0. If the range’s location is 0, the formatting attributes of the first character in the receiver are used.

This method does not include undo support by default. Clients must invoke [shouldChangeText(inRanges:replacementStrings:)](../nstextview/shouldchangetext%28inranges_replacementstrings_%29.md) or [shouldChangeText(in:replacementString:)](../nstextview/shouldchangetext%28in_replacementstring_%29.md) to include this method in an undoable action.

In most cases, programmatic modification of the text is best done by operating on the text storage directly, using the general methods of [NSMutableAttributedString](https://developer.apple.com/documentation/foundation/nsmutableattributedstring).

## See Also

### Replacing text

- [replaceCharacters(in:withRTF:)](replacecharacters%28in_withrtf_%29.md): Replaces the characters in the given range with RTF text interpreted from the given RTF data.
- [replaceCharacters(in:withRTFD:)](replacecharacters%28in_withrtfd_%29.md): Replaces the characters in the given range with RTFD text interpreted from the given RTFD data.

# replaceCharactersInRange:withString: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Replaces the characters in the given range with those in the given string.

## Declaration

```objectivec
- (void) replaceCharactersInRange:(NSRange) range withString:(NSString *) string;
```

## Parameters

- `range`: The range of characters to be replaced.
- `string`: The replacement string.

<a id="Discussion"></a>

## Discussion

For a rich text object, the text of `aString` is assigned the formatting attributes of the first character of the text it replaces, or of the character immediately before `aRange` if the range’s length is 0. If the range’s location is 0, the formatting attributes of the first character in the receiver are used.

This method does not include undo support by default. Clients must invoke [shouldChangeTextInRanges:replacementStrings:](../nstextview/shouldchangetext%28inranges_replacementstrings_%29.md) or [shouldChangeTextInRange:replacementString:](../nstextview/shouldchangetext%28in_replacementstring_%29.md) to include this method in an undoable action.

In most cases, programmatic modification of the text is best done by operating on the text storage directly, using the general methods of [NSMutableAttributedString](https://developer.apple.com/documentation/foundation/nsmutableattributedstring).

## See Also

### Replacing text

- [replaceCharactersInRange:withRTF:](replacecharacters%28in_withrtf_%29.md): Replaces the characters in the given range with RTF text interpreted from the given RTF data.
- [replaceCharactersInRange:withRTFD:](replacecharacters%28in_withrtfd_%29.md): Replaces the characters in the given range with RTFD text interpreted from the given RTFD data.

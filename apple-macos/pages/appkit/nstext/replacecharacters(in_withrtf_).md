> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext/replacecharacters(in:withrtf:)](https://developer.apple.com/documentation/appkit/nstext/replacecharacters(in:withrtf:))

# replaceCharacters(in:withRTF:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Replaces the characters in the given range with RTF text interpreted from the given RTF data.

## Declaration

```swift
func replaceCharacters(in range: NSRange, withRTF rtfData: Data)
```

## Parameters

- `range`: The range of characters to be replaced.
- `rtfData`: The RTF data from which to derive the replacement string.

<a id="Discussion"></a>

## Discussion

This method applies only to rich text objects.

This method does not include undo support by default. Clients must invoke [shouldChangeText(inRanges:replacementStrings:)](../nstextview/shouldchangetext%28inranges_replacementstrings_%29.md) or [shouldChangeText(in:replacementString:)](../nstextview/shouldchangetext%28in_replacementstring_%29.md) to include this method in an undoable action.

This method is designed for transferring text from out-of-process sources such as the pasteboard. In most cases, programmatic modification of the text is best done by operating on the text storage directly, using the general methods of [NSMutableAttributedString](https://developer.apple.com/documentation/foundation/nsmutableattributedstring).

## See Also

### Replacing text

- [replaceCharacters(in:withRTFD:)](replacecharacters%28in_withrtfd_%29.md): Replaces the characters in the given range with RTFD text interpreted from the given RTFD data.
- [replaceCharacters(in:with:)](replacecharacters%28in_with_%29.md): Replaces the characters in the given range with those in the given string.

# replaceCharactersInRange:withRTF: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Replaces the characters in the given range with RTF text interpreted from the given RTF data.

## Declaration

```objectivec
- (void) replaceCharactersInRange:(NSRange) range withRTF:(NSData *) rtfData;
```

## Parameters

- `range`: The range of characters to be replaced.
- `rtfData`: The RTF data from which to derive the replacement string.

<a id="Discussion"></a>

## Discussion

This method applies only to rich text objects.

This method does not include undo support by default. Clients must invoke [shouldChangeTextInRanges:replacementStrings:](../nstextview/shouldchangetext%28inranges_replacementstrings_%29.md) or [shouldChangeTextInRange:replacementString:](../nstextview/shouldchangetext%28in_replacementstring_%29.md) to include this method in an undoable action.

This method is designed for transferring text from out-of-process sources such as the pasteboard. In most cases, programmatic modification of the text is best done by operating on the text storage directly, using the general methods of [NSMutableAttributedString](https://developer.apple.com/documentation/foundation/nsmutableattributedstring).

## See Also

### Replacing text

- [replaceCharactersInRange:withRTFD:](replacecharacters%28in_withrtfd_%29.md): Replaces the characters in the given range with RTFD text interpreted from the given RTFD data.
- [replaceCharactersInRange:withString:](replacecharacters%28in_with_%29.md): Replaces the characters in the given range with those in the given string.

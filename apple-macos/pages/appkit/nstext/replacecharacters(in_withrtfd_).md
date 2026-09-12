> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstext/replacecharacters(in:withrtfd:)](https://developer.apple.com/documentation/appkit/nstext/replacecharacters(in:withrtfd:))

# replaceCharacters(in:withRTFD:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Replaces the characters in the given range with RTFD text interpreted from the given RTFD data.

## Declaration

```swift
func replaceCharacters(in range: NSRange, withRTFD rtfdData: Data)
```

## Parameters

- `range`: The range of characters to be replaced.
- `rtfdData`: The RTFD data from which to derive the replacement string.

<a id="Discussion"></a>

## Discussion

This method applies only to rich text objects.

This method does not include undo support by default. Clients must invoke [shouldChangeText(inRanges:replacementStrings:)](../nstextview/shouldchangetext%28inranges_replacementstrings_%29.md) or [shouldChangeText(in:replacementString:)](../nstextview/shouldchangetext%28in_replacementstring_%29.md) to include this method in an undoable action.

This method is designed for transferring text from out-of-process sources such as the pasteboard. In most cases, programmatic modification of the text is best done by operating on the text storage directly, using the general methods of [NSMutableAttributedString](https://developer.apple.com/documentation/foundation/nsmutableattributedstring).

## See Also

### Replacing text

- [replaceCharacters(in:withRTF:)](replacecharacters%28in_withrtf_%29.md): Replaces the characters in the given range with RTF text interpreted from the given RTF data.
- [replaceCharacters(in:with:)](replacecharacters%28in_with_%29.md): Replaces the characters in the given range with those in the given string.

# replaceCharactersInRange:withRTFD: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Replaces the characters in the given range with RTFD text interpreted from the given RTFD data.

## Declaration

```objectivec
- (void) replaceCharactersInRange:(NSRange) range withRTFD:(NSData *) rtfdData;
```

## Parameters

- `range`: The range of characters to be replaced.
- `rtfdData`: The RTFD data from which to derive the replacement string.

<a id="Discussion"></a>

## Discussion

This method applies only to rich text objects.

This method does not include undo support by default. Clients must invoke [shouldChangeTextInRanges:replacementStrings:](../nstextview/shouldchangetext%28inranges_replacementstrings_%29.md) or [shouldChangeTextInRange:replacementString:](../nstextview/shouldchangetext%28in_replacementstring_%29.md) to include this method in an undoable action.

This method is designed for transferring text from out-of-process sources such as the pasteboard. In most cases, programmatic modification of the text is best done by operating on the text storage directly, using the general methods of [NSMutableAttributedString](https://developer.apple.com/documentation/foundation/nsmutableattributedstring).

## See Also

### Replacing text

- [replaceCharactersInRange:withRTF:](replacecharacters%28in_withrtf_%29.md): Replaces the characters in the given range with RTF text interpreted from the given RTF data.
- [replaceCharactersInRange:withString:](replacecharacters%28in_with_%29.md): Replaces the characters in the given range with those in the given string.

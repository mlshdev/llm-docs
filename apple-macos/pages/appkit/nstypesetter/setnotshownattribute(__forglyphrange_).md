> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/setnotshownattribute(_:forglyphrange:)](https://developer.apple.com/documentation/appkit/nstypesetter/setnotshownattribute(_:forglyphrange:))

# setNotShownAttribute(\_:forGlyphRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets whether the specified glyphs are not shown.

## Declaration

```swift
func setNotShownAttribute(_ flag: Bool, forGlyphRange glyphRange: NSRange)
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) if the glyphs in `glyphRange` are not shown, [false](https://developer.apple.com/documentation/swift/false) if they are shown.
- `glyphRange`: The range of glyphs in question.

<a id="Discussion"></a>

## Discussion

For example, a tab or newline character doesn’t leave any marks; it just indicates where following glyphs are laid out.

A subclass can override this method to interact with custom glyph storage.

## See Also

### Interfacing with Glyph Storage

- [characterRange(forGlyphRange:actualGlyphRange:)](characterrange%28forglyphrange_actualglyphrange_%29.md): Returns the range for the characters in the receiver’s text store that are mapped to the specified glyphs.
- [glyphRange(forCharacterRange:actualCharacterRange:)](glyphrange%28forcharacterrange_actualcharacterrange_%29.md): Returns the range for the glyphs mapped to the characters of the text store in the specified range.
- [setAttachmentSize(\_:forGlyphRange:)](setattachmentsize%28__forglyphrange_%29.md): Sets the size the specified glyphs (assumed to be attachments) will be asked to draw themselves at.
- [setBidiLevels(\_:forGlyphRange:)](setbidilevels%28__forglyphrange_%29.md): Sets the direction of the specified glyphs for bidirectional text.
- [setDrawsOutsideLineFragment(\_:forGlyphRange:)](setdrawsoutsidelinefragment%28__forglyphrange_%29.md): Sets whether the specified glyphs exceed the bounds of the line fragment in which they are laid out.
- [setLineFragmentRect(\_:forGlyphRange:usedRect:baselineOffset:)](setlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Sets the line fragment rectangle where the specified glyphs are laid out.
- [setLocation(\_:withAdvancements:forStartOfGlyphRange:)](setlocation%28__withadvancements_forstartofglyphrange_%29.md): Sets the location where the specified glyphs are laid out.

# setNotShownAttribute:forGlyphRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets whether the specified glyphs are not shown.

## Declaration

```objectivec
- (void) setNotShownAttribute:(BOOL) flag forGlyphRange:(NSRange) glyphRange;
```

## Parameters

- `flag`: [true](https://developer.apple.com/documentation/swift/true) if the glyphs in `glyphRange` are not shown, [false](https://developer.apple.com/documentation/swift/false) if they are shown.
- `glyphRange`: The range of glyphs in question.

<a id="Discussion"></a>

## Discussion

For example, a tab or newline character doesn’t leave any marks; it just indicates where following glyphs are laid out.

A subclass can override this method to interact with custom glyph storage.

## See Also

### Interfacing with Glyph Storage

- [characterRangeForGlyphRange:actualGlyphRange:](characterrange%28forglyphrange_actualglyphrange_%29.md): Returns the range for the characters in the receiver’s text store that are mapped to the specified glyphs.
- [glyphRangeForCharacterRange:actualCharacterRange:](glyphrange%28forcharacterrange_actualcharacterrange_%29.md): Returns the range for the glyphs mapped to the characters of the text store in the specified range.
- [setAttachmentSize:forGlyphRange:](setattachmentsize%28__forglyphrange_%29.md): Sets the size the specified glyphs (assumed to be attachments) will be asked to draw themselves at.
- [setBidiLevels:forGlyphRange:](setbidilevels%28__forglyphrange_%29.md): Sets the direction of the specified glyphs for bidirectional text.
- [setDrawsOutsideLineFragment:forGlyphRange:](setdrawsoutsidelinefragment%28__forglyphrange_%29.md): Sets whether the specified glyphs exceed the bounds of the line fragment in which they are laid out.
- [setLineFragmentRect:forGlyphRange:usedRect:baselineOffset:](setlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Sets the line fragment rectangle where the specified glyphs are laid out.
- [setLocation:withAdvancements:forStartOfGlyphRange:](setlocation%28__withadvancements_forstartofglyphrange_%29.md): Sets the location where the specified glyphs are laid out.

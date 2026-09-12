> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/setbidilevels(_:forglyphrange:)](https://developer.apple.com/documentation/appkit/nstypesetter/setbidilevels(_:forglyphrange:))

# setBidiLevels(\_:forGlyphRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the direction of the specified glyphs for bidirectional text.

## Declaration

```swift
func setBidiLevels(_ levels: UnsafePointer<UInt8>!, forGlyphRange glyphRange: NSRange)
```

## Parameters

- `levels`: Values in `levels` can range from 0 to 61 as defined by Unicode Standard Annex #9.
- `glyphRange`: The range of glyphs for which the bidirectional text levels are desired.

<a id="Discussion"></a>

## Discussion

A subclass can override this method to interact with custom glyph storage.

## See Also

### Interfacing with Glyph Storage

- [characterRange(forGlyphRange:actualGlyphRange:)](characterrange%28forglyphrange_actualglyphrange_%29.md): Returns the range for the characters in the receiver’s text store that are mapped to the specified glyphs.
- [glyphRange(forCharacterRange:actualCharacterRange:)](glyphrange%28forcharacterrange_actualcharacterrange_%29.md): Returns the range for the glyphs mapped to the characters of the text store in the specified range.
- [setAttachmentSize(\_:forGlyphRange:)](setattachmentsize%28__forglyphrange_%29.md): Sets the size the specified glyphs (assumed to be attachments) will be asked to draw themselves at.
- [setDrawsOutsideLineFragment(\_:forGlyphRange:)](setdrawsoutsidelinefragment%28__forglyphrange_%29.md): Sets whether the specified glyphs exceed the bounds of the line fragment in which they are laid out.
- [setLineFragmentRect(\_:forGlyphRange:usedRect:baselineOffset:)](setlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Sets the line fragment rectangle where the specified glyphs are laid out.
- [setLocation(\_:withAdvancements:forStartOfGlyphRange:)](setlocation%28__withadvancements_forstartofglyphrange_%29.md): Sets the location where the specified glyphs are laid out.
- [setNotShownAttribute(\_:forGlyphRange:)](setnotshownattribute%28__forglyphrange_%29.md): Sets whether the specified glyphs are not shown.

# setBidiLevels:forGlyphRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the direction of the specified glyphs for bidirectional text.

## Declaration

```objectivec
- (void) setBidiLevels:(const uint8_t *) levels forGlyphRange:(NSRange) glyphRange;
```

## Parameters

- `levels`: Values in `levels` can range from 0 to 61 as defined by Unicode Standard Annex #9.
- `glyphRange`: The range of glyphs for which the bidirectional text levels are desired.

<a id="Discussion"></a>

## Discussion

A subclass can override this method to interact with custom glyph storage.

## See Also

### Interfacing with Glyph Storage

- [characterRangeForGlyphRange:actualGlyphRange:](characterrange%28forglyphrange_actualglyphrange_%29.md): Returns the range for the characters in the receiver’s text store that are mapped to the specified glyphs.
- [glyphRangeForCharacterRange:actualCharacterRange:](glyphrange%28forcharacterrange_actualcharacterrange_%29.md): Returns the range for the glyphs mapped to the characters of the text store in the specified range.
- [setAttachmentSize:forGlyphRange:](setattachmentsize%28__forglyphrange_%29.md): Sets the size the specified glyphs (assumed to be attachments) will be asked to draw themselves at.
- [setDrawsOutsideLineFragment:forGlyphRange:](setdrawsoutsidelinefragment%28__forglyphrange_%29.md): Sets whether the specified glyphs exceed the bounds of the line fragment in which they are laid out.
- [setLineFragmentRect:forGlyphRange:usedRect:baselineOffset:](setlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Sets the line fragment rectangle where the specified glyphs are laid out.
- [setLocation:withAdvancements:forStartOfGlyphRange:](setlocation%28__withadvancements_forstartofglyphrange_%29.md): Sets the location where the specified glyphs are laid out.
- [setNotShownAttribute:forGlyphRange:](setnotshownattribute%28__forglyphrange_%29.md): Sets whether the specified glyphs are not shown.

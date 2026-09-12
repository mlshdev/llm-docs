> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/glyphrange(forcharacterrange:actualcharacterrange:)](https://developer.apple.com/documentation/appkit/nstypesetter/glyphrange(forcharacterrange:actualcharacterrange:))

# glyphRange(forCharacterRange:actualCharacterRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the range for the glyphs mapped to the characters of the text store in the specified range.

## Declaration

```swift
func glyphRange(forCharacterRange charRange: NSRange, actualCharacterRange actualCharRange: NSRangePointer?) -> NSRange
```

## Parameters

- `charRange`: The range of the characters whose glyph range is desired.
- `actualCharRange`: On return, all characters mapped to those glyphs; may be `NULL`.

<a id="return-value"></a>

## Return Value

The range for the glyphs mapped to the characters of the text store in `charRange`.

<a id="Discussion"></a>

## Discussion

A subclass can override this method to interact with custom glyph storage.

## See Also

### Interfacing with Glyph Storage

- [characterRange(forGlyphRange:actualGlyphRange:)](characterrange%28forglyphrange_actualglyphrange_%29.md): Returns the range for the characters in the receiver’s text store that are mapped to the specified glyphs.
- [setAttachmentSize(\_:forGlyphRange:)](setattachmentsize%28__forglyphrange_%29.md): Sets the size the specified glyphs (assumed to be attachments) will be asked to draw themselves at.
- [setBidiLevels(\_:forGlyphRange:)](setbidilevels%28__forglyphrange_%29.md): Sets the direction of the specified glyphs for bidirectional text.
- [setDrawsOutsideLineFragment(\_:forGlyphRange:)](setdrawsoutsidelinefragment%28__forglyphrange_%29.md): Sets whether the specified glyphs exceed the bounds of the line fragment in which they are laid out.
- [setLineFragmentRect(\_:forGlyphRange:usedRect:baselineOffset:)](setlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Sets the line fragment rectangle where the specified glyphs are laid out.
- [setLocation(\_:withAdvancements:forStartOfGlyphRange:)](setlocation%28__withadvancements_forstartofglyphrange_%29.md): Sets the location where the specified glyphs are laid out.
- [setNotShownAttribute(\_:forGlyphRange:)](setnotshownattribute%28__forglyphrange_%29.md): Sets whether the specified glyphs are not shown.

# glyphRangeForCharacterRange:actualCharacterRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the range for the glyphs mapped to the characters of the text store in the specified range.

## Declaration

```objectivec
- (NSRange) glyphRangeForCharacterRange:(NSRange) charRange actualCharacterRange:(NSRangePointer) actualCharRange;
```

## Parameters

- `charRange`: The range of the characters whose glyph range is desired.
- `actualCharRange`: On return, all characters mapped to those glyphs; may be `NULL`.

<a id="return-value"></a>

## Return Value

The range for the glyphs mapped to the characters of the text store in `charRange`.

<a id="Discussion"></a>

## Discussion

A subclass can override this method to interact with custom glyph storage.

## See Also

### Interfacing with Glyph Storage

- [characterRangeForGlyphRange:actualGlyphRange:](characterrange%28forglyphrange_actualglyphrange_%29.md): Returns the range for the characters in the receiver’s text store that are mapped to the specified glyphs.
- [setAttachmentSize:forGlyphRange:](setattachmentsize%28__forglyphrange_%29.md): Sets the size the specified glyphs (assumed to be attachments) will be asked to draw themselves at.
- [setBidiLevels:forGlyphRange:](setbidilevels%28__forglyphrange_%29.md): Sets the direction of the specified glyphs for bidirectional text.
- [setDrawsOutsideLineFragment:forGlyphRange:](setdrawsoutsidelinefragment%28__forglyphrange_%29.md): Sets whether the specified glyphs exceed the bounds of the line fragment in which they are laid out.
- [setLineFragmentRect:forGlyphRange:usedRect:baselineOffset:](setlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Sets the line fragment rectangle where the specified glyphs are laid out.
- [setLocation:withAdvancements:forStartOfGlyphRange:](setlocation%28__withadvancements_forstartofglyphrange_%29.md): Sets the location where the specified glyphs are laid out.
- [setNotShownAttribute:forGlyphRange:](setnotshownattribute%28__forglyphrange_%29.md): Sets whether the specified glyphs are not shown.

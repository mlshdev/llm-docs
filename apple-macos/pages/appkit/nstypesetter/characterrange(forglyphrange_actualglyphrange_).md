> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/characterrange(forglyphrange:actualglyphrange:)](https://developer.apple.com/documentation/appkit/nstypesetter/characterrange(forglyphrange:actualglyphrange:))

# characterRange(forGlyphRange:actualGlyphRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the range for the characters in the receiver’s text store that are mapped to the specified glyphs.

## Declaration

```swift
func characterRange(forGlyphRange glyphRange: NSRange, actualGlyphRange: NSRangePointer?) -> NSRange
```

## Parameters

- `glyphRange`: The range of glyphs.
- `actualGlyphRange`: On return, the range of all glyphs mapped to the characters in the receiver’s text store. May be `NULL`.

<a id="return-value"></a>

## Return Value

The range for the characters in the receiver’s text store that are mapped to the glyphs in `glyphRange`.

<a id="Discussion"></a>

## Discussion

A subclass can override this method to interact with custom glyph storage.

## See Also

### Interfacing with Glyph Storage

- [glyphRange(forCharacterRange:actualCharacterRange:)](glyphrange%28forcharacterrange_actualcharacterrange_%29.md): Returns the range for the glyphs mapped to the characters of the text store in the specified range.
- [setAttachmentSize(\_:forGlyphRange:)](setattachmentsize%28__forglyphrange_%29.md): Sets the size the specified glyphs (assumed to be attachments) will be asked to draw themselves at.
- [setBidiLevels(\_:forGlyphRange:)](setbidilevels%28__forglyphrange_%29.md): Sets the direction of the specified glyphs for bidirectional text.
- [setDrawsOutsideLineFragment(\_:forGlyphRange:)](setdrawsoutsidelinefragment%28__forglyphrange_%29.md): Sets whether the specified glyphs exceed the bounds of the line fragment in which they are laid out.
- [setLineFragmentRect(\_:forGlyphRange:usedRect:baselineOffset:)](setlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Sets the line fragment rectangle where the specified glyphs are laid out.
- [setLocation(\_:withAdvancements:forStartOfGlyphRange:)](setlocation%28__withadvancements_forstartofglyphrange_%29.md): Sets the location where the specified glyphs are laid out.
- [setNotShownAttribute(\_:forGlyphRange:)](setnotshownattribute%28__forglyphrange_%29.md): Sets whether the specified glyphs are not shown.

# characterRangeForGlyphRange:actualGlyphRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Returns the range for the characters in the receiver’s text store that are mapped to the specified glyphs.

## Declaration

```objectivec
- (NSRange) characterRangeForGlyphRange:(NSRange) glyphRange actualGlyphRange:(NSRangePointer) actualGlyphRange;
```

## Parameters

- `glyphRange`: The range of glyphs.
- `actualGlyphRange`: On return, the range of all glyphs mapped to the characters in the receiver’s text store. May be `NULL`.

<a id="return-value"></a>

## Return Value

The range for the characters in the receiver’s text store that are mapped to the glyphs in `glyphRange`.

<a id="Discussion"></a>

## Discussion

A subclass can override this method to interact with custom glyph storage.

## See Also

### Interfacing with Glyph Storage

- [glyphRangeForCharacterRange:actualCharacterRange:](glyphrange%28forcharacterrange_actualcharacterrange_%29.md): Returns the range for the glyphs mapped to the characters of the text store in the specified range.
- [setAttachmentSize:forGlyphRange:](setattachmentsize%28__forglyphrange_%29.md): Sets the size the specified glyphs (assumed to be attachments) will be asked to draw themselves at.
- [setBidiLevels:forGlyphRange:](setbidilevels%28__forglyphrange_%29.md): Sets the direction of the specified glyphs for bidirectional text.
- [setDrawsOutsideLineFragment:forGlyphRange:](setdrawsoutsidelinefragment%28__forglyphrange_%29.md): Sets whether the specified glyphs exceed the bounds of the line fragment in which they are laid out.
- [setLineFragmentRect:forGlyphRange:usedRect:baselineOffset:](setlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Sets the line fragment rectangle where the specified glyphs are laid out.
- [setLocation:withAdvancements:forStartOfGlyphRange:](setlocation%28__withadvancements_forstartofglyphrange_%29.md): Sets the location where the specified glyphs are laid out.
- [setNotShownAttribute:forGlyphRange:](setnotshownattribute%28__forglyphrange_%29.md): Sets whether the specified glyphs are not shown.

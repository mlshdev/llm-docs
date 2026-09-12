> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/setlocation(_:withadvancements:forstartofglyphrange:)](https://developer.apple.com/documentation/appkit/nstypesetter/setlocation(_:withadvancements:forstartofglyphrange:))

# setLocation(\_:withAdvancements:forStartOfGlyphRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the location where the specified glyphs are laid out.

## Declaration

```swift
func setLocation(_ location: NSPoint, withAdvancements advancements: UnsafePointer<CGFloat>!, forStartOfGlyphRange glyphRange: NSRange)
```

## Parameters

- `location`: The location where the glyphs in `glyphRange` are laid out. The x-coordinate of `location` is expressed relative to the line fragment rectangle origin, and the y-coordinate is expressed relative to the baseline previously specified by [setLineFragmentRect(\_:forGlyphRange:usedRect:baselineOffset:)](setlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md).
- `advancements`: The nominal glyph advance width specified in the font metric information.
- `glyphRange`: The range of glyphs whose layout location is being set. This series of glyphs can be displayed with a single PostScript `show` operation (a nominal range).

<a id="Discussion"></a>

## Discussion

Setting the location for a series of glyphs implies that the glyphs preceding it can’t be included in a single `show` operation.

Before setting the location for a glyph range, you must specify line fragment rectangle with [setLineFragmentRect(\_:forGlyphRange:usedRect:baselineOffset:)](setlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md).

A subclass can override this method to interact with custom glyph storage.

## See Also

### Interfacing with Glyph Storage

- [characterRange(forGlyphRange:actualGlyphRange:)](characterrange%28forglyphrange_actualglyphrange_%29.md): Returns the range for the characters in the receiver’s text store that are mapped to the specified glyphs.
- [glyphRange(forCharacterRange:actualCharacterRange:)](glyphrange%28forcharacterrange_actualcharacterrange_%29.md): Returns the range for the glyphs mapped to the characters of the text store in the specified range.
- [setAttachmentSize(\_:forGlyphRange:)](setattachmentsize%28__forglyphrange_%29.md): Sets the size the specified glyphs (assumed to be attachments) will be asked to draw themselves at.
- [setBidiLevels(\_:forGlyphRange:)](setbidilevels%28__forglyphrange_%29.md): Sets the direction of the specified glyphs for bidirectional text.
- [setDrawsOutsideLineFragment(\_:forGlyphRange:)](setdrawsoutsidelinefragment%28__forglyphrange_%29.md): Sets whether the specified glyphs exceed the bounds of the line fragment in which they are laid out.
- [setLineFragmentRect(\_:forGlyphRange:usedRect:baselineOffset:)](setlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Sets the line fragment rectangle where the specified glyphs are laid out.
- [setNotShownAttribute(\_:forGlyphRange:)](setnotshownattribute%28__forglyphrange_%29.md): Sets whether the specified glyphs are not shown.

# setLocation:withAdvancements:forStartOfGlyphRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the location where the specified glyphs are laid out.

## Declaration

```objectivec
- (void) setLocation:(NSPoint) location withAdvancements:(const CGFloat *) advancements forStartOfGlyphRange:(NSRange) glyphRange;
```

## Parameters

- `location`: The location where the glyphs in `glyphRange` are laid out. The x-coordinate of `location` is expressed relative to the line fragment rectangle origin, and the y-coordinate is expressed relative to the baseline previously specified by [setLineFragmentRect:forGlyphRange:usedRect:baselineOffset:](setlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md).
- `advancements`: The nominal glyph advance width specified in the font metric information.
- `glyphRange`: The range of glyphs whose layout location is being set. This series of glyphs can be displayed with a single PostScript `show` operation (a nominal range).

<a id="Discussion"></a>

## Discussion

Setting the location for a series of glyphs implies that the glyphs preceding it can’t be included in a single `show` operation.

Before setting the location for a glyph range, you must specify line fragment rectangle with [setLineFragmentRect:forGlyphRange:usedRect:baselineOffset:](setlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md).

A subclass can override this method to interact with custom glyph storage.

## See Also

### Interfacing with Glyph Storage

- [characterRangeForGlyphRange:actualGlyphRange:](characterrange%28forglyphrange_actualglyphrange_%29.md): Returns the range for the characters in the receiver’s text store that are mapped to the specified glyphs.
- [glyphRangeForCharacterRange:actualCharacterRange:](glyphrange%28forcharacterrange_actualcharacterrange_%29.md): Returns the range for the glyphs mapped to the characters of the text store in the specified range.
- [setAttachmentSize:forGlyphRange:](setattachmentsize%28__forglyphrange_%29.md): Sets the size the specified glyphs (assumed to be attachments) will be asked to draw themselves at.
- [setBidiLevels:forGlyphRange:](setbidilevels%28__forglyphrange_%29.md): Sets the direction of the specified glyphs for bidirectional text.
- [setDrawsOutsideLineFragment:forGlyphRange:](setdrawsoutsidelinefragment%28__forglyphrange_%29.md): Sets whether the specified glyphs exceed the bounds of the line fragment in which they are laid out.
- [setLineFragmentRect:forGlyphRange:usedRect:baselineOffset:](setlinefragmentrect%28__forglyphrange_usedrect_baselineoffset_%29.md): Sets the line fragment rectangle where the specified glyphs are laid out.
- [setNotShownAttribute:forGlyphRange:](setnotshownattribute%28__forglyphrange_%29.md): Sets whether the specified glyphs are not shown.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/setlinefragmentrect(_:forglyphrange:usedrect:baselineoffset:)](https://developer.apple.com/documentation/appkit/nstypesetter/setlinefragmentrect(_:forglyphrange:usedrect:baselineoffset:))

# setLineFragmentRect(\_:forGlyphRange:usedRect:baselineOffset:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the line fragment rectangle where the specified glyphs are laid out.

## Declaration

```swift
func setLineFragmentRect(_ fragmentRect: NSRect, forGlyphRange glyphRange: NSRange, usedRect: NSRect, baselineOffset: CGFloat)
```

## Parameters

- `fragmentRect`: The line fragment rectangle where the glyphs in `glyphRange` are laid out.
- `glyphRange`: The range of the specified glyphs.
- `usedRect`: The portion of `fragmentRect`, in the NSTextContainer object’s coordinate system, that actually contains glyphs or other marks that are drawn (including the text container’s line fragment padding). The `usedRect` must be equal to or contained within `fragmentRect`.
- `baselineOffset`: The vertical distance in pixels from the line fragment origin to the baseline on which the glyphs align.

<a id="Discussion"></a>

## Discussion

The exact positions of the glyphs must be set after the line fragment rectangle with `setLocation:forStartOfGlyphRange:`.

A subclass can override this method to interact with custom glyph storage.

## See Also

### Interfacing with Glyph Storage

- [characterRange(forGlyphRange:actualGlyphRange:)](characterrange%28forglyphrange_actualglyphrange_%29.md): Returns the range for the characters in the receiver’s text store that are mapped to the specified glyphs.
- [glyphRange(forCharacterRange:actualCharacterRange:)](glyphrange%28forcharacterrange_actualcharacterrange_%29.md): Returns the range for the glyphs mapped to the characters of the text store in the specified range.
- [setAttachmentSize(\_:forGlyphRange:)](setattachmentsize%28__forglyphrange_%29.md): Sets the size the specified glyphs (assumed to be attachments) will be asked to draw themselves at.
- [setBidiLevels(\_:forGlyphRange:)](setbidilevels%28__forglyphrange_%29.md): Sets the direction of the specified glyphs for bidirectional text.
- [setDrawsOutsideLineFragment(\_:forGlyphRange:)](setdrawsoutsidelinefragment%28__forglyphrange_%29.md): Sets whether the specified glyphs exceed the bounds of the line fragment in which they are laid out.
- [setLocation(\_:withAdvancements:forStartOfGlyphRange:)](setlocation%28__withadvancements_forstartofglyphrange_%29.md): Sets the location where the specified glyphs are laid out.
- [setNotShownAttribute(\_:forGlyphRange:)](setnotshownattribute%28__forglyphrange_%29.md): Sets whether the specified glyphs are not shown.

# setLineFragmentRect:forGlyphRange:usedRect:baselineOffset: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS

Sets the line fragment rectangle where the specified glyphs are laid out.

## Declaration

```objectivec
- (void) setLineFragmentRect:(NSRect) fragmentRect forGlyphRange:(NSRange) glyphRange usedRect:(NSRect) usedRect baselineOffset:(CGFloat) baselineOffset;
```

## Parameters

- `fragmentRect`: The line fragment rectangle where the glyphs in `glyphRange` are laid out.
- `glyphRange`: The range of the specified glyphs.
- `usedRect`: The portion of `fragmentRect`, in the NSTextContainer object’s coordinate system, that actually contains glyphs or other marks that are drawn (including the text container’s line fragment padding). The `usedRect` must be equal to or contained within `fragmentRect`.
- `baselineOffset`: The vertical distance in pixels from the line fragment origin to the baseline on which the glyphs align.

<a id="Discussion"></a>

## Discussion

The exact positions of the glyphs must be set after the line fragment rectangle with `setLocation:forStartOfGlyphRange:`.

A subclass can override this method to interact with custom glyph storage.

## See Also

### Interfacing with Glyph Storage

- [characterRangeForGlyphRange:actualGlyphRange:](characterrange%28forglyphrange_actualglyphrange_%29.md): Returns the range for the characters in the receiver’s text store that are mapped to the specified glyphs.
- [glyphRangeForCharacterRange:actualCharacterRange:](glyphrange%28forcharacterrange_actualcharacterrange_%29.md): Returns the range for the glyphs mapped to the characters of the text store in the specified range.
- [setAttachmentSize:forGlyphRange:](setattachmentsize%28__forglyphrange_%29.md): Sets the size the specified glyphs (assumed to be attachments) will be asked to draw themselves at.
- [setBidiLevels:forGlyphRange:](setbidilevels%28__forglyphrange_%29.md): Sets the direction of the specified glyphs for bidirectional text.
- [setDrawsOutsideLineFragment:forGlyphRange:](setdrawsoutsidelinefragment%28__forglyphrange_%29.md): Sets whether the specified glyphs exceed the bounds of the line fragment in which they are laid out.
- [setLocation:withAdvancements:forStartOfGlyphRange:](setlocation%28__withadvancements_forstartofglyphrange_%29.md): Sets the location where the specified glyphs are laid out.
- [setNotShownAttribute:forGlyphRange:](setnotshownattribute%28__forglyphrange_%29.md): Sets whether the specified glyphs are not shown.

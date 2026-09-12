> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/setlocation(_:forstartofglyphrange:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/setlocation(_:forstartofglyphrange:))

# setLocation(\_:forStartOfGlyphRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sets the location for the first glyph in the specified range.

## Declaration

```swift
func setLocation(_ location: NSPoint, forStartOfGlyphRange glyphRange: NSRange)
```

## Parameters

- `location`: The location to which the first glyph is set, relative to the origin of the glyph’s line fragment origin.
- `glyphRange`: The glyphs whose location is set.

<a id="Discussion"></a>

## Discussion

Setting the location for a glyph range implies that its first glyph is not nominally spaced with respect to the previous glyph. In the course of layout, all glyphs should end up being included in a range passed to this method, but only glyphs that start a new nominal range should be at the start of such ranges. The first glyph in a line fragment should always start a new nominal range. Glyph locations are given relative to their line fragment rectangle’s origin.

Before setting the location for a glyph range, you must specify the text container with [setTextContainer(\_:forGlyphRange:)](settextcontainer%28__forglyphrange_%29.md) and the line fragment rectangle with [setLineFragmentRect(\_:forGlyphRange:usedRect:)](setlinefragmentrect%28__forglyphrange_usedrect_%29.md).

This method is used by the layout mechanism and should be invoked only during typesetting, in almost all cases only by the typesetter. For example, a custom typesetter might invoke it.

## See Also

### Setting layout information

- [setAttachmentSize(\_:forGlyphRange:)](setattachmentsize%28__forglyphrange_%29.md): Sets the size to use when drawing a glyph that represents an attachment.
- [setDrawsOutsideLineFragment(\_:forGlyphAt:)](setdrawsoutsidelinefragment%28__forglyphat_%29.md): Indicates whether the specified glyph exceeds the bounds of the line fragment for its layout.
- [setExtraLineFragmentRect(\_:usedRect:textContainer:)](setextralinefragmentrect%28__usedrect_textcontainer_%29.md): Sets the bounds and container for the extra line fragment.
- [setLineFragmentRect(\_:forGlyphRange:usedRect:)](setlinefragmentrect%28__forglyphrange_usedrect_%29.md): Associates the line fragment bounds for the specified range of glyphs.
- [setNotShownAttribute(\_:forGlyphAt:)](setnotshownattribute%28__forglyphat_%29.md): Sets the visibility of the glyph at the specified index.

# setLocation:forStartOfGlyphRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Sets the location for the first glyph in the specified range.

## Declaration

```objectivec
- (void) setLocation:(NSPoint) location forStartOfGlyphRange:(NSRange) glyphRange;
```

## Parameters

- `location`: The location to which the first glyph is set, relative to the origin of the glyph’s line fragment origin.
- `glyphRange`: The glyphs whose location is set.

<a id="Discussion"></a>

## Discussion

Setting the location for a glyph range implies that its first glyph is not nominally spaced with respect to the previous glyph. In the course of layout, all glyphs should end up being included in a range passed to this method, but only glyphs that start a new nominal range should be at the start of such ranges. The first glyph in a line fragment should always start a new nominal range. Glyph locations are given relative to their line fragment rectangle’s origin.

Before setting the location for a glyph range, you must specify the text container with [setTextContainer:forGlyphRange:](settextcontainer%28__forglyphrange_%29.md) and the line fragment rectangle with [setLineFragmentRect:forGlyphRange:usedRect:](setlinefragmentrect%28__forglyphrange_usedrect_%29.md).

This method is used by the layout mechanism and should be invoked only during typesetting, in almost all cases only by the typesetter. For example, a custom typesetter might invoke it.

## See Also

### Setting layout information

- [setAttachmentSize:forGlyphRange:](setattachmentsize%28__forglyphrange_%29.md): Sets the size to use when drawing a glyph that represents an attachment.
- [setDrawsOutsideLineFragment:forGlyphAtIndex:](setdrawsoutsidelinefragment%28__forglyphat_%29.md): Indicates whether the specified glyph exceeds the bounds of the line fragment for its layout.
- [setExtraLineFragmentRect:usedRect:textContainer:](setextralinefragmentrect%28__usedrect_textcontainer_%29.md): Sets the bounds and container for the extra line fragment.
- [setLineFragmentRect:forGlyphRange:usedRect:](setlinefragmentrect%28__forglyphrange_usedrect_%29.md): Associates the line fragment bounds for the specified range of glyphs.
- [setNotShownAttribute:forGlyphAtIndex:](setnotshownattribute%28__forglyphat_%29.md): Sets the visibility of the glyph at the specified index.

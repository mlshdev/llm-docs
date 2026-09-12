> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/setlinefragmentrect(_:forglyphrange:usedrect:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/setlinefragmentrect(_:forglyphrange:usedrect:))

# setLineFragmentRect(\_:forGlyphRange:usedRect:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Associates the line fragment bounds for the specified range of glyphs.

## Declaration

```swift
func setLineFragmentRect(_ fragmentRect: NSRect, forGlyphRange glyphRange: NSRange, usedRect: NSRect)
```

## Parameters

- `fragmentRect`: The rectangle of the line fragment.
- `glyphRange`: The range of glyphs to be associated with `fragmentRect`.
- `usedRect`: The portion of `fragmentRect` that actually contains glyphs or other marks that are drawn (including the text container’s line fragment padding. Must be equal to or contained within `fragmentRect`.

<a id="Discussion"></a>

## Discussion

The typesetter must specify the text container first with [setTextContainer(\_:forGlyphRange:)](settextcontainer%28__forglyphrange_%29.md), and it sets the exact positions of the glyphs afterwards with [setLocation(\_:forStartOfGlyphRange:)](setlocation%28__forstartofglyphrange_%29.md).

In the course of layout, all glyphs should end up being included in a range passed to this method, but only glyphs that start a new line fragment should be at the start of such ranges.

Line fragment rectangles and line fragment used rectangles are always in container coordinates.

This method is used by the layout mechanism and should be invoked only during typesetting, in almost all cases only by the typesetter. For example, a custom typesetter might invoke it.

## See Also

### Setting layout information

- [setAttachmentSize(\_:forGlyphRange:)](setattachmentsize%28__forglyphrange_%29.md): Sets the size to use when drawing a glyph that represents an attachment.
- [setDrawsOutsideLineFragment(\_:forGlyphAt:)](setdrawsoutsidelinefragment%28__forglyphat_%29.md): Indicates whether the specified glyph exceeds the bounds of the line fragment for its layout.
- [setExtraLineFragmentRect(\_:usedRect:textContainer:)](setextralinefragmentrect%28__usedrect_textcontainer_%29.md): Sets the bounds and container for the extra line fragment.
- [setLocation(\_:forStartOfGlyphRange:)](setlocation%28__forstartofglyphrange_%29.md): Sets the location for the first glyph in the specified range.
- [setNotShownAttribute(\_:forGlyphAt:)](setnotshownattribute%28__forglyphat_%29.md): Sets the visibility of the glyph at the specified index.

# setLineFragmentRect:forGlyphRange:usedRect: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Associates the line fragment bounds for the specified range of glyphs.

## Declaration

```objectivec
- (void) setLineFragmentRect:(NSRect) fragmentRect forGlyphRange:(NSRange) glyphRange usedRect:(NSRect) usedRect;
```

## Parameters

- `fragmentRect`: The rectangle of the line fragment.
- `glyphRange`: The range of glyphs to be associated with `fragmentRect`.
- `usedRect`: The portion of `fragmentRect` that actually contains glyphs or other marks that are drawn (including the text container’s line fragment padding. Must be equal to or contained within `fragmentRect`.

<a id="Discussion"></a>

## Discussion

The typesetter must specify the text container first with [setTextContainer:forGlyphRange:](settextcontainer%28__forglyphrange_%29.md), and it sets the exact positions of the glyphs afterwards with [setLocation:forStartOfGlyphRange:](setlocation%28__forstartofglyphrange_%29.md).

In the course of layout, all glyphs should end up being included in a range passed to this method, but only glyphs that start a new line fragment should be at the start of such ranges.

Line fragment rectangles and line fragment used rectangles are always in container coordinates.

This method is used by the layout mechanism and should be invoked only during typesetting, in almost all cases only by the typesetter. For example, a custom typesetter might invoke it.

## See Also

### Setting layout information

- [setAttachmentSize:forGlyphRange:](setattachmentsize%28__forglyphrange_%29.md): Sets the size to use when drawing a glyph that represents an attachment.
- [setDrawsOutsideLineFragment:forGlyphAtIndex:](setdrawsoutsidelinefragment%28__forglyphat_%29.md): Indicates whether the specified glyph exceeds the bounds of the line fragment for its layout.
- [setExtraLineFragmentRect:usedRect:textContainer:](setextralinefragmentrect%28__usedrect_textcontainer_%29.md): Sets the bounds and container for the extra line fragment.
- [setLocation:forStartOfGlyphRange:](setlocation%28__forstartofglyphrange_%29.md): Sets the location for the first glyph in the specified range.
- [setNotShownAttribute:forGlyphAtIndex:](setnotshownattribute%28__forglyphat_%29.md): Sets the visibility of the glyph at the specified index.

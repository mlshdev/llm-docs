> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager/location(forglyphat:)](https://developer.apple.com/documentation/uikit/nslayoutmanager/location(forglyphat:))

# location(forGlyphAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the location for the specified glyph within its line fragment.

## Declaration

```swift
func location(forGlyphAt glyphIndex: Int) -> CGPoint
```

## Parameters

- `glyphIndex`: The glyph whose location is returned.

<a id="return-value"></a>

## Return Value

The location of the given glyph.

<a id="Discussion"></a>

## Discussion

If the given glyph does not have an explicit location set for it (for example, if it is part of (but not first in) a sequence of nominally spaced characters), the location is calculated by glyph advancements from the location of the most recent preceding glyph with a location set.

Glyph locations are relative to their line fragment rectangle’s origin. The line fragment rectangle in turn is defined in the coordinate system of the text container where it resides.

This method causes glyph generation and layout for the line fragment containing the specified glyph, or if noncontiguous layout is not enabled, up to and including that line fragment.

## See Also

### Getting layout information

- [attachmentSize(forGlyphAt:)](attachmentsize%28forglyphat_%29.md): Returns the size of the attachment glyph at the specified index.
- [drawsOutsideLineFragment(forGlyphAt:)](drawsoutsidelinefragment%28forglyphat_%29.md): Indicates whether the glyph draws outside its line fragment rectangle.
- [extraLineFragmentRect](extralinefragmentrect.md): The rectangle for the extra line fragment at the end of a document.
- [extraLineFragmentTextContainer](extralinefragmenttextcontainer.md): The text container for the extra line fragment rectangle.
- [extraLineFragmentUsedRect](extralinefragmentusedrect.md): The rectangle that encloses the insertion point in the extra line fragment rectangle.
- [firstUnlaidCharacterIndex()](firstunlaidcharacterindex%28%29.md): Returns the index for the first character in the layout manager that isn’t in the layout.
- [firstUnlaidGlyphIndex()](firstunlaidglyphindex%28%29.md): Returns the index for the first glyph in the layout manager that isn’t in the layout.
- [getFirstUnlaidCharacterIndex(\_:glyphIndex:)](getfirstunlaidcharacterindex%28__glyphindex_%29.md): Returns the indexes for the first character and glyph that have invalid layout information.
- [lineFragmentRect(forGlyphAt:effectiveRange:)](linefragmentrect%28forglyphat_effectiverange_%29.md): Returns the rectangle for the line fragment where the glyph lies and (optionally), by reference, the entire range of glyphs in that fragment.
- [lineFragmentRect(forGlyphAt:effectiveRange:withoutAdditionalLayout:)](linefragmentrect%28forglyphat_effectiverange_withoutadditionallayout_%29.md): Returns the line fragment rectangle that contains the glyph at the specified glyph index.
- [lineFragmentUsedRect(forGlyphAt:effectiveRange:)](linefragmentusedrect%28forglyphat_effectiverange_%29.md): Returns the usage rectangle for the line fragment and (optionally) returns the entire range of glyphs in that fragment.
- [lineFragmentUsedRect(forGlyphAt:effectiveRange:withoutAdditionalLayout:)](linefragmentusedrect%28forglyphat_effectiverange_withoutadditionallayout_%29.md): Returns the usage rectangle for the line fragment and (optionally) returns the entire range of glyphs in that fragment.
- [notShownAttribute(forGlyphAt:)](notshownattribute%28forglyphat_%29.md): Indicates whether the glyph at the specified index has a visible representation.
- [truncatedGlyphRange(inLineFragmentForGlyphAt:)](truncatedglyphrange%28inlinefragmentforglyphat_%29.md): Returns the range of truncated glyphs for a line fragment that contains the specified index.

# locationForGlyphAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the location for the specified glyph within its line fragment.

## Declaration

```objectivec
- (CGPoint) locationForGlyphAtIndex:(NSUInteger) glyphIndex;
```

## Parameters

- `glyphIndex`: The glyph whose location is returned.

<a id="return-value"></a>

## Return Value

The location of the given glyph.

<a id="Discussion"></a>

## Discussion

If the given glyph does not have an explicit location set for it (for example, if it is part of (but not first in) a sequence of nominally spaced characters), the location is calculated by glyph advancements from the location of the most recent preceding glyph with a location set.

Glyph locations are relative to their line fragment rectangle’s origin. The line fragment rectangle in turn is defined in the coordinate system of the text container where it resides.

This method causes glyph generation and layout for the line fragment containing the specified glyph, or if noncontiguous layout is not enabled, up to and including that line fragment.

## See Also

### Getting layout information

- [attachmentSizeForGlyphAtIndex:](attachmentsize%28forglyphat_%29.md): Returns the size of the attachment glyph at the specified index.
- [drawsOutsideLineFragmentForGlyphAtIndex:](drawsoutsidelinefragment%28forglyphat_%29.md): Indicates whether the glyph draws outside its line fragment rectangle.
- [extraLineFragmentRect](extralinefragmentrect.md): The rectangle for the extra line fragment at the end of a document.
- [extraLineFragmentTextContainer](extralinefragmenttextcontainer.md): The text container for the extra line fragment rectangle.
- [extraLineFragmentUsedRect](extralinefragmentusedrect.md): The rectangle that encloses the insertion point in the extra line fragment rectangle.
- [firstUnlaidCharacterIndex](firstunlaidcharacterindex%28%29.md): Returns the index for the first character in the layout manager that isn’t in the layout.
- [firstUnlaidGlyphIndex](firstunlaidglyphindex%28%29.md): Returns the index for the first glyph in the layout manager that isn’t in the layout.
- [getFirstUnlaidCharacterIndex:glyphIndex:](getfirstunlaidcharacterindex%28__glyphindex_%29.md): Returns the indexes for the first character and glyph that have invalid layout information.
- [lineFragmentRectForGlyphAtIndex:effectiveRange:](linefragmentrect%28forglyphat_effectiverange_%29.md): Returns the rectangle for the line fragment where the glyph lies and (optionally), by reference, the entire range of glyphs in that fragment.
- [lineFragmentRectForGlyphAtIndex:effectiveRange:withoutAdditionalLayout:](linefragmentrect%28forglyphat_effectiverange_withoutadditionallayout_%29.md): Returns the line fragment rectangle that contains the glyph at the specified glyph index.
- [lineFragmentUsedRectForGlyphAtIndex:effectiveRange:](linefragmentusedrect%28forglyphat_effectiverange_%29.md): Returns the usage rectangle for the line fragment and (optionally) returns the entire range of glyphs in that fragment.
- [lineFragmentUsedRectForGlyphAtIndex:effectiveRange:withoutAdditionalLayout:](linefragmentusedrect%28forglyphat_effectiverange_withoutadditionallayout_%29.md): Returns the usage rectangle for the line fragment and (optionally) returns the entire range of glyphs in that fragment.
- [notShownAttributeForGlyphAtIndex:](notshownattribute%28forglyphat_%29.md): Indicates whether the glyph at the specified index has a visible representation.
- [truncatedGlyphRangeInLineFragmentForGlyphAtIndex:](truncatedglyphrange%28inlinefragmentforglyphat_%29.md): Returns the range of truncated glyphs for a line fragment that contains the specified index.

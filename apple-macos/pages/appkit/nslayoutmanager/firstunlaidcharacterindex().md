> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/firstunlaidcharacterindex()](https://developer.apple.com/documentation/appkit/nslayoutmanager/firstunlaidcharacterindex())

# firstUnlaidCharacterIndex() (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the index for the first character in the layout manager that isn’t in the layout.

## Declaration

```swift
func firstUnlaidCharacterIndex() -> Int
```

## See Also

### Getting layout information

- [attachmentSize(forGlyphAt:)](attachmentsize%28forglyphat_%29.md): Returns the size of the attachment glyph at the specified index.
- [drawsOutsideLineFragment(forGlyphAt:)](drawsoutsidelinefragment%28forglyphat_%29.md): Indicates whether the glyph draws outside its line fragment rectangle.
- [extraLineFragmentRect](extralinefragmentrect.md): The rectangle for the extra line fragment at the end of a document.
- [extraLineFragmentTextContainer](extralinefragmenttextcontainer.md): The text container for the extra line fragment rectangle.
- [extraLineFragmentUsedRect](extralinefragmentusedrect.md): The rectangle that encloses the insertion point in the extra line fragment rectangle.
- [firstUnlaidGlyphIndex()](firstunlaidglyphindex%28%29.md): Returns the index for the first glyph in the layout manager that isn’t in the layout.
- [getFirstUnlaidCharacterIndex(\_:glyphIndex:)](getfirstunlaidcharacterindex%28__glyphindex_%29.md): Returns the indexes for the first character and glyph that have invalid layout information.
- [lineFragmentRect(forGlyphAt:effectiveRange:)](linefragmentrect%28forglyphat_effectiverange_%29.md): Returns the rectangle for the line fragment where the glyph lies and (optionally), by reference, the entire range of glyphs in that fragment.
- [lineFragmentRect(forGlyphAt:effectiveRange:withoutAdditionalLayout:)](linefragmentrect%28forglyphat_effectiverange_withoutadditionallayout_%29.md): Returns the line fragment rectangle that contains the glyph at the specified glyph index.
- [lineFragmentUsedRect(forGlyphAt:effectiveRange:)](linefragmentusedrect%28forglyphat_effectiverange_%29.md): Returns the usage rectangle for the line fragment and (optionally) returns the entire range of glyphs in that fragment.
- [lineFragmentUsedRect(forGlyphAt:effectiveRange:withoutAdditionalLayout:)](linefragmentusedrect%28forglyphat_effectiverange_withoutadditionallayout_%29.md): Returns the usage rectangle for the line fragment and (optionally) returns the entire range of glyphs in that fragment.
- [location(forGlyphAt:)](location%28forglyphat_%29.md): Returns the location for the specified glyph within its line fragment.
- [notShownAttribute(forGlyphAt:)](notshownattribute%28forglyphat_%29.md): Indicates whether the glyph at the specified index has a visible representation.
- [truncatedGlyphRange(inLineFragmentForGlyphAt:)](truncatedglyphrange%28inlinefragmentforglyphat_%29.md): Returns the range of truncated glyphs for a line fragment that contains the specified index.

# firstUnlaidCharacterIndex (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the index for the first character in the layout manager that isn’t in the layout.

## Declaration

```objectivec
- (NSUInteger) firstUnlaidCharacterIndex;
```

## See Also

### Getting layout information

- [attachmentSizeForGlyphAtIndex:](attachmentsize%28forglyphat_%29.md): Returns the size of the attachment glyph at the specified index.
- [drawsOutsideLineFragmentForGlyphAtIndex:](drawsoutsidelinefragment%28forglyphat_%29.md): Indicates whether the glyph draws outside its line fragment rectangle.
- [extraLineFragmentRect](extralinefragmentrect.md): The rectangle for the extra line fragment at the end of a document.
- [extraLineFragmentTextContainer](extralinefragmenttextcontainer.md): The text container for the extra line fragment rectangle.
- [extraLineFragmentUsedRect](extralinefragmentusedrect.md): The rectangle that encloses the insertion point in the extra line fragment rectangle.
- [firstUnlaidGlyphIndex](firstunlaidglyphindex%28%29.md): Returns the index for the first glyph in the layout manager that isn’t in the layout.
- [getFirstUnlaidCharacterIndex:glyphIndex:](getfirstunlaidcharacterindex%28__glyphindex_%29.md): Returns the indexes for the first character and glyph that have invalid layout information.
- [lineFragmentRectForGlyphAtIndex:effectiveRange:](linefragmentrect%28forglyphat_effectiverange_%29.md): Returns the rectangle for the line fragment where the glyph lies and (optionally), by reference, the entire range of glyphs in that fragment.
- [lineFragmentRectForGlyphAtIndex:effectiveRange:withoutAdditionalLayout:](linefragmentrect%28forglyphat_effectiverange_withoutadditionallayout_%29.md): Returns the line fragment rectangle that contains the glyph at the specified glyph index.
- [lineFragmentUsedRectForGlyphAtIndex:effectiveRange:](linefragmentusedrect%28forglyphat_effectiverange_%29.md): Returns the usage rectangle for the line fragment and (optionally) returns the entire range of glyphs in that fragment.
- [lineFragmentUsedRectForGlyphAtIndex:effectiveRange:withoutAdditionalLayout:](linefragmentusedrect%28forglyphat_effectiverange_withoutadditionallayout_%29.md): Returns the usage rectangle for the line fragment and (optionally) returns the entire range of glyphs in that fragment.
- [locationForGlyphAtIndex:](location%28forglyphat_%29.md): Returns the location for the specified glyph within its line fragment.
- [notShownAttributeForGlyphAtIndex:](notshownattribute%28forglyphat_%29.md): Indicates whether the glyph at the specified index has a visible representation.
- [truncatedGlyphRangeInLineFragmentForGlyphAtIndex:](truncatedglyphrange%28inlinefragmentforglyphat_%29.md): Returns the range of truncated glyphs for a line fragment that contains the specified index.

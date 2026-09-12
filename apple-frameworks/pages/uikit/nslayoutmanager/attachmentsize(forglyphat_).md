> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager/attachmentsize(forglyphat:)](https://developer.apple.com/documentation/uikit/nslayoutmanager/attachmentsize(forglyphat:))

# attachmentSize(forGlyphAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the size of the attachment glyph at the specified index.

## Declaration

```swift
func attachmentSize(forGlyphAt glyphIndex: Int) -> CGSize
```

## Parameters

- `glyphIndex`: The index of the attachment glyph.

<a id="return-value"></a>

## Return Value

The layout manager calls this method for glyphs representing attachments, and returns the size that the attachment cell occupies. Returns `{-1.0, -1.0}` if there is no attachment laid for the specified glyph.

## See Also

### Related Documentation

- [setAttachmentSize(\_:forGlyphRange:)](setattachmentsize%28__forglyphrange_%29.md): Sets the size to use when drawing a glyph that represents an attachment.
- [defaultAttachmentScaling](https://developer.apple.com/documentation/appkit/nslayoutmanager/defaultattachmentscaling): The default amount of scaling to apply when an attachment image is too large to fit in a text container.

### Getting layout information

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
- [location(forGlyphAt:)](location%28forglyphat_%29.md): Returns the location for the specified glyph within its line fragment.
- [notShownAttribute(forGlyphAt:)](notshownattribute%28forglyphat_%29.md): Indicates whether the glyph at the specified index has a visible representation.
- [truncatedGlyphRange(inLineFragmentForGlyphAt:)](truncatedglyphrange%28inlinefragmentforglyphat_%29.md): Returns the range of truncated glyphs for a line fragment that contains the specified index.

# attachmentSizeForGlyphAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the size of the attachment glyph at the specified index.

## Declaration

```objectivec
- (CGSize) attachmentSizeForGlyphAtIndex:(NSUInteger) glyphIndex;
```

## Parameters

- `glyphIndex`: The index of the attachment glyph.

<a id="return-value"></a>

## Return Value

The layout manager calls this method for glyphs representing attachments, and returns the size that the attachment cell occupies. Returns `{-1.0, -1.0}` if there is no attachment laid for the specified glyph.

## See Also

### Related Documentation

- [setAttachmentSize:forGlyphRange:](setattachmentsize%28__forglyphrange_%29.md): Sets the size to use when drawing a glyph that represents an attachment.
- [defaultAttachmentScaling](https://developer.apple.com/documentation/appkit/nslayoutmanager/defaultattachmentscaling): The default amount of scaling to apply when an attachment image is too large to fit in a text container.

### Getting layout information

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
- [locationForGlyphAtIndex:](location%28forglyphat_%29.md): Returns the location for the specified glyph within its line fragment.
- [notShownAttributeForGlyphAtIndex:](notshownattribute%28forglyphat_%29.md): Indicates whether the glyph at the specified index has a visible representation.
- [truncatedGlyphRangeInLineFragmentForGlyphAtIndex:](truncatedglyphrange%28inlinefragmentforglyphat_%29.md): Returns the range of truncated glyphs for a line fragment that contains the specified index.

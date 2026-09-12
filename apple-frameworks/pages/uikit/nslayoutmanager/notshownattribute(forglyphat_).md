> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager/notshownattribute(forglyphat:)](https://developer.apple.com/documentation/uikit/nslayoutmanager/notshownattribute(forglyphat:))

# notShownAttribute(forGlyphAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Indicates whether the glyph at the specified index has a visible representation.

## Declaration

```swift
func notShownAttribute(forGlyphAt glyphIndex: Int) -> Bool
```

## Parameters

- `glyphIndex`: Index of the glyph.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the glyph at `glyphIndex` is not shown; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Some glyphs are not shown.  For example, a tab, newline, or attachment glyph is not shown; it just affects the layout of following glyphs or locates the attachment graphic. Space characters, however, typically are shown as glyphs with a displacement, although they leave no visible marks.

This method causes glyph generation and layout for the line fragment containing the specified glyph, or if noncontiguous layout is not enabled, up to and including that line fragment.

Raises an `NSRangeException` if `glyphIndex` is out of bounds.

## See Also

### Related Documentation

- [setNotShownAttribute(\_:forGlyphAt:)](setnotshownattribute%28__forglyphat_%29.md): Sets the visibility of the glyph at the specified index.

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
- [location(forGlyphAt:)](location%28forglyphat_%29.md): Returns the location for the specified glyph within its line fragment.
- [truncatedGlyphRange(inLineFragmentForGlyphAt:)](truncatedglyphrange%28inlinefragmentforglyphat_%29.md): Returns the range of truncated glyphs for a line fragment that contains the specified index.

# notShownAttributeForGlyphAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Indicates whether the glyph at the specified index has a visible representation.

## Declaration

```objectivec
- (BOOL) notShownAttributeForGlyphAtIndex:(NSUInteger) glyphIndex;
```

## Parameters

- `glyphIndex`: Index of the glyph.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the glyph at `glyphIndex` is not shown; otherwise [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Some glyphs are not shown.  For example, a tab, newline, or attachment glyph is not shown; it just affects the layout of following glyphs or locates the attachment graphic. Space characters, however, typically are shown as glyphs with a displacement, although they leave no visible marks.

This method causes glyph generation and layout for the line fragment containing the specified glyph, or if noncontiguous layout is not enabled, up to and including that line fragment.

Raises an `NSRangeException` if `glyphIndex` is out of bounds.

## See Also

### Related Documentation

- [setNotShownAttribute:forGlyphAtIndex:](setnotshownattribute%28__forglyphat_%29.md): Sets the visibility of the glyph at the specified index.

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
- [locationForGlyphAtIndex:](location%28forglyphat_%29.md): Returns the location for the specified glyph within its line fragment.
- [truncatedGlyphRangeInLineFragmentForGlyphAtIndex:](truncatedglyphrange%28inlinefragmentforglyphat_%29.md): Returns the range of truncated glyphs for a line fragment that contains the specified index.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager/invalidatelayout(forcharacterrange:actualcharacterrange:)](https://developer.apple.com/documentation/uikit/nslayoutmanager/invalidatelayout(forcharacterrange:actualcharacterrange:))

# invalidateLayout(forCharacterRange:actualCharacterRange:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Invalidates the layout information for the glyphs that map to the specified character range.

## Declaration

```swift
func invalidateLayout(forCharacterRange charRange: NSRange, actualCharacterRange actualCharRange: NSRangePointer?)
```

## Parameters

- `charRange`: The range of characters to invalidate.
- `actualCharRange`: If not `NULL`, on output, the actual range invalidated after any necessary expansion.

<a id="Discussion"></a>

## Discussion

This method has the same effect as [invalidateLayout(forCharacterRange:isSoft:actualCharacterRange:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/invalidatelayout%28forcharacterrange:issoft:actualcharacterrange:%29) with `flag` set to [false](https://developer.apple.com/documentation/swift/false).

This method only invalidates information; it performs no glyph generation or layout. You should rarely need to invoke this method.

## See Also

### Invalidating glyphs and layout

- [invalidateDisplay(forCharacterRange:)](invalidatedisplay%28forcharacterrange_%29.md): Invalidates display for the specified character range.
- [invalidateDisplay(forGlyphRange:)](invalidatedisplay%28forglyphrange_%29.md): Invalidates a range of glyphs, requiring new layout information, and updates the appropriate regions of any text views that display those glyphs.
- [invalidateGlyphs(forCharacterRange:changeInLength:actualCharacterRange:)](invalidateglyphs%28forcharacterrange_changeinlength_actualcharacterrange_%29.md): Invalidates and adjusts the glyphs in the specified character range.
- [processEditing(for:edited:range:changeInLength:invalidatedRange:)](processediting%28for_edited_range_changeinlength_invalidatedrange_%29.md): Notifies the layout manager when an edit action changes the contents of its text storage object.

# invalidateLayoutForCharacterRange:actualCharacterRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Invalidates the layout information for the glyphs that map to the specified character range.

## Declaration

```objectivec
- (void) invalidateLayoutForCharacterRange:(NSRange) charRange actualCharacterRange:(NSRangePointer) actualCharRange;
```

## Parameters

- `charRange`: The range of characters to invalidate.
- `actualCharRange`: If not `NULL`, on output, the actual range invalidated after any necessary expansion.

<a id="Discussion"></a>

## Discussion

This method has the same effect as [invalidateLayoutForCharacterRange:isSoft:actualCharacterRange:](https://developer.apple.com/documentation/appkit/nslayoutmanager/invalidatelayout%28forcharacterrange:issoft:actualcharacterrange:%29) with `flag` set to [false](https://developer.apple.com/documentation/swift/false).

This method only invalidates information; it performs no glyph generation or layout. You should rarely need to invoke this method.

## See Also

### Invalidating glyphs and layout

- [invalidateDisplayForCharacterRange:](invalidatedisplay%28forcharacterrange_%29.md): Invalidates display for the specified character range.
- [invalidateDisplayForGlyphRange:](invalidatedisplay%28forglyphrange_%29.md): Invalidates a range of glyphs, requiring new layout information, and updates the appropriate regions of any text views that display those glyphs.
- [invalidateGlyphsForCharacterRange:changeInLength:actualCharacterRange:](invalidateglyphs%28forcharacterrange_changeinlength_actualcharacterrange_%29.md): Invalidates and adjusts the glyphs in the specified character range.
- [processEditingForTextStorage:edited:range:changeInLength:invalidatedRange:](processediting%28for_edited_range_changeinlength_invalidatedrange_%29.md): Notifies the layout manager when an edit action changes the contents of its text storage object.

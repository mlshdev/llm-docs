> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager/invalidatedisplay(forglyphrange:)](https://developer.apple.com/documentation/uikit/nslayoutmanager/invalidatedisplay(forglyphrange:))

# invalidateDisplay(forGlyphRange:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Invalidates a range of glyphs, requiring new layout information, and updates the appropriate regions of any text views that display those glyphs.

## Declaration

```swift
func invalidateDisplay(forGlyphRange glyphRange: NSRange)
```

## Parameters

- `glyphRange`: The range of glyphs to invalidate.

<a id="Discussion"></a>

## Discussion

You should rarely need to invoke this method.

## See Also

### Invalidating glyphs and layout

- [invalidateDisplay(forCharacterRange:)](invalidatedisplay%28forcharacterrange_%29.md): Invalidates display for the specified character range.
- [invalidateGlyphs(forCharacterRange:changeInLength:actualCharacterRange:)](invalidateglyphs%28forcharacterrange_changeinlength_actualcharacterrange_%29.md): Invalidates and adjusts the glyphs in the specified character range.
- [invalidateLayout(forCharacterRange:actualCharacterRange:)](invalidatelayout%28forcharacterrange_actualcharacterrange_%29.md): Invalidates the layout information for the glyphs that map to the specified character range.
- [processEditing(for:edited:range:changeInLength:invalidatedRange:)](processediting%28for_edited_range_changeinlength_invalidatedrange_%29.md): Notifies the layout manager when an edit action changes the contents of its text storage object.

# invalidateDisplayForGlyphRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Invalidates a range of glyphs, requiring new layout information, and updates the appropriate regions of any text views that display those glyphs.

## Declaration

```objectivec
- (void) invalidateDisplayForGlyphRange:(NSRange) glyphRange;
```

## Parameters

- `glyphRange`: The range of glyphs to invalidate.

<a id="Discussion"></a>

## Discussion

You should rarely need to invoke this method.

## See Also

### Invalidating glyphs and layout

- [invalidateDisplayForCharacterRange:](invalidatedisplay%28forcharacterrange_%29.md): Invalidates display for the specified character range.
- [invalidateGlyphsForCharacterRange:changeInLength:actualCharacterRange:](invalidateglyphs%28forcharacterrange_changeinlength_actualcharacterrange_%29.md): Invalidates and adjusts the glyphs in the specified character range.
- [invalidateLayoutForCharacterRange:actualCharacterRange:](invalidatelayout%28forcharacterrange_actualcharacterrange_%29.md): Invalidates the layout information for the glyphs that map to the specified character range.
- [processEditingForTextStorage:edited:range:changeInLength:invalidatedRange:](processediting%28for_edited_range_changeinlength_invalidatedrange_%29.md): Notifies the layout manager when an edit action changes the contents of its text storage object.

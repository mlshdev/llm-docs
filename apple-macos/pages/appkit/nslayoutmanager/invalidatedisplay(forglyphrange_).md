> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/invalidatedisplay(forglyphrange:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/invalidatedisplay(forglyphrange:))

# invalidateDisplay(forGlyphRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

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

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

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

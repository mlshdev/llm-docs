> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/invalidateglyphs(forcharacterrange:changeinlength:actualcharacterrange:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/invalidateglyphs(forcharacterrange:changeinlength:actualcharacterrange:))

# invalidateGlyphs(forCharacterRange:changeInLength:actualCharacterRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Invalidates and adjusts the glyphs in the specified character range.

## Declaration

```swift
func invalidateGlyphs(forCharacterRange charRange: NSRange, changeInLength delta: Int, actualCharacterRange actualCharRange: NSRangePointer?)
```

## Parameters

- `charRange`: The range of characters for which to invalidate glyphs.
- `delta`: The number of characters added or removed.
- `actualCharRange`: If not `NULL`, on output, the actual range invalidated after any necessary expansion. This range can be larger than the range of characters given due to the effect of context on glyphs and layout.

<a id="Discussion"></a>

## Discussion

This method invalidates the cached glyphs for the characters in the given character range, adjusts the character indices of all the subsequent glyphs by the change in length, and invalidates the new character range. This method invalidates only glyph information and performs no glyph generation or layout. Because invalidating glyphs also invalidates layout, after invoking this method you should also invoke [invalidateLayout(forCharacterRange:actualCharacterRange:)](invalidatelayout%28forcharacterrange_actualcharacterrange_%29.md), passing `charRange` as the first argument.

This method is used by the layout mechanism and should be invoked only during typesetting, in almost all cases only by the typesetter. For example, a custom typesetter might invoke it.

## See Also

### Invalidating glyphs and layout

- [invalidateDisplay(forCharacterRange:)](invalidatedisplay%28forcharacterrange_%29.md): Invalidates display for the specified character range.
- [invalidateDisplay(forGlyphRange:)](invalidatedisplay%28forglyphrange_%29.md): Invalidates a range of glyphs, requiring new layout information, and updates the appropriate regions of any text views that display those glyphs.
- [invalidateLayout(forCharacterRange:actualCharacterRange:)](invalidatelayout%28forcharacterrange_actualcharacterrange_%29.md): Invalidates the layout information for the glyphs that map to the specified character range.
- [processEditing(for:edited:range:changeInLength:invalidatedRange:)](processediting%28for_edited_range_changeinlength_invalidatedrange_%29.md): Notifies the layout manager when an edit action changes the contents of its text storage object.

# invalidateGlyphsForCharacterRange:changeInLength:actualCharacterRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Invalidates and adjusts the glyphs in the specified character range.

## Declaration

```objectivec
- (void) invalidateGlyphsForCharacterRange:(NSRange) charRange changeInLength:(NSInteger) delta actualCharacterRange:(NSRangePointer) actualCharRange;
```

## Parameters

- `charRange`: The range of characters for which to invalidate glyphs.
- `delta`: The number of characters added or removed.
- `actualCharRange`: If not `NULL`, on output, the actual range invalidated after any necessary expansion. This range can be larger than the range of characters given due to the effect of context on glyphs and layout.

<a id="Discussion"></a>

## Discussion

This method invalidates the cached glyphs for the characters in the given character range, adjusts the character indices of all the subsequent glyphs by the change in length, and invalidates the new character range. This method invalidates only glyph information and performs no glyph generation or layout. Because invalidating glyphs also invalidates layout, after invoking this method you should also invoke [invalidateLayoutForCharacterRange:actualCharacterRange:](invalidatelayout%28forcharacterrange_actualcharacterrange_%29.md), passing `charRange` as the first argument.

This method is used by the layout mechanism and should be invoked only during typesetting, in almost all cases only by the typesetter. For example, a custom typesetter might invoke it.

## See Also

### Invalidating glyphs and layout

- [invalidateDisplayForCharacterRange:](invalidatedisplay%28forcharacterrange_%29.md): Invalidates display for the specified character range.
- [invalidateDisplayForGlyphRange:](invalidatedisplay%28forglyphrange_%29.md): Invalidates a range of glyphs, requiring new layout information, and updates the appropriate regions of any text views that display those glyphs.
- [invalidateLayoutForCharacterRange:actualCharacterRange:](invalidatelayout%28forcharacterrange_actualcharacterrange_%29.md): Invalidates the layout information for the glyphs that map to the specified character range.
- [processEditingForTextStorage:edited:range:changeInLength:invalidatedRange:](processediting%28for_edited_range_changeinlength_invalidatedrange_%29.md): Notifies the layout manager when an edit action changes the contents of its text storage object.

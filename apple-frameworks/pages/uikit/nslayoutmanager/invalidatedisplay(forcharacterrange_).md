> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager/invalidatedisplay(forcharacterrange:)](https://developer.apple.com/documentation/uikit/nslayoutmanager/invalidatedisplay(forcharacterrange:))

# invalidateDisplay(forCharacterRange:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Invalidates display for the specified character range.

## Declaration

```swift
func invalidateDisplay(forCharacterRange charRange: NSRange)
```

## Parameters

- `charRange`: The character range for which display is invalidated.

<a id="Discussion"></a>

## Discussion

Parts of the range that are not laid out are remembered and redisplayed later when the layout is available. Does not actually cause layout.

## See Also

### Invalidating glyphs and layout

- [invalidateDisplay(forGlyphRange:)](invalidatedisplay%28forglyphrange_%29.md): Invalidates a range of glyphs, requiring new layout information, and updates the appropriate regions of any text views that display those glyphs.
- [invalidateGlyphs(forCharacterRange:changeInLength:actualCharacterRange:)](invalidateglyphs%28forcharacterrange_changeinlength_actualcharacterrange_%29.md): Invalidates and adjusts the glyphs in the specified character range.
- [invalidateLayout(forCharacterRange:actualCharacterRange:)](invalidatelayout%28forcharacterrange_actualcharacterrange_%29.md): Invalidates the layout information for the glyphs that map to the specified character range.
- [processEditing(for:edited:range:changeInLength:invalidatedRange:)](processediting%28for_edited_range_changeinlength_invalidatedrange_%29.md): Notifies the layout manager when an edit action changes the contents of its text storage object.

# invalidateDisplayForCharacterRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Invalidates display for the specified character range.

## Declaration

```objectivec
- (void) invalidateDisplayForCharacterRange:(NSRange) charRange;
```

## Parameters

- `charRange`: The character range for which display is invalidated.

<a id="Discussion"></a>

## Discussion

Parts of the range that are not laid out are remembered and redisplayed later when the layout is available. Does not actually cause layout.

## See Also

### Invalidating glyphs and layout

- [invalidateDisplayForGlyphRange:](invalidatedisplay%28forglyphrange_%29.md): Invalidates a range of glyphs, requiring new layout information, and updates the appropriate regions of any text views that display those glyphs.
- [invalidateGlyphsForCharacterRange:changeInLength:actualCharacterRange:](invalidateglyphs%28forcharacterrange_changeinlength_actualcharacterrange_%29.md): Invalidates and adjusts the glyphs in the specified character range.
- [invalidateLayoutForCharacterRange:actualCharacterRange:](invalidatelayout%28forcharacterrange_actualcharacterrange_%29.md): Invalidates the layout information for the glyphs that map to the specified character range.
- [processEditingForTextStorage:edited:range:changeInLength:invalidatedRange:](processediting%28for_edited_range_changeinlength_invalidatedrange_%29.md): Notifies the layout manager when an edit action changes the contents of its text storage object.

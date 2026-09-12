> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/processediting(for:edited:range:changeinlength:invalidatedrange:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/processediting(for:edited:range:changeinlength:invalidatedrange:))

# processEditing(for:edited:range:changeInLength:invalidatedRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Notifies the layout manager when an edit action changes the contents of its text storage object.

## Declaration

```swift
func processEditing(for textStorage: NSTextStorage, edited editMask: NSTextStorageEditActions, range newCharRange: NSRange, changeInLength delta: Int, invalidatedRange invalidatedCharRange: NSRange)
```

## Parameters

- `textStorage`: The text storage object processing edits.
- `editMask`: The types of edits done: `NSTextStorageEditedAttributes`, `NSTextStorageEditedCharacters`, or both.
- `newCharRange`: The range in the final string that was explicitly edited.
- `delta`: The length delta for the editing changes.
- `invalidatedCharRange`: The range of characters that changed as a result of attribute fixing. This invalidated range is either equal to `newCharRange` or larger.

<a id="Discussion"></a>

## Discussion

The [processEditing()](../nstextstorage/processediting%28%29.md) method of [NSTextStorage](../nstextstorage.md) calls this method to notify the layout manager of an edit action. Layout managers must not change the contents of the text storage during the execution of this message.

## See Also

### Invalidating glyphs and layout

- [invalidateDisplay(forCharacterRange:)](invalidatedisplay%28forcharacterrange_%29.md): Invalidates display for the specified character range.
- [invalidateDisplay(forGlyphRange:)](invalidatedisplay%28forglyphrange_%29.md): Invalidates a range of glyphs, requiring new layout information, and updates the appropriate regions of any text views that display those glyphs.
- [invalidateGlyphs(forCharacterRange:changeInLength:actualCharacterRange:)](invalidateglyphs%28forcharacterrange_changeinlength_actualcharacterrange_%29.md): Invalidates and adjusts the glyphs in the specified character range.
- [invalidateLayout(forCharacterRange:actualCharacterRange:)](invalidatelayout%28forcharacterrange_actualcharacterrange_%29.md): Invalidates the layout information for the glyphs that map to the specified character range.

# processEditingForTextStorage:edited:range:changeInLength:invalidatedRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.11+

Notifies the layout manager when an edit action changes the contents of its text storage object.

## Declaration

```objectivec
- (void) processEditingForTextStorage:(NSTextStorage *) textStorage edited:(NSTextStorageEditActions) editMask range:(NSRange) newCharRange changeInLength:(NSInteger) delta invalidatedRange:(NSRange) invalidatedCharRange;
```

## Parameters

- `textStorage`: The text storage object processing edits.
- `editMask`: The types of edits done: `NSTextStorageEditedAttributes`, `NSTextStorageEditedCharacters`, or both.
- `newCharRange`: The range in the final string that was explicitly edited.
- `delta`: The length delta for the editing changes.
- `invalidatedCharRange`: The range of characters that changed as a result of attribute fixing. This invalidated range is either equal to `newCharRange` or larger.

<a id="Discussion"></a>

## Discussion

The [processEditing](../nstextstorage/processediting%28%29.md) method of [NSTextStorage](../nstextstorage.md) calls this method to notify the layout manager of an edit action. Layout managers must not change the contents of the text storage during the execution of this message.

## See Also

### Invalidating glyphs and layout

- [invalidateDisplayForCharacterRange:](invalidatedisplay%28forcharacterrange_%29.md): Invalidates display for the specified character range.
- [invalidateDisplayForGlyphRange:](invalidatedisplay%28forglyphrange_%29.md): Invalidates a range of glyphs, requiring new layout information, and updates the appropriate regions of any text views that display those glyphs.
- [invalidateGlyphsForCharacterRange:changeInLength:actualCharacterRange:](invalidateglyphs%28forcharacterrange_changeinlength_actualcharacterrange_%29.md): Invalidates and adjusts the glyphs in the specified character range.
- [invalidateLayoutForCharacterRange:actualCharacterRange:](invalidatelayout%28forcharacterrange_actualcharacterrange_%29.md): Invalidates the layout information for the glyphs that map to the specified character range.

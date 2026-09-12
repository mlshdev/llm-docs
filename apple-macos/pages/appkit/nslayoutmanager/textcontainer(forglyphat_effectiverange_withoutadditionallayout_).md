> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/textcontainer(forglyphat:effectiverange:withoutadditionallayout:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/textcontainer(forglyphat:effectiverange:withoutadditionallayout:))

# textContainer(forGlyphAt:effectiveRange:withoutAdditionalLayout:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Returns the text container that manages the layout for the specified glyph.

## Declaration

```swift
func textContainer(forGlyphAt glyphIndex: Int, effectiveRange effectiveGlyphRange: NSRangePointer?, withoutAdditionalLayout flag: Bool) -> NSTextContainer?
```

## Parameters

- `glyphIndex`: Index of a glyph in the returned container.
- `effectiveGlyphRange`: If not `NULL`, on output, points to the whole range of glyphs that are in the returned container.
- `flag`: If [true](https://developer.apple.com/documentation/swift/true), glyph generation and layout are not performed, so this option should not be used unless layout is known to be complete for the range in question, or unless noncontiguous layout is enabled; if [false](https://developer.apple.com/documentation/swift/false), both are performed as needed.

<a id="return-value"></a>

## Return Value

The text container in which the glyph at `glyphIndex` is laid out.

<a id="Discussion"></a>

## Discussion

This method is primarily for use from within `NSTypesetter`, after layout is complete for the range in question, but before the layout manager’s call to `NSTypesetter` has returned. In that case glyph and layout holes have not yet been recalculated, so the layout manager does not yet know that layout is complete for that range, and this variant must be used.

Overriding this method is not recommended. Any changes to the returned glyph range should be done at the typesetter level.

## See Also

### Managing the text containers

- [textContainers](textcontainers.md): The current text containers of the layout manager.
- [addTextContainer(\_:)](addtextcontainer%28__%29.md): Appends the specified text container to the series of text containers where the layout manager arranges text.
- [insertTextContainer(\_:at:)](inserttextcontainer%28__at_%29.md): Inserts a text container at the specified index in the list of text containers.
- [removeTextContainer(at:)](removetextcontainer%28at_%29.md): Removes the text container at the specified index and invalidates the layout as necessary.
- [setTextContainer(\_:forGlyphRange:)](settextcontainer%28__forglyphrange_%29.md): Associates a text container with the specified range of glyphs.
- [textContainerChangedGeometry(\_:)](textcontainerchangedgeometry%28__%29.md): Invalidates the layout information, and possibly glyphs, for the specified text container and all subsequent text container objects.
- [textContainerChangedTextView(\_:)](textcontainerchangedtextview%28__%29.md): Updates the information necessary to manage text view objects for the specified text container.
- [textContainer(forGlyphAt:effectiveRange:)](textcontainer%28forglyphat_effectiverange_%29.md): Returns the text container that manages the layout for the specified glyph, causing layout to happen as necessary.
- [usedRect(for:)](usedrect%28for_%29.md): Returns the bounding rectangle for the glyphs in the specified text container.

# textContainerForGlyphAtIndex:effectiveRange:withoutAdditionalLayout: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Returns the text container that manages the layout for the specified glyph.

## Declaration

```objectivec
- (NSTextContainer *) textContainerForGlyphAtIndex:(NSUInteger) glyphIndex effectiveRange:(NSRangePointer) effectiveGlyphRange withoutAdditionalLayout:(BOOL) flag;
```

## Parameters

- `glyphIndex`: Index of a glyph in the returned container.
- `effectiveGlyphRange`: If not `NULL`, on output, points to the whole range of glyphs that are in the returned container.
- `flag`: If [true](https://developer.apple.com/documentation/swift/true), glyph generation and layout are not performed, so this option should not be used unless layout is known to be complete for the range in question, or unless noncontiguous layout is enabled; if [false](https://developer.apple.com/documentation/swift/false), both are performed as needed.

<a id="return-value"></a>

## Return Value

The text container in which the glyph at `glyphIndex` is laid out.

<a id="Discussion"></a>

## Discussion

This method is primarily for use from within `NSTypesetter`, after layout is complete for the range in question, but before the layout manager’s call to `NSTypesetter` has returned. In that case glyph and layout holes have not yet been recalculated, so the layout manager does not yet know that layout is complete for that range, and this variant must be used.

Overriding this method is not recommended. Any changes to the returned glyph range should be done at the typesetter level.

## See Also

### Managing the text containers

- [textContainers](textcontainers.md): The current text containers of the layout manager.
- [addTextContainer:](addtextcontainer%28__%29.md): Appends the specified text container to the series of text containers where the layout manager arranges text.
- [insertTextContainer:atIndex:](inserttextcontainer%28__at_%29.md): Inserts a text container at the specified index in the list of text containers.
- [removeTextContainerAtIndex:](removetextcontainer%28at_%29.md): Removes the text container at the specified index and invalidates the layout as necessary.
- [setTextContainer:forGlyphRange:](settextcontainer%28__forglyphrange_%29.md): Associates a text container with the specified range of glyphs.
- [textContainerChangedGeometry:](textcontainerchangedgeometry%28__%29.md): Invalidates the layout information, and possibly glyphs, for the specified text container and all subsequent text container objects.
- [textContainerChangedTextView:](textcontainerchangedtextview%28__%29.md): Updates the information necessary to manage text view objects for the specified text container.
- [textContainerForGlyphAtIndex:effectiveRange:](textcontainer%28forglyphat_effectiverange_%29.md): Returns the text container that manages the layout for the specified glyph, causing layout to happen as necessary.
- [usedRectForTextContainer:](usedrect%28for_%29.md): Returns the bounding rectangle for the glyphs in the specified text container.

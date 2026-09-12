> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/removetextcontainer(at:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/removetextcontainer(at:))

# removeTextContainer(at:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Removes the text container at the specified index and invalidates the layout as necessary.

## Declaration

```swift
func removeTextContainer(at index: Int)
```

## Parameters

- `index`: The index of the text container to remove.

<a id="Discussion"></a>

## Discussion

This method invalidates glyph information as needed.

## See Also

### Managing the text containers

- [textContainers](textcontainers.md): The current text containers of the layout manager.
- [addTextContainer(\_:)](addtextcontainer%28__%29.md): Appends the specified text container to the series of text containers where the layout manager arranges text.
- [insertTextContainer(\_:at:)](inserttextcontainer%28__at_%29.md): Inserts a text container at the specified index in the list of text containers.
- [setTextContainer(\_:forGlyphRange:)](settextcontainer%28__forglyphrange_%29.md): Associates a text container with the specified range of glyphs.
- [textContainerChangedGeometry(\_:)](textcontainerchangedgeometry%28__%29.md): Invalidates the layout information, and possibly glyphs, for the specified text container and all subsequent text container objects.
- [textContainerChangedTextView(\_:)](textcontainerchangedtextview%28__%29.md): Updates the information necessary to manage text view objects for the specified text container.
- [textContainer(forGlyphAt:effectiveRange:)](textcontainer%28forglyphat_effectiverange_%29.md): Returns the text container that manages the layout for the specified glyph, causing layout to happen as necessary.
- [textContainer(forGlyphAt:effectiveRange:withoutAdditionalLayout:)](textcontainer%28forglyphat_effectiverange_withoutadditionallayout_%29.md): Returns the text container that manages the layout for the specified glyph.
- [usedRect(for:)](usedrect%28for_%29.md): Returns the bounding rectangle for the glyphs in the specified text container.

# removeTextContainerAtIndex: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Removes the text container at the specified index and invalidates the layout as necessary.

## Declaration

```objectivec
- (void) removeTextContainerAtIndex:(NSUInteger) index;
```

## Parameters

- `index`: The index of the text container to remove.

<a id="Discussion"></a>

## Discussion

This method invalidates glyph information as needed.

## See Also

### Managing the text containers

- [textContainers](textcontainers.md): The current text containers of the layout manager.
- [addTextContainer:](addtextcontainer%28__%29.md): Appends the specified text container to the series of text containers where the layout manager arranges text.
- [insertTextContainer:atIndex:](inserttextcontainer%28__at_%29.md): Inserts a text container at the specified index in the list of text containers.
- [setTextContainer:forGlyphRange:](settextcontainer%28__forglyphrange_%29.md): Associates a text container with the specified range of glyphs.
- [textContainerChangedGeometry:](textcontainerchangedgeometry%28__%29.md): Invalidates the layout information, and possibly glyphs, for the specified text container and all subsequent text container objects.
- [textContainerChangedTextView:](textcontainerchangedtextview%28__%29.md): Updates the information necessary to manage text view objects for the specified text container.
- [textContainerForGlyphAtIndex:effectiveRange:](textcontainer%28forglyphat_effectiverange_%29.md): Returns the text container that manages the layout for the specified glyph, causing layout to happen as necessary.
- [textContainerForGlyphAtIndex:effectiveRange:withoutAdditionalLayout:](textcontainer%28forglyphat_effectiverange_withoutadditionallayout_%29.md): Returns the text container that manages the layout for the specified glyph.
- [usedRectForTextContainer:](usedrect%28for_%29.md): Returns the bounding rectangle for the glyphs in the specified text container.

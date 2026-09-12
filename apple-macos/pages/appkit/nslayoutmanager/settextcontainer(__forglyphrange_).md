> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/settextcontainer(_:forglyphrange:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/settextcontainer(_:forglyphrange:))

# setTextContainer(\_:forGlyphRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Associates a text container with the specified range of glyphs.

## Declaration

```swift
func setTextContainer(_ container: NSTextContainer, forGlyphRange glyphRange: NSRange)
```

## Parameters

- `container`: The text container to set.
- `glyphRange`: The range of glyphs to lay out.

<a id="Discussion"></a>

## Discussion

The layout within the container is specified with the [setLineFragmentRect(\_:forGlyphRange:usedRect:)](setlinefragmentrect%28__forglyphrange_usedrect_%29.md) and [setLocation(\_:forStartOfGlyphRange:)](setlocation%28__forstartofglyphrange_%29.md) methods.

This method is used by the layout mechanism and should be invoked only during typesetting, in almost all cases only by the typesetter. For example, a custom typesetter might invoke it.

## See Also

### Managing the text containers

- [textContainers](textcontainers.md): The current text containers of the layout manager.
- [addTextContainer(\_:)](addtextcontainer%28__%29.md): Appends the specified text container to the series of text containers where the layout manager arranges text.
- [insertTextContainer(\_:at:)](inserttextcontainer%28__at_%29.md): Inserts a text container at the specified index in the list of text containers.
- [removeTextContainer(at:)](removetextcontainer%28at_%29.md): Removes the text container at the specified index and invalidates the layout as necessary.
- [textContainerChangedGeometry(\_:)](textcontainerchangedgeometry%28__%29.md): Invalidates the layout information, and possibly glyphs, for the specified text container and all subsequent text container objects.
- [textContainerChangedTextView(\_:)](textcontainerchangedtextview%28__%29.md): Updates the information necessary to manage text view objects for the specified text container.
- [textContainer(forGlyphAt:effectiveRange:)](textcontainer%28forglyphat_effectiverange_%29.md): Returns the text container that manages the layout for the specified glyph, causing layout to happen as necessary.
- [textContainer(forGlyphAt:effectiveRange:withoutAdditionalLayout:)](textcontainer%28forglyphat_effectiverange_withoutadditionallayout_%29.md): Returns the text container that manages the layout for the specified glyph.
- [usedRect(for:)](usedrect%28for_%29.md): Returns the bounding rectangle for the glyphs in the specified text container.

# setTextContainer:forGlyphRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Associates a text container with the specified range of glyphs.

## Declaration

```objectivec
- (void) setTextContainer:(NSTextContainer *) container forGlyphRange:(NSRange) glyphRange;
```

## Parameters

- `container`: The text container to set.
- `glyphRange`: The range of glyphs to lay out.

<a id="Discussion"></a>

## Discussion

The layout within the container is specified with the [setLineFragmentRect:forGlyphRange:usedRect:](setlinefragmentrect%28__forglyphrange_usedrect_%29.md) and [setLocation:forStartOfGlyphRange:](setlocation%28__forstartofglyphrange_%29.md) methods.

This method is used by the layout mechanism and should be invoked only during typesetting, in almost all cases only by the typesetter. For example, a custom typesetter might invoke it.

## See Also

### Managing the text containers

- [textContainers](textcontainers.md): The current text containers of the layout manager.
- [addTextContainer:](addtextcontainer%28__%29.md): Appends the specified text container to the series of text containers where the layout manager arranges text.
- [insertTextContainer:atIndex:](inserttextcontainer%28__at_%29.md): Inserts a text container at the specified index in the list of text containers.
- [removeTextContainerAtIndex:](removetextcontainer%28at_%29.md): Removes the text container at the specified index and invalidates the layout as necessary.
- [textContainerChangedGeometry:](textcontainerchangedgeometry%28__%29.md): Invalidates the layout information, and possibly glyphs, for the specified text container and all subsequent text container objects.
- [textContainerChangedTextView:](textcontainerchangedtextview%28__%29.md): Updates the information necessary to manage text view objects for the specified text container.
- [textContainerForGlyphAtIndex:effectiveRange:](textcontainer%28forglyphat_effectiverange_%29.md): Returns the text container that manages the layout for the specified glyph, causing layout to happen as necessary.
- [textContainerForGlyphAtIndex:effectiveRange:withoutAdditionalLayout:](textcontainer%28forglyphat_effectiverange_withoutadditionallayout_%29.md): Returns the text container that manages the layout for the specified glyph.
- [usedRectForTextContainer:](usedrect%28for_%29.md): Returns the bounding rectangle for the glyphs in the specified text container.

> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanagerdelegate/layoutmanagerdidinvalidatelayout(_:)](https://developer.apple.com/documentation/appkit/nslayoutmanagerdelegate/layoutmanagerdidinvalidatelayout(_:))

# layoutManagerDidInvalidateLayout(\_:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Informs the delegate when the specified layout manager invalidates layout information (not glyph information).

## Declaration

```swift
optional func layoutManagerDidInvalidateLayout(_ sender: NSLayoutManager)
```

## Parameters

- `sender`: The layout manager that invalidated layout.

<a id="Discussion"></a>

## Discussion

This method is invoked only when layout was complete and then became invalidated for some reason. Delegates can use this information to show an indicator of background layout or to enable a button that forces immediate layout of text.

## See Also

### Invalidating glyphs and layout

- [layoutManager(\_:shouldGenerateGlyphs:properties:characterIndexes:font:forGlyphRange:)](layoutmanager%28__shouldgenerateglyphs_properties_characterindexes_font_forglyphrange_%29.md): Enables customization of the initial glyph generation process.
- [layoutManager(\_:shouldUse:forControlCharacterAt:)](layoutmanager%28__shoulduse_forcontrolcharacterat_%29.md): Returns the control character action for the control character at the specified character index.
- [NSLayoutManager.ControlCharacterAction](../nslayoutmanager/controlcharacteraction.md): Constants that describe actions for control characters.

# layoutManagerDidInvalidateLayout: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.0+

Informs the delegate when the specified layout manager invalidates layout information (not glyph information).

## Declaration

```objectivec
- (void) layoutManagerDidInvalidateLayout:(NSLayoutManager *) sender;
```

## Parameters

- `sender`: The layout manager that invalidated layout.

<a id="Discussion"></a>

## Discussion

This method is invoked only when layout was complete and then became invalidated for some reason. Delegates can use this information to show an indicator of background layout or to enable a button that forces immediate layout of text.

## See Also

### Invalidating glyphs and layout

- [layoutManager:shouldGenerateGlyphs:properties:characterIndexes:font:forGlyphRange:](layoutmanager%28__shouldgenerateglyphs_properties_characterindexes_font_forglyphrange_%29.md): Enables customization of the initial glyph generation process.
- [layoutManager:shouldUseAction:forControlCharacterAtIndex:](layoutmanager%28__shoulduse_forcontrolcharacterat_%29.md): Returns the control character action for the control character at the specified character index.
- [NSControlCharacterAction](../nslayoutmanager/controlcharacteraction.md): Constants that describe actions for control characters.

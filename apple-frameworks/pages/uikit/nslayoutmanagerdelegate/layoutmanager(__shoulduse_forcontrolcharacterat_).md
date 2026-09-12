> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanagerdelegate/layoutmanager(_:shoulduse:forcontrolcharacterat:)](https://developer.apple.com/documentation/uikit/nslayoutmanagerdelegate/layoutmanager(_:shoulduse:forcontrolcharacterat:))

# layoutManager(\_:shouldUse:forControlCharacterAt:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the control character action for the control character at the specified character index.

## Declaration

```swift
optional func layoutManager(_ layoutManager: NSLayoutManager, shouldUse action: NSLayoutManager.ControlCharacterAction, forControlCharacterAt charIndex: Int) -> NSLayoutManager.ControlCharacterAction
```

## Parameters

- `layoutManager`: The layout manager doing the layout.
- `action`: The proposed control character action for the character at the given index. Possible values are enumerated by  [NSLayoutManager.ControlCharacterAction](../nslayoutmanager/controlcharacteraction.md).
- `charIndex`: The index of the control character for which the action is proposed.

<a id="return-value"></a>

## Return Value

The control character action for the control character at the given index.

## See Also

### Invalidating glyphs and layout

- [layoutManagerDidInvalidateLayout(\_:)](layoutmanagerdidinvalidatelayout%28__%29.md): Informs the delegate when the specified layout manager invalidates layout information (not glyph information).
- [layoutManager(\_:shouldGenerateGlyphs:properties:characterIndexes:font:forGlyphRange:)](layoutmanager%28__shouldgenerateglyphs_properties_characterindexes_font_forglyphrange_%29.md): Enables customization of the initial glyph generation process.
- [NSLayoutManager.ControlCharacterAction](../nslayoutmanager/controlcharacteraction.md): Constants that describe actions for control characters.

# layoutManager:shouldUseAction:forControlCharacterAtIndex: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Returns the control character action for the control character at the specified character index.

## Declaration

```objectivec
- (NSControlCharacterAction) layoutManager:(NSLayoutManager *) layoutManager shouldUseAction:(NSControlCharacterAction) action forControlCharacterAtIndex:(NSUInteger) charIndex;
```

## Parameters

- `layoutManager`: The layout manager doing the layout.
- `action`: The proposed control character action for the character at the given index. Possible values are enumerated by  [NSControlCharacterAction](../nslayoutmanager/controlcharacteraction.md).
- `charIndex`: The index of the control character for which the action is proposed.

<a id="return-value"></a>

## Return Value

The control character action for the control character at the given index.

## See Also

### Invalidating glyphs and layout

- [layoutManagerDidInvalidateLayout:](layoutmanagerdidinvalidatelayout%28__%29.md): Informs the delegate when the specified layout manager invalidates layout information (not glyph information).
- [layoutManager:shouldGenerateGlyphs:properties:characterIndexes:font:forGlyphRange:](layoutmanager%28__shouldgenerateglyphs_properties_characterindexes_font_forglyphrange_%29.md): Enables customization of the initial glyph generation process.
- [NSControlCharacterAction](../nslayoutmanager/controlcharacteraction.md): Constants that describe actions for control characters.

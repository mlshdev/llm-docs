> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanagerdelegate/layoutmanager(_:shouldgenerateglyphs:properties:characterindexes:font:forglyphrange:)](https://developer.apple.com/documentation/uikit/nslayoutmanagerdelegate/layoutmanager(_:shouldgenerateglyphs:properties:characterindexes:font:forglyphrange:))

# layoutManager(\_:shouldGenerateGlyphs:properties:characterIndexes:font:forGlyphRange:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Enables customization of the initial glyph generation process.

## Declaration

```swift
optional func layoutManager(_ layoutManager: NSLayoutManager, shouldGenerateGlyphs glyphs: UnsafePointer<CGGlyph>, properties props: UnsafePointer<NSLayoutManager.GlyphProperty>, characterIndexes charIndexes: UnsafePointer<Int>, font aFont: UIFont, forGlyphRange glyphRange: NSRange) -> Int
```

## Parameters

- `layoutManager`: The layout manager doing the layout.
- `glyphs`: A pointer to the layout manager’s glyph cache.
- `props`: A pointer to a buffer containing glyph properties for the glyphs in the cache.
- `charIndexes`: A pointer to the starting index for the characters in the text storage for which glyphs are generated.
- `aFont`: A font to override the font attributes in the text storage for the specified character range.
- `glyphRange`: The range of glyphs in the glyph cache to set.

<a id="return-value"></a>

## Return Value

The actual glyph range stored in this method. By returning `0`, it can indicate for the layout manager to do the default processing.

<a id="Discussion"></a>

## Discussion

This message is sent whenever the layout manager is about to store the initial glyph information via [setGlyphs(\_:properties:characterIndexes:font:forGlyphRange:)](../nslayoutmanager/setglyphs%28__properties_characterindexes_font_forglyphrange_%29.md). To customize the initial glyph generation process, this method can invoke [setGlyphs(\_:properties:characterIndexes:font:forGlyphRange:)](../nslayoutmanager/setglyphs%28__properties_characterindexes_font_forglyphrange_%29.md) with modified glyph information.

> **Note**

>  Querying glyph information surrounding `glyphRange` could lead to recursion since the data might not be available yet.

## See Also

### Invalidating glyphs and layout

- [layoutManagerDidInvalidateLayout(\_:)](layoutmanagerdidinvalidatelayout%28__%29.md): Informs the delegate when the specified layout manager invalidates layout information (not glyph information).
- [layoutManager(\_:shouldUse:forControlCharacterAt:)](layoutmanager%28__shoulduse_forcontrolcharacterat_%29.md): Returns the control character action for the control character at the specified character index.
- [NSLayoutManager.ControlCharacterAction](../nslayoutmanager/controlcharacteraction.md): Constants that describe actions for control characters.

# layoutManager:shouldGenerateGlyphs:properties:characterIndexes:font:forGlyphRange: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Enables customization of the initial glyph generation process.

## Declaration

```objectivec
- (NSUInteger) layoutManager:(NSLayoutManager *) layoutManager shouldGenerateGlyphs:(const CGGlyph *) glyphs properties:(const NSGlyphProperty *) props characterIndexes:(const NSUInteger *) charIndexes font:(UIFont *) aFont forGlyphRange:(NSRange) glyphRange;
```

## Parameters

- `layoutManager`: The layout manager doing the layout.
- `glyphs`: A pointer to the layout manager’s glyph cache.
- `props`: A pointer to a buffer containing glyph properties for the glyphs in the cache.
- `charIndexes`: A pointer to the starting index for the characters in the text storage for which glyphs are generated.
- `aFont`: A font to override the font attributes in the text storage for the specified character range.
- `glyphRange`: The range of glyphs in the glyph cache to set.

<a id="return-value"></a>

## Return Value

The actual glyph range stored in this method. By returning `0`, it can indicate for the layout manager to do the default processing.

<a id="Discussion"></a>

## Discussion

This message is sent whenever the layout manager is about to store the initial glyph information via [setGlyphs:properties:characterIndexes:font:forGlyphRange:](../nslayoutmanager/setglyphs%28__properties_characterindexes_font_forglyphrange_%29.md). To customize the initial glyph generation process, this method can invoke [setGlyphs:properties:characterIndexes:font:forGlyphRange:](../nslayoutmanager/setglyphs%28__properties_characterindexes_font_forglyphrange_%29.md) with modified glyph information.

> **Note**

>  Querying glyph information surrounding `glyphRange` could lead to recursion since the data might not be available yet.

## See Also

### Invalidating glyphs and layout

- [layoutManagerDidInvalidateLayout:](layoutmanagerdidinvalidatelayout%28__%29.md): Informs the delegate when the specified layout manager invalidates layout information (not glyph information).
- [layoutManager:shouldUseAction:forControlCharacterAtIndex:](layoutmanager%28__shoulduse_forcontrolcharacterat_%29.md): Returns the control character action for the control character at the specified character index.
- [NSControlCharacterAction](../nslayoutmanager/controlcharacteraction.md): Constants that describe actions for control characters.

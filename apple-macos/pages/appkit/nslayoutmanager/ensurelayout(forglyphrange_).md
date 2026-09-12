> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/ensurelayout(forglyphrange:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/ensurelayout(forglyphrange:))

# ensureLayout(forGlyphRange:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Forces the layout manager to perform layout for the specified glyph range if it hasn’t already.

## Declaration

```swift
func ensureLayout(forGlyphRange glyphRange: NSRange)
```

## Parameters

- `glyphRange`: The glyph range for which layout is performed.

<a id="Discussion"></a>

## Discussion

The layout manager reserves the right to perform layout for larger ranges. If noncontiguous layout is disabled, then the affected range is always effectively extended to start at the beginning of the text.

## See Also

### Causing glyph generation and layout

- [ensureGlyphs(forCharacterRange:)](ensureglyphs%28forcharacterrange_%29.md): Forces the layout manager to generate glyphs for the specified character range if it hasn’t already.
- [ensureGlyphs(forGlyphRange:)](ensureglyphs%28forglyphrange_%29.md): Forces the layout manager to generate glyphs for the specified glyph range if it hasn’t already.
- [ensureLayout(forBoundingRect:in:)](ensurelayout%28forboundingrect_in_%29.md): Forces the layout manager to perform layout for the specified area in the specified text container if it hasn’t already.
- [ensureLayout(forCharacterRange:)](ensurelayout%28forcharacterrange_%29.md): Forces the layout manager to perform layout for the specified character range if it hasn’t already.
- [ensureLayout(for:)](ensurelayout%28for_%29.md): Forces the layout manager to perform layout for the specified text container if it hasn’t already.
- [glyphGenerator](glyphgenerator.md): The glyph generator that the layout manager uses.

# ensureLayoutForGlyphRange: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Forces the layout manager to perform layout for the specified glyph range if it hasn’t already.

## Declaration

```objectivec
- (void) ensureLayoutForGlyphRange:(NSRange) glyphRange;
```

## Parameters

- `glyphRange`: The glyph range for which layout is performed.

<a id="Discussion"></a>

## Discussion

The layout manager reserves the right to perform layout for larger ranges. If noncontiguous layout is disabled, then the affected range is always effectively extended to start at the beginning of the text.

## See Also

### Causing glyph generation and layout

- [ensureGlyphsForCharacterRange:](ensureglyphs%28forcharacterrange_%29.md): Forces the layout manager to generate glyphs for the specified character range if it hasn’t already.
- [ensureGlyphsForGlyphRange:](ensureglyphs%28forglyphrange_%29.md): Forces the layout manager to generate glyphs for the specified glyph range if it hasn’t already.
- [ensureLayoutForBoundingRect:inTextContainer:](ensurelayout%28forboundingrect_in_%29.md): Forces the layout manager to perform layout for the specified area in the specified text container if it hasn’t already.
- [ensureLayoutForCharacterRange:](ensurelayout%28forcharacterrange_%29.md): Forces the layout manager to perform layout for the specified character range if it hasn’t already.
- [ensureLayoutForTextContainer:](ensurelayout%28for_%29.md): Forces the layout manager to perform layout for the specified text container if it hasn’t already.
- [glyphGenerator](glyphgenerator.md): The glyph generator that the layout manager uses.

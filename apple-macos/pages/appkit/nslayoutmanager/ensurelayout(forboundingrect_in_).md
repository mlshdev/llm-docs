> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/ensurelayout(forboundingrect:in:)](https://developer.apple.com/documentation/appkit/nslayoutmanager/ensurelayout(forboundingrect:in:))

# ensureLayout(forBoundingRect:in:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Forces the layout manager to perform layout for the specified area in the specified text container if it hasn’t already.

## Declaration

```swift
func ensureLayout(forBoundingRect bounds: NSRect, in container: NSTextContainer)
```

## Parameters

- `bounds`: The area for which layout is performed.
- `container`: The text container containing the area for which layout is performed.

<a id="Discussion"></a>

## Discussion

The layout manager reserves the right to perform layout for larger ranges. If noncontiguous layout is disabled, then the affected range is always effectively extended to start at the beginning of the text.

## See Also

### Causing glyph generation and layout

- [ensureGlyphs(forCharacterRange:)](ensureglyphs%28forcharacterrange_%29.md): Forces the layout manager to generate glyphs for the specified character range if it hasn’t already.
- [ensureGlyphs(forGlyphRange:)](ensureglyphs%28forglyphrange_%29.md): Forces the layout manager to generate glyphs for the specified glyph range if it hasn’t already.
- [ensureLayout(forCharacterRange:)](ensurelayout%28forcharacterrange_%29.md): Forces the layout manager to perform layout for the specified character range if it hasn’t already.
- [ensureLayout(forGlyphRange:)](ensurelayout%28forglyphrange_%29.md): Forces the layout manager to perform layout for the specified glyph range if it hasn’t already.
- [ensureLayout(for:)](ensurelayout%28for_%29.md): Forces the layout manager to perform layout for the specified text container if it hasn’t already.
- [glyphGenerator](glyphgenerator.md): The glyph generator that the layout manager uses.

# ensureLayoutForBoundingRect:inTextContainer: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.7+

Forces the layout manager to perform layout for the specified area in the specified text container if it hasn’t already.

## Declaration

```objectivec
- (void) ensureLayoutForBoundingRect:(NSRect) bounds inTextContainer:(NSTextContainer *) container;
```

## Parameters

- `bounds`: The area for which layout is performed.
- `container`: The text container containing the area for which layout is performed.

<a id="Discussion"></a>

## Discussion

The layout manager reserves the right to perform layout for larger ranges. If noncontiguous layout is disabled, then the affected range is always effectively extended to start at the beginning of the text.

## See Also

### Causing glyph generation and layout

- [ensureGlyphsForCharacterRange:](ensureglyphs%28forcharacterrange_%29.md): Forces the layout manager to generate glyphs for the specified character range if it hasn’t already.
- [ensureGlyphsForGlyphRange:](ensureglyphs%28forglyphrange_%29.md): Forces the layout manager to generate glyphs for the specified glyph range if it hasn’t already.
- [ensureLayoutForCharacterRange:](ensurelayout%28forcharacterrange_%29.md): Forces the layout manager to perform layout for the specified character range if it hasn’t already.
- [ensureLayoutForGlyphRange:](ensurelayout%28forglyphrange_%29.md): Forces the layout manager to perform layout for the specified glyph range if it hasn’t already.
- [ensureLayoutForTextContainer:](ensurelayout%28for_%29.md): Forces the layout manager to perform layout for the specified text container if it hasn’t already.
- [glyphGenerator](glyphgenerator.md): The glyph generator that the layout manager uses.

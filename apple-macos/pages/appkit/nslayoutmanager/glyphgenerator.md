> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nslayoutmanager/glyphgenerator](https://developer.apple.com/documentation/appkit/nslayoutmanager/glyphgenerator)

# glyphGenerator (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The glyph generator that the layout manager uses.

## Declaration

```swift
var glyphGenerator: NSGlyphGenerator { get set }
```

<a id="Discussion"></a>

## Discussion

Setting the glyph generator invalidates all glyphs and layout in the layout manager.

## See Also

### Causing glyph generation and layout

- [ensureGlyphs(forCharacterRange:)](ensureglyphs%28forcharacterrange_%29.md): Forces the layout manager to generate glyphs for the specified character range if it hasn’t already.
- [ensureGlyphs(forGlyphRange:)](ensureglyphs%28forglyphrange_%29.md): Forces the layout manager to generate glyphs for the specified glyph range if it hasn’t already.
- [ensureLayout(forBoundingRect:in:)](ensurelayout%28forboundingrect_in_%29.md): Forces the layout manager to perform layout for the specified area in the specified text container if it hasn’t already.
- [ensureLayout(forCharacterRange:)](ensurelayout%28forcharacterrange_%29.md): Forces the layout manager to perform layout for the specified character range if it hasn’t already.
- [ensureLayout(forGlyphRange:)](ensurelayout%28forglyphrange_%29.md): Forces the layout manager to perform layout for the specified glyph range if it hasn’t already.
- [ensureLayout(for:)](ensurelayout%28for_%29.md): Forces the layout manager to perform layout for the specified text container if it hasn’t already.

# glyphGenerator (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The glyph generator that the layout manager uses.

## Declaration

```objectivec
@property (strong) NSGlyphGenerator * glyphGenerator;
```

<a id="Discussion"></a>

## Discussion

Setting the glyph generator invalidates all glyphs and layout in the layout manager.

## See Also

### Causing glyph generation and layout

- [ensureGlyphsForCharacterRange:](ensureglyphs%28forcharacterrange_%29.md): Forces the layout manager to generate glyphs for the specified character range if it hasn’t already.
- [ensureGlyphsForGlyphRange:](ensureglyphs%28forglyphrange_%29.md): Forces the layout manager to generate glyphs for the specified glyph range if it hasn’t already.
- [ensureLayoutForBoundingRect:inTextContainer:](ensurelayout%28forboundingrect_in_%29.md): Forces the layout manager to perform layout for the specified area in the specified text container if it hasn’t already.
- [ensureLayoutForCharacterRange:](ensurelayout%28forcharacterrange_%29.md): Forces the layout manager to perform layout for the specified character range if it hasn’t already.
- [ensureLayoutForGlyphRange:](ensurelayout%28forglyphrange_%29.md): Forces the layout manager to perform layout for the specified glyph range if it hasn’t already.
- [ensureLayoutForTextContainer:](ensurelayout%28for_%29.md): Forces the layout manager to perform layout for the specified text container if it hasn’t already.

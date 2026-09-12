> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager/ensurelayout(forboundingrect:in:)](https://developer.apple.com/documentation/uikit/nslayoutmanager/ensurelayout(forboundingrect:in:))

# ensureLayout(forBoundingRect:in:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Forces the layout manager to perform layout for the specified area in the specified text container if it hasn’t already.

## Declaration

```swift
func ensureLayout(forBoundingRect bounds: CGRect, in container: NSTextContainer)
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
- [glyphGenerator](https://developer.apple.com/documentation/appkit/nslayoutmanager/glyphgenerator): The glyph generator that the layout manager uses.

# ensureLayoutForBoundingRect:inTextContainer: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Forces the layout manager to perform layout for the specified area in the specified text container if it hasn’t already.

## Declaration

```objectivec
- (void) ensureLayoutForBoundingRect:(CGRect) bounds inTextContainer:(NSTextContainer *) container;
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
- [glyphGenerator](https://developer.apple.com/documentation/appkit/nslayoutmanager/glyphgenerator): The glyph generator that the layout manager uses.

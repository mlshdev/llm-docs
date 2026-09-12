> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctfontgetligaturecaretpositions(_:_:_:_:)](https://developer.apple.com/documentation/coretext/ctfontgetligaturecaretpositions(_:_:_:_:))

# CTFontGetLigatureCaretPositions(\_:\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns caret positions within a glyph.

## Declaration

```swift
func CTFontGetLigatureCaretPositions(_ font: CTFont, _ glyph: CGGlyph, _ positions: UnsafeMutablePointer<CGFloat>?, _ maxPositions: CFIndex) -> CFIndex
```

## Parameters

- `font`: A reference to the font to use.
- `glyph`: A reference to the glyph.
- `positions`: A buffer of at least `maxPositions` to receive the ligature caret positions for `glyph`.
- `maxPositions`: The maximum number of positions to return.

<a id="return-value"></a>

## Return Value

The maximum number of caret positions for the specified glyph

<a id="Discussion"></a>

## Discussion

This function is used to obtain caret positions for a specific glyph. The return value is the maximum number of positions possible, and the function will populate the caller’s `positions` buffer with available positions if possible. This function might not be able to produce positions if the font does not have the appropriate data, in which case it will return 0.

## See Also

### Working with Glyphs

- [CTFontGetGlyphsForCharacters(\_:\_:\_:\_:)](ctfontgetglyphsforcharacters%28________%29.md): Performs basic character-to-glyph mapping.
- [CTFontDrawGlyphs(\_:\_:\_:\_:\_:)](ctfontdrawglyphs%28__________%29.md): Renders the given glyphs of a font at the specified positions in the supplied graphics context.

# CTFontGetLigatureCaretPositions (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns caret positions within a glyph.

## Declaration

```objectivec
extern CFIndex CTFontGetLigatureCaretPositions(CTFontRef font, CGGlyph glyph, CGFloat positions[], CFIndex maxPositions);
```

## Parameters

- `font`: A reference to the font to use.
- `glyph`: A reference to the glyph.
- `positions`: A buffer of at least `maxPositions` to receive the ligature caret positions for `glyph`.
- `maxPositions`: The maximum number of positions to return.

<a id="return-value"></a>

## Return Value

The maximum number of caret positions for the specified glyph

<a id="Discussion"></a>

## Discussion

This function is used to obtain caret positions for a specific glyph. The return value is the maximum number of positions possible, and the function will populate the caller’s `positions` buffer with available positions if possible. This function might not be able to produce positions if the font does not have the appropriate data, in which case it will return 0.

## See Also

### Working with Glyphs

- [CTFontGetGlyphsForCharacters](ctfontgetglyphsforcharacters%28________%29.md): Performs basic character-to-glyph mapping.
- [CTFontDrawGlyphs](ctfontdrawglyphs%28__________%29.md): Renders the given glyphs of a font at the specified positions in the supplied graphics context.

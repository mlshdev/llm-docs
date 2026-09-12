> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctglyphinfogetglyph(_:)](https://developer.apple.com/documentation/coretext/ctglyphinfogetglyph(_:))

# CTGlyphInfoGetGlyph(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Retrieves the glyph for a glyph info, if that object exists.

## Declaration

```swift
func CTGlyphInfoGetGlyph(_ glyphInfo: CTGlyphInfo) -> CGGlyph
```

## Parameters

- `glyphInfo`: The glyph info object from which to get the glyph.

<a id="return-value"></a>

## Return Value

A [CGGlyph](../coregraphics/cgglyph.md) value, if the glyph info object was created with a font; otherwise, `0`.

## See Also

### Getting GlyphInfo Data

- [CTGlyphInfoGetGlyphName(\_:)](ctglyphinfogetglyphname%28__%29.md): Retrieves the glyph name for a glyph info object, if that object exists.
- [CTGlyphInfoGetCharacterIdentifier(\_:)](ctglyphinfogetcharacteridentifier%28__%29.md): Gets the character identifier for a glyph info object.
- [CTGlyphInfoGetCharacterCollection(\_:)](ctglyphinfogetcharactercollection%28__%29.md): Gets the character collection for a glyph info object.

# CTGlyphInfoGetGlyph (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Retrieves the glyph for a glyph info, if that object exists.

## Declaration

```objectivec
extern CGGlyph CTGlyphInfoGetGlyph(CTGlyphInfoRef glyphInfo);
```

## Parameters

- `glyphInfo`: The glyph info object from which to get the glyph.

<a id="return-value"></a>

## Return Value

A [CGGlyph](../coregraphics/cgglyph.md) value, if the glyph info object was created with a font; otherwise, `0`.

## See Also

### Getting GlyphInfo Data

- [CTGlyphInfoGetGlyphName](ctglyphinfogetglyphname%28__%29.md): Retrieves the glyph name for a glyph info object, if that object exists.
- [CTGlyphInfoGetCharacterIdentifier](ctglyphinfogetcharacteridentifier%28__%29.md): Gets the character identifier for a glyph info object.
- [CTGlyphInfoGetCharacterCollection](ctglyphinfogetcharactercollection%28__%29.md): Gets the character collection for a glyph info object.

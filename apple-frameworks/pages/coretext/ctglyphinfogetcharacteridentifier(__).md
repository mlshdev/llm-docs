> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctglyphinfogetcharacteridentifier(_:)](https://developer.apple.com/documentation/coretext/ctglyphinfogetcharacteridentifier(_:))

# CTGlyphInfoGetCharacterIdentifier(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Gets the character identifier for a glyph info object.

## Declaration

```swift
func CTGlyphInfoGetCharacterIdentifier(_ glyphInfo: CTGlyphInfo) -> CGFontIndex
```

## Parameters

- `glyphInfo`: The glyph info from which to get the character identifier. May not be `NULL`.

<a id="return-value"></a>

## Return Value

The character identifier of the given glyph info object.

## See Also

### Getting GlyphInfo Data

- [CTGlyphInfoGetGlyphName(\_:)](ctglyphinfogetglyphname%28__%29.md): Retrieves the glyph name for a glyph info object, if that object exists.
- [CTGlyphInfoGetCharacterCollection(\_:)](ctglyphinfogetcharactercollection%28__%29.md): Gets the character collection for a glyph info object.
- [CTGlyphInfoGetGlyph(\_:)](ctglyphinfogetglyph%28__%29.md): Retrieves the glyph for a glyph info, if that object exists.

# CTGlyphInfoGetCharacterIdentifier (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Gets the character identifier for a glyph info object.

## Declaration

```objectivec
extern CGFontIndex CTGlyphInfoGetCharacterIdentifier(CTGlyphInfoRef glyphInfo);
```

## Parameters

- `glyphInfo`: The glyph info from which to get the character identifier. May not be `NULL`.

<a id="return-value"></a>

## Return Value

The character identifier of the given glyph info object.

## See Also

### Getting GlyphInfo Data

- [CTGlyphInfoGetGlyphName](ctglyphinfogetglyphname%28__%29.md): Retrieves the glyph name for a glyph info object, if that object exists.
- [CTGlyphInfoGetCharacterCollection](ctglyphinfogetcharactercollection%28__%29.md): Gets the character collection for a glyph info object.
- [CTGlyphInfoGetGlyph](ctglyphinfogetglyph%28__%29.md): Retrieves the glyph for a glyph info, if that object exists.

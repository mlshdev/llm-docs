> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctglyphinfogetglyphname(_:)](https://developer.apple.com/documentation/coretext/ctglyphinfogetglyphname(_:))

# CTGlyphInfoGetGlyphName(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves the glyph name for a glyph info object, if that object exists.

## Declaration

```swift
func CTGlyphInfoGetGlyphName(_ glyphInfo: CTGlyphInfo) -> CFString?
```

## Parameters

- `glyphInfo`: The glyph info object from which to get the glyph name. This parameter must not be `NULL`.

<a id="return-value"></a>

## Return Value

A glyph name, if the glyph info object was created with a name; otherwise, `NULL`.

## See Also

### Getting GlyphInfo Data

- [CTGlyphInfoGetCharacterIdentifier(\_:)](ctglyphinfogetcharacteridentifier%28__%29.md): Gets the character identifier for a glyph info object.
- [CTGlyphInfoGetCharacterCollection(\_:)](ctglyphinfogetcharactercollection%28__%29.md): Gets the character collection for a glyph info object.
- [CTGlyphInfoGetGlyph(\_:)](ctglyphinfogetglyph%28__%29.md): Retrieves the glyph for a glyph info, if that object exists.

# CTGlyphInfoGetGlyphName (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Retrieves the glyph name for a glyph info object, if that object exists.

## Declaration

```objectivec
extern CFStringRefCTGlyphInfoGetGlyphName(CTGlyphInfoRef glyphInfo);
```

## Parameters

- `glyphInfo`: The glyph info object from which to get the glyph name. This parameter must not be `NULL`.

<a id="return-value"></a>

## Return Value

A glyph name, if the glyph info object was created with a name; otherwise, `NULL`.

## See Also

### Getting GlyphInfo Data

- [CTGlyphInfoGetCharacterIdentifier](ctglyphinfogetcharacteridentifier%28__%29.md): Gets the character identifier for a glyph info object.
- [CTGlyphInfoGetCharacterCollection](ctglyphinfogetcharactercollection%28__%29.md): Gets the character collection for a glyph info object.
- [CTGlyphInfoGetGlyph](ctglyphinfogetglyph%28__%29.md): Retrieves the glyph for a glyph info, if that object exists.

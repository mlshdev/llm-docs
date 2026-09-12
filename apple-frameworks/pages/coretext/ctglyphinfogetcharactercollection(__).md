> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctglyphinfogetcharactercollection(_:)](https://developer.apple.com/documentation/coretext/ctglyphinfogetcharactercollection(_:))

# CTGlyphInfoGetCharacterCollection(\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Gets the character collection for a glyph info object.

## Declaration

```swift
func CTGlyphInfoGetCharacterCollection(_ glyphInfo: CTGlyphInfo) -> CTCharacterCollection
```

## Parameters

- `glyphInfo`: The glyph info from which to get the character collection. May not be `NULL`.

<a id="return-value"></a>

## Return Value

The character collection of the given glyph info object.

<a id="Discussion"></a>

## Discussion

If the glyph info object was created with a glyph name or a glyph index, its character collection is [kCTIdentityMappingCharacterCollection](ctcharactercollection/kctidentitymappingcharactercollection.md).

## See Also

### Getting GlyphInfo Data

- [CTGlyphInfoGetGlyphName(\_:)](ctglyphinfogetglyphname%28__%29.md): Retrieves the glyph name for a glyph info object, if that object exists.
- [CTGlyphInfoGetCharacterIdentifier(\_:)](ctglyphinfogetcharacteridentifier%28__%29.md): Gets the character identifier for a glyph info object.
- [CTGlyphInfoGetGlyph(\_:)](ctglyphinfogetglyph%28__%29.md): Retrieves the glyph for a glyph info, if that object exists.

# CTGlyphInfoGetCharacterCollection (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Gets the character collection for a glyph info object.

## Declaration

```objectivec
extern CTCharacterCollection CTGlyphInfoGetCharacterCollection(CTGlyphInfoRef glyphInfo);
```

## Parameters

- `glyphInfo`: The glyph info from which to get the character collection. May not be `NULL`.

<a id="return-value"></a>

## Return Value

The character collection of the given glyph info object.

<a id="Discussion"></a>

## Discussion

If the glyph info object was created with a glyph name or a glyph index, its character collection is [kCTIdentityMappingCharacterCollection](ctcharactercollection/kctidentitymappingcharactercollection.md).

## See Also

### Getting GlyphInfo Data

- [CTGlyphInfoGetGlyphName](ctglyphinfogetglyphname%28__%29.md): Retrieves the glyph name for a glyph info object, if that object exists.
- [CTGlyphInfoGetCharacterIdentifier](ctglyphinfogetcharacteridentifier%28__%29.md): Gets the character identifier for a glyph info object.
- [CTGlyphInfoGetGlyph](ctglyphinfogetglyph%28__%29.md): Retrieves the glyph for a glyph info, if that object exists.

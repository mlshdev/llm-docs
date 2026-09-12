> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctglyphinfocreatewithcharacteridentifier(_:_:_:)](https://developer.apple.com/documentation/coretext/ctglyphinfocreatewithcharacteridentifier(_:_:_:))

# CTGlyphInfoCreateWithCharacterIdentifier(\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an immutable glyph info object with a character identifier.

## Declaration

```swift
func CTGlyphInfoCreateWithCharacterIdentifier(_ cid: CGFontIndex, _ collection: CTCharacterCollection, _ baseString: CFString) -> CTGlyphInfo?
```

## Parameters

- `cid`: A character identifier.
- `collection`: A character collection identifier.
- `baseString`: The part of the string the returned object is intended to override.

<a id="return-value"></a>

## Return Value

A valid reference to an immutable CTGlyphInfo object if glyph info creation was successful; otherwise, `NULL`.

<a id="Discussion"></a>

## Discussion

This function creates an immutable glyph info object for a character identifier and a character collection.

## See Also

### Creating GlyphInfo Objects

- [CTGlyphInfoCreateWithGlyphName(\_:\_:\_:)](ctglyphinfocreatewithglyphname%28______%29.md): Creates an immutable glyph info object with a glyph name.
- [CTGlyphInfoCreateWithGlyph(\_:\_:\_:)](ctglyphinfocreatewithglyph%28______%29.md): Creates an immutable glyph info object with a glyph index.

# CTGlyphInfoCreateWithCharacterIdentifier (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an immutable glyph info object with a character identifier.

## Declaration

```objectivec
extern CTGlyphInfoRefCTGlyphInfoCreateWithCharacterIdentifier(CGFontIndex cid, CTCharacterCollection collection, CFStringRef baseString);
```

## Parameters

- `cid`: A character identifier.
- `collection`: A character collection identifier.
- `baseString`: The part of the string the returned object is intended to override.

<a id="return-value"></a>

## Return Value

A valid reference to an immutable CTGlyphInfo object if glyph info creation was successful; otherwise, `NULL`.

<a id="Discussion"></a>

## Discussion

This function creates an immutable glyph info object for a character identifier and a character collection.

## See Also

### Creating GlyphInfo Objects

- [CTGlyphInfoCreateWithGlyphName](ctglyphinfocreatewithglyphname%28______%29.md): Creates an immutable glyph info object with a glyph name.
- [CTGlyphInfoCreateWithGlyph](ctglyphinfocreatewithglyph%28______%29.md): Creates an immutable glyph info object with a glyph index.

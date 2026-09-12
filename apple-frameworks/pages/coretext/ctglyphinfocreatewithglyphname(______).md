> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctglyphinfocreatewithglyphname(_:_:_:)](https://developer.apple.com/documentation/coretext/ctglyphinfocreatewithglyphname(_:_:_:))

# CTGlyphInfoCreateWithGlyphName(\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an immutable glyph info object with a glyph name.

## Declaration

```swift
func CTGlyphInfoCreateWithGlyphName(_ glyphName: CFString, _ font: CTFont, _ baseString: CFString) -> CTGlyphInfo?
```

## Parameters

- `glyphName`: The name of the glyph.
- `font`: The font to be associated with the returned CTGlyphInfo object.
- `baseString`: The part of the string the returned object is intended to override.

<a id="return-value"></a>

## Return Value

A valid reference to an immutable CTGlyphInfo object if glyph info creation was successful; otherwise, `NULL`.

<a id="Discussion"></a>

## Discussion

This function creates an immutable glyph info object for a glyph name such as `copyright` using a specified font.

## See Also

### Creating GlyphInfo Objects

- [CTGlyphInfoCreateWithGlyph(\_:\_:\_:)](ctglyphinfocreatewithglyph%28______%29.md): Creates an immutable glyph info object with a glyph index.
- [CTGlyphInfoCreateWithCharacterIdentifier(\_:\_:\_:)](ctglyphinfocreatewithcharacteridentifier%28______%29.md): Creates an immutable glyph info object with a character identifier.

# CTGlyphInfoCreateWithGlyphName (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an immutable glyph info object with a glyph name.

## Declaration

```objectivec
extern CTGlyphInfoRefCTGlyphInfoCreateWithGlyphName(CFStringRef glyphName, CTFontRef font, CFStringRef baseString);
```

## Parameters

- `glyphName`: The name of the glyph.
- `font`: The font to be associated with the returned CTGlyphInfo object.
- `baseString`: The part of the string the returned object is intended to override.

<a id="return-value"></a>

## Return Value

A valid reference to an immutable CTGlyphInfo object if glyph info creation was successful; otherwise, `NULL`.

<a id="Discussion"></a>

## Discussion

This function creates an immutable glyph info object for a glyph name such as `copyright` using a specified font.

## See Also

### Creating GlyphInfo Objects

- [CTGlyphInfoCreateWithGlyph](ctglyphinfocreatewithglyph%28______%29.md): Creates an immutable glyph info object with a glyph index.
- [CTGlyphInfoCreateWithCharacterIdentifier](ctglyphinfocreatewithcharacteridentifier%28______%29.md): Creates an immutable glyph info object with a character identifier.

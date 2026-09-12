> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coretext/ctglyphinfocreatewithglyph(_:_:_:)](https://developer.apple.com/documentation/coretext/ctglyphinfocreatewithglyph(_:_:_:))

# CTGlyphInfoCreateWithGlyph(\_:\_:\_:) (Swift)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an immutable glyph info object with a glyph index.

## Declaration

```swift
func CTGlyphInfoCreateWithGlyph(_ glyph: CGGlyph, _ font: CTFont, _ baseString: CFString) -> CTGlyphInfo?
```

## Parameters

- `glyph`: The index of the glyph.
- `font`: The font to be associated with the returned CTGlyphInfo object.
- `baseString`: The part of the string the returned object is intended to override.

<a id="return-value"></a>

## Return Value

A valid reference to an immutable CTGlyphInfo object, If glyph info creation was successful; otherwise, `NULL`.

<a id="Discussion"></a>

## Discussion

This function creates an immutable glyph info object for a glyph index using a specified font.

## See Also

### Creating GlyphInfo Objects

- [CTGlyphInfoCreateWithGlyphName(\_:\_:\_:)](ctglyphinfocreatewithglyphname%28______%29.md): Creates an immutable glyph info object with a glyph name.
- [CTGlyphInfoCreateWithCharacterIdentifier(\_:\_:\_:)](ctglyphinfocreatewithcharacteridentifier%28______%29.md): Creates an immutable glyph info object with a character identifier.

# CTGlyphInfoCreateWithGlyph (Objective-C)

**Framework:** Core Text  
**Kind:** Function  
**Availability:** iOS 3.2+ · iPadOS 3.2+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates an immutable glyph info object with a glyph index.

## Declaration

```objectivec
extern CTGlyphInfoRefCTGlyphInfoCreateWithGlyph(CGGlyph glyph, CTFontRef font, CFStringRef baseString);
```

## Parameters

- `glyph`: The index of the glyph.
- `font`: The font to be associated with the returned CTGlyphInfo object.
- `baseString`: The part of the string the returned object is intended to override.

<a id="return-value"></a>

## Return Value

A valid reference to an immutable CTGlyphInfo object, If glyph info creation was successful; otherwise, `NULL`.

<a id="Discussion"></a>

## Discussion

This function creates an immutable glyph info object for a glyph index using a specified font.

## See Also

### Creating GlyphInfo Objects

- [CTGlyphInfoCreateWithGlyphName](ctglyphinfocreatewithglyphname%28______%29.md): Creates an immutable glyph info object with a glyph name.
- [CTGlyphInfoCreateWithCharacterIdentifier](ctglyphinfocreatewithcharacteridentifier%28______%29.md): Creates an immutable glyph info object with a character identifier.

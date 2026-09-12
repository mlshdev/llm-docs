> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsglyphinfo/init(glyphname:forfont:basestring:)](https://developer.apple.com/documentation/appkit/nsglyphinfo/init(glyphname:forfont:basestring:))

# init(glyphName:forFont:baseString:)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Instantiates and returns a glyph information object using a glyph name and a specified font.

## Declaration

```swift
init?(glyphName: String, forFont font: NSFont, baseString string: String)
```

## Parameters

- `glyphName`: The name of the glyph.
- `font`: The font object to be associated with the returned `NSGlyphInfo` object,
- `string`: The part of the attributed string the returned instance is intended to override.

<a id="return-value"></a>

## Return Value

The created `NSGlyphInfo` object or `nil` if the object couldn’t be created.

## See Also

### Deprecated

- [init(characterIdentifier:collection:baseString:)](init%28characteridentifier_collection_basestring_%29.md): Instantiates and returns an `NSGlyphInfo` object using a character identifier and a character collection.
- [init(glyph:forFont:baseString:)](init%28glyph_forfont_basestring_%29.md): Instantiates and returns a glyph information object using a glyph index and a specified font.
- [characterIdentifier](characteridentifier.md): The receiver’s character identifier (CID).
- [characterCollection](charactercollection.md): A value specifying the glyph–to–character identifier mapping of the receiver.
- [glyphName](glyphname.md): The receiver’s glyph name.
- [NSCharacterCollection](../nscharactercollection.md): Values that map character identifiers to glyphs.

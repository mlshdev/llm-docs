> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsglyphinfo/init(characteridentifier:collection:basestring:)](https://developer.apple.com/documentation/appkit/nsglyphinfo/init(characteridentifier:collection:basestring:))

# init(characterIdentifier:collection:baseString:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Instantiates and returns an `NSGlyphInfo` object using a character identifier and a character collection.

## Declaration

```swift
init?(characterIdentifier cid: Int, collection characterCollection: NSCharacterCollection, baseString string: String)
```

## Parameters

- `cid`: A character identifier.
- `characterCollection`: A string constant representing a character collection. Possible values are described in [NSCharacterCollection](../nscharactercollection.md).
- `string`: The part of the attributed string the returned instance is intended to override.

<a id="return-value"></a>

## Return Value

The created `NSGlyphInfo` object or `nil` if the object couldn’t be created.

## See Also

### Deprecated

- [init(glyph:forFont:baseString:)](init%28glyph_forfont_basestring_%29.md): Instantiates and returns a glyph information object using a glyph index and a specified font.
- [init(glyphName:forFont:baseString:)](init%28glyphname_forfont_basestring_%29.md): Instantiates and returns a glyph information object using a glyph name and a specified font.
- [characterIdentifier](characteridentifier.md): The receiver’s character identifier (CID).
- [characterCollection](charactercollection.md): A value specifying the glyph–to–character identifier mapping of the receiver.
- [glyphName](glyphname.md): The receiver’s glyph name.
- [NSCharacterCollection](../nscharactercollection.md): Values that map character identifiers to glyphs.

# glyphInfoWithCharacterIdentifier:collection:baseString: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Instantiates and returns an `NSGlyphInfo` object using a character identifier and a character collection.

## Declaration

```objectivec
+ (NSGlyphInfo *) glyphInfoWithCharacterIdentifier:(NSUInteger) cid collection:(NSCharacterCollection) characterCollection baseString:(NSString *) string;
```

## Parameters

- `cid`: A character identifier.
- `characterCollection`: A string constant representing a character collection. Possible values are described in [NSCharacterCollection](../nscharactercollection.md).
- `string`: The part of the attributed string the returned instance is intended to override.

<a id="return-value"></a>

## Return Value

The created `NSGlyphInfo` object or `nil` if the object couldn’t be created.

## See Also

### Deprecated

- [characterIdentifier](characteridentifier.md): The receiver’s character identifier (CID).
- [characterCollection](charactercollection.md): A value specifying the glyph–to–character identifier mapping of the receiver.
- [glyphName](glyphname.md): The receiver’s glyph name.
- [NSCharacterCollection](../nscharactercollection.md): Values that map character identifiers to glyphs.

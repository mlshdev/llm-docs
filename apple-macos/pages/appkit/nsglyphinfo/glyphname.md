> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsglyphinfo/glyphname](https://developer.apple.com/documentation/appkit/nsglyphinfo/glyphname)

# glyphName (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s glyph name.

## Declaration

```swift
var glyphName: String? { get }
```

## See Also

### Deprecated

- [init(characterIdentifier:collection:baseString:)](init%28characteridentifier_collection_basestring_%29.md): Instantiates and returns an `NSGlyphInfo` object using a character identifier and a character collection.
- [init(glyph:forFont:baseString:)](init%28glyph_forfont_basestring_%29.md): Instantiates and returns a glyph information object using a glyph index and a specified font.
- [init(glyphName:forFont:baseString:)](init%28glyphname_forfont_basestring_%29.md): Instantiates and returns a glyph information object using a glyph name and a specified font.
- [characterIdentifier](characteridentifier.md): The receiver’s character identifier (CID).
- [characterCollection](charactercollection.md): A value specifying the glyph–to–character identifier mapping of the receiver.
- [NSCharacterCollection](../nscharactercollection.md): Values that map character identifiers to glyphs.

# glyphName (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s glyph name.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSString * glyphName;
```

## See Also

### Deprecated

- [glyphInfoWithCharacterIdentifier:collection:baseString:](init%28characteridentifier_collection_basestring_%29.md): Instantiates and returns an `NSGlyphInfo` object using a character identifier and a character collection.
- [characterIdentifier](characteridentifier.md): The receiver’s character identifier (CID).
- [characterCollection](charactercollection.md): A value specifying the glyph–to–character identifier mapping of the receiver.
- [NSCharacterCollection](../nscharactercollection.md): Values that map character identifiers to glyphs.

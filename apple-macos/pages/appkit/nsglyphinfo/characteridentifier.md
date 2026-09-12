> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsglyphinfo/characteridentifier](https://developer.apple.com/documentation/appkit/nsglyphinfo/characteridentifier)

# characterIdentifier (Swift)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s character identifier (CID).

## Declaration

```swift
var characterIdentifier: Int { get }
```

## See Also

### Deprecated

- [init(characterIdentifier:collection:baseString:)](init%28characteridentifier_collection_basestring_%29.md): Instantiates and returns an `NSGlyphInfo` object using a character identifier and a character collection.
- [init(glyph:forFont:baseString:)](init%28glyph_forfont_basestring_%29.md): Instantiates and returns a glyph information object using a glyph index and a specified font.
- [init(glyphName:forFont:baseString:)](init%28glyphname_forfont_basestring_%29.md): Instantiates and returns a glyph information object using a glyph name and a specified font.
- [characterCollection](charactercollection.md): A value specifying the glyph–to–character identifier mapping of the receiver.
- [glyphName](glyphname.md): The receiver’s glyph name.
- [NSCharacterCollection](../nscharactercollection.md): Values that map character identifiers to glyphs.

# characterIdentifier (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Property  
**Availability:** macOS

The receiver’s character identifier (CID).

## Declaration

```objectivec
@property (readonly) NSUInteger characterIdentifier;
```

## See Also

### Deprecated

- [glyphInfoWithCharacterIdentifier:collection:baseString:](init%28characteridentifier_collection_basestring_%29.md): Instantiates and returns an `NSGlyphInfo` object using a character identifier and a character collection.
- [characterCollection](charactercollection.md): A value specifying the glyph–to–character identifier mapping of the receiver.
- [glyphName](glyphname.md): The receiver’s glyph name.
- [NSCharacterCollection](../nscharactercollection.md): Values that map character identifiers to glyphs.

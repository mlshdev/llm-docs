> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nscharactercollection](https://developer.apple.com/documentation/appkit/nscharactercollection)

# NSCharacterCollection (Swift)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Values that map character identifiers to glyphs.

## Declaration

```swift
enum NSCharacterCollection
```

## Topics

### Collections

- [NSCharacterCollection.identityMappingCharacterCollection](nscharactercollection/identitymappingcharactercollection.md): Indicates that the character identifier is equal to the glyph index.
- [NSCharacterCollection.adobeCNS1CharacterCollection](nscharactercollection/adobecns1charactercollection.md): Indicates the Adobe-CNS1 mapping.
- [NSCharacterCollection.adobeGB1CharacterCollection](nscharactercollection/adobegb1charactercollection.md): Indicates the Adobe-GB1 mapping.
- [NSCharacterCollection.adobeJapan1CharacterCollection](nscharactercollection/adobejapan1charactercollection.md): Indicates the Adobe-Japan1 mapping.
- [NSCharacterCollection.adobeJapan2CharacterCollection](nscharactercollection/adobejapan2charactercollection.md): Indicates the Adobe-Japan2 mapping.
- [NSCharacterCollection.adobeKorea1CharacterCollection](nscharactercollection/adobekorea1charactercollection.md): Indicates the Adobe-Korea1 mapping.

### Initializers

- [init(rawValue:)](nscharactercollection/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Deprecated

- [init(characterIdentifier:collection:baseString:)](nsglyphinfo/init%28characteridentifier_collection_basestring_%29.md): Instantiates and returns an `NSGlyphInfo` object using a character identifier and a character collection.
- [init(glyph:forFont:baseString:)](nsglyphinfo/init%28glyph_forfont_basestring_%29.md): Instantiates and returns a glyph information object using a glyph index and a specified font.
- [init(glyphName:forFont:baseString:)](nsglyphinfo/init%28glyphname_forfont_basestring_%29.md): Instantiates and returns a glyph information object using a glyph name and a specified font.
- [characterIdentifier](nsglyphinfo/characteridentifier.md): The receiver’s character identifier (CID).
- [characterCollection](nsglyphinfo/charactercollection.md): A value specifying the glyph–to–character identifier mapping of the receiver.
- [glyphName](nsglyphinfo/glyphname.md): The receiver’s glyph name.

# NSCharacterCollection (Objective-C)

**Framework:** AppKit  
**Kind:** Enumeration  
**Availability:** macOS

Values that map character identifiers to glyphs.

## Declaration

```objectivec
enum NSCharacterCollection : NSUInteger;
```

## Topics

### Collections

- [NSIdentityMappingCharacterCollection](nscharactercollection/identitymappingcharactercollection.md): Indicates that the character identifier is equal to the glyph index.
- [NSAdobeCNS1CharacterCollection](nscharactercollection/adobecns1charactercollection.md): Indicates the Adobe-CNS1 mapping.
- [NSAdobeGB1CharacterCollection](nscharactercollection/adobegb1charactercollection.md): Indicates the Adobe-GB1 mapping.
- [NSAdobeJapan1CharacterCollection](nscharactercollection/adobejapan1charactercollection.md): Indicates the Adobe-Japan1 mapping.
- [NSAdobeJapan2CharacterCollection](nscharactercollection/adobejapan2charactercollection.md): Indicates the Adobe-Japan2 mapping.
- [NSAdobeKorea1CharacterCollection](nscharactercollection/adobekorea1charactercollection.md): Indicates the Adobe-Korea1 mapping.

## See Also

### Deprecated

- [glyphInfoWithCharacterIdentifier:collection:baseString:](nsglyphinfo/init%28characteridentifier_collection_basestring_%29.md): Instantiates and returns an `NSGlyphInfo` object using a character identifier and a character collection.
- [characterIdentifier](nsglyphinfo/characteridentifier.md): The receiver’s character identifier (CID).
- [characterCollection](nsglyphinfo/charactercollection.md): A value specifying the glyph–to–character identifier mapping of the receiver.
- [glyphName](nsglyphinfo/glyphname.md): The receiver’s glyph name.

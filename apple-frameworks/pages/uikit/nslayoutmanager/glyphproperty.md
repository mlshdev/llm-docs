> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/nslayoutmanager/glyphproperty](https://developer.apple.com/documentation/uikit/nslayoutmanager/glyphproperty)

# NSLayoutManager.GlyphProperty (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Glyph properties.

## Declaration

```swift
struct GlyphProperty
```

## Topics

### Glyph properties

- [null](glyphproperty/null.md): The null glyph, which the layout manager ignores.
- [controlCharacter](glyphproperty/controlcharacter.md): A glyph representing a control character.
- [elastic](glyphproperty/elastic.md): A glyph with a changeable width, such as a white space character.
- [nonBaseCharacter](glyphproperty/nonbasecharacter.md): A glyph that combines several properties.

### Initializers

- [init(rawValue:)](glyphproperty/init%28rawvalue_%29.md): Creates a new instance with the specified raw value.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Accessing glyphs

- [getGlyphs(in:glyphs:properties:characterIndexes:bidiLevels:)](getglyphs%28in_glyphs_properties_characterindexes_bidilevels_%29.md): Fills a passed-in buffer with a sequence of glyphs.
- [cgGlyph(at:)](cgglyph%28at_%29.md): Returns the glyph at the specified index.
- [cgGlyph(at:isValidIndex:)](cgglyph%28at_isvalidindex_%29.md): Returns the glyph at the specified index along with information about whether the glyph index is valid.
- [setGlyphs(\_:properties:characterIndexes:font:forGlyphRange:)](setglyphs%28__properties_characterindexes_font_forglyphrange_%29.md): Stores the initial glyphs and glyph properties for a character range.
- [characterIndexForGlyph(at:)](characterindexforglyph%28at_%29.md): Returns the index in the text storage for the first character of the specified glyph.
- [glyphIndexForCharacter(at:)](glyphindexforcharacter%28at_%29.md): Returns the index of the first glyph of the character at the specified index.
- [isValidGlyphIndex(\_:)](isvalidglyphindex%28__%29.md): Indicates whether the specified index refers to a valid glyph.
- [numberOfGlyphs](numberofglyphs.md): The number of glyphs in the layout manager.
- [propertyForGlyph(at:)](propertyforglyph%28at_%29.md): Returns the glyph property of the glyph at the specified index.

# NSGlyphProperty (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

Glyph properties.

## Declaration

```objectivec
enum NSGlyphProperty : NSInteger;
```

## Topics

### Glyph properties

- [NSGlyphPropertyNull](glyphproperty/null.md): The null glyph, which the layout manager ignores.
- [NSGlyphPropertyControlCharacter](glyphproperty/controlcharacter.md): A glyph representing a control character.
- [NSGlyphPropertyElastic](glyphproperty/elastic.md): A glyph with a changeable width, such as a white space character.
- [NSGlyphPropertyNonBaseCharacter](glyphproperty/nonbasecharacter.md): A glyph that combines several properties.

## See Also

### Accessing glyphs

- [getGlyphsInRange:glyphs:properties:characterIndexes:bidiLevels:](getglyphs%28in_glyphs_properties_characterindexes_bidilevels_%29.md): Fills a passed-in buffer with a sequence of glyphs.
- [CGGlyphAtIndex:](cgglyph%28at_%29.md): Returns the glyph at the specified index.
- [CGGlyphAtIndex:isValidIndex:](cgglyph%28at_isvalidindex_%29.md): Returns the glyph at the specified index along with information about whether the glyph index is valid.
- [setGlyphs:properties:characterIndexes:font:forGlyphRange:](setglyphs%28__properties_characterindexes_font_forglyphrange_%29.md): Stores the initial glyphs and glyph properties for a character range.
- [characterIndexForGlyphAtIndex:](characterindexforglyph%28at_%29.md): Returns the index in the text storage for the first character of the specified glyph.
- [glyphIndexForCharacterAtIndex:](glyphindexforcharacter%28at_%29.md): Returns the index of the first glyph of the character at the specified index.
- [isValidGlyphIndex:](isvalidglyphindex%28__%29.md): Indicates whether the specified index refers to a valid glyph.
- [numberOfGlyphs](numberofglyphs.md): The number of glyphs in the layout manager.
- [propertyForGlyphAtIndex:](propertyforglyph%28at_%29.md): Returns the glyph property of the glyph at the specified index.

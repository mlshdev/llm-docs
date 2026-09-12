> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/language-swift.struct](https://developer.apple.com/documentation/foundation/locale/language-swift.struct)

# Locale.Language

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A type that represents a language, as used in a locale.

## Declaration

```swift
struct Language
```

## Topics

### Creating a language

- [init(identifier:)](language-swift.struct/init%28identifier_%29.md): Creates a language from an identifier.
- [init(components:)](language-swift.struct/init%28components_%29.md): Creates a language from its component values.
- [Locale.Language.Components](language-swift.struct/components.md): A type that identifies a language by its various components.
- [init(languageCode:script:region:)](language-swift.struct/init%28languagecode_script_region_%29.md): Creates a language from a given language code, script, and region.

### Examining language properties

- [languageCode](language-swift.struct/languagecode.md): The language code that identifies the language.
- [Locale.LanguageCode](languagecode-swift.struct.md): An alphabetical code associated with a language.
- [region](language-swift.struct/region.md): The region used with the language.
- [Locale.Region](region-swift.struct.md): A type that represents a geographic region, for use in specifying a locale or language.
- [script](language-swift.struct/script.md): The written script of the language.
- [Locale.Script](script.md): The written script used with a given language.
- [characterDirection](language-swift.struct/characterdirection.md): The ordering of characters within a line.
- [Locale.LanguageDirection](languagedirection.md): An alias for the standard set of language directions.

### Examining language relationships

- [parent](language-swift.struct/parent.md): The parent language of this language, if available.
- [hasCommonParent(with:)](language-swift.struct/hascommonparent%28with_%29.md): Returns a Boolean value that indicates if the given language shares a common parent with this language.
- [isEquivalent(to:)](language-swift.struct/isequivalent%28to_%29.md): Returns a Boolean value that indicates whether this language and another language are equivalent after expanding missing components.

### Using system languages

- [systemLanguages](language-swift.struct/systemlanguages.md): An array of the system’s supported languages.

### Instance Properties

- [lineLayoutDirection](language-swift.struct/linelayoutdirection.md): Ordering of lines within a page. For example, top-to-bottom for English; right-to-left for Mongolian in the Mongolian Script
- [maximalIdentifier](language-swift.struct/maximalidentifier.md): Returns a BCP-47 identifier that always includes the script: “zh-Hant-TW”, “en-Latn-US”
- [minimalIdentifier](language-swift.struct/minimalidentifier.md): Returns a BCP-47 identifier in a minimalist form. Script and region may be omitted. For example, “zh-TW”, “en”

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting language components

- [language](language-swift.property.md): The language of a locale.

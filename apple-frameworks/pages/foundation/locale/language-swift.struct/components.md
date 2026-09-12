> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/language-swift.struct/components](https://developer.apple.com/documentation/foundation/locale/language-swift.struct/components)

# Locale.Language.Components

**Framework:** Foundation  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

A type that identifies a language by its various components.

## Declaration

```swift
struct Components
```

## Topics

### Creating a language components instance

- [init(identifier:)](components/init%28identifier_%29.md): Creates a language components instance from a language identifier.
- [init(language:)](components/init%28language_%29.md): Creates a language components instance from an existing language instance.
- [init(languageCode:script:region:)](components/init%28languagecode_script_region_%29.md): Creates a language components instance from a given language code, script, and region.

### Examining language component properties

- [languageCode](components/languagecode.md): The language code that identifies this language.
- [Locale.LanguageCode](../languagecode-swift.struct.md): An alphabetical code associated with a language.
- [region](components/region.md): The region used with this language.
- [Locale.Region](../region-swift.struct.md): A type that represents a geographic region, for use in specifying a locale or language.
- [script](components/script.md): The written script used by this language.
- [Locale.Script](../script.md): The written script used with a given language.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a locale by components

- [init(components:)](../init%28components_%29.md): Creates a locale from the given components.
- [Locale.Components](../components.md): A type that represents the components of a locale, for use when creating a locale with specific overrides.
- [init(languageCode:script:languageRegion:)](../init%28languagecode_script_languageregion_%29.md): Creates a locale with the specified language code, script, and region identifier.
- [init(languageComponents:)](../init%28languagecomponents_%29.md): Creates a locale from the given language components.

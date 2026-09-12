> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/components/init(languagecode:script:languageregion:)](https://developer.apple.com/documentation/foundation/locale/components/init(languagecode:script:languageregion:))

# init(languageCode:script:languageRegion:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a locale components instance with the specified language code, script, and region identifier.

## Declaration

```swift
init(languageCode: Locale.LanguageCode? = nil, script: Locale.Script? = nil, languageRegion: Locale.Region? = nil)
```

## Parameters

- `languageCode`: A language code, typically created from a two- or three-letter language code specified by ISO 639.
- `script`: The script to use for the new locale components instance.
- `languageRegion`: A language region, typically created from a two-letter BCP 47 region subtag like `US`.

## See Also

### Creating a locale components instance

- [init(identifier:)](init%28identifier_%29.md): Creates a locale components instance with the specified identifier.
- [init(locale:)](init%28locale_%29.md): Creates a language components instance from an existing locale.

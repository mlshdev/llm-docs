> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/language-swift.struct/components/init(languagecode:script:region:)](https://developer.apple.com/documentation/foundation/locale/language-swift.struct/components/init(languagecode:script:region:))

# init(languageCode:script:region:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a language components instance from a given language code, script, and region.

## Declaration

```swift
init(languageCode: Locale.LanguageCode? = nil, script: Locale.Script? = nil, region: Locale.Region? = nil)
```

## Parameters

- `languageCode`: The language code to use for the new components instance.
- `script`: The script to use for the new components instance.
- `region`: The region to use for the new components instance.

## See Also

### Creating a language components instance

- [init(identifier:)](init%28identifier_%29.md): Creates a language components instance from a language identifier.
- [init(language:)](init%28language_%29.md): Creates a language components instance from an existing language instance.

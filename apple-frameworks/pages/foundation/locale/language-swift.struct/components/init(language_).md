> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/language-swift.struct/components/init(language:)](https://developer.apple.com/documentation/foundation/locale/language-swift.struct/components/init(language:))

# init(language:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a language components instance from an existing language instance.

## Declaration

```swift
init(language: Locale.Language)
```

## Parameters

- `language`: A [Locale.Language](../../language-swift.struct.md) instance. This initializer copies over the language code, script, and region from the provided language.

## See Also

### Creating a language components instance

- [init(identifier:)](init%28identifier_%29.md): Creates a language components instance from a language identifier.
- [init(languageCode:script:region:)](init%28languagecode_script_region_%29.md): Creates a language components instance from a given language code, script, and region.

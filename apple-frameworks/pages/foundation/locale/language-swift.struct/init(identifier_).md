> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/language-swift.struct/init(identifier:)](https://developer.apple.com/documentation/foundation/locale/language-swift.struct/init(identifier:))

# init(identifier:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a language from an identifier.

## Declaration

```swift
init(identifier: String)
```

## Parameters

- `identifier`: A Unicode language identifier, like `en-US`, `es-419`, or `zh-Hant-TW`.

## See Also

### Creating a language

- [init(components:)](init%28components_%29.md): Creates a language from its component values.
- [Locale.Language.Components](components.md): A type that identifies a language by its various components.
- [init(languageCode:script:region:)](init%28languagecode_script_region_%29.md): Creates a language from a given language code, script, and region.

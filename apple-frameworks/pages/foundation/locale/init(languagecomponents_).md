> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/init(languagecomponents:)](https://developer.apple.com/documentation/foundation/locale/init(languagecomponents:))

# init(languageComponents:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a locale from the given language components.

## Declaration

```swift
init(languageComponents: Locale.Language.Components)
```

## Parameters

- `languageComponents`: A [Locale.Language.Components](language-swift.struct/components.md) instance that provides language components that identify a locale.

## See Also

### Creating a locale by components

- [init(components:)](init%28components_%29.md): Creates a locale from the given components.
- [Locale.Components](components.md): A type that represents the components of a locale, for use when creating a locale with specific overrides.
- [init(languageCode:script:languageRegion:)](init%28languagecode_script_languageregion_%29.md): Creates a locale with the specified language code, script, and region identifier.
- [Locale.Language.Components](language-swift.struct/components.md): A type that identifies a language by its various components.

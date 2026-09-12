> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/locale/init(components:)](https://developer.apple.com/documentation/foundation/locale/init(components:))

# init(components:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a locale from the given components.

## Declaration

```swift
init(components: Locale.Components)
```

## Parameters

- `components`: A [Locale.Components](components.md) instance that provides the components to create a customized locale.

<a id="Discussion"></a>

## Discussion

Use this initializer to create a locale with a unique combination of components, beyond the defaults provided by a language and country code.

For example, you can create a [Locale.Components](components.md) instance that uses UK language conventions, but US regional conventions for traits like currency and measurement. You then use the components to create a new [Locale](../locale.md) instance, like this:

```swift
var components = Locale.Components(languageCode: "en", languageRegion: "GB")
components.region = Locale.Region("US")
let en_GB_US = Locale(components: components)
```

## See Also

### Creating a locale by components

- [Locale.Components](components.md): A type that represents the components of a locale, for use when creating a locale with specific overrides.
- [init(languageCode:script:languageRegion:)](init%28languagecode_script_languageregion_%29.md): Creates a locale with the specified language code, script, and region identifier.
- [init(languageComponents:)](init%28languagecomponents_%29.md): Creates a locale from the given language components.
- [Locale.Language.Components](language-swift.struct/components.md): A type that identifies a language by its various components.

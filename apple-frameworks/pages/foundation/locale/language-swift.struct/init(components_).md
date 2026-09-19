> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/locale/language-swift.struct/init(components:)

# init(components:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Creates a language from its component values.

## Declaration

```swift
init(components: Locale.Language.Components)
```

## Parameters

- `components`: A [Locale.Language.Components](components.md) instance that provides a custom language code, region, and script for the new [Locale.Language](../language-swift.struct.md) instance.

## See Also

### Creating a language

- [init(identifier:)](init%28identifier_%29.md): Creates a language from an identifier.
- [Locale.Language.Components](components.md): A type that identifies a language by its various components.
- [init(languageCode:script:region:)](init%28languagecode_script_region_%29.md): Creates a language from a given language code, script, and region.

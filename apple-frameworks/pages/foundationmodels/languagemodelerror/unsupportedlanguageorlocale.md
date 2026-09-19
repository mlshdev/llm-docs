> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelerror/unsupportedlanguageorlocale

# LanguageModelError.UnsupportedLanguageOrLocale

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Information about an unsupported language or locale.

## Declaration

```swift
struct UnsupportedLanguageOrLocale
```

## Topics

### Creating an error instance

- [init(languageCode:debugDescription:metadata:)](unsupportedlanguageorlocale/init%28languagecode_debugdescription_metadata_%29.md): Creates information describing a language or locale the model doesn’t support.

### Inspecting unsupported language or locale errors

- [metadata](unsupportedlanguageorlocale/metadata.md): Additional information about the failure, keyed by name.
- [languageCode](unsupportedlanguageorlocale/languagecode.md): The language code that the model doesn’t support.
- [debugDescription](unsupportedlanguageorlocale/debugdescription.md): A debug description to help developers diagnose issues during development.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Language unsupported error

- [LanguageModelError.unsupportedLanguageOrLocale(\_:)](unsupportedlanguageorlocale%28__%29.md): The model was prompted to respond in a language that it does not support.

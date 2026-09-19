> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelerror/unsupportedgenerationguide

# LanguageModelError.UnsupportedGenerationGuide

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Information about an unsupported generation guide.

## Declaration

```swift
struct UnsupportedGenerationGuide
```

## Topics

### Creating an error instance

- [init(schemaName:debugDescription:metadata:)](unsupportedgenerationguide/init%28schemaname_debugdescription_metadata_%29.md): Creates information describing a generation guide the model doesn’t support.

### Inspecting unsupported generation guide errors

- [metadata](unsupportedgenerationguide/metadata.md): Additional information about the failure, keyed by name.
- [schemaName](unsupportedgenerationguide/schemaname.md): The name of the schema whose generation guide isn’t supported, if any.
- [debugDescription](unsupportedgenerationguide/debugdescription.md): A debug description to help developers diagnose issues during development.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Generation guide unsupported error

- [LanguageModelError.unsupportedGenerationGuide(\_:)](unsupportedgenerationguide%28__%29.md): An unsupported generation guide was used.

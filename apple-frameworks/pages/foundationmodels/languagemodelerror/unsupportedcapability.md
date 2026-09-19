> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelerror/unsupportedcapability

# LanguageModelError.UnsupportedCapability

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Information about an unsupported capability.

## Declaration

```swift
struct UnsupportedCapability
```

## Topics

### Creating an error instance

- [init(capability:debugDescription:metadata:)](unsupportedcapability/init%28capability_debugdescription_metadata_%29.md): Creates information describing a capability the model doesn’t support.

### Inspecting unsupported capability errors

- [metadata](unsupportedcapability/metadata.md): Additional information about the failure, keyed by name.
- [capability](unsupportedcapability/capability.md): The capability that the model doesn’t support.
- [debugDescription](unsupportedcapability/debugdescription.md): A debug description to help developers diagnose issues during development.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Capability unsupported error

- [LanguageModelError.unsupportedCapability(\_:)](unsupportedcapability%28__%29.md): The model being used doesn’t support a particular feature.

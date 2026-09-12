> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelerror/unsupportedcapability](https://developer.apple.com/documentation/foundationmodels/languagemodelerror/unsupportedcapability)

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

- [init(capability:debugDescription:metadata:)](unsupportedcapability/init%28capability_debugdescription_metadata_%29.md)

### Inspecting unsupported capability errors

- [metadata](unsupportedcapability/metadata.md)
- [capability](unsupportedcapability/capability.md)
- [debugDescription](unsupportedcapability/debugdescription.md)

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Capability unsupported error

- [LanguageModelError.unsupportedCapability(\_:)](unsupportedcapability%28__%29.md): The model being used doesn’t support a particular feature.

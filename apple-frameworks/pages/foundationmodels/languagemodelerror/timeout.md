> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelerror/timeout

# LanguageModelError.Timeout

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Information about a timeout.

## Declaration

```swift
struct Timeout
```

## Topics

### Creating an error instance

- [init(debugDescription:metadata:)](timeout/init%28debugdescription_metadata_%29.md): Creates information describing a request timeout.

### Inspecting timeout errors

- [metadata](timeout/metadata.md): Additional information about the failure, keyed by name.
- [debugDescription](timeout/debugdescription.md): A debug description to help developers diagnose issues during development.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Request timed out error

- [LanguageModelError.timeout(\_:)](timeout%28__%29.md): The request timed out before the model could produce a response.

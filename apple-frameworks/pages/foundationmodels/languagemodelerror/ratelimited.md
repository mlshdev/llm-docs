> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelerror/ratelimited

# LanguageModelError.RateLimited

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Information about a rate limiting event.

## Declaration

```swift
struct RateLimited
```

## Topics

### Creating an error instance

- [init(resetDate:debugDescription:metadata:)](ratelimited/init%28resetdate_debugdescription_metadata_%29.md): Creates information describing a rate-limiting event.

### Inspecting rate-limit errors

- [metadata](ratelimited/metadata.md): Additional information about the failure, keyed by name.
- [resetDate](ratelimited/resetdate.md): The date after which retrying is likely to succeed, if known.
- [debugDescription](ratelimited/debugdescription.md): A debug description to help developers diagnose issues during development.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Session rate limited error

- [LanguageModelError.rateLimited(\_:)](ratelimited%28__%29.md): The session has been rate limited.

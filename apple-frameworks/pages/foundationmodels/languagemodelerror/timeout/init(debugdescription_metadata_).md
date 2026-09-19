> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelerror/timeout/init(debugdescription:metadata:)

# init(debugDescription:metadata:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates information describing a request timeout.

## Declaration

```swift
init(debugDescription: String, metadata: [String : any Sendable] = [:])
```

## Parameters

- `debugDescription`: A debug description to help developers diagnose issues during development.
- `metadata`: Additional information about the failure, keyed by name.

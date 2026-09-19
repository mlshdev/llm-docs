> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelerror/unsupportedgenerationguide/init(schemaname:debugdescription:metadata:)

# init(schemaName:debugDescription:metadata:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates information describing a generation guide the model doesn’t support.

## Declaration

```swift
init(schemaName: String?, debugDescription: String, metadata: [String : any Sendable] = [:])
```

## Parameters

- `schemaName`: The name of the schema whose generation guide isn’t supported, if any.
- `debugDescription`: A debug description to help developers diagnose issues during development.
- `metadata`: Additional information about the failure, keyed by name.

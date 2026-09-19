> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelerror/ratelimited/init(resetdate:debugdescription:metadata:)

# init(resetDate:debugDescription:metadata:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates information describing a rate-limiting event.

## Declaration

```swift
init(resetDate: Date?, debugDescription: String, metadata: [String : any Sendable] = [:])
```

## Parameters

- `resetDate`: The date after which retrying is likely to succeed, or `nil` if unknown.
- `debugDescription`: A debug description to help developers diagnose issues during development.
- `metadata`: Additional information about the failure, keyed by name.

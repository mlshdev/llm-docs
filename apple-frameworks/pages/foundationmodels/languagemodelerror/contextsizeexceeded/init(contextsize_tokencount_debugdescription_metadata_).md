> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelerror/contextsizeexceeded/init(contextsize:tokencount:debugdescription:metadata:)

# init(contextSize:tokenCount:debugDescription:metadata:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates information describing a transcript that exceeded the model’s context size.

## Declaration

```swift
init(contextSize: Int, tokenCount: Int, debugDescription: String, metadata: [String : any Sendable] = [:])
```

## Parameters

- `contextSize`: The model’s maximum context size, in tokens.
- `tokenCount`: The number of tokens in the transcript that exceeded the context size.
- `debugDescription`: A developer-facing description of the failure.
- `metadata`: Additional information about the failure, keyed by name.

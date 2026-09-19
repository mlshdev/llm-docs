> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelsession/usage-swift.struct/init(input:output:metadata:)

# init(input:output:metadata:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a usage value with the given token counts.

## Declaration

```swift
init(input: LanguageModelSession.Usage.Input, output: LanguageModelSession.Usage.Output, metadata: [String : any ConvertibleToGeneratedContent] = [:])
```

## Parameters

- `input`: Token counts for the transcript.
- `output`: Token counts for the response.
- `metadata`: Additional usage statistics from the language model.

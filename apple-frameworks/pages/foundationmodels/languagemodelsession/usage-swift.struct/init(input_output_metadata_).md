> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/usage-swift.struct/init(input:output:metadata:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/usage-swift.struct/init(input:output:metadata:))

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

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/contextoptions/includeschemainprompt

# includeSchemaInPrompt

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A Boolean value that indicates whether to inject the schema into the prompt to bias the model.

## Declaration

```swift
var includeSchemaInPrompt: Bool?
```

<a id="discussion"></a>

## Discussion

Has no effect if there’s no schema provided

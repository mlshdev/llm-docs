> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/contextoptions/init(includeschemainprompt:reasoninglevel:)

# init(includeSchemaInPrompt:reasoningLevel:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates options that control how the model is prompted.

## Declaration

```swift
init(includeSchemaInPrompt: Bool? = nil, reasoningLevel: ContextOptions.ReasoningLevel? = nil)
```

## Parameters

- `includeSchemaInPrompt`: If `true`, injects the schema into the prompt to bias the model.
- `reasoningLevel`: Controls the amount of reasoning that the model is allowed to output before producing a response

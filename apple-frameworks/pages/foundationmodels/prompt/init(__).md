> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/prompt/init(_:)

# init(\_:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

Creates a prompt from the content of a builder closure.

## Declaration

```swift
init(@PromptBuilder _ content: () throws -> Prompt) rethrows
```

## Parameters

- `content`: A closure that produces the prompt to send to the model.

## See Also

### Creating a prompt

- [PromptBuilder](../promptbuilder.md): A type that represents a prompt builder.
- [PromptRepresentable](../promptrepresentable.md): A type whose value can represent a prompt.

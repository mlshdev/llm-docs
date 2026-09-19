> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/tool/output

# Output

**Framework:** Foundation Models  
**Kind:** Associated Type  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+ · watchOS 27.0+

The output that this tool produces for the language model to reason about in subsequent interactions.

## Declaration

```swift
associatedtype Output : PromptRepresentable
```

<a id="discussion"></a>

## Discussion

Typically output is either a `String` or a [Generable](../generable.md) type.

## See Also

### Calling a tool

- [call(arguments:)](call%28arguments_%29.md): Performs the tool’s action when a language model wants to use this tool.
- [Arguments](arguments.md): The arguments that this tool should accept.

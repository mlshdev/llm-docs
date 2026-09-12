> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/dynamicprofile/ontooloutput(perform:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/dynamicprofile/ontooloutput(perform:))

# onToolOutput(perform:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Runs an action whenever a tool call output is received within this dynamic profile.

## Declaration

```swift
@export(implementation) func onToolOutput(perform action: nonisolated(nonsending) sending @escaping () async throws -> Void) -> some LanguageModelSession.DynamicProfile

```

## Mentioned In

- [Composing dynamic sessions with instructions and profiles](../../composing-dynamic-sessions-with-instructions-and-profiles.md)

<a id="discussion"></a>

## Discussion

When the `onToolOutput` closure throws an error, the caller’s `respond` or `response` propagates that error.

Use this to track or log tool output within a dynamic profile:

```swift
struct MyDynamicProfile: LanguageModelSession.DynamicProfile {
  var body: some LanguageModelSession.DynamicProfile {
    Profile {
      Instructions("You are a helpful assistant.")
      SomeTool()
    }
    .onToolOutput {
      toolOutputCount += 1
    }
  }
}
```

## See Also

### Observing life cycle modifiers

- [onActivate(perform:)](onactivate%28perform_%29.md): Runs an action when this dynamic profile becomes active.
- [onDeactivate(perform:)](ondeactivate%28perform_%29.md): Runs an action when this dynamic profile becomes inactive.
- [onPrompt(perform:)](onprompt%28perform_%29.md): Runs an action before the model is invoked for this dynamic profile.
- [onReasoning(perform:)](onreasoning%28perform_%29.md): Runs an action whenever this dynamic profile produces reasoning.
- [onResponse(perform:)](onresponse%28perform_%29.md): Runs an action after this dynamic profile produces a response.
- [onToolCall(perform:)](ontoolcall%28perform_%29.md): Runs an action whenever a tool is called within this dynamic profile.

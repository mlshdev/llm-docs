> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/dynamicprofile/onresponse(perform:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/dynamicprofile/onresponse(perform:))

# onResponse(perform:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Runs an action after this dynamic profile produces a response.

## Declaration

```swift
@export(implementation) func onResponse(perform action: nonisolated(nonsending) sending @escaping () async throws -> Void) -> some LanguageModelSession.DynamicProfile

```

## Mentioned In

- [Composing dynamic sessions with instructions and profiles](../../composing-dynamic-sessions-with-instructions-and-profiles.md)

<a id="discussion"></a>

## Discussion

When the `onResponse` closure throws an error, the caller’s `respond` or `response` propagates that error.

Use this to perform cleanup or state updates when a dynamic profile completes:

```swift
struct MyDynamicProfile: LanguageModelSession.DynamicProfile {
  var body: some LanguageModelSession.DynamicProfile {
    Profile {
      Instructions("You are a helpful assistant.")
    }
    .onResponse {
      completedTasks += 1
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
- [onToolCall(perform:)](ontoolcall%28perform_%29.md): Runs an action whenever a tool is called within this dynamic profile.
- [onToolOutput(perform:)](ontooloutput%28perform_%29.md): Runs an action whenever a tool call output is received within this dynamic profile.

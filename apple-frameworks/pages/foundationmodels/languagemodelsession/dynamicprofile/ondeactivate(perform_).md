> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/dynamicprofile/ondeactivate(perform:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/dynamicprofile/ondeactivate(perform:))

# onDeactivate(perform:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Runs an action when this dynamic profile becomes inactive.

## Declaration

```swift
func onDeactivate(perform action: sending @escaping @isolated(any) () async -> Void) -> some LanguageModelSession.DynamicProfile

```

## Mentioned In

- [Composing dynamic sessions with instructions and profiles](../../composing-dynamic-sessions-with-instructions-and-profiles.md)

<a id="discussion"></a>

## Discussion

A profile becomes inactive when it is no longer included in the session’s resolved configuration after previously being active. Use this to tear down state tied to the profile’s lifecycle:

```swift
struct MyDynamicProfile: LanguageModelSession.DynamicProfile {
  var body: some LanguageModelSession.DynamicProfile {
    Profile {
      Instructions("You are a helpful assistant.")
    }
    .onDeactivate {
      activeProfile = nil
    }
  }
}
```

## See Also

### Observing life cycle modifiers

- [onActivate(perform:)](onactivate%28perform_%29.md): Runs an action when this dynamic profile becomes active.
- [onPrompt(perform:)](onprompt%28perform_%29.md): Runs an action before the model is invoked for this dynamic profile.
- [onReasoning(perform:)](onreasoning%28perform_%29.md): Runs an action whenever this dynamic profile produces reasoning.
- [onResponse(perform:)](onresponse%28perform_%29.md): Runs an action after this dynamic profile produces a response.
- [onToolCall(perform:)](ontoolcall%28perform_%29.md): Runs an action whenever a tool is called within this dynamic profile.
- [onToolOutput(perform:)](ontooloutput%28perform_%29.md): Runs an action whenever a tool call output is received within this dynamic profile.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/init(model:dynamicinstructions:history:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/init(model:dynamicinstructions:history:))

# init(model:dynamicInstructions:history:)

**Framework:** Foundation Models  
**Kind:** Initializer  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Creates a session with dynamic instructions.

## Declaration

```swift
convenience init(model: some LanguageModel = SystemLanguageModel.default, dynamicInstructions: sending some DynamicInstructions, history: some Collection<Transcript.Entry> = [])
```

```swift
convenience init(model: some LanguageModel, dynamicInstructions: sending some DynamicInstructions, history: some Collection<Transcript.Entry> = [])
```

## Parameters

- `dynamicInstructions`: The instructions to use for this session.
- `history`: Transcript entries without the initial instructions, since that’s defined by the profile.

## Mentioned In

- [Composing dynamic sessions with instructions and profiles](../composing-dynamic-sessions-with-instructions-and-profiles.md)

## See Also

### Creating a session with a dynamic profile

- [init(profile:history:)](init%28profile_history_%29.md): Creates a session with a profile.
- [LanguageModelSession.DynamicProfile](dynamicprofile.md): A dynamic profile that contains one or more profiles.
- [LanguageModelSession.DynamicProfileModifier](dynamicprofilemodifier.md): A protocol for creating reusable wrappers around dynamic profile content.
- [LanguageModelSession.ConditionalDynamicProfile](conditionaldynamicprofile.md)
- [LanguageModelSession.DynamicProfileBuilder](dynamicprofilebuilder.md): A type that represents a dynamic profile builder.
- [LanguageModelSession.DynamicProfileModifierContent](dynamicprofilemodifiercontent.md)
- [LanguageModelSession.ModifiedDynamicProfile](modifieddynamicprofile.md)
- [LanguageModelSession.AnyDynamicProfile](anydynamicprofile.md)
- [LanguageModelSession.Profile](profile.md): A profile that contains dynamic instructions.

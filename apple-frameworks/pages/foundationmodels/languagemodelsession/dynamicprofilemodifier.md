> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/dynamicprofilemodifier](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/dynamicprofilemodifier)

# LanguageModelSession.DynamicProfileModifier

**Framework:** Foundation Models  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A protocol for creating reusable wrappers around dynamic profile content.

## Declaration

```swift
protocol DynamicProfileModifier
```

## Mentioned In

- [Composing dynamic sessions with instructions and profiles](../composing-dynamic-sessions-with-instructions-and-profiles.md)

## Topics

### Implementing a profile modifier

- [body(content:)](dynamicprofilemodifier/body%28content_%29.md): The content of the dynamic profile modifier.
- [LanguageModelSession.DynamicProfileModifier.Content](dynamicprofilemodifier/content.md)
- [Body](dynamicprofilemodifier/body.md): The type of dynamic profile modifier that represents this modifier.
- [LanguageModelSession.DynamicProfileModifier.SessionProperty](dynamicprofilemodifier/sessionproperty.md)
- [LanguageModelSession.DynamicProfileModifier.DynamicProfile](dynamicprofilemodifier/dynamicprofile.md)

## See Also

### Dynamic profiles

- [Composing dynamic sessions with instructions and profiles](../composing-dynamic-sessions-with-instructions-and-profiles.md): Adapt sessions dynamically at runtime by loading instructions and tools based on the state of your app.
- [Origami: Crafting a dynamic tutorial for Apple Intelligence](../origami-crafting-a-dynamic-tutorial-for-apple-intelligence.md): Build interactive experiences with Foundation Models and Private Cloud Compute using multimodal prompts.
- [DynamicInstructions](../dynamicinstructions.md): A type that represents dynamic instructions.
- [DynamicInstructionsForEach](../dynamicinstructionsforeach.md)
- [LanguageModelSession.DynamicProfile](dynamicprofile.md): A dynamic profile that contains one or more profiles.
- [LanguageModelSession.Profile](profile.md): A profile that contains dynamic instructions.

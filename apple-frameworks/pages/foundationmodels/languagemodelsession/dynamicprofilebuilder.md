> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/dynamicprofilebuilder](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/dynamicprofilebuilder)

# LanguageModelSession.DynamicProfileBuilder

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type that represents a dynamic profile builder.

## Declaration

```swift
@resultBuilder struct DynamicProfileBuilder
```

## Mentioned In

- [Composing dynamic sessions with instructions and profiles](../composing-dynamic-sessions-with-instructions-and-profiles.md)

## Topics

### Building a dynamic profile

- [buildBlock(\_:)](dynamicprofilebuilder/buildblock%28__%29.md): Creates a builder with a block.
- [buildEither(first:)](dynamicprofilebuilder/buildeither%28first_%29.md): Creates a builder with the first component.
- [buildEither(second:)](dynamicprofilebuilder/buildeither%28second_%29.md): Creates a builder with the second component.
- [buildLimitedAvailability(\_:)](dynamicprofilebuilder/buildlimitedavailability%28__%29.md)

## See Also

### Creating a session with a dynamic profile

- [init(profile:history:)](init%28profile_history_%29.md): Creates a session with a profile.
- [init(model:dynamicInstructions:history:)](init%28model_dynamicinstructions_history_%29.md): Creates a session with dynamic instructions.
- [LanguageModelSession.DynamicProfile](dynamicprofile.md): A dynamic profile that contains one or more profiles.
- [LanguageModelSession.DynamicProfileModifier](dynamicprofilemodifier.md): A protocol for creating reusable wrappers around dynamic profile content.
- [LanguageModelSession.ConditionalDynamicProfile](conditionaldynamicprofile.md)
- [LanguageModelSession.DynamicProfileModifierContent](dynamicprofilemodifiercontent.md)
- [LanguageModelSession.ModifiedDynamicProfile](modifieddynamicprofile.md)
- [LanguageModelSession.AnyDynamicProfile](anydynamicprofile.md)
- [LanguageModelSession.Profile](profile.md): A profile that contains dynamic instructions.

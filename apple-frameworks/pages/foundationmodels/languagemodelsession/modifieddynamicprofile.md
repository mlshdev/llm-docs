> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelsession/modifieddynamicprofile

# LanguageModelSession.ModifiedDynamicProfile

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A dynamic profile with a modifier applied to it.

## Declaration

```swift
struct ModifiedDynamicProfile<Content, Modifier> where Content : LanguageModelSession.DynamicProfile, Modifier : LanguageModelSession.DynamicProfileModifier
```

## Relationships

### Conforms To

- [LanguageModelSession.DynamicProfile](dynamicprofile.md)

## See Also

### Creating a session with a dynamic profile

- [init(profile:history:)](init%28profile_history_%29.md): Creates a session with a profile.
- [init(model:dynamicInstructions:history:)](init%28model_dynamicinstructions_history_%29.md): Creates a session with dynamic instructions.
- [LanguageModelSession.DynamicProfile](dynamicprofile.md): A dynamic profile that contains one or more profiles.
- [LanguageModelSession.DynamicProfileModifier](dynamicprofilemodifier.md): A protocol for creating reusable wrappers around dynamic profile content.
- [LanguageModelSession.ConditionalDynamicProfile](conditionaldynamicprofile.md): A dynamic profile that resolves to one of two profiles, depending on a condition.
- [LanguageModelSession.DynamicProfileBuilder](dynamicprofilebuilder.md): A type that represents a dynamic profile builder.
- [LanguageModelSession.DynamicProfileModifierContent](dynamicprofilemodifiercontent.md): A type that represents the dynamic profile a modifier applies to.
- [LanguageModelSession.AnyDynamicProfile](anydynamicprofile.md): A type-erased dynamic profile.
- [LanguageModelSession.Profile](profile.md): A profile that contains dynamic instructions.

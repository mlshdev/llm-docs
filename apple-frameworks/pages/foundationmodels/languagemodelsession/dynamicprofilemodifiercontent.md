> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelsession/dynamicprofilemodifiercontent

# LanguageModelSession.DynamicProfileModifierContent

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A type that represents the dynamic profile a modifier applies to.

## Declaration

```swift
struct DynamicProfileModifierContent<Modifier> where Modifier : LanguageModelSession.DynamicProfileModifier
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
- [LanguageModelSession.ModifiedDynamicProfile](modifieddynamicprofile.md): A dynamic profile with a modifier applied to it.
- [LanguageModelSession.AnyDynamicProfile](anydynamicprofile.md): A type-erased dynamic profile.
- [LanguageModelSession.Profile](profile.md): A profile that contains dynamic instructions.

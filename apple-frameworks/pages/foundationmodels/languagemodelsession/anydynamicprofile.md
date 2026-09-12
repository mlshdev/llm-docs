> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/anydynamicprofile](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/anydynamicprofile)

# LanguageModelSession.AnyDynamicProfile

**Framework:** Foundation Models  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
struct AnyDynamicProfile
```

## Topics

### Creating an instance

- [init(\_:)](anydynamicprofile/init%28__%29.md): Creates an instance from the dynamic profile you specify.
- [init(erasing:)](anydynamicprofile/init%28erasing_%29.md): Creates an instance from the dynamic profile you specify.

## Relationships

### Conforms To

- [LanguageModelSession.DynamicProfile](dynamicprofile.md)

## See Also

### Creating a session with a dynamic profile

- [init(profile:history:)](init%28profile_history_%29.md): Creates a session with a profile.
- [init(model:dynamicInstructions:history:)](init%28model_dynamicinstructions_history_%29.md): Creates a session with dynamic instructions.
- [LanguageModelSession.DynamicProfile](dynamicprofile.md): A dynamic profile that contains one or more profiles.
- [LanguageModelSession.DynamicProfileModifier](dynamicprofilemodifier.md): A protocol for creating reusable wrappers around dynamic profile content.
- [LanguageModelSession.ConditionalDynamicProfile](conditionaldynamicprofile.md)
- [LanguageModelSession.DynamicProfileBuilder](dynamicprofilebuilder.md): A type that represents a dynamic profile builder.
- [LanguageModelSession.DynamicProfileModifierContent](dynamicprofilemodifiercontent.md)
- [LanguageModelSession.ModifiedDynamicProfile](modifieddynamicprofile.md)
- [LanguageModelSession.Profile](profile.md): A profile that contains dynamic instructions.

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/languagemodelsession/dynamicprofilemodifier/content

# LanguageModelSession.DynamicProfileModifier.Content

**Framework:** Foundation Models  
**Kind:** Type Alias  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The type of dynamic profile content that this modifier wraps.

## Declaration

```swift
typealias Content = LanguageModelSession.DynamicProfileModifierContent<Self>
```

## See Also

### Implementing a profile modifier

- [body(content:)](body%28content_%29.md): The content of the dynamic profile modifier.
- [Body](body.md): The type of dynamic profile modifier that represents this modifier.
- [LanguageModelSession.DynamicProfileModifier.SessionProperty](sessionproperty.md): A property wrapper that provides access to a session property from within a dynamic profile modifier.
- [LanguageModelSession.DynamicProfileModifier.DynamicProfile](dynamicprofile.md): The dynamic profile type that a modifier’s body returns.

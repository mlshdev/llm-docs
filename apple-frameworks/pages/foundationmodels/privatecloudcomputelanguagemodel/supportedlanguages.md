> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundationmodels/privatecloudcomputelanguagemodel/supportedlanguages

# supportedLanguages

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Languages that the model supports.

## Declaration

```swift
nonisolated(nonsending) final var supportedLanguages: Set<Locale.Language> { get async throws }
```

<a id="discussion"></a>

## Discussion

To check if a given locale is considered supported by the model, use [supportsLocale(\_:)](supportslocale%28__%29.md), which also takes language fallbacks into consideration.

## See Also

### Handling language and locales

- [supportsLocale(\_:)](supportslocale%28__%29.md): Returns a Boolean value that indicates whether the given locale is supported by the model.

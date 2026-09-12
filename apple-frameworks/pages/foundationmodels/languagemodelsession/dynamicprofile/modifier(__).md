> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelsession/dynamicprofile/modifier(_:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/dynamicprofile/modifier(_:))

# modifier(\_:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Applies a modifier to the dynamic profile.

## Declaration

```swift
func modifier<Modifier>(_ modifier: Modifier) -> some LanguageModelSession.DynamicProfile where Modifier : LanguageModelSession.DynamicProfileModifier

```

## See Also

### Configuring the model

- [model(\_:)](model%28__%29.md): Sets the model.
- [temperature(\_:)](temperature%28__%29.md): Sets the model temperature.
- [samplingMode(\_:)](samplingmode%28__%29.md): Sets the samping mode.
- [reasoningLevel(\_:)](reasoninglevel%28__%29.md): Sets the reasoning level.
- [maximumResponseTokens(\_:)](maximumresponsetokens%28__%29.md): Sets the maximum response tokens.

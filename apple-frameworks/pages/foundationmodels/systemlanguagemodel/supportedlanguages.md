> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/systemlanguagemodel/supportedlanguages](https://developer.apple.com/documentation/foundationmodels/systemlanguagemodel/supportedlanguages)

# supportedLanguages

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Languages that the model supports.

## Declaration

```swift
final var supportedLanguages: Set<Locale.Language> { get }
```

## Mentioned In

- [Supporting languages and locales with Foundation Models](../supporting-languages-and-locales-with-foundation-models.md)

<a id="discussion"></a>

## Discussion

To check if a given locale is considered supported by the model, use [supportsLocale(\_:)](supportslocale%28__%29.md), which also takes language fallbacks into consideration.

## See Also

### Inspecting model capabilities

- [contextSize](contextsize.md): The maximum context size in tokens that the model supports.
- [supportsLocale(\_:)](supportslocale%28__%29.md): Returns a Boolean value that indicates whether the given locale is supported by the model.

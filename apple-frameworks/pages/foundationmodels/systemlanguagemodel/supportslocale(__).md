> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/systemlanguagemodel/supportslocale(_:)](https://developer.apple.com/documentation/foundationmodels/systemlanguagemodel/supportslocale(_:))

# supportsLocale(\_:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

Returns a Boolean value that indicates whether the given locale is supported by the model.

## Declaration

```swift
final func supportsLocale(_ locale: Locale = Locale.current) -> Bool
```

## Mentioned In

- [Supporting languages and locales with Foundation Models](../supporting-languages-and-locales-with-foundation-models.md)

<a id="discussion"></a>

## Discussion

Use this method over [supportedLanguages](supportedlanguages.md) to check whether the given locale qualifies a person for using this model, as this method also takes language fallbacks into consideration.

## See Also

### Inspecting model capabilities

- [contextSize](contextsize.md): The maximum context size in tokens that the model supports.
- [supportedLanguages](supportedlanguages.md): Languages that the model supports.

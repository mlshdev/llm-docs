> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/privatecloudcomputelanguagemodel/supportslocale(_:)](https://developer.apple.com/documentation/foundationmodels/privatecloudcomputelanguagemodel/supportslocale(_:))

# supportsLocale(\_:)

**Framework:** Foundation Models  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Returns a Boolean value that indicates whether the given locale is supported by the model.

## Declaration

```swift
nonisolated(nonsending) final func supportsLocale(_ locale: Locale = Locale.current) async throws -> Bool
```

<a id="discussion"></a>

## Discussion

Use this method over [supportedLanguages](supportedlanguages.md) to check whether the given locale qualifies a person for using this model, as this method also takes language fallbacks into consideration.

## See Also

### Handling language and locales

- [supportedLanguages](supportedlanguages.md): Languages that the model supports.

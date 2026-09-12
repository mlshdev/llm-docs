> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelerror/unsupportedgenerationguide(_:)](https://developer.apple.com/documentation/foundationmodels/languagemodelerror/unsupportedgenerationguide(_:))

# LanguageModelError.unsupportedGenerationGuide(\_:)

**Framework:** Foundation Models  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

An unsupported generation guide was used

## Declaration

```swift
case unsupportedGenerationGuide(LanguageModelError.UnsupportedGenerationGuide)
```

<a id="discussion"></a>

## Discussion

This failure occurs if you attempt to use generation guides that a model does not support. For example, many models don’t support certain guides using certain regex patterns.

## See Also

### Generation guide unsupported error

- [LanguageModelError.UnsupportedGenerationGuide](unsupportedgenerationguide.md): Information about an unsupported generation guide.

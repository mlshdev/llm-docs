> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodelerror/unsupportedcapability(_:)](https://developer.apple.com/documentation/foundationmodels/languagemodelerror/unsupportedcapability(_:))

# LanguageModelError.unsupportedCapability(\_:)

**Framework:** Foundation Models  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The model being used doesn’t support a particular feature.

## Declaration

```swift
case unsupportedCapability(LanguageModelError.UnsupportedCapability)
```

<a id="discussion"></a>

## Discussion

This failure can happen if you use capabilities like guided generation or tool calling with a model that does not support them.

## See Also

### Capability unsupported error

- [LanguageModelError.UnsupportedCapability](unsupportedcapability.md): Information about an unsupported capability.

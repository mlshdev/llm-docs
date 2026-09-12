> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/systemlanguagemodel/contextsize](https://developer.apple.com/documentation/foundationmodels/systemlanguagemodel/contextsize)

# contextSize

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

The maximum context size in tokens that the model supports.

## Declaration

```swift
@backDeployed(before: iOS 26.4, macOS 26.4, visionOS 26.4)
final var contextSize: Int { get }
```

<a id="return-value"></a>

## Return Value

The context size, in tokens.

## Mentioned In

- [Managing the context window](../managing-the-context-window.md)

<a id="discussion"></a>

## Discussion

The context size represents the total number of tokens that can be used in a single session, including both input prompts and generated responses.

> **Throws**

> An error if the context size cannot be determined. Typically this is due to the model not being available or Apple Intelligence is disabled.

## See Also

### Inspecting model capabilities

- [supportedLanguages](supportedlanguages.md): Languages that the model supports.
- [supportsLocale(\_:)](supportslocale%28__%29.md): Returns a Boolean value that indicates whether the given locale is supported by the model.

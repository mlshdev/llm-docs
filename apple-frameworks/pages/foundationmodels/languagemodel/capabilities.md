> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/languagemodel/capabilities](https://developer.apple.com/documentation/foundationmodels/languagemodel/capabilities)

# capabilities

**Framework:** Foundation Models  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The capabilities of this language model.

## Declaration

```swift
var capabilities: LanguageModelCapabilities { get }
```

<a id="discussion"></a>

## Discussion

If a developer attempts to use capabilities that your model does not support, the system automatically throws an error for you instead of calling a respond method, like [respond(to:options:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/respond%28to:options:%29-6a2gb) or [streamResponse(to:options:)](https://developer.apple.com/documentation/foundationmodels/languagemodelsession/streamresponse%28to:options:%29-2nlni).

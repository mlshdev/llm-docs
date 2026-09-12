> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundationmodels/systemlanguagemodel/usecase/contenttagging](https://developer.apple.com/documentation/foundationmodels/systemlanguagemodel/usecase/contenttagging)

# contentTagging

**Framework:** Foundation Models  
**Kind:** Type Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A use case for content tagging.

## Declaration

```swift
static let contentTagging: SystemLanguageModel.UseCase
```

## Mentioned In

- [Categorizing and organizing data with content tags](../../categorizing-and-organizing-data-with-content-tags.md)

<a id="discussion"></a>

## Discussion

Content tagging produces a list of categorizing tags based on the input prompt. When specializing the model for the `contentTagging` use case, it always responds with tags. The tagging capabilities of the model include detecting topics, emotions, actions, and objects. For more information about content tagging, see [Categorizing and organizing data with content tags](../../categorizing-and-organizing-data-with-content-tags.md).

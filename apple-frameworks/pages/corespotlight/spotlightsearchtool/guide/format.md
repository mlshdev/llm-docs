> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/spotlightsearchtool/guide/format](https://developer.apple.com/documentation/corespotlight/spotlightsearchtool/guide/format)

# format

**Framework:** CoreSpotlight  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The representation format for tool responses returned to the model.

## Declaration

```swift
let format: SpotlightSearchTool.FormatLevel
```

## Mentioned In

- [Making your indexed content available to Foundation Models](../../making-your-indexed-content-available-to-foundation-models.md)

<a id="discussion"></a>

## Discussion

Controls how search results are serialized in the model’s context window. Use [SpotlightSearchTool.FormatLevel.compact](../formatlevel/compact.md) to reduce token consumption when working with small-context models or long conversations.

## See Also

### Getting the guidance

- [level](level.md): The guidance for the model to use during a session.

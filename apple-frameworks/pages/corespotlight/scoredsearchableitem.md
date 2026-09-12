> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/scoredsearchableitem](https://developer.apple.com/documentation/corespotlight/scoredsearchableitem)

# ScoredSearchableItem

**Framework:** CoreSpotlight  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A searchable item paired with a caller-assigned relevance score.

## Declaration

```swift
struct ScoredSearchableItem
```

## Mentioned In

- [Making your indexed content available to Foundation Models](making-your-indexed-content-available-to-foundation-models.md)

<a id="overview"></a>

## Overview

Use this type to associate a score with a searchable item from the app’s index. You create instances of this type from a [CustomStage](customstage.md) when the stage’s output type is [SearchPipelineDataType.scoredItems](searchpipelinedatatype/scoreditems.md).

## Topics

### Creating the item

- [init(item:score:)](scoredsearchableitem/init%28item_score_%29.md): Initializes the type with the specified item and score values.

### Getting the item details

- [item](scoredsearchableitem/item.md): The searchable item from the app’s index.
- [score](scoredsearchableitem/score.md): The relevance score for the item.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Tool customization

- [CustomStage](customstage.md): A custom processing stage the Spotlight search tool uses to identify search results.
- [SearchPipelineData](searchpipelinedata.md): The type you use to store the output from a custom stage.
- [SearchPipelineDataType](searchpipelinedatatype.md): Data types that a pipeline stage accepts or produces.

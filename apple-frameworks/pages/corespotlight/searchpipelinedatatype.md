> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/searchpipelinedatatype](https://developer.apple.com/documentation/corespotlight/searchpipelinedatatype)

# SearchPipelineDataType

**Framework:** CoreSpotlight  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Data types that a pipeline stage accepts or produces.

## Declaration

```swift
enum SearchPipelineDataType
```

<a id="overview"></a>

## Overview

Use this type to specify the input and output values your [CustomStage](customstage.md) supports. Foundation models use this information to validate that data can pass from one stage to the next.

## Topics

### Getting the pipeline data type

- [SearchPipelineDataType.items](searchpipelinedatatype/items.md): Searchable items from the app’s index.
- [SearchPipelineDataType.scoredItems](searchpipelinedatatype/scoreditems.md): Searchable items with an assigned score.
- [SearchPipelineDataType.groupedItems](searchpipelinedatatype/groupeditems.md): A dictionary that maps searchable items to the attributes they contain.
- [SearchPipelineDataType.text](searchpipelinedatatype/text.md): An LLM-generated text summary or analysis.
- [SearchPipelineDataType.count](searchpipelinedatatype/count.md): A scalar count of the number of items.
- [SearchPipelineDataType.statistic](searchpipelinedatatype/statistic.md): A scalar value that reflects a stastical calculation such as an average, minimum, or maximum.
- [SearchPipelineDataType.table](searchpipelinedatatype/table.md): Data suitable for a table or chart.

## Relationships

### Conforms To

- [CaseIterable](https://developer.apple.com/documentation/swift/caseiterable)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Tool customization

- [CustomStage](customstage.md): A custom processing stage the Spotlight search tool uses to identify search results.
- [SearchPipelineData](searchpipelinedata.md): The type you use to store the output from a custom stage.
- [ScoredSearchableItem](scoredsearchableitem.md): A searchable item paired with a caller-assigned relevance score.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/searchpipelinedata](https://developer.apple.com/documentation/corespotlight/searchpipelinedata)

# SearchPipelineData

**Framework:** CoreSpotlight  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The type you use to store the output from a custom stage.

## Declaration

```swift
struct SearchPipelineData
```

<a id="overview"></a>

## Overview

A custom stage receives data as input and generate a `SearchPipelineData` structure as output. When generating output for a stage in your `execute` methods, build the output data and wrap it with this structure before returning it. This type manages the handoff of your output data to the next stage in the pipeline or to the model.

## Topics

### Configuring the pipeline data

- [init(payload:)](searchpipelinedata/init%28payload_%29.md): Initializes the pipeline data with the specified payload value.
- [items(\_:)](searchpipelinedata/items%28__%29.md): Creates a pipeline data structure from the an array of searchable items.
- [scoredItems(\_:)](searchpipelinedata/scoreditems%28__%29.md): Creates a pipeline data structure from the an array of scored searchable items.
- [groupedItems(\_:)](searchpipelinedata/groupeditems%28__%29.md): Creates a pipeline data structure from a dictionary of attributes and searchable items.
- [text(\_:)](searchpipelinedata/text%28__%29.md): Creates a pipeline data structure from a text string.
- [count(\_:)](searchpipelinedata/count%28__%29.md): Creates a pipeline data structure from an integer value.
- [statistic(name:value:)](searchpipelinedata/statistic%28name_value_%29.md): Creates a pipeline data structure from statistical information.
- [table(\_:)](searchpipelinedata/table%28__%29.md): Creates a pipeline data structure from tabular data.

### Getting the pipeline data

- [payload](searchpipelinedata/payload-swift.property.md): The output data your custom stage produced.
- [SearchPipelineData.Payload](searchpipelinedata/payload-swift.enum.md): The typed variants of data a pipeline stage can produce.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Tool customization

- [CustomStage](customstage.md): A custom processing stage the Spotlight search tool uses to identify search results.
- [SearchPipelineDataType](searchpipelinedatatype.md): Data types that a pipeline stage accepts or produces.
- [ScoredSearchableItem](scoredsearchableitem.md): A searchable item paired with a caller-assigned relevance score.

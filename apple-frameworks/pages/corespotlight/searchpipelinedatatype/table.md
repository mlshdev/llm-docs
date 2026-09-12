> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/searchpipelinedatatype/table](https://developer.apple.com/documentation/corespotlight/searchpipelinedatatype/table)

# SearchPipelineDataType.table

**Framework:** CoreSpotlight  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Data suitable for a table or chart.

## Declaration

```swift
case table
```

<a id="discussion"></a>

## Discussion

The data for this type is a [SearchResultsTable](../searchresultstable.md) structure, which contains row and column data.

## See Also

### Getting the pipeline data type

- [SearchPipelineDataType.items](items.md): Searchable items from the app’s index.
- [SearchPipelineDataType.scoredItems](scoreditems.md): Searchable items with an assigned score.
- [SearchPipelineDataType.groupedItems](groupeditems.md): A dictionary that maps searchable items to the attributes they contain.
- [SearchPipelineDataType.text](text.md): An LLM-generated text summary or analysis.
- [SearchPipelineDataType.count](count.md): A scalar count of the number of items.
- [SearchPipelineDataType.statistic](statistic.md): A scalar value that reflects a stastical calculation such as an average, minimum, or maximum.

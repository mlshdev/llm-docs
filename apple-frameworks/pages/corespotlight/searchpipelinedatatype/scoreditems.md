> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/searchpipelinedatatype/scoreditems](https://developer.apple.com/documentation/corespotlight/searchpipelinedatatype/scoreditems)

# SearchPipelineDataType.scoredItems

**Framework:** CoreSpotlight  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

Searchable items with an assigned score.

## Declaration

```swift
case scoredItems
```

<a id="discussion"></a>

## Discussion

The data for this type is zero or more [ScoredSearchableItem](../scoredsearchableitem.md) objects, each of whic contains a [CSSearchableItem](../cssearchableitem.md) and its assigned score.

## See Also

### Getting the pipeline data type

- [SearchPipelineDataType.items](items.md): Searchable items from the app’s index.
- [SearchPipelineDataType.groupedItems](groupeditems.md): A dictionary that maps searchable items to the attributes they contain.
- [SearchPipelineDataType.text](text.md): An LLM-generated text summary or analysis.
- [SearchPipelineDataType.count](count.md): A scalar count of the number of items.
- [SearchPipelineDataType.statistic](statistic.md): A scalar value that reflects a stastical calculation such as an average, minimum, or maximum.
- [SearchPipelineDataType.table](table.md): Data suitable for a table or chart.

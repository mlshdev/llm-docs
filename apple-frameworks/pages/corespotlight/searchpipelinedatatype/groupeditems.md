> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/searchpipelinedatatype/groupeditems](https://developer.apple.com/documentation/corespotlight/searchpipelinedatatype/groupeditems)

# SearchPipelineDataType.groupedItems

**Framework:** CoreSpotlight  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A dictionary that maps searchable items to the attributes they contain.

## Declaration

```swift
case groupedItems
```

<a id="discussion"></a>

## Discussion

The keys of the dictionary are `SearchableItemAtttribute` values. The value for each key is an array of [CSSearchableItem](../cssearchableitem.md) types that contain a value for the key.

## See Also

### Getting the pipeline data type

- [SearchPipelineDataType.items](items.md): Searchable items from the app’s index.
- [SearchPipelineDataType.scoredItems](scoreditems.md): Searchable items with an assigned score.
- [SearchPipelineDataType.text](text.md): An LLM-generated text summary or analysis.
- [SearchPipelineDataType.count](count.md): A scalar count of the number of items.
- [SearchPipelineDataType.statistic](statistic.md): A scalar value that reflects a stastical calculation such as an average, minimum, or maximum.
- [SearchPipelineDataType.table](table.md): Data suitable for a table or chart.

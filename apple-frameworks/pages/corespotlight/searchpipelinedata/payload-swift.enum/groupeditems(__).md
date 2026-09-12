> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/searchpipelinedata/payload-swift.enum/groupeditems(_:)](https://developer.apple.com/documentation/corespotlight/searchpipelinedata/payload-swift.enum/groupeditems(_:))

# SearchPipelineData.Payload.groupedItems(\_:)

**Framework:** CoreSpotlight  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

A dictionary that maps searchable attributes to the items that contain them.

## Declaration

```swift
case groupedItems([SearchableItemAttribute : [SearchableItem]])
```

<a id="discussion"></a>

## Discussion

The keys correspond to the Spotlight attributes the model can use during queries. The value of each key is the array of searchable items that contain the key.

## See Also

### Getting the payload data

- [SearchPipelineData.Payload.items(\_:)](items%28__%29.md): The array of searchable items your stage produced.
- [SearchPipelineData.Payload.scoredItems(\_:)](scoreditems%28__%29.md): The scored searchable items your stage produced.
- [SearchPipelineData.Payload.text(\_:)](text%28__%29.md): An text summary or analysis your stage produced.
- [SearchPipelineData.Payload.count(\_:)](count%28__%29.md): A scalar count of items your stage produced.
- [SearchPipelineData.Payload.statistic(name:value:)](statistic%28name_value_%29.md): A scalar value with a stastical calculation your stage produced.
- [SearchPipelineData.Payload.table(\_:)](table%28__%29.md): Tabulated data your stage produced.

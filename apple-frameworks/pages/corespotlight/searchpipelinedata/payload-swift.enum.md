> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/searchpipelinedata/payload-swift.enum](https://developer.apple.com/documentation/corespotlight/searchpipelinedata/payload-swift.enum)

# SearchPipelineData.Payload

**Framework:** CoreSpotlight  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · visionOS 27.0+

The typed variants of data a pipeline stage can produce.

## Declaration

```swift
enum Payload
```

<a id="overview"></a>

## Overview

The [SearchPipelineData](../searchpipelinedata.md) type uses this type to wrap the data you provide and store it for handoff to the next stage. The type is `@unchecked Sendable` because [CSSearchableItem](../cssearchableitem.md) does not support the [Sendable](https://developer.apple.com/documentation/swift/sendable) protocol. Treat the data you store in this type as immutable.

## Topics

### Getting the payload data

- [SearchPipelineData.Payload.items(\_:)](payload-swift.enum/items%28__%29.md): The array of searchable items your stage produced.
- [SearchPipelineData.Payload.scoredItems(\_:)](payload-swift.enum/scoreditems%28__%29.md): The scored searchable items your stage produced.
- [SearchPipelineData.Payload.groupedItems(\_:)](payload-swift.enum/groupeditems%28__%29.md): A dictionary that maps searchable attributes to the items that contain them.
- [SearchPipelineData.Payload.text(\_:)](payload-swift.enum/text%28__%29.md): An text summary or analysis your stage produced.
- [SearchPipelineData.Payload.count(\_:)](payload-swift.enum/count%28__%29.md): A scalar count of items your stage produced.
- [SearchPipelineData.Payload.statistic(name:value:)](payload-swift.enum/statistic%28name_value_%29.md): A scalar value with a stastical calculation your stage produced.
- [SearchPipelineData.Payload.table(\_:)](payload-swift.enum/table%28__%29.md): Tabulated data your stage produced.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Getting the pipeline data

- [payload](payload-swift.property.md): The output data your custom stage produced.

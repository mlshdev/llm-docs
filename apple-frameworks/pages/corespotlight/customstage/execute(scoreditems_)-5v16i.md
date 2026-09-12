> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/customstage/execute(scoreditems:)-5v16i](https://developer.apple.com/documentation/corespotlight/customstage/execute(scoreditems:)-5v16i)

# execute(scoredItems:)

**Framework:** CoreSpotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · visionOS 1.0+

Generates output data from an array of scored searchable items.

## Declaration

```swift
nonisolated(nonsending) func execute(scoredItems: [ScoredSearchableItem]) async throws -> SearchPipelineData
```

## Parameters

- `items`: A set of items that contain a [CSSearchableItem](../cssearchableitem.md) type and an associated score value.

<a id="return-value"></a>

## Return Value

A pipeline data structure with data your stage produced. Make sure the output you return matches the output you specified in the [outputType](outputtype.md) property.

<a id="discussion"></a>

## Discussion

If your stage supports scored searchable items as input, implement this method and use it to generate your stage’s supported output data. Write your code to run in parallel with other instances of your stage and instances of other stages. The best approach is to use only the contents of the `items` parameter and local intermediate values you create to deliver the output data.

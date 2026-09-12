> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/customstage/execute(items:)-2t5wu](https://developer.apple.com/documentation/corespotlight/customstage/execute(items:)-2t5wu)

# execute(items:)

**Framework:** CoreSpotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · visionOS 1.0+

Generates output data from an array of searchable items from the app’s Spotlight index.

## Declaration

```swift
nonisolated(nonsending) func execute(items: [SearchableItem]) async throws -> SearchPipelineData
```

## Parameters

- `items`: A set of [CSSearchableItem](../cssearchableitem.md) types.

<a id="return-value"></a>

## Return Value

A pipeline data structure with data your stage produced. Make sure the output you return matches the output you specified in the [outputType](outputtype.md) property.

<a id="discussion"></a>

## Discussion

If your stage supports searchable items as input, implement this method and use it to generate your stage’s supported output data. Write your code to run in parallel with other instances of your stage and instances of other stages. The best approach is to use only the contents of the `items` parameter and local intermediate values you create to deliver the output data.

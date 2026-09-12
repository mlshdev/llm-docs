> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corespotlight/customstage/execute(count:)-7gyx8](https://developer.apple.com/documentation/corespotlight/customstage/execute(count:)-7gyx8)

# execute(count:)

**Framework:** CoreSpotlight  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · visionOS 1.0+

Generates output data from the specified count value.

## Declaration

```swift
nonisolated(nonsending) func execute(count: Int) async throws -> SearchPipelineData
```

## Parameters

- `items`: An integer value representing a count of data items.

<a id="return-value"></a>

## Return Value

A pipeline data structure with data your stage produced. Make sure the output you return matches the output you specified in the [outputType](outputtype.md) property.

<a id="discussion"></a>

## Discussion

If your stage supports a counted number of items as input, implement this method and use it to generate your stage’s supported output data. Write your code to run in parallel with other instances of your stage and instances of other stages. The best approach is to use only the contents of the `items` parameter and local intermediate values you create to deliver the output data.

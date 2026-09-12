> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/context/setbatchsize(_:forfunction:)-4872x](https://developer.apple.com/documentation/accelerate/bnnsgraph/context/setbatchsize(_:forfunction:)-4872x)

# setBatchSize(\_:forFunction:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS · watchOS 11.0+

Sets the batch size for a graph.

## Declaration

```swift
func setBatchSize(_ batchSize: Int, forFunction function: String? = nil) async
```

## Parameters

- `batchSize`: The batch size.
- `function`: The specific function to set shapes for. You may set this to `nil` if there is only one function.

<a id="discussion"></a>

## Discussion

This is a special case of `setDynamicShapes(_:forFunction:)` where the only dynamic sizes that occur are the first index of their tensor (that is, the batch dimension) and are all equal. This allows just passing a single `batchSize` constant.

This function has no effect if you pass a `batchSize` value that’s less than zero.

> **See Also**

> `BNNSGraphContextSetBatchSize`

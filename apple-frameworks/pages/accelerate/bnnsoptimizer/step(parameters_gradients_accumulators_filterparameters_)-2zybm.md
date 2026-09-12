> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsoptimizer/step(parameters:gradients:accumulators:filterparameters:)-2zybm](https://developer.apple.com/documentation/accelerate/bnnsoptimizer/step(parameters:gradients:accumulators:filterparameters:)-2zybm)

# step(parameters:gradients:accumulators:filterParameters:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

> Use the BNNSGraph API instead.

## Declaration

```swift
func step(parameters: [BNNSNDArrayDescriptor], gradients: [BNNSNDArrayDescriptor], accumulators: [BNNSNDArrayDescriptor], filterParameters: BNNSFilterParameters? = nil) throws
```

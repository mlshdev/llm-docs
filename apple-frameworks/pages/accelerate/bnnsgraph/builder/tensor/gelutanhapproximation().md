> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/tensor/gelutanhapproximation()](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/gelutanhapproximation())

# geluTanhApproximation()

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds a Gaussian Error Linear Unit (GELU) tanh approximation activation operation to the current graph.

## Declaration

```swift
func geluTanhApproximation() -> BNNSGraph.Builder.Tensor<T>
```

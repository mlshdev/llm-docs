> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnnsgraph/builder/tensor/pad(_:padding:)](https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/pad(_:padding:))

# pad(\_:padding:)

**Framework:** Accelerate  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds a padding operation to the graph

## Declaration

```swift
func pad(_ type: BNNSGraph.Builder.Padding, padding: [Int]) -> BNNSGraph.Builder.Tensor<T>
```

## Parameters

- `type`: The padding type.
- `padding`: An array of integer values that contains an even count of elements. Each contiguous pair of elements specifies the before (for example, top or left) and after (for example, bottom or right) padding.

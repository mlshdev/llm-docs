> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnsgraph/builder/tensor/subscript(_:)

# subscript(\_:)

**Framework:** Accelerate  
**Kind:** Instance Subscript  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Adds a slice operation to the current graph.

## Declaration

```swift
subscript(ranges: any BNNSGraph.Builder.SliceIndex...) -> BNNSGraph.Builder.Tensor<T> { get set }
```

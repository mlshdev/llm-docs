> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnnsgraph/tensordescriptor

# BNNSGraph.TensorDescriptor

**Framework:** Accelerate  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

A protocol that allows `makeContext` to return a collection of heterogeneously typed `Tensor` structures.

## Declaration

```swift
protocol TensorDescriptor
```

## Topics

### Instance Properties

- [tensorData](tensordescriptor/tensordata.md)

## Relationships

### Conforming Types

- [BNNSGraph.Builder.Tensor](builder/tensor.md)

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/accelerate/bnns/layer](https://developer.apple.com/documentation/accelerate/bnns/layer)

# BNNS.Layer

**Framework:** Accelerate  
**Kind:** Class  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 14.0+ · visionOS · watchOS 7.0+

The base class for layer objects that wrap filters and manage deinitialization.

> Use the BNNSGraph API instead.

## Declaration

```swift
class Layer
```

## Topics

### Instance Properties

- [bnnsFilter](layer/bnnsfilter.md): Deprecated. The underlying filter.

## Relationships

### Inherited By

- [BNNS.BinaryArithmeticLayer](binaryarithmeticlayer.md)
- [BNNS.BinaryLayer](binarylayer.md)
- [BNNS.BroadcastMatrixMultiplyLayer](broadcastmatrixmultiplylayer.md)
- [BNNS.EmbeddingLayer](embeddinglayer.md)
- [BNNS.FusedLayer](fusedlayer.md)
- [BNNS.LossLayer](losslayer.md)
- [BNNS.NormalizationLayer](normalizationlayer.md)
- [BNNS.PoolingLayer](poolinglayer.md)
- [BNNS.TernaryArithmeticLayer](ternaryarithmeticlayer.md)
- [BNNS.UnaryArithmeticLayer](unaryarithmeticlayer.md)
- [BNNS.UnaryLayer](unarylayer.md)

## See Also

### Base Classes

- [BNNS.UnaryLayer](unarylayer.md): Deprecated. The base class for layers that accept a single input.
- [BNNS.BinaryLayer](binarylayer.md): Deprecated. The base class for layers that accept two inputs.

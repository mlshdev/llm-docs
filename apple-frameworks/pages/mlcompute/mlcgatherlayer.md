> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcgatherlayer](https://developer.apple.com/documentation/mlcompute/mlcgatherlayer)

# MLCGatherLayer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.5+ (deprecated in 17.4) · iPadOS 14.5+ (deprecated in 17.4) · Mac Catalyst 14.5+ (deprecated in 17.4) · macOS 11.3+ (deprecated in 14.3) · tvOS 14.5+ (deprecated in 17.4)

A layer that fetches data at the locations you specify.

## Declaration

```swift
class MLCGatherLayer
```

## Topics

### Creating Gather Layers

- [init(dimension:)](mlcgatherlayer/init%28dimension_%29.md): Deprecated. Creates a gather layer with the dimension you specify.

### Inspecting Gather Layers

- [dimension](mlcgatherlayer/dimension.md): Deprecated. The dimension to index.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Transformation Layers

- [MLCTransposeLayer](mlctransposelayer.md): Deprecated. A layer that permutes the dimensions you specify.
- [MLCConcatenationLayer](mlcconcatenationlayer.md): Deprecated. A layer that combines tensors into a single tensor.
- [MLCReshapeLayer](mlcreshapelayer.md): Deprecated. A layer that reshapes a tensor with the shape you specify.
- [MLCSliceLayer](mlcslicelayer.md): Deprecated. A layer that extracts a slice from a tensor.
- [MLCSplitLayer](mlcsplitlayer.md): Deprecated. A layer that splits a tensor value into a list of subtensors.
- [MLCPaddingLayer](mlcpaddinglayer.md): Deprecated. A layer that pads a tensor with the padding sizes you specify.
- [MLCScatterLayer](mlcscatterlayer.md): Deprecated. A layer that updates the output at an index you specify.
- [MLCSelectionLayer](mlcselectionlayer.md): Deprecated. A layer for selecting elements from two tensors.

# MLCGatherLayer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.5+ (deprecated in 17.4) · iPadOS 14.5+ (deprecated in 17.4) · Mac Catalyst 14.5+ (deprecated in 17.4) · macOS 11.3+ (deprecated in 14.3) · tvOS 14.5+ (deprecated in 17.4)

A layer that fetches data at the locations you specify.

## Declaration

```objectivec
@interface MLCGatherLayer : MLCLayer
```

## Topics

### Creating Gather Layers

- [layerWithDimension:](mlcgatherlayer/init%28dimension_%29.md): Deprecated. Creates a gather layer with the dimension you specify.

### Inspecting Gather Layers

- [dimension](mlcgatherlayer/dimension.md): Deprecated. The dimension to index.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

## See Also

### Transformation Layers

- [MLCTransposeLayer](mlctransposelayer.md): Deprecated. A layer that permutes the dimensions you specify.
- [MLCConcatenationLayer](mlcconcatenationlayer.md): Deprecated. A layer that combines tensors into a single tensor.
- [MLCReshapeLayer](mlcreshapelayer.md): Deprecated. A layer that reshapes a tensor with the shape you specify.
- [MLCSliceLayer](mlcslicelayer.md): Deprecated. A layer that extracts a slice from a tensor.
- [MLCSplitLayer](mlcsplitlayer.md): Deprecated. A layer that splits a tensor value into a list of subtensors.
- [MLCPaddingLayer](mlcpaddinglayer.md): Deprecated. A layer that pads a tensor with the padding sizes you specify.
- [MLCScatterLayer](mlcscatterlayer.md): Deprecated. A layer that updates the output at an index you specify.
- [MLCSelectionLayer](mlcselectionlayer.md): Deprecated. A layer for selecting elements from two tensors.

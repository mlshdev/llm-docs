> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcsplitlayer](https://developer.apple.com/documentation/mlcompute/mlcsplitlayer)

# MLCSplitLayer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that splits a tensor value into a list of subtensors.

## Declaration

```swift
class MLCSplitLayer
```

## Topics

### Creating Split Layers

- [init(splitCount:dimension:)](mlcsplitlayer/init%28splitcount_dimension_%29.md): Deprecated. Creates a split layer with the number of splits and dimension you specify.
- [init(splitSectionLengths:dimension:)](mlcsplitlayer/init%28splitsectionlengths_dimension_%29.md): Deprecated. Creates a split layer with the lengths of each split section and dimension you specify.

### Inspecting Split Layers

- [dimension](mlcsplitlayer/dimension.md): Deprecated. The dimension or axis along which to split the tensor.
- [splitCount](mlcsplitlayer/splitcount.md): Deprecated. The number of splits.
- [splitSectionLengths](mlcsplitlayer/splitsectionlengths-5abch.md): Deprecated. An array that contains the lengths of each split section.

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
- [MLCPaddingLayer](mlcpaddinglayer.md): Deprecated. A layer that pads a tensor with the padding sizes you specify.
- [MLCScatterLayer](mlcscatterlayer.md): Deprecated. A layer that updates the output at an index you specify.
- [MLCSelectionLayer](mlcselectionlayer.md): Deprecated. A layer for selecting elements from two tensors.
- [MLCGatherLayer](mlcgatherlayer.md): Deprecated. A layer that fetches data at the locations you specify.

# MLCSplitLayer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that splits a tensor value into a list of subtensors.

## Declaration

```objectivec
@interface MLCSplitLayer : MLCLayer
```

## Topics

### Creating Split Layers

- [layerWithSplitCount:dimension:](mlcsplitlayer/init%28splitcount_dimension_%29.md): Deprecated. Creates a split layer with the number of splits and dimension you specify.
- [layerWithSplitSectionLengths:dimension:](mlcsplitlayer/layerwithsplitsectionlengths_dimension_.md): Deprecated. Creates a split layer with the lengths of each split section and dimension you specify.

### Inspecting Split Layers

- [dimension](mlcsplitlayer/dimension.md): Deprecated. The dimension or axis along which to split the tensor.
- [splitCount](mlcsplitlayer/splitcount.md): Deprecated. The number of splits.
- [splitSectionLengths](mlcsplitlayer/splitsectionlengths-32abw.md): Deprecated. An array that contains the lengths of each split section.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

## See Also

### Transformation Layers

- [MLCTransposeLayer](mlctransposelayer.md): Deprecated. A layer that permutes the dimensions you specify.
- [MLCConcatenationLayer](mlcconcatenationlayer.md): Deprecated. A layer that combines tensors into a single tensor.
- [MLCReshapeLayer](mlcreshapelayer.md): Deprecated. A layer that reshapes a tensor with the shape you specify.
- [MLCSliceLayer](mlcslicelayer.md): Deprecated. A layer that extracts a slice from a tensor.
- [MLCPaddingLayer](mlcpaddinglayer.md): Deprecated. A layer that pads a tensor with the padding sizes you specify.
- [MLCScatterLayer](mlcscatterlayer.md): Deprecated. A layer that updates the output at an index you specify.
- [MLCSelectionLayer](mlcselectionlayer.md): Deprecated. A layer for selecting elements from two tensors.
- [MLCGatherLayer](mlcgatherlayer.md): Deprecated. A layer that fetches data at the locations you specify.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcselectionlayer](https://developer.apple.com/documentation/mlcompute/mlcselectionlayer)

# MLCSelectionLayer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.5+ (deprecated in 17.4) · iPadOS 14.5+ (deprecated in 17.4) · Mac Catalyst 14.5+ (deprecated in 17.4) · macOS 11.3+ (deprecated in 14.3) · tvOS 14.5+ (deprecated in 17.4)

A layer for selecting elements from two tensors.

## Declaration

```swift
class MLCSelectionLayer
```

<a id="overview"></a>

## Overview

A selection layer takes a condition tensor that acts as a mask. It determines whether the corresponding element or row in the output comes from tensor `X` (if the element in the condition is `true`) or tensor `Y` (if `false`).

## Topics

### Creating Selection Layers

- [init()](mlcselectionlayer/init%28%29.md): Deprecated. Creates a selection layer.

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
- [MLCGatherLayer](mlcgatherlayer.md): Deprecated. A layer that fetches data at the locations you specify.

# MLCSelectionLayer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.5+ (deprecated in 17.4) · iPadOS 14.5+ (deprecated in 17.4) · Mac Catalyst 14.5+ (deprecated in 17.4) · macOS 11.3+ (deprecated in 14.3) · tvOS 14.5+ (deprecated in 17.4)

A layer for selecting elements from two tensors.

## Declaration

```objectivec
@interface MLCSelectionLayer : MLCLayer
```

<a id="overview"></a>

## Overview

A selection layer takes a condition tensor that acts as a mask. It determines whether the corresponding element or row in the output comes from tensor `X` (if the element in the condition is `true`) or tensor `Y` (if `false`).

## Topics

### Creating Selection Layers

- [layer](mlcselectionlayer/init%28%29.md): Deprecated. Creates a selection layer.

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
- [MLCGatherLayer](mlcgatherlayer.md): Deprecated. A layer that fetches data at the locations you specify.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlcpaddinglayer](https://developer.apple.com/documentation/mlcompute/mlcpaddinglayer)

# MLCPaddingLayer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that pads a tensor with the padding sizes you specify.

## Declaration

```swift
class MLCPaddingLayer
```

## Topics

### Creating Padding Layers

- [init(reflectionPadding:)](mlcpaddinglayer/init%28reflectionpadding_%29.md): Deprecated. Creates a padding layer with the reflection padding sizes you specify.
- [init(symmetricPadding:)](mlcpaddinglayer/init%28symmetricpadding_%29.md): Deprecated. Creates a padding layer with the symmetric padding sizes you specify.
- [init(zeroPadding:)](mlcpaddinglayer/init%28zeropadding_%29.md): Deprecated. Creates a padding layer with the zero padding sizes you specify.
- [init(constantPadding:constantValue:)](mlcpaddinglayer/init%28constantpadding_constantvalue_%29.md): Deprecated. Creates a padding layer with the constant padding sizes and constant value you specify.

### Inspecting Padding Layers

- [paddingType](mlcpaddinglayer/paddingtype.md): Deprecated. The padding type.
- [paddingLeft](mlcpaddinglayer/paddingleft.md): Deprecated. The left padding size.
- [paddingRight](mlcpaddinglayer/paddingright.md): Deprecated. The right padding size.
- [paddingTop](mlcpaddinglayer/paddingtop.md): Deprecated. The top padding size.
- [paddingBottom](mlcpaddinglayer/paddingbottom.md): Deprecated. The bottom padding size.
- [constantValue](mlcpaddinglayer/constantvalue.md): Deprecated. The constant value you use if padding type is constant.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Transformation Layers

- [MLCTransposeLayer](mlctransposelayer.md): Deprecated. A layer that permutes the dimensions you specify.
- [MLCConcatenationLayer](mlcconcatenationlayer.md): Deprecated. A layer that combines tensors into a single tensor.
- [MLCReshapeLayer](mlcreshapelayer.md): Deprecated. A layer that reshapes a tensor with the shape you specify.
- [MLCSliceLayer](mlcslicelayer.md): Deprecated. A layer that extracts a slice from a tensor.
- [MLCSplitLayer](mlcsplitlayer.md): Deprecated. A layer that splits a tensor value into a list of subtensors.
- [MLCScatterLayer](mlcscatterlayer.md): Deprecated. A layer that updates the output at an index you specify.
- [MLCSelectionLayer](mlcselectionlayer.md): Deprecated. A layer for selecting elements from two tensors.
- [MLCGatherLayer](mlcgatherlayer.md): Deprecated. A layer that fetches data at the locations you specify.

# MLCPaddingLayer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

A layer that pads a tensor with the padding sizes you specify.

## Declaration

```objectivec
@interface MLCPaddingLayer : MLCLayer
```

## Topics

### Creating Padding Layers

- [layerWithReflectionPadding:](mlcpaddinglayer/layerwithreflectionpadding_.md): Deprecated. Creates a padding layer with the reflection padding sizes you specify.
- [layerWithSymmetricPadding:](mlcpaddinglayer/layerwithsymmetricpadding_.md): Deprecated. Creates a padding layer with the symmetric padding sizes you specify.
- [layerWithZeroPadding:](mlcpaddinglayer/layerwithzeropadding_.md): Deprecated. Creates a padding layer with the zero padding sizes you specify.
- [layerWithConstantPadding:constantValue:](mlcpaddinglayer/layerwithconstantpadding_constantvalue_.md): Deprecated. Creates a padding layer with the constant padding sizes and constant valu you specify.

### Inspecting Padding Layers

- [paddingType](mlcpaddinglayer/paddingtype.md): Deprecated. The padding type.
- [paddingLeft](mlcpaddinglayer/paddingleft.md): Deprecated. The left padding size.
- [paddingRight](mlcpaddinglayer/paddingright.md): Deprecated. The right padding size.
- [paddingTop](mlcpaddinglayer/paddingtop.md): Deprecated. The top padding size.
- [paddingBottom](mlcpaddinglayer/paddingbottom.md): Deprecated. The bottom padding size.
- [constantValue](mlcpaddinglayer/constantvalue.md): Deprecated. The constant value you use if padding type is constant.

## Relationships

### Inherits From

- [MLCLayer](mlclayer.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Transformation Layers

- [MLCTransposeLayer](mlctransposelayer.md): Deprecated. A layer that permutes the dimensions you specify.
- [MLCConcatenationLayer](mlcconcatenationlayer.md): Deprecated. A layer that combines tensors into a single tensor.
- [MLCReshapeLayer](mlcreshapelayer.md): Deprecated. A layer that reshapes a tensor with the shape you specify.
- [MLCSliceLayer](mlcslicelayer.md): Deprecated. A layer that extracts a slice from a tensor.
- [MLCSplitLayer](mlcsplitlayer.md): Deprecated. A layer that splits a tensor value into a list of subtensors.
- [MLCScatterLayer](mlcscatterlayer.md): Deprecated. A layer that updates the output at an index you specify.
- [MLCSelectionLayer](mlcselectionlayer.md): Deprecated. A layer for selecting elements from two tensors.
- [MLCGatherLayer](mlcgatherlayer.md): Deprecated. A layer that fetches data at the locations you specify.

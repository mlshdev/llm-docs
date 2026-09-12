> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mlcompute/mlclayer](https://developer.apple.com/documentation/mlcompute/mlclayer)

# MLCLayer (Swift)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The base class for all framework layers.

## Declaration

```swift
class MLCLayer
```

<a id="overview"></a>

## Overview

This class defines a polymorphic interface for `MLCLayer` subclasses. There are subclasses for each supported neural network layer type. Use the appropriate subclass initializer to create a layer object.

## Topics

### Inspecting a Layer

- [layerID](mlclayer/layerid.md): Deprecated. A unique number that identifies each layer.
- [label](mlclayer/label.md): Deprecated. A string that helps identify this layer.
- [isDebuggingEnabled](mlclayer/isdebuggingenabled.md): Deprecated. A Boolean that indicates whether you choose to debug the layer when executing a graph that includes it.
- [deviceType](mlclayer/devicetype.md): Deprecated. A device type that indicates where the system executes the layer.
- [supportsDataType(\_:on:)](mlclayer/supportsdatatype%28__on_%29.md): Deprecated. Returns a Boolean that indicates whether instances of this layer accept source tensors for the data type and device that you specify.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MLCActivationLayer](mlcactivationlayer.md)
- [MLCArithmeticLayer](mlcarithmeticlayer.md)
- [MLCBatchNormalizationLayer](mlcbatchnormalizationlayer.md)
- [MLCComparisonLayer](mlccomparisonlayer.md)
- [MLCConcatenationLayer](mlcconcatenationlayer.md)
- [MLCConvolutionLayer](mlcconvolutionlayer.md)
- [MLCDropoutLayer](mlcdropoutlayer.md)
- [MLCEmbeddingLayer](mlcembeddinglayer.md)
- [MLCFullyConnectedLayer](mlcfullyconnectedlayer.md)
- [MLCGatherLayer](mlcgatherlayer.md)
- [MLCGramMatrixLayer](mlcgrammatrixlayer.md)
- [MLCGroupNormalizationLayer](mlcgroupnormalizationlayer.md)
- [MLCInstanceNormalizationLayer](mlcinstancenormalizationlayer.md)
- [MLCLSTMLayer](mlclstmlayer.md)
- [MLCLayerNormalizationLayer](mlclayernormalizationlayer.md)
- [MLCLossLayer](mlclosslayer.md)
- [MLCMatMulLayer](mlcmatmullayer.md)
- [MLCMultiheadAttentionLayer](mlcmultiheadattentionlayer.md)
- [MLCPaddingLayer](mlcpaddinglayer.md)
- [MLCPoolingLayer](mlcpoolinglayer.md)
- [MLCReductionLayer](mlcreductionlayer.md)
- [MLCReshapeLayer](mlcreshapelayer.md)
- [MLCScatterLayer](mlcscatterlayer.md)
- [MLCSelectionLayer](mlcselectionlayer.md)
- [MLCSliceLayer](mlcslicelayer.md)
- [MLCSoftmaxLayer](mlcsoftmaxlayer.md)
- [MLCSplitLayer](mlcsplitlayer.md)
- [MLCTransposeLayer](mlctransposelayer.md)
- [MLCUpsampleLayer](mlcupsamplelayer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

# MLCLayer (Objective-C)

**Framework:** ML Compute  
**Kind:** Class  
**Availability:** iOS 14.0+ (deprecated in 17.4) · iPadOS 14.0+ (deprecated in 17.4) · Mac Catalyst 14.0+ (deprecated in 17.4) · macOS 11.0+ (deprecated in 14.3) · tvOS 14.0+ (deprecated in 17.4)

The base class for all framework layers.

## Declaration

```objectivec
@interface MLCLayer : NSObject
```

<a id="overview"></a>

## Overview

This class defines a polymorphic interface for `MLCLayer` subclasses. There are subclasses for each supported neural network layer type. Use the appropriate subclass initializer to create a layer object.

## Topics

### Inspecting a Layer

- [layerID](mlclayer/layerid.md): Deprecated. A unique number that identifies each layer.
- [label](mlclayer/label.md): Deprecated. A string that helps identify this layer.
- [isDebuggingEnabled](mlclayer/isdebuggingenabled.md): Deprecated. A Boolean that indicates whether you choose to debug the layer when executing a graph that includes it.
- [deviceType](mlclayer/devicetype.md): Deprecated. A device type that indicates where the system executes the layer.
- [supportsDataType:onDevice:](mlclayer/supportsdatatype%28__on_%29.md): Deprecated. Returns a Boolean that indicates whether instances of this layer accept source tensors for the data type and device that you specify.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MLCActivationLayer](mlcactivationlayer.md)
- [MLCArithmeticLayer](mlcarithmeticlayer.md)
- [MLCBatchNormalizationLayer](mlcbatchnormalizationlayer.md)
- [MLCComparisonLayer](mlccomparisonlayer.md)
- [MLCConcatenationLayer](mlcconcatenationlayer.md)
- [MLCConvolutionLayer](mlcconvolutionlayer.md)
- [MLCDropoutLayer](mlcdropoutlayer.md)
- [MLCEmbeddingLayer](mlcembeddinglayer.md)
- [MLCFullyConnectedLayer](mlcfullyconnectedlayer.md)
- [MLCGatherLayer](mlcgatherlayer.md)
- [MLCGramMatrixLayer](mlcgrammatrixlayer.md)
- [MLCGroupNormalizationLayer](mlcgroupnormalizationlayer.md)
- [MLCInstanceNormalizationLayer](mlcinstancenormalizationlayer.md)
- [MLCLSTMLayer](mlclstmlayer.md)
- [MLCLayerNormalizationLayer](mlclayernormalizationlayer.md)
- [MLCLossLayer](mlclosslayer.md)
- [MLCMatMulLayer](mlcmatmullayer.md)
- [MLCMultiheadAttentionLayer](mlcmultiheadattentionlayer.md)
- [MLCPaddingLayer](mlcpaddinglayer.md)
- [MLCPoolingLayer](mlcpoolinglayer.md)
- [MLCReductionLayer](mlcreductionlayer.md)
- [MLCReshapeLayer](mlcreshapelayer.md)
- [MLCScatterLayer](mlcscatterlayer.md)
- [MLCSelectionLayer](mlcselectionlayer.md)
- [MLCSliceLayer](mlcslicelayer.md)
- [MLCSoftmaxLayer](mlcsoftmaxlayer.md)
- [MLCSplitLayer](mlcsplitlayer.md)
- [MLCTransposeLayer](mlctransposelayer.md)
- [MLCUpsampleLayer](mlcupsamplelayer.md)

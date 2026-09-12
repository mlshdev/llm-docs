> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtltensordescriptor/auxiliaryplanes](https://developer.apple.com/documentation/metal/mtltensordescriptor/auxiliaryplanes)

# auxiliaryPlanes (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The auxiliary plane configurations for this tensor.

## Declaration

```swift
var auxiliaryPlanes: MTLTensorAuxiliaryPlaneDescriptorMap? { get set }
```

<a id="discussion"></a>

## Discussion

Set this property with a populated [MTLTensorAuxiliaryPlaneDescriptorMap](../mtltensorauxiliaryplanedescriptormap.md) to create a multi-plane tensor. When `nil`, the tensor has only a data plane.

Multi-plane tensors do not support [machineLearning](../mtltensorusage/machinelearning.md). Use [compute](../mtltensorusage/compute.md) or [render](../mtltensorusage/render.md).

Multi-plane tensors do not support data types larger than one byte as the data plane type.

Multi-plane tensors do not support rank zero.

The default value is `nil`.

# auxiliaryPlanes (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The auxiliary plane configurations for this tensor.

## Declaration

```objectivec
@property (nonatomic, retain, nullable) MTLTensorAuxiliaryPlaneDescriptorMap * auxiliaryPlanes;
```

<a id="discussion"></a>

## Discussion

Set this property with a populated [MTLTensorAuxiliaryPlaneDescriptorMap](../mtltensorauxiliaryplanedescriptormap.md) to create a multi-plane tensor. When `nil`, the tensor has only a data plane.

Multi-plane tensors do not support [MTLTensorUsageMachineLearning](../mtltensorusage/machinelearning.md). Use [MTLTensorUsageCompute](../mtltensorusage/compute.md) or [MTLTensorUsageRender](../mtltensorusage/render.md).

Multi-plane tensors do not support data types larger than one byte as the data plane type.

Multi-plane tensors do not support rank zero.

The default value is `nil`.

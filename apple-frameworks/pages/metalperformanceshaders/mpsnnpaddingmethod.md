> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsnnpaddingmethod](https://developer.apple.com/documentation/metalperformanceshaders/mpsnnpaddingmethod)

# MPSNNPaddingMethod (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Options that define a graph’s padding.

## Declaration

```swift
struct MPSNNPaddingMethod
```

<a id="overview"></a>

## Overview

The [MPSNNGraph](mpsnngraph.md) must make automatic decisions about how big to make the result of each filter node. This is typically determined by a combination of input image size, size of the filter window (for example, convolution weights), filter stride, and a description of how much extra space beyond the edges of the image to allow the filter read. By knowing the properties of the filter, you can then infer the size of the result image. Most of this information is known to the [MPSNNGraph](mpsnngraph.md) as part of its normal operation. However, the amount of padding to add and where to add it is a matter of choice left to you. Different neural network frameworks such as TensorFlow and Caffe make different choices here. Depending on where your network was trained, you will need to adjust the policies used by MPS during inference. In the event that the padding method is not simply described by this enumeration, you may provide you own custom policy definition by overriding the [destinationImageDescriptor(forSourceImages:sourceStates:for:suggestedDescriptor:)](mpsnnpadding/destinationimagedescriptor%28forsourceimages_sourcestates_for_suggesteddescriptor_%29.md) method in a custom [MPSNNPadding](mpsnnpadding.md) child class. Common values that influence the size of the result image by adjusting the amount of padding added to the source images:

- [validOnly](mpsnnpaddingmethod/validonly.md) Result values are only produced for the area that is guaranteed to have all of its input values defined (i.e. not off the edge).  This produces the smallest result image
- [sizeSame](mpsnnpaddingmethod/sizesame.md) The result image is the same size as the input image. If the stride is not 1, then the result is scaled accordingly.
- [sizeFull](mpsnnpaddingmethod/sizefull.md) Result values are produced for any position for which at least one input value is defined (i.e. not off the edge).
- [custom](mpsnnpaddingmethod/custom.md) The sizing and centering policy is given by the [destinationImageDescriptor(forSourceImages:sourceStates:for:suggestedDescriptor:)](mpsnnpadding/destinationimagedescriptor%28forsourceimages_sourcestates_for_suggesteddescriptor_%29.md).

Except possibly when [custom](mpsnnpaddingmethod/custom.md) is used, the area within the source image that is read will be centered on the source image. Even so, at times the area can not be perfectly centered because the source image has odd size and the region read has even size, or vice versa. In such cases, you may use the following values to select where to put the extra padding:

| [topLeft](mpsnnpaddingmethod/topleft.md) | Leftover padding is added to the top or left side of image as appropriate. |
| --- | --- |
| [addRemainderToBottomRight](mpsnnpaddingmethod/addremaindertobottomright.md) | Leftover padding is added to the bottom or right side of image as appropriate. |

Here again, different external frameworks may use different policies.

In some cases, Caffe introduces the notion of a region beyond the padding which is invalid. This can happen when the padding is set to a width narrower than what is needed for a destination size. In such cases, `MPSCNNPaddingMethodExcludeEdges` is used to adjust normalization factors for filter weights (particularly in pooling) such that invalid regions beyond the padding are not counted towards the filter area. Currently, only pooling supports this feature. Other filters ignore it.

The size and a add remainder policies always appear together in the [MPSNNPaddingMethod](mpsnnpaddingmethod.md). There is no provision for a size policy without a remainder policy or vice versa. It is, in practice, used as a bit field.

Most MPS neural network filters are considered forward filters. Some (for example, convolution transpose and unpooling) are considered reverse filters. For the reverse filters, the image stride is measured in destination values rather than source values and has the effect of enlarging the image rather than reducing it. When a reverse filter is used to “undo” the effects of a forward filter, the size policy should be the opposite of the forward padding method. For example, if the forward filter used [validOnly](mpsnnpaddingmethod/validonly.md) `|` [topLeft](mpsnnpaddingmethod/topleft.md), the reverse filter should use [sizeFull](mpsnnpaddingmethod/sizefull.md) | [topLeft](mpsnnpaddingmethod/topleft.md). Some consideration of the geometry of inputs and outputs will reveal why this is so. It is usually not important to adjust the centering method because the size of the reverse result generally doesn’t suffer from centering asymmetries. That is: the size would usually be given by:

```swift
static int DestSizeReverse( int sourceSize, int stride, int filterWindowSize, Style style ) {
    // style = {-1,0,1} for valid-only, same, full
    return (sourceSize-1) * stride + 1 + style  * (filterWindowSize-1);  
} 

```

so the result size is exactly the one needed for the source size and there are no centering problems. In some cases where the reverse pass is intended to completely reverse a forward pass, the [MPSState](mpsstate.md) object produced by the forward pass should be used to determine the size of the reverse pass result image.

Tensorflow does not appear to provide a full padding method, but instead appears to use its valid-only padding mode for reverse filters to in effect achieve what is called [sizeFull](mpsnnpaddingmethod/sizefull.md) here.

<a id="Walkthrough-of-Operation-of-Padding-Policy"></a>

### Walkthrough of Operation of Padding Policy

Most [MPSCNNKernel](mpscnnkernel.md) objects have two types of encode calls. There is one for which you must pass in a preallocated [MPSImage](mpsimage.md) to receive the results. This is for manual configuration. It assumes you know what you are doing, and asks you to correctly set a diversity of properties to correctly position image inputs and size results. It does not use the padding policy. You must size the result correctly, set the [clipRect](mpscnnkernel/cliprect.md), [offset](mpscnnkernel/offset.md) and other properties as needed yourself.

Layered on top of that is usually another flavor of encode call that returns a destination image instead from the left hand side of the function. It is designed to automatically configure itself based on the [paddingPolicy](mpsnnfilternode/paddingpolicy.md). When this more automated encode method is called, it invokes a method in the [MPSKernel](mpskernel.md) that looks at the [MPSNNPaddingMethod](mpsnnpaddingmethod.md) bitfield of the policy. Based on the information therein and the size of the input images and other filter properties, it determines the size of the output, sets the offset property, and returns an appropriate [MPSImageDescriptor](mpsimagedescriptor.md) for the destination image.

If you set the [custom](mpsnnpaddingmethod/custom.md) bit in the [MPSNNPaddingMethod](mpsnnpaddingmethod.md), then the [destinationImageDescriptor(forSourceImages:sourceStates:for:suggestedDescriptor:)](mpsnnpadding/destinationimagedescriptor%28forsourceimages_sourcestates_for_suggesteddescriptor_%29.md) method is called. The [MPSImageDescriptor](mpsimagedescriptor.md) prepared earlier is passed in as the last parameter. You can use this descriptor or modify as needed. In addition, you can adjust any properties of the [MPSKernel](mpskernel.md) with which it will be used. If, for example, the descriptor is not the right [MPSImageFeatureChannelFormat](mpsimagefeaturechannelformat.md), you can change it, or make your own [MPSImageDescriptor](mpsimagedescriptor.md) based on the one handed to you. This is your opportunity to customize the configuration of the [MPSKernel](mpskernel.md). In some cases (for example, [forTensorflowAveragePooling()](mpsnndefaultpadding/fortensorflowaveragepooling%28%29.md)) you might change other properties such as the filter edging mode, or adjust the offset that was already set for you. When the kernel is fully configured, return the [MPSImageDescriptor](mpsimagedescriptor.md).

The [MPSImageDescriptor](mpsimagedescriptor.md) is then passed to the [destinationImageAllocator](mpscnnkernel/destinationimageallocator.md) to allocate the image. You might provide such an allocator if you want to use your own custom [MTLHeap](../metal/mtlheap.md) rather than the MPS internal heap. The allocator can be set either directly in the [MPSCNNKernel](mpscnnkernel.md) or through the [imageAllocator](mpsnnimagenode/imageallocator.md) property.

It is intended that most of the time, default values for padding method and destination image allocator should be good enough. Only minimal additional configuration should be required, apart from occasional adjustments to set the [MPSNNPaddingMethod](mpsnnpaddingmethod.md) when something other than default padding for the object is needed. If you find yourself encumbered by frequent adjustments of this kind, you might find it to your advantage to subclass [MPSNNFilterNode](mpsnnfilternode.md) or [MPSCNNKernel](mpscnnkernel.md) objects to adjust the default padding policy and allocator at initialization time.

## Topics

### Initializers

- [init(rawValue:)](mpsnnpaddingmethod/init%28rawvalue_%29.md)

### Type Properties

- [addRemainderToBottomLeft](mpsnnpaddingmethod/addremaindertobottomleft.md)
- [addRemainderToBottomRight](mpsnnpaddingmethod/addremaindertobottomright.md)
- [addRemainderToMask](mpsnnpaddingmethod/addremaindertomask.md)
- [addRemainderToTopRight](mpsnnpaddingmethod/addremaindertotopright.md)
- [alignBottomRight](mpsnnpaddingmethod/alignbottomright.md)
- [alignMask](mpsnnpaddingmethod/alignmask.md)
- [alignTopLeft](mpsnnpaddingmethod/aligntopleft.md)
- [align_reserved](mpsnnpaddingmethod/align_reserved.md)
- [custom](mpsnnpaddingmethod/custom.md)
- [sizeFull](mpsnnpaddingmethod/sizefull.md)
- [sizeMask](mpsnnpaddingmethod/sizemask.md)
- [sizeSame](mpsnnpaddingmethod/sizesame.md)
- [size_reserved](mpsnnpaddingmethod/size_reserved.md)
- [excludeEdges](mpsnnpaddingmethod/excludeedges.md)
- [centered](mpsnnpaddingmethod/centered.md)
- [customAllowForNodeFusion](mpsnnpaddingmethod/customallowfornodefusion.md)
- [customWhitelistForNodeFusion](mpsnnpaddingmethod/customwhitelistfornodefusion.md): Deprecated.
- [topLeft](mpsnnpaddingmethod/topleft.md): A padding method where leftover padding is added to the top or left side of image as appropriate.
- [validOnly](mpsnnpaddingmethod/validonly.md): A padding method where result values are only produced for the area that is guaranteed to have all of its input values defined

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Initializers

- [init(method:)](mpsnndefaultpadding/init%28method_%29.md)

# MPSNNPaddingMethod (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Options that define a graph’s padding.

## Declaration

```objectivec
enum MPSNNPaddingMethod : NSUInteger;
```

<a id="overview"></a>

## Overview

The [MPSNNGraph](mpsnngraph.md) must make automatic decisions about how big to make the result of each filter node. This is typically determined by a combination of input image size, size of the filter window (for example, convolution weights), filter stride, and a description of how much extra space beyond the edges of the image to allow the filter read. By knowing the properties of the filter, you can then infer the size of the result image. Most of this information is known to the [MPSNNGraph](mpsnngraph.md) as part of its normal operation. However, the amount of padding to add and where to add it is a matter of choice left to you. Different neural network frameworks such as TensorFlow and Caffe make different choices here. Depending on where your network was trained, you will need to adjust the policies used by MPS during inference. In the event that the padding method is not simply described by this enumeration, you may provide you own custom policy definition by overriding the [destinationImageDescriptorForSourceImages:sourceStates:forKernel:suggestedDescriptor:](mpsnnpadding/destinationimagedescriptor%28forsourceimages_sourcestates_for_suggesteddescriptor_%29.md) method in a custom [MPSNNPadding](mpsnnpadding.md) child class. Common values that influence the size of the result image by adjusting the amount of padding added to the source images:

- [MPSNNPaddingMethodSizeValidOnly](mpsnnpaddingmethod/validonly.md) Result values are only produced for the area that is guaranteed to have all of its input values defined (i.e. not off the edge).  This produces the smallest result image
- [MPSNNPaddingMethodSizeSame](mpsnnpaddingmethod/sizesame.md) The result image is the same size as the input image. If the stride is not 1, then the result is scaled accordingly.
- [MPSNNPaddingMethodSizeFull](mpsnnpaddingmethod/sizefull.md) Result values are produced for any position for which at least one input value is defined (i.e. not off the edge).
- [MPSNNPaddingMethodCustom](mpsnnpaddingmethod/custom.md) The sizing and centering policy is given by the [destinationImageDescriptorForSourceImages:sourceStates:forKernel:suggestedDescriptor:](mpsnnpadding/destinationimagedescriptor%28forsourceimages_sourcestates_for_suggesteddescriptor_%29.md).

Except possibly when [MPSNNPaddingMethodCustom](mpsnnpaddingmethod/custom.md) is used, the area within the source image that is read will be centered on the source image. Even so, at times the area can not be perfectly centered because the source image has odd size and the region read has even size, or vice versa. In such cases, you may use the following values to select where to put the extra padding:

| [MPSNNPaddingMethodAddRemainderToTopLeft](mpsnnpaddingmethod/topleft.md) | Leftover padding is added to the top or left side of image as appropriate. |
| --- | --- |
| [MPSNNPaddingMethodAddRemainderToBottomRight](mpsnnpaddingmethod/addremaindertobottomright.md) | Leftover padding is added to the bottom or right side of image as appropriate. |

Here again, different external frameworks may use different policies.

In some cases, Caffe introduces the notion of a region beyond the padding which is invalid. This can happen when the padding is set to a width narrower than what is needed for a destination size. In such cases, `MPSCNNPaddingMethodExcludeEdges` is used to adjust normalization factors for filter weights (particularly in pooling) such that invalid regions beyond the padding are not counted towards the filter area. Currently, only pooling supports this feature. Other filters ignore it.

The size and a add remainder policies always appear together in the [MPSNNPaddingMethod](mpsnnpaddingmethod.md). There is no provision for a size policy without a remainder policy or vice versa. It is, in practice, used as a bit field.

Most MPS neural network filters are considered forward filters. Some (for example, convolution transpose and unpooling) are considered reverse filters. For the reverse filters, the image stride is measured in destination values rather than source values and has the effect of enlarging the image rather than reducing it. When a reverse filter is used to “undo” the effects of a forward filter, the size policy should be the opposite of the forward padding method. For example, if the forward filter used [MPSNNPaddingMethodSizeValidOnly](mpsnnpaddingmethod/validonly.md) `|` [MPSNNPaddingMethodAddRemainderToTopLeft](mpsnnpaddingmethod/topleft.md), the reverse filter should use [MPSNNPaddingMethodSizeFull](mpsnnpaddingmethod/sizefull.md) | [MPSNNPaddingMethodAddRemainderToTopLeft](mpsnnpaddingmethod/topleft.md). Some consideration of the geometry of inputs and outputs will reveal why this is so. It is usually not important to adjust the centering method because the size of the reverse result generally doesn’t suffer from centering asymmetries. That is: the size would usually be given by:

```swift
static int DestSizeReverse( int sourceSize, int stride, int filterWindowSize, Style style ) {
    // style = {-1,0,1} for valid-only, same, full
    return (sourceSize-1) * stride + 1 + style  * (filterWindowSize-1);  
} 

```

so the result size is exactly the one needed for the source size and there are no centering problems. In some cases where the reverse pass is intended to completely reverse a forward pass, the [MPSState](mpsstate.md) object produced by the forward pass should be used to determine the size of the reverse pass result image.

Tensorflow does not appear to provide a full padding method, but instead appears to use its valid-only padding mode for reverse filters to in effect achieve what is called [MPSNNPaddingMethodSizeFull](mpsnnpaddingmethod/sizefull.md) here.

<a id="Walkthrough-of-Operation-of-Padding-Policy"></a>

### Walkthrough of Operation of Padding Policy

Most [MPSCNNKernel](mpscnnkernel.md) objects have two types of encode calls. There is one for which you must pass in a preallocated [MPSImage](mpsimage.md) to receive the results. This is for manual configuration. It assumes you know what you are doing, and asks you to correctly set a diversity of properties to correctly position image inputs and size results. It does not use the padding policy. You must size the result correctly, set the [clipRect](mpscnnkernel/cliprect.md), [offset](mpscnnkernel/offset.md) and other properties as needed yourself.

Layered on top of that is usually another flavor of encode call that returns a destination image instead from the left hand side of the function. It is designed to automatically configure itself based on the [paddingPolicy](mpsnnfilternode/paddingpolicy.md). When this more automated encode method is called, it invokes a method in the [MPSKernel](mpskernel.md) that looks at the [MPSNNPaddingMethod](mpsnnpaddingmethod.md) bitfield of the policy. Based on the information therein and the size of the input images and other filter properties, it determines the size of the output, sets the offset property, and returns an appropriate [MPSImageDescriptor](mpsimagedescriptor.md) for the destination image.

If you set the [MPSNNPaddingMethodCustom](mpsnnpaddingmethod/custom.md) bit in the [MPSNNPaddingMethod](mpsnnpaddingmethod.md), then the [destinationImageDescriptorForSourceImages:sourceStates:forKernel:suggestedDescriptor:](mpsnnpadding/destinationimagedescriptor%28forsourceimages_sourcestates_for_suggesteddescriptor_%29.md) method is called. The [MPSImageDescriptor](mpsimagedescriptor.md) prepared earlier is passed in as the last parameter. You can use this descriptor or modify as needed. In addition, you can adjust any properties of the [MPSKernel](mpskernel.md) with which it will be used. If, for example, the descriptor is not the right [MPSImageFeatureChannelFormat](mpsimagefeaturechannelformat.md), you can change it, or make your own [MPSImageDescriptor](mpsimagedescriptor.md) based on the one handed to you. This is your opportunity to customize the configuration of the [MPSKernel](mpskernel.md). In some cases (for example, [paddingForTensorflowAveragePooling](mpsnndefaultpadding/fortensorflowaveragepooling%28%29.md)) you might change other properties such as the filter edging mode, or adjust the offset that was already set for you. When the kernel is fully configured, return the [MPSImageDescriptor](mpsimagedescriptor.md).

The [MPSImageDescriptor](mpsimagedescriptor.md) is then passed to the [destinationImageAllocator](mpscnnkernel/destinationimageallocator.md) to allocate the image. You might provide such an allocator if you want to use your own custom [MTLHeap](../metal/mtlheap.md) rather than the MPS internal heap. The allocator can be set either directly in the [MPSCNNKernel](mpscnnkernel.md) or through the [imageAllocator](mpsnnimagenode/imageallocator.md) property.

It is intended that most of the time, default values for padding method and destination image allocator should be good enough. Only minimal additional configuration should be required, apart from occasional adjustments to set the [MPSNNPaddingMethod](mpsnnpaddingmethod.md) when something other than default padding for the object is needed. If you find yourself encumbered by frequent adjustments of this kind, you might find it to your advantage to subclass [MPSNNFilterNode](mpsnnfilternode.md) or [MPSCNNKernel](mpscnnkernel.md) objects to adjust the default padding policy and allocator at initialization time.

## Topics

### Type Properties

- [MPSNNPaddingMethodAddRemainderToBottomLeft](mpsnnpaddingmethod/addremaindertobottomleft.md)
- [MPSNNPaddingMethodAddRemainderToBottomRight](mpsnnpaddingmethod/addremaindertobottomright.md)
- [MPSNNPaddingMethodAddRemainderToMask](mpsnnpaddingmethod/addremaindertomask.md)
- [MPSNNPaddingMethodAddRemainderToTopRight](mpsnnpaddingmethod/addremaindertotopright.md)
- [MPSNNPaddingMethodAlignBottomRight](mpsnnpaddingmethod/alignbottomright.md)
- [MPSNNPaddingMethodAlignMask](mpsnnpaddingmethod/alignmask.md)
- [MPSNNPaddingMethodAlignTopLeft](mpsnnpaddingmethod/aligntopleft.md)
- [MPSNNPaddingMethodAlign_reserved](mpsnnpaddingmethod/align_reserved.md)
- [MPSNNPaddingMethodCustom](mpsnnpaddingmethod/custom.md)
- [MPSNNPaddingMethodSizeFull](mpsnnpaddingmethod/sizefull.md)
- [MPSNNPaddingMethodSizeMask](mpsnnpaddingmethod/sizemask.md)
- [MPSNNPaddingMethodSizeSame](mpsnnpaddingmethod/sizesame.md)
- [MPSNNPaddingMethodSize_reserved](mpsnnpaddingmethod/size_reserved.md)
- [MPSNNPaddingMethodExcludeEdges](mpsnnpaddingmethod/excludeedges.md)
- [MPSNNPaddingMethodAlignCentered](mpsnnpaddingmethod/centered.md)
- [MPSNNPaddingMethodCustomAllowForNodeFusion](mpsnnpaddingmethod/customallowfornodefusion.md)
- [MPSNNPaddingMethodCustomWhitelistForNodeFusion](mpsnnpaddingmethod/customwhitelistfornodefusion.md): Deprecated.
- [MPSNNPaddingMethodAddRemainderToTopLeft](mpsnnpaddingmethod/topleft.md): A padding method where leftover padding is added to the top or left side of image as appropriate.
- [MPSNNPaddingMethodSizeValidOnly](mpsnnpaddingmethod/validonly.md): A padding method where result values are only produced for the area that is guaranteed to have all of its input values defined

## See Also

### Initializers

- [paddingWithMethod:](mpsnndefaultpadding/init%28method_%29.md)

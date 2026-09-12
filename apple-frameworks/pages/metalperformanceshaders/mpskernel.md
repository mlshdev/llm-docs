> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpskernel](https://developer.apple.com/documentation/metalperformanceshaders/mpskernel)

# MPSKernel (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A standard interface for Metal Performance Shaders kernels.

## Declaration

```swift
class MPSKernel
```

## Mentioned In

- [The MPSKernel Class](the-mpskernel-class.md)

<a id="overview"></a>

## Overview

You should not use the [MPSKernel](mpskernel.md) class directly. Instead, a number of subclasses are available that define specific high-performance data-parallel operations.

The basic sequence for applying a kernel to an image is as follows:

1. Initialize a kernel corresponding to the operation you wish to perform:

**Swift**

```swift
let sobel = MPSImageSobel(device: mtlDevice)
```

**Objective-C**

```objc
MPSImageSobel *sobel = [[MPSImageSobel alloc] initWithDevice: mtlDevice];
```

2. Encode the kernel into a command buffer.

**Swift**

```swift
sobel.offset = ...
sobel.clipRect = ...
sobel.options = ...
sobel.encode(commandBuffer: commandBuffer,
             sourceTexture: inputImage,
             destinationTexture: resultImage)
```

**Objective-C**

```objc
sobel.offset = ...;
sobel.clipRect = ...;
sobel.options = ...;
[sobel encodeToCommandBuffer: commandBuffer sourceTexture: inputImage destinationTexture: resultImage;
 
if(returnVal < 0)
    MyShowError(returnVal);
```

Encoding the kernel merely encodes the operation into a command buffer. It does not modify any pixels, yet. All kernel state has been copied to the command buffer. Kernels may be reused. If the texture was previously operated on by another command encoder (e.g. a render command encoder), you should call the [endEncoding()](../metal/mtlcommandencoder/endencoding%28%29.md) method on the other encoder before encoding the filter.

Some kernels work in place, even in situations where Metal might not normally allow in-place operation on textures. If in-place operation is desired, you may attempt to call the [encode(commandBuffer:inPlaceTexture:fallbackCopyAllocator:)](mpsunaryimagekernel/encode%28commandbuffer_inplacetexture_fallbackcopyallocator_%29.md) method. If the operation cannot be completed in place, then [false](https://developer.apple.com/documentation/swift/false) will be returned and you will have to create a new result texture and try again. To make an in-place image filter reliable, pass a fallback [MPSCopyAllocator](mpscopyallocator.md) block to the method to create a new texture to write to in the event that a filter cannot operate in place.

You may repeat step 2 to encode more kernels, as desired. \3. After encoding any additional work to the command buffer using other encoders, submit the command buffer to your command queue, using:

**Swift**

```swift
commandBuffer.commit()
```

**Objective-C**

```objc
[commandBuffer commit];
```

> **Note**

>  It should be self evident that step 2 may not be thread safe. That is, you can not have multiple threads manipulating the same properties on the same kernel object at the same time and achieve coherent output. In common usage, the kernel properties don’t often need to be changed from their default values, but if you need to apply the same filter to multiple images on multiple threads with cropping/tiling, make additional kernel objects per thread (they are cheap). You can use multiple kernel objects on multiple threads, as long as only one thread is operating on any particular kernel object at a time.

## Topics

### Initializers

- [init(coder:)](mpskernel/init%28coder_%29.md)
- [init(coder:device:)](mpskernel/init%28coder_device_%29.md)

### Methods

- [init(device:)](mpskernel/init%28device_%29.md): Initializes a new kernel object.
- [copy(with:device:)](mpskernel/copy%28with_device_%29.md): Makes a copy of this kernel object for a new device.

### Properties

- [options](mpskernel/options.md): The set of options used to run the kernel.
- [MPSKernelOptions](mpskerneloptions.md): The options used when creating a kernel.
- [device](mpskernel/device.md): The device on which the kernel will be used.
- [label](mpskernel/label.md): The string that identifies the kernel.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPSAccelerationStructure](mpsaccelerationstructure.md)
- [MPSBinaryImageKernel](mpsbinaryimagekernel.md)
- [MPSCNNBinaryKernel](mpscnnbinarykernel.md)
- [MPSCNNKernel](mpscnnkernel.md)
- [MPSCNNMultiaryKernel](mpscnnmultiarykernel.md)
- [MPSImageCopyToMatrix](mpsimagecopytomatrix.md)
- [MPSImageEDLines](mpsimageedlines.md)
- [MPSImageFindKeypoints](mpsimagefindkeypoints.md)
- [MPSImageGuidedFilter](mpsimageguidedfilter.md)
- [MPSImageHistogram](mpsimagehistogram.md)
- [MPSImageNormalizedHistogram](mpsimagenormalizedhistogram.md)
- [MPSMatrixBinaryKernel](mpsmatrixbinarykernel.md)
- [MPSMatrixCopy](mpsmatrixcopy.md)
- [MPSMatrixCopyToImage](mpsmatrixcopytoimage.md)
- [MPSMatrixMultiplication](mpsmatrixmultiplication.md)
- [MPSMatrixRandom](mpsmatrixrandom.md)
- [MPSMatrixSum](mpsmatrixsum.md)
- [MPSMatrixUnaryKernel](mpsmatrixunarykernel.md)
- [MPSNDArrayMultiaryBase](mpsndarraymultiarybase.md)
- [MPSNNGraph](mpsnngraph.md)
- [MPSNNOptimizer](mpsnnoptimizer.md)
- [MPSRNNMatrixInferenceLayer](mpsrnnmatrixinferencelayer.md)
- [MPSRNNMatrixTrainingLayer](mpsrnnmatrixtraininglayer.md)
- [MPSRayIntersector](mpsrayintersector.md)
- [MPSSVGF](mpssvgf.md)
- [MPSTemporalAA](mpstemporalaa.md)
- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

# MPSKernel (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A standard interface for Metal Performance Shaders kernels.

## Declaration

```objectivec
@interface MPSKernel : NSObject
```

## Mentioned In

- [The MPSKernel Class](the-mpskernel-class.md)

<a id="overview"></a>

## Overview

You should not use the [MPSKernel](mpskernel.md) class directly. Instead, a number of subclasses are available that define specific high-performance data-parallel operations.

The basic sequence for applying a kernel to an image is as follows:

1. Initialize a kernel corresponding to the operation you wish to perform:

**Swift**

```swift
let sobel = MPSImageSobel(device: mtlDevice)
```

**Objective-C**

```objc
MPSImageSobel *sobel = [[MPSImageSobel alloc] initWithDevice: mtlDevice];
```

2. Encode the kernel into a command buffer.

**Swift**

```swift
sobel.offset = ...
sobel.clipRect = ...
sobel.options = ...
sobel.encode(commandBuffer: commandBuffer,
             sourceTexture: inputImage,
             destinationTexture: resultImage)
```

**Objective-C**

```objc
sobel.offset = ...;
sobel.clipRect = ...;
sobel.options = ...;
[sobel encodeToCommandBuffer: commandBuffer sourceTexture: inputImage destinationTexture: resultImage;
 
if(returnVal < 0)
    MyShowError(returnVal);
```

Encoding the kernel merely encodes the operation into a command buffer. It does not modify any pixels, yet. All kernel state has been copied to the command buffer. Kernels may be reused. If the texture was previously operated on by another command encoder (e.g. a render command encoder), you should call the [endEncoding](../metal/mtlcommandencoder/endencoding%28%29.md) method on the other encoder before encoding the filter.

Some kernels work in place, even in situations where Metal might not normally allow in-place operation on textures. If in-place operation is desired, you may attempt to call the [encodeToCommandBuffer:inPlaceTexture:fallbackCopyAllocator:](mpsunaryimagekernel/encode%28commandbuffer_inplacetexture_fallbackcopyallocator_%29.md) method. If the operation cannot be completed in place, then [false](https://developer.apple.com/documentation/swift/false) will be returned and you will have to create a new result texture and try again. To make an in-place image filter reliable, pass a fallback [MPSCopyAllocator](mpscopyallocator.md) block to the method to create a new texture to write to in the event that a filter cannot operate in place.

You may repeat step 2 to encode more kernels, as desired. \3. After encoding any additional work to the command buffer using other encoders, submit the command buffer to your command queue, using:

**Swift**

```swift
commandBuffer.commit()
```

**Objective-C**

```objc
[commandBuffer commit];
```

> **Note**

>  It should be self evident that step 2 may not be thread safe. That is, you can not have multiple threads manipulating the same properties on the same kernel object at the same time and achieve coherent output. In common usage, the kernel properties don’t often need to be changed from their default values, but if you need to apply the same filter to multiple images on multiple threads with cropping/tiling, make additional kernel objects per thread (they are cheap). You can use multiple kernel objects on multiple threads, as long as only one thread is operating on any particular kernel object at a time.

## Topics

### Initializers

- [initWithCoder:](mpskernel/init%28coder_%29.md)
- [initWithCoder:device:](mpskernel/init%28coder_device_%29.md)

### Methods

- [initWithDevice:](mpskernel/init%28device_%29.md): Initializes a new kernel object.
- [copyWithZone:device:](mpskernel/copy%28with_device_%29.md): Makes a copy of this kernel object for a new device.

### Properties

- [options](mpskernel/options.md): The set of options used to run the kernel.
- [MPSKernelOptions](mpskerneloptions.md): The options used when creating a kernel.
- [device](mpskernel/device.md): The device on which the kernel will be used.
- [label](mpskernel/label.md): The string that identifies the kernel.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MPSAccelerationStructure](mpsaccelerationstructure.md)
- [MPSBinaryImageKernel](mpsbinaryimagekernel.md)
- [MPSCNNBinaryKernel](mpscnnbinarykernel.md)
- [MPSCNNKernel](mpscnnkernel.md)
- [MPSCNNMultiaryKernel](mpscnnmultiarykernel.md)
- [MPSImageCopyToMatrix](mpsimagecopytomatrix.md)
- [MPSImageEDLines](mpsimageedlines.md)
- [MPSImageFindKeypoints](mpsimagefindkeypoints.md)
- [MPSImageGuidedFilter](mpsimageguidedfilter.md)
- [MPSImageHistogram](mpsimagehistogram.md)
- [MPSImageNormalizedHistogram](mpsimagenormalizedhistogram.md)
- [MPSMatrixBinaryKernel](mpsmatrixbinarykernel.md)
- [MPSMatrixCopy](mpsmatrixcopy.md)
- [MPSMatrixCopyToImage](mpsmatrixcopytoimage.md)
- [MPSMatrixMultiplication](mpsmatrixmultiplication.md)
- [MPSMatrixRandom](mpsmatrixrandom.md)
- [MPSMatrixSum](mpsmatrixsum.md)
- [MPSMatrixUnaryKernel](mpsmatrixunarykernel.md)
- [MPSNDArrayMultiaryBase](mpsndarraymultiarybase.md)
- [MPSNNGraph](mpsnngraph.md)
- [MPSNNOptimizer](mpsnnoptimizer.md)
- [MPSRNNMatrixInferenceLayer](mpsrnnmatrixinferencelayer.md)
- [MPSRNNMatrixTrainingLayer](mpsrnnmatrixtraininglayer.md)
- [MPSRayIntersector](mpsrayintersector.md)
- [MPSSVGF](mpssvgf.md)
- [MPSTemporalAA](mpstemporalaa.md)
- [MPSUnaryImageKernel](mpsunaryimagekernel.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

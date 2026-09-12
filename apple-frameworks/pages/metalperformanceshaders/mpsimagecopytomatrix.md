> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagecopytomatrix](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagecopytomatrix)

# MPSImageCopyToMatrix (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A class that copies image data to a matrix.

## Declaration

```swift
class MPSImageCopyToMatrix
```

<a id="overview"></a>

## Overview

This kernel copies image data to a [MPSMatrix](mpsmatrix.md) object. The image data is stored in a row of a matrix.  The [dataLayout](mpsimagecopytomatrix/datalayout.md) specifies the order in which the feature channels in the image get stored in the matrix.  If the [MPSImage](mpsimage.md) stores a batch of images, the images are copied into multiple rows, one row per image.

The number of elements in a row in the matrix must be greater than the image width multiplied its height multiplied by the number of [featureChannels](mpsimage/featurechannels.md) in the image.

## Topics

### Initializers

- [init(coder:device:)](mpsimagecopytomatrix/init%28coder_device_%29.md)
- [init(device:dataLayout:)](mpsimagecopytomatrix/init%28device_datalayout_%29.md)

### Instance Properties

- [dataLayout](mpsimagecopytomatrix/datalayout.md)
- [destinationMatrixBatchIndex](mpsimagecopytomatrix/destinationmatrixbatchindex.md)
- [destinationMatrixOrigin](mpsimagecopytomatrix/destinationmatrixorigin.md)

### Instance Methods

- [encode(commandBuffer:sourceImage:destinationMatrix:)](mpsimagecopytomatrix/encode%28commandbuffer_sourceimage_destinationmatrix_%29.md)
- [encodeBatch(commandBuffer:sourceImages:destinationMatrix:)](mpsimagecopytomatrix/encodebatch%28commandbuffer_sourceimages_destinationmatrix_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

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

## See Also

### Matrix Copying Operations

- [MPSMatrixCopy](mpsmatrixcopy.md): A class that can perform multiple matrix copy operations.
- [MPSMatrixCopyToImage](mpsmatrixcopytoimage.md): A kernel that copies matrix data to a Metal Performance Shaders image.
- [MPSMatrixCopyDescriptor](mpsmatrixcopydescriptor.md): A description of multiple matrix copy operations.

# MPSImageCopyToMatrix (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

A class that copies image data to a matrix.

## Declaration

```objectivec
@interface MPSImageCopyToMatrix : MPSKernel
```

<a id="overview"></a>

## Overview

This kernel copies image data to a [MPSMatrix](mpsmatrix.md) object. The image data is stored in a row of a matrix.  The [dataLayout](mpsimagecopytomatrix/datalayout.md) specifies the order in which the feature channels in the image get stored in the matrix.  If the [MPSImage](mpsimage.md) stores a batch of images, the images are copied into multiple rows, one row per image.

The number of elements in a row in the matrix must be greater than the image width multiplied its height multiplied by the number of [featureChannels](mpsimage/featurechannels.md) in the image.

## Topics

### Initializers

- [initWithCoder:device:](mpsimagecopytomatrix/init%28coder_device_%29.md)
- [initWithDevice:dataLayout:](mpsimagecopytomatrix/init%28device_datalayout_%29.md)

### Instance Properties

- [dataLayout](mpsimagecopytomatrix/datalayout.md)
- [destinationMatrixBatchIndex](mpsimagecopytomatrix/destinationmatrixbatchindex.md)
- [destinationMatrixOrigin](mpsimagecopytomatrix/destinationmatrixorigin.md)

### Instance Methods

- [encodeToCommandBuffer:sourceImage:destinationMatrix:](mpsimagecopytomatrix/encode%28commandbuffer_sourceimage_destinationmatrix_%29.md)
- [encodeBatchToCommandBuffer:sourceImages:destinationMatrix:](mpsimagecopytomatrix/encodebatch%28commandbuffer_sourceimages_destinationmatrix_%29.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

## See Also

### Matrix Copying Operations

- [MPSMatrixCopy](mpsmatrixcopy.md): A class that can perform multiple matrix copy operations.
- [MPSMatrixCopyToImage](mpsmatrixcopytoimage.md): A kernel that copies matrix data to a Metal Performance Shaders image.
- [MPSMatrixCopyDescriptor](mpsmatrixcopydescriptor.md): A description of multiple matrix copy operations.

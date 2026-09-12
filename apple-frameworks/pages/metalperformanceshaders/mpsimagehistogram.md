> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagehistogram](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagehistogram)

# MPSImageHistogram (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that computes the histogram of an image.

## Declaration

```swift
class MPSImageHistogram
```

<a id="overview"></a>

## Overview

Typically, you use an [MPSImageHistogram](mpsimagehistogram.md) filter to calculate an image’s histogram that is passed to a subsequent filter such as [MPSImageHistogramEqualization](mpsimagehistogramequalization.md) or [MPSImageHistogramSpecification](mpsimagehistogramspecification.md).

The following listing shows how you can create a histogram filter to calculate the histogram of the [MTLTexture](../metal/mtltexture.md), `sourceTexture`. The filter is passed an instance of [MPSImageHistogramInfo](mpsimagehistograminfo.md) that specifies information to compute the histogram for the channels of an image. After encoding, `histogramInfoBuffer` contains the histogram information and can be used for further operations such as equalization or specification.

Listing 1. Creating a histogram filter

```swift
var histogramInfo = MPSImageHistogramInfo(
    numberOfHistogramEntries: 256,
    histogramForAlpha: false,
    minPixelValue: vector_float4(0,0,0,0),
    maxPixelValue: vector_float4(1,1,1,1))
     
let calculation = MPSImageHistogram(device: device,
                                    histogramInfo: &histogramInfo)
let bufferLength = calculation.histogramSize(forSourceFormat: sourceTexture.pixelFormat)
let histogramInfoBuffer = device.makeBuffer(length: bufferLength, 
                                            options: [.storageModePrivate])
     
calculation.encode(to: commandBuffer,
                   sourceTexture: sourceTexture,
                   histogram: histogramInfoBuffer,
                   histogramOffset: 0)
```

## Topics

### Initializers

- [init(coder:device:)](mpsimagehistogram/init%28coder_device_%29.md)

### Methods

- [init(device:histogramInfo:)](mpsimagehistogram/init%28device_histograminfo_%29.md): Initializes a histogram with specific information.
- [MPSImageHistogramInfo](mpsimagehistograminfo.md): The information used to compute the histogram channels of an image.
- [encode(to:sourceTexture:histogram:histogramOffset:)](mpsimagehistogram/encode%28to_sourcetexture_histogram_histogramoffset_%29.md): Encodes the filter to a command buffer using a compute command encoder.
- [histogramSize(forSourceFormat:)](mpsimagehistogram/histogramsize%28forsourceformat_%29.md): The amount of space the histogram will take up in the output buffer.

### Properties

- [clipRectSource](mpsimagehistogram/cliprectsource.md): The source rectangle to use when reading data.
- [zeroHistogram](mpsimagehistogram/zerohistogram.md): Determines whether to zero-initialize the histogram results.
- [histogramInfo](mpsimagehistogram/histograminfo.md): A structure describing the histogram content.
- [minPixelThresholdValue](mpsimagehistogram/minpixelthresholdvalue.md)

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

### Histogram Image Filters

- [MPSImageHistogramEqualization](mpsimagehistogramequalization.md): A filter that equalizes the histogram of an image.
- [MPSImageHistogramSpecification](mpsimagehistogramspecification.md): A filter that performs a histogram specification operation on an image.

# MPSImageHistogram (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Class  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

A filter that computes the histogram of an image.

## Declaration

```objectivec
@interface MPSImageHistogram : MPSKernel
```

<a id="overview"></a>

## Overview

Typically, you use an [MPSImageHistogram](mpsimagehistogram.md) filter to calculate an image’s histogram that is passed to a subsequent filter such as [MPSImageHistogramEqualization](mpsimagehistogramequalization.md) or [MPSImageHistogramSpecification](mpsimagehistogramspecification.md).

The following listing shows how you can create a histogram filter to calculate the histogram of the [MTLTexture](../metal/mtltexture.md), `sourceTexture`. The filter is passed an instance of [MPSImageHistogramInfo](mpsimagehistograminfo.md) that specifies information to compute the histogram for the channels of an image. After encoding, `histogramInfoBuffer` contains the histogram information and can be used for further operations such as equalization or specification.

Listing 1. Creating a histogram filter

```swift
var histogramInfo = MPSImageHistogramInfo(
    numberOfHistogramEntries: 256,
    histogramForAlpha: false,
    minPixelValue: vector_float4(0,0,0,0),
    maxPixelValue: vector_float4(1,1,1,1))
     
let calculation = MPSImageHistogram(device: device,
                                    histogramInfo: &histogramInfo)
let bufferLength = calculation.histogramSize(forSourceFormat: sourceTexture.pixelFormat)
let histogramInfoBuffer = device.makeBuffer(length: bufferLength, 
                                            options: [.storageModePrivate])
     
calculation.encode(to: commandBuffer,
                   sourceTexture: sourceTexture,
                   histogram: histogramInfoBuffer,
                   histogramOffset: 0)
```

## Topics

### Initializers

- [initWithCoder:device:](mpsimagehistogram/init%28coder_device_%29.md)

### Methods

- [initWithDevice:histogramInfo:](mpsimagehistogram/init%28device_histograminfo_%29.md): Initializes a histogram with specific information.
- [MPSImageHistogramInfo](mpsimagehistograminfo.md): The information used to compute the histogram channels of an image.
- [encodeToCommandBuffer:sourceTexture:histogram:histogramOffset:](mpsimagehistogram/encode%28to_sourcetexture_histogram_histogramoffset_%29.md): Encodes the filter to a command buffer using a compute command encoder.
- [histogramSizeForSourceFormat:](mpsimagehistogram/histogramsize%28forsourceformat_%29.md): The amount of space the histogram will take up in the output buffer.

### Properties

- [clipRectSource](mpsimagehistogram/cliprectsource.md): The source rectangle to use when reading data.
- [zeroHistogram](mpsimagehistogram/zerohistogram.md): Determines whether to zero-initialize the histogram results.
- [histogramInfo](mpsimagehistogram/histograminfo.md): A structure describing the histogram content.
- [minPixelThresholdValue](mpsimagehistogram/minpixelthresholdvalue.md)

## Relationships

### Inherits From

- [MPSKernel](mpskernel.md)

## See Also

### Histogram Image Filters

- [MPSImageHistogramEqualization](mpsimagehistogramequalization.md): A filter that equalizes the histogram of an image.
- [MPSImageHistogramSpecification](mpsimagehistogramspecification.md): A filter that performs a histogram specification operation on an image.

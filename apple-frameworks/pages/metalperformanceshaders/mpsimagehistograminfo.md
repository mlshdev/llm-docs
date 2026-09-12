> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagehistograminfo](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagehistograminfo)

# MPSImageHistogramInfo (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The information used to compute the histogram channels of an image.

## Declaration

```swift
struct MPSImageHistogramInfo
```

## Topics

### Fields

- [numberOfHistogramEntries](mpsimagehistograminfo/numberofhistogramentries.md): Specifies the number of histogram entries (*bins*) for each channel.
- [histogramForAlpha](mpsimagehistograminfo/histogramforalpha.md): Specifies whether the histogram for the alpha channel should be computed or not.
- [minPixelValue](mpsimagehistograminfo/minpixelvalue.md): Specifies the minimum pixel value. Any pixel value less than this will be clipped to this value (for the purposes of histogram calculation), and assigned to the first histogram entry. This minimum value is applied to each of the four channels separately.
- [maxPixelValue](mpsimagehistograminfo/maxpixelvalue.md): Specifies the maximum pixel value. Any pixel value greater than this will be clipped to this value (for the purposes of histogram calculation), and assigned to the first histogram entry. This maximum value is applied to each of the four channels separately.

### Initializers

- [init()](mpsimagehistograminfo/init%28%29.md)
- [init(numberOfHistogramEntries:histogramForAlpha:minPixelValue:maxPixelValue:)](mpsimagehistograminfo/init%28numberofhistogramentries_histogramforalpha_minpixelvalue_maxpixelvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Methods

- [init(device:histogramInfo:)](mpsimagehistogram/init%28device_histograminfo_%29.md): Initializes a histogram with specific information.
- [encode(to:sourceTexture:histogram:histogramOffset:)](mpsimagehistogram/encode%28to_sourcetexture_histogram_histogramoffset_%29.md): Encodes the filter to a command buffer using a compute command encoder.
- [histogramSize(forSourceFormat:)](mpsimagehistogram/histogramsize%28forsourceformat_%29.md): The amount of space the histogram will take up in the output buffer.

# MPSImageHistogramInfo (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

The information used to compute the histogram channels of an image.

## Declaration

```objectivec
typedef struct { ... } MPSImageHistogramInfo;
```

## Topics

### Fields

- [numberOfHistogramEntries](mpsimagehistograminfo/numberofhistogramentries.md): Specifies the number of histogram entries (*bins*) for each channel.
- [histogramForAlpha](mpsimagehistograminfo/histogramforalpha.md): Specifies whether the histogram for the alpha channel should be computed or not.
- [minPixelValue](mpsimagehistograminfo/minpixelvalue.md): Specifies the minimum pixel value. Any pixel value less than this will be clipped to this value (for the purposes of histogram calculation), and assigned to the first histogram entry. This minimum value is applied to each of the four channels separately.
- [maxPixelValue](mpsimagehistograminfo/maxpixelvalue.md): Specifies the maximum pixel value. Any pixel value greater than this will be clipped to this value (for the purposes of histogram calculation), and assigned to the first histogram entry. This maximum value is applied to each of the four channels separately.

## See Also

### Methods

- [initWithDevice:histogramInfo:](mpsimagehistogram/init%28device_histograminfo_%29.md): Initializes a histogram with specific information.
- [encodeToCommandBuffer:sourceTexture:histogram:histogramOffset:](mpsimagehistogram/encode%28to_sourcetexture_histogram_histogramoffset_%29.md): Encodes the filter to a command buffer using a compute command encoder.
- [histogramSizeForSourceFormat:](mpsimagehistogram/histogramsize%28forsourceformat_%29.md): The amount of space the histogram will take up in the output buffer.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagehistogram/histogramsize(forsourceformat:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagehistogram/histogramsize(forsourceformat:))

# histogramSize(forSourceFormat:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

The amount of space the histogram will take up in the output buffer.

## Declaration

```swift
func histogramSize(forSourceFormat sourceFormat: MTLPixelFormat) -> Int
```

## Parameters

- `sourceFormat`: The pixel format of the source image, corresponding to the `sourceTexture` object of the [encode(to:sourceTexture:histogram:histogramOffset:)](encode%28to_sourcetexture_histogram_histogramoffset_%29.md) method.

<a id="return-value"></a>

## Return Value

The number of bytes needed to store the histogram results.

<a id="Discussion"></a>

## Discussion

This convenience function calculates the minimum amount of space needed in the output histogram for the results. The buffer should be at least this length and longer if the `histogramOffset` value in the [encode(to:sourceTexture:histogram:histogramOffset:)](encode%28to_sourcetexture_histogram_histogramoffset_%29.md) method is non-zero.

## See Also

### Methods

- [init(device:histogramInfo:)](init%28device_histograminfo_%29.md): Initializes a histogram with specific information.
- [MPSImageHistogramInfo](../mpsimagehistograminfo.md): The information used to compute the histogram channels of an image.
- [encode(to:sourceTexture:histogram:histogramOffset:)](encode%28to_sourcetexture_histogram_histogramoffset_%29.md): Encodes the filter to a command buffer using a compute command encoder.

# histogramSizeForSourceFormat: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

The amount of space the histogram will take up in the output buffer.

## Declaration

```objectivec
- (size_t) histogramSizeForSourceFormat:(MTLPixelFormat) sourceFormat;
```

## Parameters

- `sourceFormat`: The pixel format of the source image, corresponding to the `sourceTexture` object of the [encodeToCommandBuffer:sourceTexture:histogram:histogramOffset:](encode%28to_sourcetexture_histogram_histogramoffset_%29.md) method.

<a id="return-value"></a>

## Return Value

The number of bytes needed to store the histogram results.

<a id="Discussion"></a>

## Discussion

This convenience function calculates the minimum amount of space needed in the output histogram for the results. The buffer should be at least this length and longer if the `histogramOffset` value in the [encodeToCommandBuffer:sourceTexture:histogram:histogramOffset:](encode%28to_sourcetexture_histogram_histogramoffset_%29.md) method is non-zero.

## See Also

### Methods

- [initWithDevice:histogramInfo:](init%28device_histograminfo_%29.md): Initializes a histogram with specific information.
- [MPSImageHistogramInfo](../mpsimagehistograminfo.md): The information used to compute the histogram channels of an image.
- [encodeToCommandBuffer:sourceTexture:histogram:histogramOffset:](encode%28to_sourcetexture_histogram_histogramoffset_%29.md): Encodes the filter to a command buffer using a compute command encoder.

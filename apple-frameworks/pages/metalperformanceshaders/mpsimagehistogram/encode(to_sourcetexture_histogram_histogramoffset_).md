> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagehistogram/encode(to:sourcetexture:histogram:histogramoffset:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagehistogram/encode(to:sourcetexture:histogram:histogramoffset:))

# encode(to:sourceTexture:histogram:histogramOffset:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Encodes the filter to a command buffer using a compute command encoder.

## Declaration

```swift
func encode(to commandBuffer: any MTLCommandBuffer, sourceTexture source: any MTLTexture, histogram: any MTLBuffer, histogramOffset: Int)
```

## Parameters

- `commandBuffer`: A valid command buffer.
- `source`: A valid texture containing the source image for the filter.
- `histogram`: A valid buffer to receive the histogram results.
- `histogramOffset`: The byte offset into the histogram buffer at which to write the histogram results. Must be a multiple of 32 bytes. The histogram results per channel are stored together. The number of channels for which histogram results are stored is determined by the number of channels in the image. If the `histogramForAlpha` value of the [histogramInfo](histograminfo.md) property is [false](https://developer.apple.com/documentation/swift/false) and the source image is RGBA, then only histogram results for RGB channels are stored.

<a id="Discussion"></a>

## Discussion

The filter will not begin to execute until after the command buffer has been enqueued and committed.

## See Also

### Methods

- [init(device:histogramInfo:)](init%28device_histograminfo_%29.md): Initializes a histogram with specific information.
- [MPSImageHistogramInfo](../mpsimagehistograminfo.md): The information used to compute the histogram channels of an image.
- [histogramSize(forSourceFormat:)](histogramsize%28forsourceformat_%29.md): The amount of space the histogram will take up in the output buffer.

# encodeToCommandBuffer:sourceTexture:histogram:histogramOffset: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Encodes the filter to a command buffer using a compute command encoder.

## Declaration

```objectivec
- (void) encodeToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceTexture:(id<MTLTexture>) source histogram:(id<MTLBuffer>) histogram histogramOffset:(NSUInteger) histogramOffset;
```

## Parameters

- `commandBuffer`: A valid command buffer.
- `source`: A valid texture containing the source image for the filter.
- `histogram`: A valid buffer to receive the histogram results.
- `histogramOffset`: The byte offset into the histogram buffer at which to write the histogram results. Must be a multiple of 32 bytes. The histogram results per channel are stored together. The number of channels for which histogram results are stored is determined by the number of channels in the image. If the `histogramForAlpha` value of the [histogramInfo](histograminfo.md) property is [false](https://developer.apple.com/documentation/swift/false) and the source image is RGBA, then only histogram results for RGB channels are stored.

<a id="Discussion"></a>

## Discussion

The filter will not begin to execute until after the command buffer has been enqueued and committed.

## See Also

### Methods

- [initWithDevice:histogramInfo:](init%28device_histograminfo_%29.md): Initializes a histogram with specific information.
- [MPSImageHistogramInfo](../mpsimagehistograminfo.md): The information used to compute the histogram channels of an image.
- [histogramSizeForSourceFormat:](histogramsize%28forsourceformat_%29.md): The amount of space the histogram will take up in the output buffer.

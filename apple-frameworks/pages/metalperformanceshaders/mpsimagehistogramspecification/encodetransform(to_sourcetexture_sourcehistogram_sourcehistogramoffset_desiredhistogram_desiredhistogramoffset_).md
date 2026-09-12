> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalperformanceshaders/mpsimagehistogramspecification/encodetransform(to:sourcetexture:sourcehistogram:sourcehistogramoffset:desiredhistogram:desiredhistogramoffset:)](https://developer.apple.com/documentation/metalperformanceshaders/mpsimagehistogramspecification/encodetransform(to:sourcetexture:sourcehistogram:sourcehistogramoffset:desiredhistogram:desiredhistogramoffset:))

# encodeTransform(to:sourceTexture:sourceHistogram:sourceHistogramOffset:desiredHistogram:desiredHistogramOffset:) (Swift)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Encodes the transform function to a command buffer using a compute command encoder. The transform function computes the equalization lookup table.

## Declaration

```swift
func encodeTransform(to commandBuffer: any MTLCommandBuffer, sourceTexture source: any MTLTexture, sourceHistogram: any MTLBuffer, sourceHistogramOffset: Int, desiredHistogram: any MTLBuffer, desiredHistogramOffset: Int)
```

## Parameters

- `commandBuffer`: A valid command buffer.
- `source`: A valid texture containing the source image for the filter.
- `sourceHistogram`: A valid buffer containing the histogram results for the source image. This filter will use these histogram results to generate the cumulative histogram for equalizing the image.  The histogram results per channel are stored together. The number of channels for which histogram results are stored is determined by the number of channels in the image. If the `histogramForAlpha` value of the [histogramInfo](histograminfo.md) property is [false](https://developer.apple.com/documentation/swift/false) and the source image is RGBA, then only histogram results for RGB channels are stored.
- `sourceHistogramOffset`: The byte offset into the source histogram buffer where the histogram starts. Must conform to alignment requirements for the `offset` parameter of the [setBuffer(\_:offset:index:)](../../metal/mtlcomputecommandencoder/setbuffer%28__offset_index_%29.md) method.
- `desiredHistogram`: A valid buffer containing the desired histogram results for the source image. The histogram results per channel are stored together. The number of channels for which histogram results are stored is determined by the number of channels in the image. If the `histogramForAlpha` value of the [histogramInfo](histograminfo.md) property is [false](https://developer.apple.com/documentation/swift/false) and the source image is RGBA, then only histogram results for RGB channels are stored.
- `desiredHistogramOffset`: The byte offset into the desired histogram buffer where the histogram starts. Must conform to alignment requirements for the `offset` parameter of the [setBuffer(\_:offset:index:)](../../metal/mtlcomputecommandencoder/setbuffer%28__offset_index_%29.md) method.

<a id="Discussion"></a>

## Discussion

The transform function will not begin to execute until after the command buffer has been enqueued and committed. This step will need to be repeated with the new [MPSKernel](../mpskernel.md) object if the [copy(with:device:)](../mpskernel/copy%28with_device_%29.md) or [copy(with:)](../../foundation/nscopying/copy%28with_%29.md) method is called.

## See Also

### Related Documentation

- [setBufferOffset(\_:index:)](../../metal/mtlcomputecommandencoder/setbufferoffset%28__index_%29.md): Changes where the data begins in a buffer already bound to the buffer argument table.
- [setBuffer(\_:offset:index:)](../../metal/mtlcomputecommandencoder/setbuffer%28__offset_index_%29.md): Binds a buffer to the buffer argument table, allowing compute kernels to access its data on the GPU.

### Methods

- [init(device:histogramInfo:)](init%28device_histograminfo_%29.md): Initializes a histogram with specific information.

# encodeTransformToCommandBuffer:sourceTexture:sourceHistogram:sourceHistogramOffset:desiredHistogram:desiredHistogramOffset: (Objective-C)

**Framework:** Metal Performance Shaders  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.13+ · tvOS 9.0+ · visionOS 1.0+

Encodes the transform function to a command buffer using a compute command encoder. The transform function computes the equalization lookup table.

## Declaration

```objectivec
- (void) encodeTransformToCommandBuffer:(id<MTLCommandBuffer>) commandBuffer sourceTexture:(id<MTLTexture>) source sourceHistogram:(id<MTLBuffer>) sourceHistogram sourceHistogramOffset:(NSUInteger) sourceHistogramOffset desiredHistogram:(id<MTLBuffer>) desiredHistogram desiredHistogramOffset:(NSUInteger) desiredHistogramOffset;
```

## Parameters

- `commandBuffer`: A valid command buffer.
- `source`: A valid texture containing the source image for the filter.
- `sourceHistogram`: A valid buffer containing the histogram results for the source image. This filter will use these histogram results to generate the cumulative histogram for equalizing the image.  The histogram results per channel are stored together. The number of channels for which histogram results are stored is determined by the number of channels in the image. If the `histogramForAlpha` value of the [histogramInfo](histograminfo.md) property is [false](https://developer.apple.com/documentation/swift/false) and the source image is RGBA, then only histogram results for RGB channels are stored.
- `sourceHistogramOffset`: The byte offset into the source histogram buffer where the histogram starts. Must conform to alignment requirements for the `offset` parameter of the [setBuffer:offset:atIndex:](../../metal/mtlcomputecommandencoder/setbuffer%28__offset_index_%29.md) method.
- `desiredHistogram`: A valid buffer containing the desired histogram results for the source image. The histogram results per channel are stored together. The number of channels for which histogram results are stored is determined by the number of channels in the image. If the `histogramForAlpha` value of the [histogramInfo](histograminfo.md) property is [false](https://developer.apple.com/documentation/swift/false) and the source image is RGBA, then only histogram results for RGB channels are stored.
- `desiredHistogramOffset`: The byte offset into the desired histogram buffer where the histogram starts. Must conform to alignment requirements for the `offset` parameter of the [setBuffer:offset:atIndex:](../../metal/mtlcomputecommandencoder/setbuffer%28__offset_index_%29.md) method.

<a id="Discussion"></a>

## Discussion

The transform function will not begin to execute until after the command buffer has been enqueued and committed. This step will need to be repeated with the new [MPSKernel](../mpskernel.md) object if the [copyWithZone:device:](../mpskernel/copy%28with_device_%29.md) or [copyWithZone:](../../foundation/nscopying/copy%28with_%29.md) method is called.

## See Also

### Related Documentation

- [setBufferOffset:atIndex:](../../metal/mtlcomputecommandencoder/setbufferoffset%28__index_%29.md): Changes where the data begins in a buffer already bound to the buffer argument table.
- [setBuffer:offset:atIndex:](../../metal/mtlcomputecommandencoder/setbuffer%28__offset_index_%29.md): Binds a buffer to the buffer argument table, allowing compute kernels to access its data on the GPU.

### Methods

- [initWithDevice:histogramInfo:](init%28device_histograminfo_%29.md): Initializes a histogram with specific information.

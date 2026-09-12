> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mevideodecoder/decodeframe(from:options:completionhandler:)](https://developer.apple.com/documentation/mediaextension/mevideodecoder/decodeframe(from:options:completionhandler:))

# decodeFrame(from:options:completionHandler:) (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Requests the extension to decode a video frame.

## Declaration

```swift
func decodeFrame(from sampleBuffer: CMSampleBuffer, options: MEDecodeFrameOptions, completionHandler: @escaping @Sendable (CVImageBuffer?, MEDecodeFrameStatus, (any Error)?) -> Void)
```

```swift
func decodeFrame(from sampleBuffer: CMSampleBuffer, options: MEDecodeFrameOptions) async throws -> (CVImageBuffer, MEDecodeFrameStatus)
```

## Parameters

- `sampleBuffer`: A sample buffer that contains one video frame.
- `options`: Specific decode options for the frame.
- `completionHandler`: The completion block to execute when the decode operation finishes.

<a id="Discussion"></a>

## Discussion

This method calls the completion handler for every sample buffer frame when decoding completes, but not necessarily in display order. The completion handler receives a decoded pixel buffer, a decode status that indicates a frame dropped, or an error. Use [MEVideoDecoderPixelBufferManager](../mevideodecoderpixelbuffermanager.md) to allocate an image buffer. If an error occurs that’s external to [MediaExtensionErrorDomain](../mediaextensionerrordomain.md), the [VTDecompressionSession](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsession) receives it as [kVTVideoDecoderUnknownErr](https://developer.apple.com/documentation/videotoolbox/kvtvideodecoderunknownerr).

## See Also

### Decoding frames

- [canAccept(\_:)](canaccept%28__%29.md): Asks the extension whether the decoder can decode frames with the format description that you specify.
- [MEDecodeFrameStatus](../medecodeframestatus.md): A type that represents a non-error status related to a frame decode operation.

# decodeFrameFromSampleBuffer:options:completionHandler: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Requests the extension to decode a video frame.

## Declaration

```objectivec
- (void) decodeFrameFromSampleBuffer:(CMSampleBufferRef) sampleBuffer options:(MEDecodeFrameOptions *) options completionHandler:(void (^)(CVImageBufferRef imageBuffer, MEDecodeFrameStatus decodeStatus, NSError *error)) completionHandler;
```

## Parameters

- `sampleBuffer`: A sample buffer that contains one video frame.
- `options`: Specific decode options for the frame.
- `completionHandler`: The completion block to execute when the decode operation finishes.

<a id="Discussion"></a>

## Discussion

This method calls the completion handler for every sample buffer frame when decoding completes, but not necessarily in display order. The completion handler receives a decoded pixel buffer, a decode status that indicates a frame dropped, or an error. Use [MEVideoDecoderPixelBufferManager](../mevideodecoderpixelbuffermanager.md) to allocate an image buffer. If an error occurs that’s external to [MediaExtensionErrorDomain](../mediaextensionerrordomain.md), the [VTDecompressionSessionRef](https://developer.apple.com/documentation/videotoolbox/vtdecompressionsession) receives it as [kVTVideoDecoderUnknownErr](https://developer.apple.com/documentation/videotoolbox/kvtvideodecoderunknownerr).

## See Also

### Decoding frames

- [canAcceptFormatDescription:](canaccept%28__%29.md): Asks the extension whether the decoder can decode frames with the format description that you specify.
- [MEDecodeFrameStatus](../medecodeframestatus.md): A type that represents a non-error status related to a frame decode operation.

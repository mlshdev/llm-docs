> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriter/inputpixelbufferreceiver(for:pixelbufferattributes:)](https://developer.apple.com/documentation/avfoundation/avassetwriter/inputpixelbufferreceiver(for:pixelbufferattributes:))

# inputPixelBufferReceiver(for:pixelBufferAttributes:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Attaches the input to the writer and returns an input receiver for writing pixel buffers.

## Declaration

```swift
func inputPixelBufferReceiver(for input: AVAssetWriterInput, pixelBufferAttributes attributes: CVPixelBufferCreationAttributes?) -> sending AVAssetWriterInput.PixelBufferReceiver
```

## Parameters

- `input`: The input to be attached to the writer.
- `attributes`: The attributes of pixel buffers that will be vended by the input provider’s pixel buffer pool.

<a id="return-value"></a>

## Return Value

A writer input receiver with an interface for writing pixel buffers.

## See Also

### Configuring input receivers

- [inputReceiver(for:)](inputreceiver%28for_%29.md): Attaches the input to the writer and returns an input receiver for writing sample buffers.
- [inputCaptionReceiver(for:)](inputcaptionreceiver%28for_%29.md): Attaches the input to the writer and returns an input receiver for writing caption data.
- [inputCaptionReceiverRequestingMultiPass(for:)](inputcaptionreceiverrequestingmultipass%28for_%29.md): Attaches the input to the writer and returns a tuple with an input receiver for writing caption data, and an associated multi pass controller.
- [inputMetadataReceiver(for:)](inputmetadatareceiver%28for_%29.md): Attaches the input to the writer and returns an input receiver for writing timed metadata group.
- [inputMetadataReceiverRequestingMultiPass(for:)](inputmetadatareceiverrequestingmultipass%28for_%29.md): Attaches the input to the writer and returns a tuple with an input receiver for writing timed metadata group, and an associated multi pass controller.
- [inputPixelBufferReceiverRequestingMultiPass(for:pixelBufferAttributes:)](inputpixelbufferreceiverrequestingmultipass%28for_pixelbufferattributes_%29.md): Attaches the input to the writer and returns a tuple with an input receiver for writing pixel buffers, and an associated multi pass controller.
- [inputReceiverRequestingMultiPass(for:)](inputreceiverrequestingmultipass%28for_%29.md): Attaches the input to the writer and returns a tuple with an input receiver for writing sample buffers, and an associated multi pass controller.
- [inputTaggedPixelBufferGroupReceiver(for:pixelBufferAttributes:)](inputtaggedpixelbuffergroupreceiver%28for_pixelbufferattributes_%29.md): Attaches the input to the writer and returns an input receiver for writing tagged pixel buffers.
- [inputTaggedPixelBufferGroupReceiverRequestingMultiPass(for:pixelBufferAttributes:)](inputtaggedpixelbuffergroupreceiverrequestingmultipass%28for_pixelbufferattributes_%29.md): Attaches the input to the writer and returns a tuple with an input receiver for writing tagged pixel buffers, and an associated multi pass controller.

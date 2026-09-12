> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/mediaextension/mevideodecoder/canaccept(_:)](https://developer.apple.com/documentation/mediaextension/mevideodecoder/canaccept(_:))

# canAccept(\_:) (Swift)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Asks the extension whether the decoder can decode frames with the format description that you specify.

## Declaration

```swift
optional func canAccept(_ formatDescription: CMFormatDescription) -> Bool
```

## Parameters

- `formatDescription`: The new format description to evaluate.

## See Also

### Decoding frames

- [decodeFrame(from:options:completionHandler:)](decodeframe%28from_options_completionhandler_%29.md): Requests the extension to decode a video frame.
- [MEDecodeFrameStatus](../medecodeframestatus.md): A type that represents a non-error status related to a frame decode operation.

# canAcceptFormatDescription: (Objective-C)

**Framework:** MediaExtension  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Asks the extension whether the decoder can decode frames with the format description that you specify.

## Declaration

```objectivec
- (BOOL) canAcceptFormatDescription:(CMFormatDescriptionRef) formatDescription;
```

## Parameters

- `formatDescription`: The new format description to evaluate.

## See Also

### Decoding frames

- [decodeFrameFromSampleBuffer:options:completionHandler:](decodeframe%28from_options_completionhandler_%29.md): Requests the extension to decode a video frame.
- [MEDecodeFrameStatus](../medecodeframestatus.md): A type that represents a non-error status related to a frame decode operation.

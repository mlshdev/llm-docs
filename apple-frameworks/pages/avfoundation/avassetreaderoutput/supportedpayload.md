> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreaderoutput/supportedpayload](https://developer.apple.com/documentation/avfoundation/avassetreaderoutput/supportedpayload)

# AVAssetReaderOutput.SupportedPayload

**Framework:** AVFoundation  
**Kind:** Protocol  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

## Declaration

```swift
protocol SupportedPayload
```

## Relationships

### Conforming Types

- [AVCaptionGroup](../avcaptiongroup.md)
- [AVMutableTimedMetadataGroup](../avmutabletimedmetadatagroup.md)
- [AVTimedMetadataGroup](../avtimedmetadatagroup.md)

## See Also

### Copying sample buffers

- [copyNextSampleBuffer()](copynextsamplebuffer%28%29.md): Deprecated. Copies the next sample buffer from the output.
- [AVAssetReaderOutput.Provider](provider.md): An object that reads a collection of samples of a common media type from an asset reader.
- [AVAssetReaderOutput.RandomAccessController](randomaccesscontroller.md): Object used to reset an output provider to read specified time ranges.

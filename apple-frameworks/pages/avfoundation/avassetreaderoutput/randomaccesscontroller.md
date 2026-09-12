> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreaderoutput/randomaccesscontroller](https://developer.apple.com/documentation/avfoundation/avassetreaderoutput/randomaccesscontroller)

# AVAssetReaderOutput.RandomAccessController

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Object used to reset an output provider to read specified time ranges.

## Declaration

```swift
class RandomAccessController
```

## Topics

### Configuring a controller

- [markConfigurationAsFinal()](randomaccesscontroller/markconfigurationasfinal%28%29.md): Informs the provider that no more reconfiguration of time ranges is necessary and allows the attached AVAssetReader to advance to `AVAssetReaderStatus/completed`.
- [resetForReading(timeRanges:)](randomaccesscontroller/resetforreading%28timeranges_%29.md): Starts reading over with a new set of time ranges.

## See Also

### Copying sample buffers

- [copyNextSampleBuffer()](copynextsamplebuffer%28%29.md): Deprecated. Copies the next sample buffer from the output.
- [AVAssetReaderOutput.Provider](provider.md): An object that reads a collection of samples of a common media type from an asset reader.
- [AVAssetReaderOutput.SupportedPayload](supportedpayload.md)

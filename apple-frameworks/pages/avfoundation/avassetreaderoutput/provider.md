> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetreaderoutput/provider](https://developer.apple.com/documentation/avfoundation/avassetreaderoutput/provider)

# AVAssetReaderOutput.Provider

**Framework:** AVFoundation  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

An object that reads a collection of samples of a common media type from an asset reader.

## Declaration

```swift
class Provider<Payload> where Payload : AVAssetReaderOutput.SupportedPayload
```

## Topics

### Reading media data

- [captionsNotPresentInPreviousGroups(in:)](provider/captionsnotpresentinpreviousgroups%28in_%29.md): Conforms when `Payload` is `AVCaptionGroup`. Returns the set of captions that are present in the given group but were not present in any group previously vended by calls to next().
- [next()](provider/next%28%29.md): Returns the next piece of media data.

## See Also

### Copying sample buffers

- [copyNextSampleBuffer()](copynextsamplebuffer%28%29.md): Deprecated. Copies the next sample buffer from the output.
- [AVAssetReaderOutput.RandomAccessController](randomaccesscontroller.md): Object used to reset an output provider to read specified time ranges.
- [AVAssetReaderOutput.SupportedPayload](supportedpayload.md)

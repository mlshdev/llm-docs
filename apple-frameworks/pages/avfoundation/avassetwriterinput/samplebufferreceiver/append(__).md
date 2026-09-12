> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/samplebufferreceiver/append(_:)](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/samplebufferreceiver/append(_:))

# append(\_:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Suspends until the input is ready for more media data, then appends the sample buffer.

## Declaration

```swift
nonisolated(nonsending) func append(_ sampleBuffer: CMReadySampleBuffer<CMSampleBuffer.DynamicContent>) async throws
```

## Parameters

- `sampleBuffer`: The sample buffer to be appended.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the underlying writer failed.

## See Also

### Appending samples

- [appendImmediately(\_:)](appendimmediately%28__%29.md): Appends the sample buffer synchronously if the input is ready for more media data.
- [finish()](finish%28%29.md): Indicates to the AVAssetWriter that no more buffers will be appended to this receiver.

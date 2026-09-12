> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/samplebufferreceiver/appendimmediately(_:)](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/samplebufferreceiver/appendimmediately(_:))

# appendImmediately(\_:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Appends the sample buffer synchronously if the input is ready for more media data.

## Declaration

```swift
func appendImmediately(_ sampleBuffer: CMReadySampleBuffer<CMSampleBuffer.DynamicContent>) throws -> Bool
```

## Parameters

- `sampleBuffer`: The sample buffer to be appended

<a id="return-value"></a>

## Return Value

Returns true if the append was successful, false if the input was not ready for more media data.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the underlying writer failed.

## See Also

### Appending samples

- [append(\_:)](append%28__%29.md): Suspends until the input is ready for more media data, then appends the sample buffer.
- [finish()](finish%28%29.md): Indicates to the AVAssetWriter that no more buffers will be appended to this receiver.

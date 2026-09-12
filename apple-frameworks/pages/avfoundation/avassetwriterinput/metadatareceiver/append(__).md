> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/metadatareceiver/append(_:)](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/metadatareceiver/append(_:))

# append(\_:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Suspends until the input is ready for more media data, then appends the timed metadata group.

## Declaration

```swift
nonisolated(nonsending) func append(_ timedMetadataGroup: AVTimedMetadataGroup) async throws
```

## Parameters

- `timedMetadataGroup`: The timed metadata group to be appended.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the underlying writer failed.

## See Also

### Appending metadata

- [appendImmediately(\_:)](appendimmediately%28__%29.md): Appends the timed metadata group synchronously if the input is ready for more media data.
- [finish()](finish%28%29.md): Indicates to the AVAssetWriter that no more buffers will be appended to this receiver.

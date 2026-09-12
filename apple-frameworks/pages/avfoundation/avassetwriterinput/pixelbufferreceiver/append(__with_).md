> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/pixelbufferreceiver/append(_:with:)](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/pixelbufferreceiver/append(_:with:))

# append(\_:with:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Suspends until the input is ready for more media data, then appends the pixel buffer.

## Declaration

```swift
nonisolated(nonsending) func append(_ pixelBuffer: CVReadOnlyPixelBuffer, with presentationTime: CMTime) async throws
```

## Parameters

- `pixelBuffer`: The pixel buffer to be appended.
- `presentationTime`: The presentation time for the pixel buffer to be appended.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the underlying writer failed.

## See Also

### Appending pixel buffers

- [appendImmediately(\_:with:)](appendimmediately%28__with_%29.md): Appends the pixel buffer synchronously if the input is ready for more media data.
- [finish()](finish%28%29.md): Indicates to the AVAssetWriter that no more buffers will be appended to this receiver.

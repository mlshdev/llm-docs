> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avassetwriterinput/captionreceiver/append(_:)-4opbd](https://developer.apple.com/documentation/avfoundation/avassetwriterinput/captionreceiver/append(_:)-4opbd)

# append(\_:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Suspends until the input is ready for more media data, then appends the caption group.

## Declaration

```swift
nonisolated(nonsending) func append(_ captionGroup: AVCaptionGroup) async throws
```

## Parameters

- `captionGroup`: The caption group to be appended.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the underlying writer failed.

## See Also

### Appending captions

- [append(\_:)](append%28__%29-4wpi2.md): Suspends until the input is ready for more media data, then appends the caption.
- [appendImmediately(\_:)](appendimmediately%28__%29-7q21r.md): Appends the caption group synchronously if the input is ready for more media data.
- [appendImmediately(\_:)](appendimmediately%28__%29-9uy14.md): Appends the caption synchronously if the input is ready for more media data.
- [finish()](finish%28%29.md): Indicates to the AVAssetWriter that no more buffers will be appended to this receiver.

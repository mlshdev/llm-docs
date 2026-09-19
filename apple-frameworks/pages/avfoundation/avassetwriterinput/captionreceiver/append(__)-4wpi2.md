> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avassetwriterinput/captionreceiver/append(_:)-4wpi2

# append(\_:)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Suspends until the input is ready for more media data, then appends the caption.

## Declaration

```swift
nonisolated(nonsending) func append(_ caption: AVCaption) async throws
```

## Parameters

- `caption`: The caption to be appended.

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if the underlying writer failed.

## See Also

### Appending captions

- [append(\_:)](append%28__%29-4opbd.md): Suspends until the input is ready for more media data, then appends the caption group.
- [appendImmediately(\_:)](appendimmediately%28__%29-7q21r.md): Appends the caption group synchronously if the input is ready for more media data.
- [appendImmediately(\_:)](appendimmediately%28__%29-9uy14.md): Appends the caption synchronously if the input is ready for more media data.
- [finish()](finish%28%29.md): Indicates to the AVAssetWriter that no more buffers will be appended to this receiver.

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avassetwriterinput/captionreceiver/finish()

# finish()

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+

Indicates to the AVAssetWriter that no more buffers will be appended to this receiver.

## Declaration

```swift
func finish()
```

## See Also

### Appending captions

- [append(\_:)](append%28__%29-4opbd.md): Suspends until the input is ready for more media data, then appends the caption group.
- [append(\_:)](append%28__%29-4wpi2.md): Suspends until the input is ready for more media data, then appends the caption.
- [appendImmediately(\_:)](appendimmediately%28__%29-7q21r.md): Appends the caption group synchronously if the input is ready for more media data.
- [appendImmediately(\_:)](appendimmediately%28__%29-9uy14.md): Appends the caption synchronously if the input is ready for more media data.

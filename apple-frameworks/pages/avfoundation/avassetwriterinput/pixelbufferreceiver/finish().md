> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avassetwriterinput/pixelbufferreceiver/finish()

# finish()

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Indicates to the AVAssetWriter that no more buffers will be appended to this receiver.

## Declaration

```swift
func finish()
```

## See Also

### Appending pixel buffers

- [append(\_:with:)](append%28__with_%29.md): Suspends until the input is ready for more media data, then appends the pixel buffer.
- [appendImmediately(\_:with:)](appendimmediately%28__with_%29.md): Appends the pixel buffer synchronously if the input is ready for more media data.

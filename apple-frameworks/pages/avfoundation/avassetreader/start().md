> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfoundation/avassetreader/start()

# start()

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Prepares the reader to read media data from the asset.

## Declaration

```swift
func start() throws
```

<a id="discussion"></a>

## Discussion

> **Throws**

> An error if reading fails to start.

## See Also

### Controlling reading

- [startReading()](startreading%28%29.md): Deprecated. Prepares the asset reader to start reading sample buffers from the asset.
- [cancelReading()](cancelreading%28%29.md): Cancels any background work and stops the reader’s outputs from reading more samples.

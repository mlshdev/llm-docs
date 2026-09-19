> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/datascannerviewcontroller/isscanning

# isScanning

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

A Boolean value that indicates whether the data scanner is actively looking for items.

## Declaration

```swift
@MainActor var isScanning: Bool { get }
```

## See Also

### Scanning and recognizing items

- [startScanning()](startscanning%28%29.md): Starts scanning the camera’s live video for data.
- [stopScanning()](stopscanning%28%29.md): Stops scanning the camera’s live video for data.
- [recognizedItems](recognizeditems.md): An asynchronous array of items that the data scanner currently recognizes in the camera’s live video.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/datascannerviewcontroller/startscanning()](https://developer.apple.com/documentation/visionkit/datascannerviewcontroller/startscanning())

# startScanning()

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

Starts scanning the camera’s live video for data.

## Declaration

```swift
@MainActor func startScanning() throws
```

## Mentioned In

- [Scanning data with the camera](../scanning-data-with-the-camera.md)

## See Also

### Scanning and recognizing items

- [stopScanning()](stopscanning%28%29.md): Stops scanning the camera’s live video for data.
- [isScanning](isscanning.md): A Boolean value that indicates whether the data scanner is actively looking for items.
- [recognizedItems](recognizeditems.md): An asynchronous array of items that the data scanner currently recognizes in the camera’s live video.

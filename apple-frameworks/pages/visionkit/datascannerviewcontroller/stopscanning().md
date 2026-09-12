> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/datascannerviewcontroller/stopscanning()](https://developer.apple.com/documentation/visionkit/datascannerviewcontroller/stopscanning())

# stopScanning()

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

Stops scanning the camera’s live video for data.

## Declaration

```swift
@MainActor func stopScanning()
```

## Mentioned In

- [Scanning data with the camera](../scanning-data-with-the-camera.md)

<a id="discussion"></a>

## Discussion

This method removes all items from the [recognizedItems](recognizeditems.md) property.

## See Also

### Scanning and recognizing items

- [startScanning()](startscanning%28%29.md): Starts scanning the camera’s live video for data.
- [isScanning](isscanning.md): A Boolean value that indicates whether the data scanner is actively looking for items.
- [recognizedItems](recognizeditems.md): An asynchronous array of items that the data scanner currently recognizes in the camera’s live video.

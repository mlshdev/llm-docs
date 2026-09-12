> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/datascannerviewcontroller/recognizeditems](https://developer.apple.com/documentation/visionkit/datascannerviewcontroller/recognizeditems)

# recognizedItems

**Framework:** VisionKit  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · visionOS 1.0+

An asynchronous array of items that the data scanner currently recognizes in the camera’s live video.

## Declaration

```swift
@MainActor var recognizedItems: AsyncStream<[RecognizedItem]> { get }
```

<a id="discussion"></a>

## Discussion

You can use this property instead of the [DataScannerViewControllerDelegate](../datascannerviewcontrollerdelegate.md) protocol methods to track the recognized items in real time. To get the changes between arrays, use the [difference(from:)](https://developer.apple.com/documentation/swift/array/difference%28from:%29) method. For more information on asynchronous streams, see [Concurrency](https://developer.apple.com/documentation/swift/concurrency).

Text items in this array appear in the reading order of the language and region.

## See Also

### Scanning and recognizing items

- [startScanning()](startscanning%28%29.md): Starts scanning the camera’s live video for data.
- [stopScanning()](stopscanning%28%29.md): Stops scanning the camera’s live video for data.
- [isScanning](isscanning.md): A Boolean value that indicates whether the data scanner is actively looking for items.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/cameraframeprovider/cameraframeupdates/makeasynciterator()](https://developer.apple.com/documentation/arkit/cameraframeprovider/cameraframeupdates/makeasynciterator())

# makeAsyncIterator()

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Creates an asynchronous iterator that produces `CameraFrame` elements on this asynchronous sequence.

## Declaration

```swift
func makeAsyncIterator() -> CameraFrameProvider.CameraFrameUpdates.Iterator
```

<a id="return-value"></a>

## Return Value

An Iterator for `Events`

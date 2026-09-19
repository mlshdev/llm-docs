> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/arkit/cameraframeprovider/cameraframeupdates/makeasynciterator()

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

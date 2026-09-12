> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/cameraframeprovider/cameraframeupdates/iterator/next()](https://developer.apple.com/documentation/arkit/cameraframeprovider/cameraframeupdates/iterator/next())

# next()

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Asynchronously advances to the next element and returns it, or ends the sequence if there’s no next element.

## Declaration

```swift
mutating func next() async -> CameraFrameProvider.CameraFrameUpdates.Element?
```

<a id="return-value"></a>

## Return Value

The next element, if it exists, or nil to signal the end of the sequence.

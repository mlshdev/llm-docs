> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/cameraframeprovider/cameraframeupdates](https://developer.apple.com/documentation/arkit/cameraframeprovider/cameraframeupdates)

# CameraFrameProvider.CameraFrameUpdates

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

A sequence of camera frames.

## Declaration

```swift
struct CameraFrameUpdates
```

## Topics

### Instance properties

- [isSupported](issupported.md): A Boolean value that indicates whether this device supports the camera frame provider.
- [requiredAuthorizations](requiredauthorizations.md): The authorization types you need to use the camera frame provider.

### Instance methods

- [makeAsyncIterator()](cameraframeupdates/makeasynciterator%28%29.md): Creates an asynchronous iterator that produces `CameraFrame` elements on this asynchronous sequence.

### Iterating over camera updates

- [CameraFrameProvider.CameraFrameUpdates.Iterator](cameraframeupdates/iterator.md): An asynchronous iterator that produces camera frame elements on an asynchronous sequence.

### Type aliases

- [CameraFrameProvider.CameraFrameUpdates.Element](cameraframeupdates/element.md): The type of element produced by this asynchronous sequence of camera frame structures.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)

## See Also

### Getting camera frame updates

- [cameraFrameUpdates(for:)](cameraframeupdates%28for_%29.md): Gets a sequence of camera frame updates for a given video format.

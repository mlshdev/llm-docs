> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/cameraframeprovider/cameraframeupdates/iterator](https://developer.apple.com/documentation/arkit/cameraframeprovider/cameraframeupdates/iterator)

# CameraFrameProvider.CameraFrameUpdates.Iterator

**Framework:** ARKit  
**Kind:** Structure  
**Availability:** visionOS 2.0+

An asynchronous iterator that produces camera frame elements on an asynchronous sequence.

## Declaration

```swift
struct Iterator
```

## Topics

### Type methods

- [next()](iterator/next%28%29.md): Asynchronously advances to the next element and returns it, or ends the sequence if there’s no next element.

### Type aliases

- [CameraFrameProvider.CameraFrameUpdates.Element](element.md): The type of element produced by this asynchronous sequence of camera frame structures.

## Relationships

### Conforms To

- [AsyncIteratorProtocol](https://developer.apple.com/documentation/swift/asynciteratorprotocol)

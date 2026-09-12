> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/videoreader/cameraasyncbuffers/iterator](https://developer.apple.com/documentation/createmlcomponents/videoreader/cameraasyncbuffers/iterator)

# VideoReader.CameraAsyncBuffers.Iterator

**Framework:** Create ML Components  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An async iterator of video frames.

## Declaration

```swift
final class Iterator
```

## Topics

### Getting the next element

- [next()](iterator/next%28%29.md): Advances to the next element and returns it, or nil if no next element exists.

## Relationships

### Conforms To

- [AsyncIteratorProtocol](https://developer.apple.com/documentation/swift/asynciteratorprotocol)

## See Also

### Creating an iterator

- [makeAsyncIterator()](makeasynciterator%28%29.md): Constructs an iterator.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/audioreader/asyncbuffers](https://developer.apple.com/documentation/createmlcomponents/audioreader/asyncbuffers)

# AudioReader.AsyncBuffers

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An async sequence of audio buffers read from an audio file.

## Declaration

```swift
struct AsyncBuffers
```

<a id="overview"></a>

## Overview

This sequence allows iterating through the file only once.

## Topics

### Getting the count

- [count](asyncbuffers/count.md): The number of audio buffers in the file.

### Getting the url

- [url](asyncbuffers/url.md): The audio file URL, used when throwing an error.

### Creating an iterator

- [makeAsyncIterator()](asyncbuffers/makeasynciterator%28%29.md): Constructs an iterator.
- [AudioReader.AsyncBuffers.Iterator](asyncbuffers/iterator.md): An async iterator of audio buffers.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [TemporalSequence](../temporalsequence.md)

## See Also

### Managing buffers

- [AudioReader.Configuration](configuration-swift.struct.md): The configuration of the audio reader.
- [AudioReader.MicrophoneAsyncBuffers](microphoneasyncbuffers.md): An async sequence of audio frames.

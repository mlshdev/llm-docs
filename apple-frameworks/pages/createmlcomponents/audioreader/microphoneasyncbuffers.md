> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/audioreader/microphoneasyncbuffers](https://developer.apple.com/documentation/createmlcomponents/audioreader/microphoneasyncbuffers)

# AudioReader.MicrophoneAsyncBuffers

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An async sequence of audio frames.

## Declaration

```swift
struct MicrophoneAsyncBuffers
```

<a id="overview"></a>

## Overview

This sequence allows iterating through the microphone audio frames.

## Topics

### Getting the count

- [count](microphoneasyncbuffers/count.md): The number of audio buffers. For this sequence count is always nil.

### Creating an iterator

- [makeAsyncIterator()](microphoneasyncbuffers/makeasynciterator%28%29.md): Constructs an iterator.
- [AudioReader.MicrophoneAsyncBuffers.Iterator](microphoneasyncbuffers/iterator.md): An async iterator of audio frames.

## Relationships

### Conforms To

- [AsyncSequence](https://developer.apple.com/documentation/swift/asyncsequence)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [TemporalSequence](../temporalsequence.md)

## See Also

### Managing buffers

- [AudioReader.AsyncBuffers](asyncbuffers.md): An async sequence of audio buffers read from an audio file.
- [AudioReader.Configuration](configuration-swift.struct.md): The configuration of the audio reader.

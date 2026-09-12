> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/audioreader/configuration-swift.struct](https://developer.apple.com/documentation/createmlcomponents/audioreader/configuration-swift.struct)

# AudioReader.Configuration

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

The configuration of the audio reader.

## Declaration

```swift
struct Configuration
```

## Topics

### Creating a configuration

- [init()](configuration-swift.struct/init%28%29.md): Creates an AudioReader Configuration
- [init(frameCount:)](configuration-swift.struct/init%28framecount_%29.md): Creates an AudioReader Configuration

### Getting the frame count

- [frameCount](configuration-swift.struct/framecount.md): The maximum size of each buffer in frames. The default value is `4096`.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Managing buffers

- [AudioReader.AsyncBuffers](asyncbuffers.md): An async sequence of audio buffers read from an audio file.
- [AudioReader.MicrophoneAsyncBuffers](microphoneasyncbuffers.md): An async sequence of audio frames.

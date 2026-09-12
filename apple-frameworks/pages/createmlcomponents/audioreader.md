> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/audioreader](https://developer.apple.com/documentation/createmlcomponents/audioreader)

# AudioReader

**Framework:** Create ML Components  
**Kind:** Structure  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

An audio file reader.

## Declaration

```swift
struct AudioReader
```

## Topics

### Creating an audio reader

- [init(configuration:)](audioreader/init%28configuration_%29.md): Creates an audio reader.

### Getting the properties

- [configuration](audioreader/configuration-swift.property.md): The audio reader configuration

### Managing buffers

- [AudioReader.AsyncBuffers](audioreader/asyncbuffers.md): An async sequence of audio buffers read from an audio file.
- [AudioReader.Configuration](audioreader/configuration-swift.struct.md): The configuration of the audio reader.
- [AudioReader.MicrophoneAsyncBuffers](audioreader/microphoneasyncbuffers.md): An async sequence of audio frames.

### Reading audio

- [read(contentsOf:configuration:)](audioreader/read%28contentsof_configuration_%29.md): Reads an audio file as an async sequence of audio buffers.
- [read(\_:configuration:)](audioreader/read%28__configuration_%29.md): Reads a sequence of annotated files as a lazy sequence of results each containing an audio buffers or an error.
- [readMicrophone(configuration:)](audioreader/readmicrophone%28configuration_%29.md): Reads an async sequence of audio frames captured with a microphone.

### Applying

- [applied(to:eventHandler:)](audioreader/applied%28to_eventhandler_%29.md): Reads an audio file as an async sequence of audio buffers.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Transformer](transformer.md)

## See Also

### Audio components

- [AudioFeaturePrint](audiofeatureprint.md): A stream transformer that extracts audio features from audio buffers.
- [AudioConvertingTransformer](audioconvertingtransformer.md): A transformer for audio conversion.

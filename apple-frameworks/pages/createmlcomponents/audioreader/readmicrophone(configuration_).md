> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/audioreader/readmicrophone(configuration:)](https://developer.apple.com/documentation/createmlcomponents/audioreader/readmicrophone(configuration:))

# readMicrophone(configuration:)

**Framework:** Create ML Components  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Reads an async sequence of audio frames captured with a microphone.

## Declaration

```swift
static func readMicrophone(configuration: AudioReader.Configuration = .init()) async throws -> AudioReader.MicrophoneAsyncBuffers
```

## Parameters

- `configuration`: The configuration for reading buffers.

<a id="return-value"></a>

## Return Value

An async sequence of `AVAudioPCMBuffer`.

## See Also

### Reading audio

- [read(contentsOf:configuration:)](read%28contentsof_configuration_%29.md): Reads an audio file as an async sequence of audio buffers.
- [read(\_:configuration:)](read%28__configuration_%29.md): Reads a sequence of annotated files as a lazy sequence of results each containing an audio buffers or an error.

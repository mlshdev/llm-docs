> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/audioreader/read(contentsof:configuration:)](https://developer.apple.com/documentation/createmlcomponents/audioreader/read(contentsof:configuration:))

# read(contentsOf:configuration:)

**Framework:** Create ML Components  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Reads an audio file as an async sequence of audio buffers.

## Declaration

```swift
static func read(contentsOf url: URL, configuration: AudioReader.Configuration = .init()) throws -> AudioReader.AsyncBuffers
```

## Parameters

- `url`: An audio file URL.
- `configuration`: The configuration for reading buffers.

<a id="return-value"></a>

## Return Value

An async sequence of `AVAudioPCMBuffer`.

## See Also

### Reading audio

- [read(\_:configuration:)](read%28__configuration_%29.md): Reads a sequence of annotated files as a lazy sequence of results each containing an audio buffers or an error.
- [readMicrophone(configuration:)](readmicrophone%28configuration_%29.md): Reads an async sequence of audio frames captured with a microphone.

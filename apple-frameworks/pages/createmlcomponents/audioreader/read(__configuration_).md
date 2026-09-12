> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/audioreader/read(_:configuration:)](https://developer.apple.com/documentation/createmlcomponents/audioreader/read(_:configuration:))

# read(\_:configuration:)

**Framework:** Create ML Components  
**Kind:** Type Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Reads a sequence of annotated files as a lazy sequence of results each containing an audio buffers or an error.

## Declaration

```swift
static func read<S, Annotation>(_ annotatedFiles: S, configuration: AudioReader.Configuration = .init()) throws -> [AnnotatedFeature<AudioReader.AsyncBuffers, Annotation>] where S : Sequence, Annotation : Equatable, Annotation : Sendable, S.Element == AnnotatedFeature<URL, Annotation>
```

## Parameters

- `annotatedFiles`: A sequence of annotated URLs.
- `configuration`: The configuration for reading buffers.

<a id="return-value"></a>

## Return Value

An array of annotated async sequences.

## See Also

### Reading audio

- [read(contentsOf:configuration:)](read%28contentsof_configuration_%29.md): Reads an audio file as an async sequence of audio buffers.
- [readMicrophone(configuration:)](readmicrophone%28configuration_%29.md): Reads an async sequence of audio frames captured with a microphone.

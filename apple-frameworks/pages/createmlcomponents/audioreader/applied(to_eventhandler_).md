> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/createmlcomponents/audioreader/applied(to:eventhandler:)](https://developer.apple.com/documentation/createmlcomponents/audioreader/applied(to:eventhandler:))

# applied(to:eventHandler:)

**Framework:** Create ML Components  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+

Reads an audio file as an async sequence of audio buffers.

## Declaration

```swift
func applied(to url: URL, eventHandler: EventHandler? = nil) throws -> AudioReader.AsyncBuffers
```

## Parameters

- `url`: An audio file URL.
- `eventHandler`: An event handler.

<a id="return-value"></a>

## Return Value

An async sequence of `AVAudioPCMBuffer`.

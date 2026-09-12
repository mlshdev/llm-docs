> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfaudio/avaudiofile/read(framecount:)](https://developer.apple.com/documentation/avfaudio/avaudiofile/read(framecount:))

# read(frameCount:)

**Framework:** AVFAudio  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
func read(frameCount: AVAudioFrameCount) throws -> AVReadOnlyAudioPCMBuffer
```

## See Also

### Reading and Writing the Audio Buffer

- [read(into:)](read%28into_%29.md): Reads an entire audio buffer.
- [read(into:frameCount:)](read%28into_framecount_%29.md): Reads a portion of an audio buffer using the number of frames you specify.
- [close()](close%28%29.md): Closes the audio file.

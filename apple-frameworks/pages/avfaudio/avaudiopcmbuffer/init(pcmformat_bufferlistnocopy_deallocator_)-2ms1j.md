> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-9afb9b6c8001; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/avfaudio/avaudiopcmbuffer/init(pcmformat:bufferlistnocopy:deallocator:)-2ms1j

# init(PCMFormat:bufferListNoCopy:deallocator:)

**Framework:** AVFAudio  
**Kind:** Initializer  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 15.0+ · visionOS 1.0+ · watchOS 8.0+

## Declaration

```swift
init?(PCMFormat format: AVAudioFormat, bufferListNoCopy bufferList: UnsafePointer<AudioBufferList>, deallocator: ((UnsafePointer<AudioBufferList>) -> Void)? = nil)
```

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudio/unsafemutableaudiobufferlistpointer/subscript(_:)

# subscript(\_:)

**Framework:** Core Audio  
**Kind:** Instance Subscript  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Access an indexed `AudioBuffer` (`mBuffers[i]`).

## Declaration

```swift
subscript(index: UnsafeMutableAudioBufferListPointer.Index) -> UnsafeMutableAudioBufferListPointer.Element { get nonmutating set }
```

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudio/unsafemutableaudiobufferlistpointer/subscript(_:)](https://developer.apple.com/documentation/coreaudio/unsafemutableaudiobufferlistpointer/subscript(_:))

# subscript(\_:)

**Framework:** Core Audio  
**Kind:** Instance Subscript  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Access an indexed `AudioBuffer` (`mBuffers[i]`).

## Declaration

```swift
subscript(index: UnsafeMutableAudioBufferListPointer.Index) -> UnsafeMutableAudioBufferListPointer.Element { get nonmutating set }
```

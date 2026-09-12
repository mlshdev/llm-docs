> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coreaudiotypes/audiobufferlist/allocate(maximumbuffers:)](https://developer.apple.com/documentation/coreaudiotypes/audiobufferlist/allocate(maximumbuffers:))

# allocate(maximumBuffers:)

**Framework:** Core Audio Types  
**Kind:** Type Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Allocate an `AudioBufferList` with a capacity for the specified number of `AudioBuffer`s.

## Declaration

```swift
static func allocate(maximumBuffers: Int) -> UnsafeMutableAudioBufferListPointer
```

<a id="discussion"></a>

## Discussion

The `count` property of the new `AudioBufferList` is initialized to `maximumBuffers`.

The memory should be freed with `free()`.

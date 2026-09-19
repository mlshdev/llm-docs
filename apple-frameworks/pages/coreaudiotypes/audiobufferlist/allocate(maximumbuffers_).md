> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudiotypes/audiobufferlist/allocate(maximumbuffers:)

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

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreaudiotypes/audiobufferlist/init(mnumberbuffers:mbuffers:)

# init(mNumberBuffers:mBuffers:)

**Framework:** Core Audio Types  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates an audio buffer list with audio buffers.

## Declaration

```swift
init(mNumberBuffers: UInt32, mBuffers: AudioBuffer)
```

## Parameters

- `mNumberBuffers`: The number of audio buffers in the list.
- `mBuffers`: A variable-length array of audio buffers.

## See Also

### Creating a Buffer List

- [init()](init%28%29.md): Creates an empty audio buffer list.

> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmmutabledatablockbuffer/memorypool/makeblockbuffer(copying:)

# makeBlockBuffer(copying:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a block buffer by copying the given audio buffer list.

## Declaration

```swift
final func makeBlockBuffer(copying audioBuffers: UnsafePointer<AudioBufferList>) -> CMMutableDataBlockBuffer
```

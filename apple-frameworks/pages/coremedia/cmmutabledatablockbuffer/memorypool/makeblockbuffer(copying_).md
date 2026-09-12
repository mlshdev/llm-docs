> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmutabledatablockbuffer/memorypool/makeblockbuffer(copying:)](https://developer.apple.com/documentation/coremedia/cmmutabledatablockbuffer/memorypool/makeblockbuffer(copying:))

# makeBlockBuffer(copying:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a block buffer by copying the given audio buffer list.

## Declaration

```swift
final func makeBlockBuffer(copying audioBuffers: UnsafePointer<AudioBufferList>) -> CMMutableDataBlockBuffer
```

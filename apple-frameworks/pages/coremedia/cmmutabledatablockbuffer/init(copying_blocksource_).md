> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmutabledatablockbuffer/init(copying:blocksource:)](https://developer.apple.com/documentation/coremedia/cmmutabledatablockbuffer/init(copying:blocksource:))

# init(copying:blockSource:)

**Framework:** Core Media  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a block buffer by copying the given audio buffer list.

## Declaration

```swift
init(copying audioBuffers: UnsafePointer<AudioBufferList>, blockSource: CMMutableDataBlockBuffer.BlockSource? = nil)
```

## Parameters

- `audioBuffers`: Audio buffer list to copy into the new block buffer.
- `blockSource`: Optional source to allocate and deallocate memory for the data blocks.

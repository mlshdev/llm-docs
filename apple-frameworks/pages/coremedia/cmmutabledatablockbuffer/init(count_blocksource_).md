> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmutabledatablockbuffer/init(count:blocksource:)](https://developer.apple.com/documentation/coremedia/cmmutabledatablockbuffer/init(count:blocksource:))

# init(count:blockSource:)

**Framework:** Core Media  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a block buffer with `count` number of bytes.

## Declaration

```swift
init(count: Int = 0, blockSource: CMMutableDataBlockBuffer.BlockSource? = nil)
```

## Parameters

- `count`: Number of bytes to allocate in the block buffer.
- `blockSource`: Optional source to allocate and deallocate memory for the data blocks.

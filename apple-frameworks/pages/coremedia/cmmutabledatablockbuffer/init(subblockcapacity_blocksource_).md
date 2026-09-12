> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmutabledatablockbuffer/init(subblockcapacity:blocksource:)](https://developer.apple.com/documentation/coremedia/cmmutabledatablockbuffer/init(subblockcapacity:blocksource:))

# init(subBlockCapacity:blockSource:)

**Framework:** Core Media  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Creates a block buffer with at least `subBlockCapacity` number of sub blocks.

## Declaration

```swift
init(subBlockCapacity: Int, blockSource: CMMutableDataBlockBuffer.BlockSource? = nil)
```

## Parameters

- `subBlockCapacity`: Number of sub-blocks the new block buffer shall accommodate before expansion occurs. A value of zero means “do the reasonable default”.
- `blockSource`: Optional source to allocate and deallocate memory for the data blocks.

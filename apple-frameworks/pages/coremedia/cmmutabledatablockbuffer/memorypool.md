> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmutabledatablockbuffer/memorypool](https://developer.apple.com/documentation/coremedia/cmmutabledatablockbuffer/memorypool)

# CMMutableDataBlockBuffer.MemoryPool

**Framework:** Core Media  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Optimize memory allocations when working with large block buffers.

## Declaration

```swift
final class MemoryPool
```

<a id="overview"></a>

## Overview

This is a memory allocation service that holds a pool of recently deallocated memory. Its purpose is to speed up subsequent allocations of the same size. You should use a pool in cases where you need to repeatedly allocate large blocks of memory, such as a video encoding app that outputs compressed data.

This object allocates memory by page. It doesn’t sub-allocate memory within pages, so don’t use it to allocate small blocks. A pool instance deallocates memory if it isn’t reused in `ageOutDuration`, so that short-term peak usage doesn’t cause persistent bloat.

## Topics

### Initializers

- [init(ageOutDuration:)](memorypool/init%28ageoutduration_%29.md)

### Instance Methods

- [flush()](memorypool/flush%28%29.md): Release all memory that the pool was waiting to deallocate.
- [makeBlockBuffer(copying:)](memorypool/makeblockbuffer%28copying_%29.md): Creates a block buffer by copying the given audio buffer list.
- [makeBlockBuffer(count:)](memorypool/makeblockbuffer%28count_%29.md): Creates a block buffer with `count` number of bytes.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

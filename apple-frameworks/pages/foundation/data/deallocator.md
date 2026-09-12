> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/data/deallocator](https://developer.apple.com/documentation/foundation/data/deallocator)

# Data.Deallocator

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

A deallocator you use to customize how the backing store is deallocated for data created with the no-copy initializer.

## Declaration

```swift
enum Deallocator
```

## Topics

### Enumeration Cases

- [Data.Deallocator.custom(\_:)](deallocator/custom%28__%29.md): A custom deallocator.
- [Data.Deallocator.free](deallocator/free.md): Use `free`.
- [Data.Deallocator.none](deallocator/none.md): Do nothing upon deallocation.
- [Data.Deallocator.unmap](deallocator/unmap.md): Use `munmap`.
- [Data.Deallocator.virtualMemory](deallocator/virtualmemory.md)

## See Also

### Creating Data from Raw Memory

- [init(bytes:count:)](init%28bytes_count_%29.md): Creates data with copied memory content.
- [init(buffer:)](init%28buffer_%29-75sng.md): Creates a data buffer with copied memory content using a buffer pointer.
- [init(buffer:)](init%28buffer_%29-6xgv4.md): Creates a data buffer with copied memory content using a mutable buffer pointer.
- [init(bytesNoCopy:count:deallocator:)](init%28bytesnocopy_count_deallocator_%29.md): Creates a data buffer with memory content without copying the bytes.

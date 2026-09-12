> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/data/init(buffer:)-75sng](https://developer.apple.com/documentation/foundation/data/init(buffer:)-75sng)

# init(buffer:)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 8.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Creates a data buffer with copied memory content using a buffer pointer.

## Declaration

```swift
init<SourceType>(buffer: UnsafeBufferPointer<SourceType>)
```

## Parameters

- `buffer`: A buffer pointer to copy. The size is calculated from `SourceType` and `buffer.count`.

## See Also

### Creating Populated Data

- [init()](init%28%29.md): Creates an empty data buffer.
- [init(buffer:)](init%28buffer_%29-6xgv4.md): Creates a data buffer with copied memory content using a mutable buffer pointer.
- [init(bytes:count:)](init%28bytes_count_%29.md): Creates data with copied memory content.
- [init(bytesNoCopy:count:deallocator:)](init%28bytesnocopy_count_deallocator_%29.md): Creates a data buffer with memory content without copying the bytes.
- [init(capacity:)](init%28capacity_%29.md): Creates an empty data buffer of a specified size.
- [init(count:)](init%28count_%29.md): Creates a new data buffer with the specified count of zeroed bytes.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchdata/init(bytes:)-9lrd](https://developer.apple.com/documentation/dispatch/dispatchdata/init(bytes:)-9lrd)

# init(bytes:)

**Framework:** Dispatch  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new dispatch data object from the specified memory buffer.

## Declaration

```swift
init(bytes buffer: UnsafeRawBufferPointer)
```

## Parameters

- `buffer`: A contiguous buffer of memory containing the initial data.

## See Also

### Creating a Dispatch Data Structure

- [init(bytesNoCopy:deallocator:)](init%28bytesnocopy_deallocator_%29-vfoe.md): Creates a new dispatch data object using the specified memory buffer and deallocator.
- [withUnsafeBytes(body:)](withunsafebytes%28body_%29.md)
- [DispatchData.Deallocator](deallocator.md): Memory deallocators for dispatch data objects.
- [empty](empty.md): A dispatch data object representing a zero-length memory region.

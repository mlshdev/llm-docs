> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchdata/init(bytesnocopy:deallocator:)-vfoe](https://developer.apple.com/documentation/dispatch/dispatchdata/init(bytesnocopy:deallocator:)-vfoe)

# init(bytesNoCopy:deallocator:)

**Framework:** Dispatch  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a new dispatch data object using the specified memory buffer and deallocator.

## Declaration

```swift
init(bytesNoCopy bytes: UnsafeRawBufferPointer, deallocator: DispatchData.Deallocator = .free)
```

## Parameters

- `bytes`: A contiguous buffer of memory containing the initial data.
- `deallocator`: The deallocator responsible for releasing the memory associated with the data object. For a list of possible options, see [DispatchData.Deallocator](deallocator.md).

## See Also

### Creating a Dispatch Data Structure

- [init(bytes:)](init%28bytes_%29-9lrd.md): Creates a new dispatch data object from the specified memory buffer.
- [withUnsafeBytes(body:)](withunsafebytes%28body_%29.md)
- [DispatchData.Deallocator](deallocator.md): Memory deallocators for dispatch data objects.
- [empty](empty.md): A dispatch data object representing a zero-length memory region.

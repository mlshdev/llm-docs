> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchdata/deallocator](https://developer.apple.com/documentation/dispatch/dispatchdata/deallocator)

# DispatchData.Deallocator

**Framework:** Dispatch  
**Kind:** Enumeration  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Memory deallocators for dispatch data objects.

## Declaration

```swift
enum Deallocator
```

## Topics

### Deallocators

- [DispatchData.Deallocator.free](deallocator/free.md): Use `free` to deallocate memory.
- [DispatchData.Deallocator.unmap](deallocator/unmap.md): Use `munmap` to deallocate memory.
- [DispatchData.Deallocator.custom(\_:\_:)](deallocator/custom%28____%29.md): Use a custom deallocator.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating a Dispatch Data Structure

- [init(bytes:)](init%28bytes_%29-9lrd.md): Creates a new dispatch data object from the specified memory buffer.
- [init(bytesNoCopy:deallocator:)](init%28bytesnocopy_deallocator_%29-vfoe.md): Creates a new dispatch data object using the specified memory buffer and deallocator.
- [withUnsafeBytes(body:)](withunsafebytes%28body_%29.md)
- [empty](empty.md): A dispatch data object representing a zero-length memory region.

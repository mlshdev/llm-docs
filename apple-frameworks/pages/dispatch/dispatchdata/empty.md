> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/dispatch/dispatchdata/empty

# empty

**Framework:** Dispatch  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A dispatch data object representing a zero-length memory region.

## Declaration

```swift
static let empty: DispatchData
```

## See Also

### Creating a Dispatch Data Structure

- [init(bytes:)](init%28bytes_%29-9lrd.md): Creates a new dispatch data object from the specified memory buffer.
- [init(bytesNoCopy:deallocator:)](init%28bytesnocopy_deallocator_%29-vfoe.md): Creates a new dispatch data object using the specified memory buffer and deallocator.
- [withUnsafeBytes(body:)](withunsafebytes%28body_%29.md)
- [DispatchData.Deallocator](deallocator.md): Memory deallocators for dispatch data objects.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/dispatch/dispatchdata/withunsafebytes(body:)](https://developer.apple.com/documentation/dispatch/dispatchdata/withunsafebytes(body:))

# withUnsafeBytes(body:)

**Framework:** Dispatch  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
func withUnsafeBytes<Result, ContentType>(body: (UnsafePointer<ContentType>) throws -> Result) rethrows -> Result
```

## See Also

### Creating a Dispatch Data Structure

- [init(bytes:)](init%28bytes_%29-9lrd.md): Creates a new dispatch data object from the specified memory buffer.
- [init(bytesNoCopy:deallocator:)](init%28bytesnocopy_deallocator_%29-vfoe.md): Creates a new dispatch data object using the specified memory buffer and deallocator.
- [DispatchData.Deallocator](deallocator.md): Memory deallocators for dispatch data objects.
- [empty](empty.md): A dispatch data object representing a zero-length memory region.

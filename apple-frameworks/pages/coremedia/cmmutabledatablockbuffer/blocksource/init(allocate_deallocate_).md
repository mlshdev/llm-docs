> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmutabledatablockbuffer/blocksource/init(allocate:deallocate:)](https://developer.apple.com/documentation/coremedia/cmmutabledatablockbuffer/blocksource/init(allocate:deallocate:))

# init(allocate:deallocate:)

**Framework:** Core Media  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
init(allocate: @escaping @Sendable (Int) -> UnsafeMutableRawBufferPointer, deallocate: @escaping @Sendable (UnsafeMutableRawBufferPointer) -> Void)
```

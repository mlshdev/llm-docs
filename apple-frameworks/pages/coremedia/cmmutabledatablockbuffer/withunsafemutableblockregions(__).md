> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmmutabledatablockbuffer/withunsafemutableblockregions(_:)](https://developer.apple.com/documentation/coremedia/cmmutabledatablockbuffer/withunsafemutableblockregions(_:))

# withUnsafeMutableBlockRegions(\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Access the potentially non-contiguous memory region referenced by this block buffer.

## Declaration

```swift
mutating func withUnsafeMutableBlockRegions<R>(_ body: ([CMMutableDataBlockBuffer.BlockRegion]) throws -> sending R) rethrows -> sending R
```

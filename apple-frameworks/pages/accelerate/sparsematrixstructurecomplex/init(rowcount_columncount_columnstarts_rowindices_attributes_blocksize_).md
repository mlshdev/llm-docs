> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/sparsematrixstructurecomplex/init(rowcount:columncount:columnstarts:rowindices:attributes:blocksize:)

# init(rowCount:columnCount:columnStarts:rowIndices:attributes:blockSize:)

**Framework:** Accelerate  
**Kind:** Initializer  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

## Declaration

```swift
init(rowCount: Int32, columnCount: Int32, columnStarts: UnsafeMutablePointer<Int>, rowIndices: UnsafeMutablePointer<Int32>, attributes: SparseAttributesComplex_t, blockSize: UInt8)
```

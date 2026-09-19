> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/accelerate/bnns/sparselayout/csr(columnindices:rowstarts:)

# BNNS.SparseLayout.csr(columnIndices:rowStarts:)

**Framework:** Accelerate  
**Kind:** Case  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

The compressed sparse row (CSR) format.

> Use the BNNSGraph API instead.

## Declaration

```swift
case csr(columnIndices: BNNSNDArrayDescriptor, rowStarts: BNNSNDArrayDescriptor)
```

## See Also

### Enumeration Cases

- [BNNS.SparseLayout.coo(indices:)](coo%28indices_%29.md): Deprecated. The sparse coordinate list (COO) format.

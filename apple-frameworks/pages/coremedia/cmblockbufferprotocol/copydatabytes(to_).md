> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/cmblockbufferprotocol/copydatabytes(to:)

# copyDataBytes(to:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func copyDataBytes(to destination: UnsafeMutableRawBufferPointer) throws
```

## See Also

### Modifying a Block Buffer

- [dataBytes()](databytes%28%29.md)
- [fillDataBytes(with:)](filldatabytes%28with_%29.md)
- [replaceDataBytes(with:)](replacedatabytes%28with_%29.md)
- [isContiguous](iscontiguous.md)
- [makeContiguous(allocator:deallocator:flags:)](makecontiguous%28allocator_deallocator_flags_%29.md)
- [makeContiguous(allocator:flags:)](makecontiguous%28allocator_flags_%29.md)
- [withContiguousStorage(\_:)](withcontiguousstorage%28__%29.md)

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmblockbufferprotocol/withcontiguousstorage(_:)](https://developer.apple.com/documentation/coremedia/cmblockbufferprotocol/withcontiguousstorage(_:))

# withContiguousStorage(\_:)

**Framework:** Core Media  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func withContiguousStorage<R>(_ body: (UnsafeRawBufferPointer) throws -> R) throws -> R
```

## See Also

### Modifying a Block Buffer

- [copyDataBytes(to:)](copydatabytes%28to_%29.md)
- [dataBytes()](databytes%28%29.md)
- [fillDataBytes(with:)](filldatabytes%28with_%29.md)
- [replaceDataBytes(with:)](replacedatabytes%28with_%29.md)
- [isContiguous](iscontiguous.md)
- [makeContiguous(allocator:deallocator:flags:)](makecontiguous%28allocator_deallocator_flags_%29.md)
- [makeContiguous(allocator:flags:)](makecontiguous%28allocator_flags_%29.md)

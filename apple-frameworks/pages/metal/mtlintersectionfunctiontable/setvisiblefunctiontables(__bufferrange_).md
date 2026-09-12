> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlintersectionfunctiontable/setvisiblefunctiontables(_:bufferrange:)](https://developer.apple.com/documentation/metal/mtlintersectionfunctiontable/setvisiblefunctiontables(_:bufferrange:))

# setVisibleFunctionTables(\_:bufferRange:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS

Sets a range of visible function tables for the intersection functions.

## Declaration

```swift
func setVisibleFunctionTables(_ functionTables: [(any MTLVisibleFunctionTable)?], bufferRange: Range<Int>)
```

## Parameters

- `functionTables`: The function tables to insert.
- `bufferRange`: A range of indices in the function table’s buffer argument table.

## See Also

### Specifying arguments for intersection functions

- [setBuffer(\_:offset:index:)](setbuffer%28__offset_index_%29.md): Sets a buffer for the intersection functions.
- [setBuffers(\_:offsets:range:)](setbuffers%28__offsets_range_%29.md): Sets a range of buffers for the intersection functions.
- [setVisibleFunctionTable(\_:bufferIndex:)](setvisiblefunctiontable%28__bufferindex_%29.md): Sets a visible function table for the intersection functions.

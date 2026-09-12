> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlintersectionfunctiontable/setbuffers(_:offsets:range:)](https://developer.apple.com/documentation/metal/mtlintersectionfunctiontable/setbuffers(_:offsets:range:))

# setBuffers(\_:offsets:range:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS

Sets a range of buffers for the intersection functions.

## Declaration

```swift
func setBuffers(_ buffers: [(any MTLBuffer)?], offsets: [Int], range: Range<Int>)
```

## Parameters

- `buffers`: An array of buffers to insert into the table.
- `offsets`: An array of offsets to insert into the table.
- `range`: A range of indices in the function table’s buffer argument table.

## See Also

### Specifying arguments for intersection functions

- [setBuffer(\_:offset:index:)](setbuffer%28__offset_index_%29.md): Sets a buffer for the intersection functions.
- [setVisibleFunctionTable(\_:bufferIndex:)](setvisiblefunctiontable%28__bufferindex_%29.md): Sets a visible function table for the intersection functions.
- [setVisibleFunctionTables(\_:bufferRange:)](setvisiblefunctiontables%28__bufferrange_%29.md): Sets a range of visible function tables for the intersection functions.

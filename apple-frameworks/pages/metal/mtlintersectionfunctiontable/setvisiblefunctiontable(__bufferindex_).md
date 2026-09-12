> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlintersectionfunctiontable/setvisiblefunctiontable(_:bufferindex:)](https://developer.apple.com/documentation/metal/mtlintersectionfunctiontable/setvisiblefunctiontable(_:bufferindex:))

# setVisibleFunctionTable(\_:bufferIndex:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Sets a visible function table for the intersection functions.

## Declaration

```swift
func setVisibleFunctionTable(_ functionTable: (any MTLVisibleFunctionTable)?, bufferIndex: Int)
```

## Parameters

- `functionTable`: A visible function table.
- `bufferIndex`: An index in the function table’s buffer argument table.

## See Also

### Specifying arguments for intersection functions

- [setBuffer(\_:offset:index:)](setbuffer%28__offset_index_%29.md): Sets a buffer for the intersection functions.
- [setBuffers(\_:offsets:range:)](setbuffers%28__offsets_range_%29.md): Sets a range of buffers for the intersection functions.
- [setVisibleFunctionTables(\_:bufferRange:)](setvisiblefunctiontables%28__bufferrange_%29.md): Sets a range of visible function tables for the intersection functions.

# setVisibleFunctionTable:atBufferIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Sets a visible function table for the intersection functions.

## Declaration

```objectivec
- (void) setVisibleFunctionTable:(id<MTLVisibleFunctionTable>) functionTable atBufferIndex:(NSUInteger) bufferIndex;
```

## Parameters

- `functionTable`: A visible function table.
- `bufferIndex`: An index in the function table’s buffer argument table.

## See Also

### Specifying arguments for intersection functions

- [setBuffer:offset:atIndex:](setbuffer%28__offset_index_%29.md): Sets a buffer for the intersection functions.
- [setBuffers:offsets:withRange:](setbuffers_offsets_withrange_.md): Sets a range of buffers for the intersection functions.
- [setVisibleFunctionTables:withBufferRange:](setvisiblefunctiontables_withbufferrange_.md): Sets a range of visible function tables for the intersection functions.

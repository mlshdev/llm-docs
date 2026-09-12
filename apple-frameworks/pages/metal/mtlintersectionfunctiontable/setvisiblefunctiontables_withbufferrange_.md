> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlintersectionfunctiontable/setvisiblefunctiontables:withbufferrange:](https://developer.apple.com/documentation/metal/mtlintersectionfunctiontable/setvisiblefunctiontables:withbufferrange:)

# setVisibleFunctionTables:withBufferRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Sets a range of visible function tables for the intersection functions.

## Declaration

```objectivec
- (void) setVisibleFunctionTables:(id<MTLVisibleFunctionTable> const[]) functionTables withBufferRange:(NSRange) bufferRange;
```

## Parameters

- `functionTables`: The function tables to insert.
- `bufferRange`: A range of indices in the function table’s buffer argument table.

## See Also

### Specifying arguments for intersection functions

- [setBuffer:offset:atIndex:](setbuffer%28__offset_index_%29.md): Sets a buffer for the intersection functions.
- [setBuffers:offsets:withRange:](setbuffers_offsets_withrange_.md): Sets a range of buffers for the intersection functions.
- [setVisibleFunctionTable:atBufferIndex:](setvisiblefunctiontable%28__bufferindex_%29.md): Sets a visible function table for the intersection functions.

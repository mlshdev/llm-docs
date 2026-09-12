> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlintersectionfunctiontable/setbuffer(_:offset:index:)](https://developer.apple.com/documentation/metal/mtlintersectionfunctiontable/setbuffer(_:offset:index:))

# setBuffer(\_:offset:index:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Sets a buffer for the intersection functions.

## Declaration

```swift
func setBuffer(_ buffer: (any MTLBuffer)?, offset: Int, index: Int)
```

## Parameters

- `buffer`: The [MTLBuffer](../mtlbuffer.md) object to set in the argument table.
- `offset`: Where the data begins, in bytes, from the start of the buffer.
- `index`: An index in the function table’s buffer argument table.

## See Also

### Specifying arguments for intersection functions

- [setBuffers(\_:offsets:range:)](setbuffers%28__offsets_range_%29.md): Sets a range of buffers for the intersection functions.
- [setVisibleFunctionTable(\_:bufferIndex:)](setvisiblefunctiontable%28__bufferindex_%29.md): Sets a visible function table for the intersection functions.
- [setVisibleFunctionTables(\_:bufferRange:)](setvisiblefunctiontables%28__bufferrange_%29.md): Sets a range of visible function tables for the intersection functions.

# setBuffer:offset:atIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Sets a buffer for the intersection functions.

## Declaration

```objectivec
- (void) setBuffer:(id<MTLBuffer>) buffer offset:(NSUInteger) offset atIndex:(NSUInteger) index;
```

## Parameters

- `buffer`: The [MTLBuffer](../mtlbuffer.md) object to set in the argument table.
- `offset`: Where the data begins, in bytes, from the start of the buffer.
- `index`: An index in the function table’s buffer argument table.

## See Also

### Specifying arguments for intersection functions

- [setBuffers:offsets:withRange:](setbuffers_offsets_withrange_.md): Sets a range of buffers for the intersection functions.
- [setVisibleFunctionTable:atBufferIndex:](setvisiblefunctiontable%28__bufferindex_%29.md): Sets a visible function table for the intersection functions.
- [setVisibleFunctionTables:withBufferRange:](setvisiblefunctiontables_withbufferrange_.md): Sets a range of visible function tables for the intersection functions.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/setvisiblefunctiontable(_:bufferindex:)](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/setvisiblefunctiontable(_:bufferindex:))

# setVisibleFunctionTable(\_:bufferIndex:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Binds a visible function table to the buffer argument table, allowing you to call its functions on the GPU.

## Declaration

```swift
func setVisibleFunctionTable(_ visibleFunctionTable: (any MTLVisibleFunctionTable)?, bufferIndex: Int)
```

## Parameters

- `visibleFunctionTable`: The [MTLVisibleFunctionTable](../mtlvisiblefunctiontable.md) to bind.
- `bufferIndex`: The index the function table binds to in the buffer argument table.

## See Also

### Binding function tables

- [setVisibleFunctionTables(\_:bufferRange:)](setvisiblefunctiontables%28__bufferrange_%29.md): Binds multiple visible function tables to the buffer argument table, allowing you to call their functions on the GPU.
- [setIntersectionFunctionTables(\_:bufferRange:)](setintersectionfunctiontables%28__bufferrange_%29.md): Binds multiple intersection function tables to the buffer argument table, allowing you to call their functions on the GPU.

# setVisibleFunctionTable:atBufferIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Binds a visible function table to the buffer argument table, allowing you to call its functions on the GPU.

## Declaration

```objectivec
- (void) setVisibleFunctionTable:(id<MTLVisibleFunctionTable>) visibleFunctionTable atBufferIndex:(NSUInteger) bufferIndex;
```

## Parameters

- `visibleFunctionTable`: The [MTLVisibleFunctionTable](../mtlvisiblefunctiontable.md) to bind.
- `bufferIndex`: The index the function table binds to in the buffer argument table.

## See Also

### Binding function tables

- [setVisibleFunctionTables:withBufferRange:](setvisiblefunctiontables_withbufferrange_.md): Binds multiple visible function tables to the buffer argument table, allowing you to call their functions on the GPU.
- [setIntersectionFunctionTables:withBufferRange:](setintersectionfunctiontables_withbufferrange_.md): Binds multiple intersection function tables to the buffer argument table, allowing you to call their functions on the GPU.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setvertexintersectionfunctiontable(_:bufferindex:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setvertexintersectionfunctiontable(_:bufferindex:))

# setVertexIntersectionFunctionTable(\_:bufferIndex:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Assigns an intersection function table to an entry in the vertex shader argument table.

## Declaration

```swift
func setVertexIntersectionFunctionTable(_ intersectionFunctionTable: (any MTLIntersectionFunctionTable)?, bufferIndex: Int)
```

## Parameters

- `intersectionFunctionTable`: An [MTLIntersectionFunctionTable](../mtlintersectionfunctiontable.md) instance the command assigns to an entry in the vertex shader argument table for intersection function tables.
- `bufferIndex`: An integer that represents the entry in the vertex shader argument table for intersection function tables that stores a record of `intersectionFunctionTable`.

<a id="discussion"></a>

## Discussion

By default, the intersection function table at each index is `nil`.

## See Also

### Assigning intersection function tables

- [setVertexIntersectionFunctionTables(\_:bufferRange:)](setvertexintersectionfunctiontables%28__bufferrange_%29.md): Assigns multiple intersection function tables to a range of entries in the vertex shader argument table.

# setVertexIntersectionFunctionTable:atBufferIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Assigns an intersection function table to an entry in the vertex shader argument table.

## Declaration

```objectivec
- (void) setVertexIntersectionFunctionTable:(id<MTLIntersectionFunctionTable>) intersectionFunctionTable atBufferIndex:(NSUInteger) bufferIndex;
```

## Parameters

- `intersectionFunctionTable`: An [MTLIntersectionFunctionTable](../mtlintersectionfunctiontable.md) instance the command assigns to an entry in the vertex shader argument table for intersection function tables.
- `bufferIndex`: An integer that represents the entry in the vertex shader argument table for intersection function tables that stores a record of `intersectionFunctionTable`.

<a id="discussion"></a>

## Discussion

By default, the intersection function table at each index is `nil`.

## See Also

### Assigning intersection function tables

- [setVertexIntersectionFunctionTables:withBufferRange:](setvertexintersectionfunctiontables_withbufferrange_.md): Assigns multiple intersection function tables to a range of entries in the vertex shader argument table.

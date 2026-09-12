> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setvertexvisiblefunctiontables:withbufferrange:](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setvertexvisiblefunctiontables:withbufferrange:)

# setVertexVisibleFunctionTables:withBufferRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Assigns multiple visible function tables to a range of entries in the vertex shader argument table.

## Declaration

```objectivec
- (void) setVertexVisibleFunctionTables:(id<MTLVisibleFunctionTable> const[]) functionTables withBufferRange:(NSRange) range;
```

## Parameters

- `functionTables`: A pointer to a C array of [MTLVisibleFunctionTable](../mtlvisiblefunctiontable.md) instances the command assigns to entries in the vertex shader argument table for visible function tables.
- `range`: A span of integers that represent the entries in the vertex shader argument table for visible function tables. Each entry stores a record of the corresponding element in `functionTables`.

<a id="discussion"></a>

## Discussion

By default, the visible function table at each index is `nil`.

> **Note**

>  The Swift version of this method is [setVertexVisibleFunctionTables(\_:bufferRange:)](setvertexvisiblefunctiontables%28__bufferrange_%29.md).

## See Also

### Assigning visible function tables

- [setVertexVisibleFunctionTable:atBufferIndex:](setvertexvisiblefunctiontable%28__bufferindex_%29.md): Assigns a visible function table to an entry in the vertex shader argument table.

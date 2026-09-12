> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setvertexintersectionfunctiontables:withbufferrange:](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setvertexintersectionfunctiontables:withbufferrange:)

# setVertexIntersectionFunctionTables:withBufferRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Assigns multiple intersection function tables to a range of entries in the vertex shader argument table.

## Declaration

```objectivec
- (void) setVertexIntersectionFunctionTables:(id<MTLIntersectionFunctionTable> const[]) intersectionFunctionTables withBufferRange:(NSRange) range;
```

## Parameters

- `intersectionFunctionTables`: A pointer to a C array of [MTLIntersectionFunctionTable](../mtlintersectionfunctiontable.md) instances the command assigns to entries in the vertex shader argument table for intersection function tables.
- `range`: A span of integers that represent the entries in the vertex shader argument table for intersection function tables. Each entry stores a record of the corresponding element in `intersectionFunctionTables`.

<a id="discussion"></a>

## Discussion

By default, the intersection function table at each index is `nil`.

> **Note**

>  The Swift version of this method is [setVertexIntersectionFunctionTables(\_:bufferRange:)](setvertexintersectionfunctiontables%28__bufferrange_%29.md).

## See Also

### Assigning intersection function tables

- [setVertexIntersectionFunctionTable:atBufferIndex:](setvertexintersectionfunctiontable%28__bufferindex_%29.md): Assigns an intersection function table to an entry in the vertex shader argument table.

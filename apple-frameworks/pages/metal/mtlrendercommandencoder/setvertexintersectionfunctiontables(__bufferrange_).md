> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setvertexintersectionfunctiontables(_:bufferrange:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setvertexintersectionfunctiontables(_:bufferrange:))

# setVertexIntersectionFunctionTables(\_:bufferRange:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS

Assigns multiple intersection function tables to a range of entries in the vertex shader argument table.

## Declaration

```swift
func setVertexIntersectionFunctionTables(_ functionTables: [(any MTLIntersectionFunctionTable)?], bufferRange: Range<Int>)
```

## Parameters

- `functionTables`: An array of [MTLIntersectionFunctionTable](../mtlintersectionfunctiontable.md) instances the command assigns to entries in the vertex shader argument table for intersection function tables.
- `bufferRange`: A span of integers that represent the entries in the vertex shader argument table for intersection function tables. Each entry stores a record of the corresponding element in `functionTables`.

<a id="discussion"></a>

## Discussion

By default, the intersection function table at each index is `nil`.

> **Note**

>  The Objective-C version of this method is [setVertexIntersectionFunctionTables:withBufferRange:](setvertexintersectionfunctiontables_withbufferrange_.md).

## See Also

### Assigning intersection function tables

- [setVertexIntersectionFunctionTable(\_:bufferIndex:)](setvertexintersectionfunctiontable%28__bufferindex_%29.md): Assigns an intersection function table to an entry in the vertex shader argument table.

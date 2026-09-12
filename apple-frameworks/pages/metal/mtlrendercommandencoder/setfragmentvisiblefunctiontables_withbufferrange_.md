> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setfragmentvisiblefunctiontables:withbufferrange:](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setfragmentvisiblefunctiontables:withbufferrange:)

# setFragmentVisibleFunctionTables:withBufferRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Assigns multiple visible function tables to a range of entries in the fragment shader argument table.

## Declaration

```objectivec
- (void) setFragmentVisibleFunctionTables:(id<MTLVisibleFunctionTable> const[]) functionTables withBufferRange:(NSRange) range;
```

## Parameters

- `functionTables`: A pointer to a C array of [MTLVisibleFunctionTable](../mtlvisiblefunctiontable.md) instances the command assigns to entries in the fragment shader argument table for visible function tables.
- `range`: A span of integers that represent the entries in the fragment shader argument table for visible function tables. Each entry stores a record of the corresponding element in `functionTables`.

<a id="discussion"></a>

## Discussion

By default, the visible function table at each index is `nil`.

> **Note**

>  The Swift version of this method is [setFragmentVisibleFunctionTables(\_:bufferRange:)](setfragmentvisiblefunctiontables%28__bufferrange_%29.md).

## See Also

### Assigning visible function tables

- [setFragmentVisibleFunctionTable:atBufferIndex:](setfragmentvisiblefunctiontable%28__bufferindex_%29.md): Assigns a visible function table to an entry in the fragment shader argument table.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setfragmentvisiblefunctiontables(_:bufferrange:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setfragmentvisiblefunctiontables(_:bufferrange:))

# setFragmentVisibleFunctionTables(\_:bufferRange:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS

Assigns multiple visible function tables to a range of entries in the fragment shader argument table.

## Declaration

```swift
func setFragmentVisibleFunctionTables(_ functionTables: [(any MTLVisibleFunctionTable)?], bufferRange: Range<Int>)
```

## Parameters

- `functionTables`: An array of [MTLVisibleFunctionTable](../mtlvisiblefunctiontable.md) instances the command assigns to entries in the fragment shader argument table for visible function tables.
- `bufferRange`: A span of integers that represent the entries in the fragment shader argument table for visible function tables. Each entry stores a record of the corresponding element in `functionTables`.

<a id="discussion"></a>

## Discussion

By default, the visible function table at each index is `nil`.

> **Note**

>  The Objective-C version of this method is [setFragmentVisibleFunctionTables:withBufferRange:](setfragmentvisiblefunctiontables_withbufferrange_.md).

## See Also

### Assigning visible function tables

- [setFragmentVisibleFunctionTable(\_:bufferIndex:)](setfragmentvisiblefunctiontable%28__bufferindex_%29.md): Assigns a visible function table to an entry in the fragment shader argument table.

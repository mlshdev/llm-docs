> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/setvisiblefunctiontables(_:bufferrange:)](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/setvisiblefunctiontables(_:bufferrange:))

# setVisibleFunctionTables(\_:bufferRange:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS

Binds multiple visible function tables to the buffer argument table, allowing you to call their functions on the GPU.

## Declaration

```swift
func setVisibleFunctionTables(_ visibleFunctionTables: [(any MTLVisibleFunctionTable)?], bufferRange: Range<Int>)
```

## Parameters

- `visibleFunctionTables`: An array of [MTLVisibleFunctionTable](../mtlvisiblefunctiontable.md) instances to bind.
- `bufferRange`: The buffer argument table indices to bind each of the `visibleFunctionTables` to, in the order they appear.

<a id="discussion"></a>

## Discussion

> **Warning**

>  This method requires that the number of instances in `visibleFunctionTables` be the same as the length of `bufferRange`.

## See Also

### Binding function tables

- [setVisibleFunctionTable(\_:bufferIndex:)](setvisiblefunctiontable%28__bufferindex_%29.md): Binds a visible function table to the buffer argument table, allowing you to call its functions on the GPU.
- [setIntersectionFunctionTables(\_:bufferRange:)](setintersectionfunctiontables%28__bufferrange_%29.md): Binds multiple intersection function tables to the buffer argument table, allowing you to call their functions on the GPU.

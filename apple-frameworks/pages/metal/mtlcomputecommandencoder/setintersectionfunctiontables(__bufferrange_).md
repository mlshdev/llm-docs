> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/setintersectionfunctiontables(_:bufferrange:)](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/setintersectionfunctiontables(_:bufferrange:))

# setIntersectionFunctionTables(\_:bufferRange:)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS

Binds multiple intersection function tables to the buffer argument table, allowing you to call their functions on the GPU.

## Declaration

```swift
func setIntersectionFunctionTables(_ intersectionFunctionTables: [(any MTLIntersectionFunctionTable)?], bufferRange: Range<Int>)
```

## Parameters

- `intersectionFunctionTables`: An array of [MTLIntersectionFunctionTable](../mtlintersectionfunctiontable.md) instances to bind.
- `bufferRange`: The argument buffer table indices to bind each of the `intersectionFunctionTables` to, in the order they appear.

<a id="discussion"></a>

## Discussion

> **Warning**

>  This method requires that the number of instances in `visibleFunctionTables` be the same as the length of `bufferRange`.

## See Also

### Binding function tables

- [setVisibleFunctionTable(\_:bufferIndex:)](setvisiblefunctiontable%28__bufferindex_%29.md): Binds a visible function table to the buffer argument table, allowing you to call its functions on the GPU.
- [setVisibleFunctionTables(\_:bufferRange:)](setvisiblefunctiontables%28__bufferrange_%29.md): Binds multiple visible function tables to the buffer argument table, allowing you to call their functions on the GPU.

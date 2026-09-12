> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/setvisiblefunctiontables:withbufferrange:](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/setvisiblefunctiontables:withbufferrange:)

# setVisibleFunctionTables:withBufferRange:

**Interface language:** Objective-C

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Binds multiple visible function tables to the buffer argument table, allowing you to call their functions on the GPU.

## Declaration

```objectivec
- (void) setVisibleFunctionTables:(id<MTLVisibleFunctionTable> const[]) visibleFunctionTables withBufferRange:(NSRange) range;
```

## Parameters

- `visibleFunctionTables`: An array of [MTLVisibleFunctionTable](../mtlvisiblefunctiontable.md) instances to bind.
- `range`: The buffer argument table indices to bind each of the `visibleFunctionTables` to, in the order they appear.

<a id="discussion"></a>

## Discussion

> **Warning**

>  This method requires that the number of instances in `visibleFunctionTables` be the same as the length of `range`.

## See Also

### Binding function tables

- [setVisibleFunctionTable:atBufferIndex:](setvisiblefunctiontable%28__bufferindex_%29.md): Binds a visible function table to the buffer argument table, allowing you to call its functions on the GPU.
- [setIntersectionFunctionTables:withBufferRange:](setintersectionfunctiontables_withbufferrange_.md): Binds multiple intersection function tables to the buffer argument table, allowing you to call their functions on the GPU.

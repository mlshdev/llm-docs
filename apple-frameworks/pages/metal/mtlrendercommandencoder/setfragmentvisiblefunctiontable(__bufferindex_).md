> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrendercommandencoder/setfragmentvisiblefunctiontable(_:bufferindex:)](https://developer.apple.com/documentation/metal/mtlrendercommandencoder/setfragmentvisiblefunctiontable(_:bufferindex:))

# setFragmentVisibleFunctionTable(\_:bufferIndex:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Assigns a visible function table to an entry in the fragment shader argument table.

## Declaration

```swift
func setFragmentVisibleFunctionTable(_ functionTable: (any MTLVisibleFunctionTable)?, bufferIndex: Int)
```

## Parameters

- `functionTable`: An [MTLVisibleFunctionTable](../mtlvisiblefunctiontable.md) instance the command assigns to an entry in the fragment shader argument table for visible function tables.
- `bufferIndex`: An integer that represents the entry in the fragment shader argument table for visible function tables that stores a record of `functionTable`.

<a id="discussion"></a>

## Discussion

By default, the visible function table at each index is `nil`.

## See Also

### Assigning visible function tables

- [setFragmentVisibleFunctionTables(\_:bufferRange:)](setfragmentvisiblefunctiontables%28__bufferrange_%29.md): Assigns multiple visible function tables to a range of entries in the fragment shader argument table.

# setFragmentVisibleFunctionTable:atBufferIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Assigns a visible function table to an entry in the fragment shader argument table.

## Declaration

```objectivec
- (void) setFragmentVisibleFunctionTable:(id<MTLVisibleFunctionTable>) functionTable atBufferIndex:(NSUInteger) bufferIndex;
```

## Parameters

- `functionTable`: An [MTLVisibleFunctionTable](../mtlvisiblefunctiontable.md) instance the command assigns to an entry in the fragment shader argument table for visible function tables.
- `bufferIndex`: An integer that represents the entry in the fragment shader argument table for visible function tables that stores a record of `functionTable`.

<a id="discussion"></a>

## Discussion

By default, the visible function table at each index is `nil`.

## See Also

### Assigning visible function tables

- [setFragmentVisibleFunctionTables:withBufferRange:](setfragmentvisiblefunctiontables_withbufferrange_.md): Assigns multiple visible function tables to a range of entries in the fragment shader argument table.

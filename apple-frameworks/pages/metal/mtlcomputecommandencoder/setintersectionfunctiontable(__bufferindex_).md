> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/setintersectionfunctiontable(_:bufferindex:)](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/setintersectionfunctiontable(_:bufferindex:))

# setIntersectionFunctionTable(\_:bufferIndex:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Binds an intersection function table to the buffer argument table, making it callable in your Metal shaders.

## Declaration

```swift
func setIntersectionFunctionTable(_ intersectionFunctionTable: (any MTLIntersectionFunctionTable)?, bufferIndex: Int)
```

## Parameters

- `intersectionFunctionTable`: The [MTLIntersectionFunctionTable](../mtlintersectionfunctiontable.md) to bind.
- `bufferIndex`: The index in the buffer argument table the intersection function table binds to.

## See Also

### Binding arguments for acceleration structures

- [setAccelerationStructure(\_:bufferIndex:)](setaccelerationstructure%28__bufferindex_%29.md): Binds an acceleration structure to the buffer argument table, allowing functions to access it on the GPU.

# setIntersectionFunctionTable:atBufferIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Binds an intersection function table to the buffer argument table, making it callable in your Metal shaders.

## Declaration

```objectivec
- (void) setIntersectionFunctionTable:(id<MTLIntersectionFunctionTable>) intersectionFunctionTable atBufferIndex:(NSUInteger) bufferIndex;
```

## Parameters

- `intersectionFunctionTable`: The [MTLIntersectionFunctionTable](../mtlintersectionfunctiontable.md) to bind.
- `bufferIndex`: The index in the buffer argument table the intersection function table binds to.

## See Also

### Binding arguments for acceleration structures

- [setAccelerationStructure:atBufferIndex:](setaccelerationstructure%28__bufferindex_%29.md): Binds an acceleration structure to the buffer argument table, allowing functions to access it on the GPU.

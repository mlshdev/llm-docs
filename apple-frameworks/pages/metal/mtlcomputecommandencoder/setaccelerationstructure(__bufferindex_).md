> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputecommandencoder/setaccelerationstructure(_:bufferindex:)](https://developer.apple.com/documentation/metal/mtlcomputecommandencoder/setaccelerationstructure(_:bufferindex:))

# setAccelerationStructure(\_:bufferIndex:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Binds an acceleration structure to the buffer argument table, allowing functions to access it on the GPU.

## Declaration

```swift
func setAccelerationStructure(_ accelerationStructure: (any MTLAccelerationStructure)?, bufferIndex: Int)
```

## Parameters

- `accelerationStructure`: An [MTLAccelerationStructure](../mtlaccelerationstructure.md) instance to bind to the argument table.
- `bufferIndex`: The index the structure binds to in the argument table.

## See Also

### Binding arguments for acceleration structures

- [setIntersectionFunctionTable(\_:bufferIndex:)](setintersectionfunctiontable%28__bufferindex_%29.md): Binds an intersection function table to the buffer argument table, making it callable in your Metal shaders.

# setAccelerationStructure:atBufferIndex: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Binds an acceleration structure to the buffer argument table, allowing functions to access it on the GPU.

## Declaration

```objectivec
- (void) setAccelerationStructure:(id<MTLAccelerationStructure>) accelerationStructure atBufferIndex:(NSUInteger) bufferIndex;
```

## Parameters

- `accelerationStructure`: An [MTLAccelerationStructure](../mtlaccelerationstructure.md) instance to bind to the argument table.
- `bufferIndex`: The index the structure binds to in the argument table.

## See Also

### Binding arguments for acceleration structures

- [setIntersectionFunctionTable:atBufferIndex:](setintersectionfunctiontable%28__bufferindex_%29.md): Binds an intersection function table to the buffer argument table, making it callable in your Metal shaders.

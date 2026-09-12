> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4computecommandencoder/writecompactedsize(sourceaccelerationstructure:destinationbuffer:)](https://developer.apple.com/documentation/metal/mtl4computecommandencoder/writecompactedsize(sourceaccelerationstructure:destinationbuffer:))

# writeCompactedSize(sourceAccelerationStructure:destinationBuffer:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command to compute the size an acceleration structure can compact into, writing the result into a buffer.

## Declaration

```swift
func writeCompactedSize(sourceAccelerationStructure accelerationStructure: any MTLAccelerationStructure, destinationBuffer buffer: MTL4BufferRange)
```

## Parameters

- `accelerationStructure`: Source acceleration structure.
- `buffer`: Destination size buffer. Metal writes the compacted size as a 64-bit unsigned integer value, representing the compacted size in bytes.

<a id="discussion"></a>

## Discussion

This size is potentially smaller than the acceleration structure. To perform compaction, you typically read this size from the buffer once the command buffer completes. You then use it to allocate a new, potentially smaller acceleration structure. Finally, you call the [copyAndCompact(sourceAccelerationStructure:destinationAccelerationStructure:)](copyandcompact%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md) method to perform the copy.

## See Also

### Encoding acceleration structure copy commands

- [copy(sourceAccelerationStructure:destinationAccelerationStructure:)](copy%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md): Encodes an acceleration structure copy operation into the command buffer.
- [copyAndCompact(sourceAccelerationStructure:destinationAccelerationStructure:)](copyandcompact%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md): Encodes a command to copy and compact an acceleration structure.

# writeCompactedAccelerationStructureSize:toBuffer: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command to compute the size an acceleration structure can compact into, writing the result into a buffer.

## Declaration

```objectivec
- (void) writeCompactedAccelerationStructureSize:(id<MTLAccelerationStructure>) accelerationStructure toBuffer:(MTL4BufferRange) buffer;
```

## Parameters

- `accelerationStructure`: Source acceleration structure.
- `buffer`: Destination size buffer. Metal writes the compacted size as a 64-bit unsigned integer value, representing the compacted size in bytes.

<a id="discussion"></a>

## Discussion

This size is potentially smaller than the acceleration structure. To perform compaction, you typically read this size from the buffer once the command buffer completes. You then use it to allocate a new, potentially smaller acceleration structure. Finally, you call the [copyAndCompactAccelerationStructure:toAccelerationStructure:](copyandcompact%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md) method to perform the copy.

## See Also

### Encoding acceleration structure copy commands

- [copyAccelerationStructure:toAccelerationStructure:](copy%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md): Encodes an acceleration structure copy operation into the command buffer.
- [copyAndCompactAccelerationStructure:toAccelerationStructure:](copyandcompact%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md): Encodes a command to copy and compact an acceleration structure.

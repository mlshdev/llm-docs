> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructurecommandencoder/writecompactedsize(accelerationstructure:buffer:offset:)](https://developer.apple.com/documentation/metal/mtlaccelerationstructurecommandencoder/writecompactedsize(accelerationstructure:buffer:offset:))

# writeCompactedSize(accelerationStructure:buffer:offset:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a command to calculate the compacted size of an acceleration structure.

## Declaration

```swift
func writeCompactedSize(accelerationStructure: any MTLAccelerationStructure, buffer: any MTLBuffer, offset: Int)
```

## Parameters

- `accelerationStructure`: The acceleration structure to measure.
- `buffer`: The buffer to write the size into.
- `offset`: An offset, in bytes, where the GPU should write the result.

<a id="discussion"></a>

## Discussion

The GPU writes the compacted size to the buffer as a 32-bit unsigned integer representing the compacted size in bytes. The compacted size may be smaller than the source acceleration structure.

To compact an acceleration structure, encode a command to get the minimum size. After the command completes, read the size from the buffer and allocate a new acceleration structure with at least that much storage. Then create another encoder and call the  [copyAndCompact(sourceAccelerationStructure:destinationAccelerationStructure:)](copyandcompact%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md) method to copy it into the new structure.

## See Also

### Copying an acceleration structure

- [copy(sourceAccelerationStructure:destinationAccelerationStructure:)](copy%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md): Encodes a command to copy the data from one acceleration structure to another.
- [writeCompactedSize(accelerationStructure:buffer:offset:sizeDataType:)](writecompactedsize%28accelerationstructure_buffer_offset_sizedatatype_%29.md): Encodes a command to calculate the compacted size of an acceleration structure, taking into account the size of the output data.
- [copyAndCompact(sourceAccelerationStructure:destinationAccelerationStructure:)](copyandcompact%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md): Encodes a command to compact an acceleration structure’s data and copy it into a different acceleration structure.

# writeCompactedAccelerationStructureSize:toBuffer:offset: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a command to calculate the compacted size of an acceleration structure.

## Declaration

```objectivec
- (void) writeCompactedAccelerationStructureSize:(id<MTLAccelerationStructure>) accelerationStructure toBuffer:(id<MTLBuffer>) buffer offset:(NSUInteger) offset;
```

## Parameters

- `accelerationStructure`: The acceleration structure to measure.
- `buffer`: The buffer to write the size into.
- `offset`: An offset, in bytes, where the GPU should write the result.

<a id="discussion"></a>

## Discussion

The GPU writes the compacted size to the buffer as a 32-bit unsigned integer representing the compacted size in bytes. The compacted size may be smaller than the source acceleration structure.

To compact an acceleration structure, encode a command to get the minimum size. After the command completes, read the size from the buffer and allocate a new acceleration structure with at least that much storage. Then create another encoder and call the  [copyAndCompactAccelerationStructure:toAccelerationStructure:](copyandcompact%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md) method to copy it into the new structure.

## See Also

### Copying an acceleration structure

- [copyAccelerationStructure:toAccelerationStructure:](copy%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md): Encodes a command to copy the data from one acceleration structure to another.
- [writeCompactedAccelerationStructureSize:toBuffer:offset:sizeDataType:](writecompactedsize%28accelerationstructure_buffer_offset_sizedatatype_%29.md): Encodes a command to calculate the compacted size of an acceleration structure, taking into account the size of the output data.
- [copyAndCompactAccelerationStructure:toAccelerationStructure:](copyandcompact%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md): Encodes a command to compact an acceleration structure’s data and copy it into a different acceleration structure.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructurecommandencoder/writecompactedsize(accelerationstructure:buffer:offset:sizedatatype:)](https://developer.apple.com/documentation/metal/mtlaccelerationstructurecommandencoder/writecompactedsize(accelerationstructure:buffer:offset:sizedatatype:))

# writeCompactedSize(accelerationStructure:buffer:offset:sizeDataType:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a command to calculate the compacted size of an acceleration structure, taking into account the size of the output data.

## Declaration

```swift
func writeCompactedSize(accelerationStructure: any MTLAccelerationStructure, buffer: any MTLBuffer, offset: Int, sizeDataType: MTLDataType)
```

## Parameters

- `accelerationStructure`: The acceleration structure to measure.
- `buffer`: The buffer to write the size into.
- `offset`: An offset, in bytes, where the GPU should write the result.
- `sizeDataType`: The data type of the resulting data.

<a id="discussion"></a>

## Discussion

The GPU writes the compacted size to the buffer, in bytes, using the `sizeDataType` parameter to determine the size of the output data. The compacted size may be smaller than the source acceleration structure.

To compact an acceleration structure, encode a command to get the minimum size. After the command completes, read the size from the buffer and allocate a new acceleration structure with at least that much storage. Then create another encoder and call the  [copyAndCompact(sourceAccelerationStructure:destinationAccelerationStructure:)](copyandcompact%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md) method to copy it into the new structure.

## See Also

### Copying an acceleration structure

- [copy(sourceAccelerationStructure:destinationAccelerationStructure:)](copy%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md): Encodes a command to copy the data from one acceleration structure to another.
- [writeCompactedSize(accelerationStructure:buffer:offset:)](writecompactedsize%28accelerationstructure_buffer_offset_%29.md): Encodes a command to calculate the compacted size of an acceleration structure.
- [copyAndCompact(sourceAccelerationStructure:destinationAccelerationStructure:)](copyandcompact%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md): Encodes a command to compact an acceleration structure’s data and copy it into a different acceleration structure.

# writeCompactedAccelerationStructureSize:toBuffer:offset:sizeDataType: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a command to calculate the compacted size of an acceleration structure, taking into account the size of the output data.

## Declaration

```objectivec
- (void) writeCompactedAccelerationStructureSize:(id<MTLAccelerationStructure>) accelerationStructure toBuffer:(id<MTLBuffer>) buffer offset:(NSUInteger) offset sizeDataType:(MTLDataType) sizeDataType;
```

## Parameters

- `accelerationStructure`: The acceleration structure to measure.
- `buffer`: The buffer to write the size into.
- `offset`: An offset, in bytes, where the GPU should write the result.
- `sizeDataType`: The data type of the resulting data.

<a id="discussion"></a>

## Discussion

The GPU writes the compacted size to the buffer, in bytes, using the `sizeDataType` parameter to determine the size of the output data. The compacted size may be smaller than the source acceleration structure.

To compact an acceleration structure, encode a command to get the minimum size. After the command completes, read the size from the buffer and allocate a new acceleration structure with at least that much storage. Then create another encoder and call the  [copyAndCompactAccelerationStructure:toAccelerationStructure:](copyandcompact%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md) method to copy it into the new structure.

## See Also

### Copying an acceleration structure

- [copyAccelerationStructure:toAccelerationStructure:](copy%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md): Encodes a command to copy the data from one acceleration structure to another.
- [writeCompactedAccelerationStructureSize:toBuffer:offset:](writecompactedsize%28accelerationstructure_buffer_offset_%29.md): Encodes a command to calculate the compacted size of an acceleration structure.
- [copyAndCompactAccelerationStructure:toAccelerationStructure:](copyandcompact%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md): Encodes a command to compact an acceleration structure’s data and copy it into a different acceleration structure.

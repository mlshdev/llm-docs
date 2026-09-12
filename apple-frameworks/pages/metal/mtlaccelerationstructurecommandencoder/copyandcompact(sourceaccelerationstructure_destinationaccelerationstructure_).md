> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlaccelerationstructurecommandencoder/copyandcompact(sourceaccelerationstructure:destinationaccelerationstructure:)](https://developer.apple.com/documentation/metal/mtlaccelerationstructurecommandencoder/copyandcompact(sourceaccelerationstructure:destinationaccelerationstructure:))

# copyAndCompact(sourceAccelerationStructure:destinationAccelerationStructure:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a command to compact an acceleration structure’s data and copy it into a different acceleration structure.

## Declaration

```swift
func copyAndCompact(sourceAccelerationStructure: any MTLAccelerationStructure, destinationAccelerationStructure: any MTLAccelerationStructure)
```

## Parameters

- `sourceAccelerationStructure`: The source acceleration structure.
- `destinationAccelerationStructure`: The destination acceleration structure.

<a id="discussion"></a>

## Discussion

The source and destination acceleration structures can’t overlap in memory. The destination acceleration structure needs to be at least as large as the compact size of the source acceleration structure, which you obtain by using the [writeCompactedSize(accelerationStructure:buffer:offset:)](writecompactedsize%28accelerationstructure_buffer_offset_%29.md) method.

If the source acceleration structure contains references to other acceleration structures, the copy of the acceleration structure refers to the same child structures.

## See Also

### Copying an acceleration structure

- [copy(sourceAccelerationStructure:destinationAccelerationStructure:)](copy%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md): Encodes a command to copy the data from one acceleration structure to another.
- [writeCompactedSize(accelerationStructure:buffer:offset:)](writecompactedsize%28accelerationstructure_buffer_offset_%29.md): Encodes a command to calculate the compacted size of an acceleration structure.
- [writeCompactedSize(accelerationStructure:buffer:offset:sizeDataType:)](writecompactedsize%28accelerationstructure_buffer_offset_sizedatatype_%29.md): Encodes a command to calculate the compacted size of an acceleration structure, taking into account the size of the output data.

# copyAndCompactAccelerationStructure:toAccelerationStructure: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+ · tvOS 16.0+ · visionOS 1.0+

Encodes a command to compact an acceleration structure’s data and copy it into a different acceleration structure.

## Declaration

```objectivec
- (void) copyAndCompactAccelerationStructure:(id<MTLAccelerationStructure>) sourceAccelerationStructure toAccelerationStructure:(id<MTLAccelerationStructure>) destinationAccelerationStructure;
```

## Parameters

- `sourceAccelerationStructure`: The source acceleration structure.
- `destinationAccelerationStructure`: The destination acceleration structure.

<a id="discussion"></a>

## Discussion

The source and destination acceleration structures can’t overlap in memory. The destination acceleration structure needs to be at least as large as the compact size of the source acceleration structure, which you obtain by using the [writeCompactedAccelerationStructureSize:toBuffer:offset:](writecompactedsize%28accelerationstructure_buffer_offset_%29.md) method.

If the source acceleration structure contains references to other acceleration structures, the copy of the acceleration structure refers to the same child structures.

## See Also

### Copying an acceleration structure

- [copyAccelerationStructure:toAccelerationStructure:](copy%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md): Encodes a command to copy the data from one acceleration structure to another.
- [writeCompactedAccelerationStructureSize:toBuffer:offset:](writecompactedsize%28accelerationstructure_buffer_offset_%29.md): Encodes a command to calculate the compacted size of an acceleration structure.
- [writeCompactedAccelerationStructureSize:toBuffer:offset:sizeDataType:](writecompactedsize%28accelerationstructure_buffer_offset_sizedatatype_%29.md): Encodes a command to calculate the compacted size of an acceleration structure, taking into account the size of the output data.

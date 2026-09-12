> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4computecommandencoder/copyandcompact(sourceaccelerationstructure:destinationaccelerationstructure:)](https://developer.apple.com/documentation/metal/mtl4computecommandencoder/copyandcompact(sourceaccelerationstructure:destinationaccelerationstructure:))

# copyAndCompact(sourceAccelerationStructure:destinationAccelerationStructure:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command to copy and compact an acceleration structure.

## Declaration

```swift
func copyAndCompact(sourceAccelerationStructure: any MTLAccelerationStructure, destinationAccelerationStructure: any MTLAccelerationStructure)
```

## Parameters

- `sourceAccelerationStructure`: Acceleration structure to copy and compact.
- `destinationAccelerationStructure`: Acceleration structure to copy to.

<a id="discussion"></a>

## Discussion

You are responsible for ensuring that the source and destination acceleration structures don’t overlap in memory. If this is an instance acceleration structure, Metal preserves references to primitive acceleration structures it references.

This operation requires that the destination acceleration structure is at least as large as the compacted size of the source acceleration structure. You can compute this size by calling the [writeCompactedSize(sourceAccelerationStructure:destinationBuffer:)](writecompactedsize%28sourceaccelerationstructure_destinationbuffer_%29.md) method.

## See Also

### Encoding acceleration structure copy commands

- [copy(sourceAccelerationStructure:destinationAccelerationStructure:)](copy%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md): Encodes an acceleration structure copy operation into the command buffer.
- [writeCompactedSize(sourceAccelerationStructure:destinationBuffer:)](writecompactedsize%28sourceaccelerationstructure_destinationbuffer_%29.md): Encodes a command to compute the size an acceleration structure can compact into, writing the result into a buffer.

# copyAndCompactAccelerationStructure:toAccelerationStructure: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes a command to copy and compact an acceleration structure.

## Declaration

```objectivec
- (void) copyAndCompactAccelerationStructure:(id<MTLAccelerationStructure>) sourceAccelerationStructure toAccelerationStructure:(id<MTLAccelerationStructure>) destinationAccelerationStructure;
```

## Parameters

- `sourceAccelerationStructure`: Acceleration structure to copy and compact.
- `destinationAccelerationStructure`: Acceleration structure to copy to.

<a id="discussion"></a>

## Discussion

You are responsible for ensuring that the source and destination acceleration structures don’t overlap in memory. If this is an instance acceleration structure, Metal preserves references to primitive acceleration structures it references.

This operation requires that the destination acceleration structure is at least as large as the compacted size of the source acceleration structure. You can compute this size by calling the [writeCompactedAccelerationStructureSize:toBuffer:](writecompactedsize%28sourceaccelerationstructure_destinationbuffer_%29.md) method.

## See Also

### Encoding acceleration structure copy commands

- [copyAccelerationStructure:toAccelerationStructure:](copy%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md): Encodes an acceleration structure copy operation into the command buffer.
- [writeCompactedAccelerationStructureSize:toBuffer:](writecompactedsize%28sourceaccelerationstructure_destinationbuffer_%29.md): Encodes a command to compute the size an acceleration structure can compact into, writing the result into a buffer.

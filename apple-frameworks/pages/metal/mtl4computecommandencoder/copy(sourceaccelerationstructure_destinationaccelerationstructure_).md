> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4computecommandencoder/copy(sourceaccelerationstructure:destinationaccelerationstructure:)](https://developer.apple.com/documentation/metal/mtl4computecommandencoder/copy(sourceaccelerationstructure:destinationaccelerationstructure:))

# copy(sourceAccelerationStructure:destinationAccelerationStructure:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes an acceleration structure copy operation into the command buffer.

## Declaration

```swift
func copy(sourceAccelerationStructure: any MTLAccelerationStructure, destinationAccelerationStructure: any MTLAccelerationStructure)
```

## Parameters

- `sourceAccelerationStructure`: Acceleration structure to copy from.
- `destinationAccelerationStructure`: Acceleration structure to copy to.

<a id="discussion"></a>

## Discussion

You are responsible for ensuring the source and destination acceleration structures don’t overlap in memory. If this is an instance acceleration structure, Metal preserves references to the primitive acceleration structures it references.

Typically, the destination acceleration structure is at least as large as the source acceleration structure, except in cases where you compact the source acceleration structure. In this case, you need to allocate the destination acceleration to be at least as large as the compacted size of the source acceleration structure.

## See Also

### Encoding acceleration structure copy commands

- [copyAndCompact(sourceAccelerationStructure:destinationAccelerationStructure:)](copyandcompact%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md): Encodes a command to copy and compact an acceleration structure.
- [writeCompactedSize(sourceAccelerationStructure:destinationBuffer:)](writecompactedsize%28sourceaccelerationstructure_destinationbuffer_%29.md): Encodes a command to compute the size an acceleration structure can compact into, writing the result into a buffer.

# copyAccelerationStructure:toAccelerationStructure: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Encodes an acceleration structure copy operation into the command buffer.

## Declaration

```objectivec
- (void) copyAccelerationStructure:(id<MTLAccelerationStructure>) sourceAccelerationStructure toAccelerationStructure:(id<MTLAccelerationStructure>) destinationAccelerationStructure;
```

## Parameters

- `sourceAccelerationStructure`: Acceleration structure to copy from.
- `destinationAccelerationStructure`: Acceleration structure to copy to.

<a id="discussion"></a>

## Discussion

You are responsible for ensuring the source and destination acceleration structures don’t overlap in memory. If this is an instance acceleration structure, Metal preserves references to the primitive acceleration structures it references.

Typically, the destination acceleration structure is at least as large as the source acceleration structure, except in cases where you compact the source acceleration structure. In this case, you need to allocate the destination acceleration to be at least as large as the compacted size of the source acceleration structure.

## See Also

### Encoding acceleration structure copy commands

- [copyAndCompactAccelerationStructure:toAccelerationStructure:](copyandcompact%28sourceaccelerationstructure_destinationaccelerationstructure_%29.md): Encodes a command to copy and compact an acceleration structure.
- [writeCompactedAccelerationStructureSize:toBuffer:](writecompactedsize%28sourceaccelerationstructure_destinationbuffer_%29.md): Encodes a command to compute the size an acceleration structure can compact into, writing the result into a buffer.

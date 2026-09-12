> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4pipelinedescriptor](https://developer.apple.com/documentation/metal/mtl4pipelinedescriptor)

# MTL4PipelineDescriptor (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Base type for descriptors you use for building pipeline state objects.

## Declaration

```swift
class MTL4PipelineDescriptor
```

## Topics

### Instance Properties

- [label](mtl4pipelinedescriptor/label.md): Assigns an optional string that uniquely identifies a pipeline descriptor.
- [options](mtl4pipelinedescriptor/options.md): Provides compile-time options when you build the pipeline.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MTL4ComputePipelineDescriptor](mtl4computepipelinedescriptor.md)
- [MTL4MachineLearningPipelineDescriptor](mtl4machinelearningpipelinedescriptor.md)
- [MTL4MeshRenderPipelineDescriptor](mtl4meshrenderpipelinedescriptor.md)
- [MTL4RenderPipelineDescriptor](mtl4renderpipelinedescriptor.md)
- [MTL4TileRenderPipelineDescriptor](mtl4tilerenderpipelinedescriptor.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](../foundation/nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Pipeline harvesting

- [MTL4PipelineDataSetSerializer](mtl4pipelinedatasetserializer.md): A fast-addition container for collecting data during pipeline state creation.
- [MTL4PipelineDataSetSerializerConfiguration](mtl4pipelinedatasetserializerconfiguration.md): Configuration options for pipeline dataset serializer objects.
- [MTL4PipelineDataSetSerializerDescriptor](mtl4pipelinedatasetserializerdescriptor.md): Groups together properties to create a pipeline data set serializer.
- [MTL4PipelineOptions](mtl4pipelineoptions.md): Provides options controlling how to compile a pipeline state.

# MTL4PipelineDescriptor (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Base type for descriptors you use for building pipeline state objects.

## Declaration

```objectivec
@interface MTL4PipelineDescriptor : NSObject
```

## Topics

### Instance Properties

- [label](mtl4pipelinedescriptor/label.md): Assigns an optional string that uniquely identifies a pipeline descriptor.
- [options](mtl4pipelinedescriptor/options.md): Provides compile-time options when you build the pipeline.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MTL4ComputePipelineDescriptor](mtl4computepipelinedescriptor.md)
- [MTL4MachineLearningPipelineDescriptor](mtl4machinelearningpipelinedescriptor.md)
- [MTL4MeshRenderPipelineDescriptor](mtl4meshrenderpipelinedescriptor.md)
- [MTL4RenderPipelineDescriptor](mtl4renderpipelinedescriptor.md)
- [MTL4TileRenderPipelineDescriptor](mtl4tilerenderpipelinedescriptor.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Pipeline harvesting

- [MTL4PipelineDataSetSerializer](mtl4pipelinedatasetserializer.md): A fast-addition container for collecting data during pipeline state creation.
- [MTL4PipelineDataSetSerializerConfiguration](mtl4pipelinedatasetserializerconfiguration.md): Configuration options for pipeline dataset serializer objects.
- [MTL4PipelineDataSetSerializerDescriptor](mtl4pipelinedatasetserializerdescriptor.md): Groups together properties to create a pipeline data set serializer.
- [MTL4PipelineOptions](mtl4pipelineoptions.md): Provides options controlling how to compile a pipeline state.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtldevice/makepipelinedatasetserializer(descriptor:)](https://developer.apple.com/documentation/metal/mtldevice/makepipelinedatasetserializer(descriptor:))

# makePipelineDataSetSerializer(descriptor:) (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new pipeline data set serializer instance from a descriptor.

## Declaration

```swift
func makePipelineDataSetSerializer(descriptor: MTL4PipelineDataSetSerializerDescriptor) -> any MTL4PipelineDataSetSerializer
```

## Parameters

- `descriptor`: A [MTL4PipelineDataSetSerializerDescriptor](../mtl4pipelinedatasetserializerdescriptor.md) instance that configures the new [MTL4PipelineDataSetSerializer](../mtl4pipelinedatasetserializer.md) instance.

<a id="return-value"></a>

## Return Value

A [MTL4PipelineDataSetSerializer](../mtl4pipelinedatasetserializer.md) instance, or `nil` if the function failed.

# newPipelineDataSetSerializerWithDescriptor: (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a new pipeline data set serializer instance from a descriptor.

## Declaration

```objectivec
- (id<MTL4PipelineDataSetSerializer>) newPipelineDataSetSerializerWithDescriptor:(MTL4PipelineDataSetSerializerDescriptor *) descriptor;
```

## Parameters

- `descriptor`: A [MTL4PipelineDataSetSerializerDescriptor](../mtl4pipelinedatasetserializerdescriptor.md) instance that configures the new [MTL4PipelineDataSetSerializer](../mtl4pipelinedatasetserializer.md) instance.

<a id="return-value"></a>

## Return Value

A [MTL4PipelineDataSetSerializer](../mtl4pipelinedatasetserializer.md) instance, or `nil` if the function failed.

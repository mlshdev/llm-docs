> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlrenderpipelinestate/makerenderpipelinedescriptorforspecialization()](https://developer.apple.com/documentation/metal/mtlrenderpipelinestate/makerenderpipelinedescriptorforspecialization())

# makeRenderPipelineDescriptorForSpecialization() (Swift)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a render pipeline descriptor from this pipeline that you can use for pipeline specialization.

## Declaration

```swift
func makeRenderPipelineDescriptorForSpecialization() -> MTL4PipelineDescriptor
```

<a id="return-value"></a>

## Return Value

A new pipeline descriptor that you use for pipeline state specialization.

<a id="discussion"></a>

## Discussion

Use this method to obtain a new [MTL4PipelineDescriptor](../mtl4pipelinedescriptor.md) instance that you can use to specialize any unspecialized properties in this pipeline state object.

The returned descriptor contains every unspecialized field in the current pipeline state object, set to unspecialized. It may, however, not contain valid or accurate properties in any other field.

This descriptor is only valid for the purpose of calling specialization functions on the [MTL4Compiler](../mtl4compiler.md) to specialize this pipeline, for example: [newRenderPipelineStateBySpecializationWithDescriptor:pipeline:error:](../mtl4compiler/newrenderpipelinestatebyspecializationwithdescriptor_pipeline_error_.md).

Although this method returns the [MTL4PipelineDescriptor](../mtl4pipelinedescriptor.md) base class, the concrete instance this method returns corresponds to the specific descriptor type for the creation of this pipeline state, for example if a [MTL4Compiler](../mtl4compiler.md) instance creates this current pipeline form a [MTLTileRenderPipelineDescriptor](../mtltilerenderpipelinedescriptor.md), this method returns a concrete [MTLTileRenderPipelineDescriptor](../mtltilerenderpipelinedescriptor.md) instance.

# newRenderPipelineDescriptorForSpecialization (Objective-C)

**Framework:** Metal  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Creates a render pipeline descriptor from this pipeline that you can use for pipeline specialization.

## Declaration

```objectivec
- (MTL4PipelineDescriptor *) newRenderPipelineDescriptorForSpecialization;
```

<a id="return-value"></a>

## Return Value

A new pipeline descriptor that you use for pipeline state specialization.

<a id="discussion"></a>

## Discussion

Use this method to obtain a new [MTL4PipelineDescriptor](../mtl4pipelinedescriptor.md) instance that you can use to specialize any unspecialized properties in this pipeline state object.

The returned descriptor contains every unspecialized field in the current pipeline state object, set to unspecialized. It may, however, not contain valid or accurate properties in any other field.

This descriptor is only valid for the purpose of calling specialization functions on the [MTL4Compiler](../mtl4compiler.md) to specialize this pipeline, for example: [newRenderPipelineStateBySpecializationWithDescriptor:pipeline:error:](../mtl4compiler/newrenderpipelinestatebyspecializationwithdescriptor_pipeline_error_.md).

Although this method returns the [MTL4PipelineDescriptor](../mtl4pipelinedescriptor.md) base class, the concrete instance this method returns corresponds to the specific descriptor type for the creation of this pipeline state, for example if a [MTL4Compiler](../mtl4compiler.md) instance creates this current pipeline form a [MTLTileRenderPipelineDescriptor](../mtltilerenderpipelinedescriptor.md), this method returns a concrete [MTLTileRenderPipelineDescriptor](../mtltilerenderpipelinedescriptor.md) instance.

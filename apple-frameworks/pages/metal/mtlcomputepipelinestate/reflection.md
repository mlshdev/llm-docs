> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlcomputepipelinestate/reflection](https://developer.apple.com/documentation/metal/mtlcomputepipelinestate/reflection)

# reflection (Swift)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The compute pipeline’s reflection information, if available.

## Declaration

```swift
var reflection: MTLComputePipelineReflection? { get }
```

<a id="discussion"></a>

## Discussion

The property is `nil` by default to help reduce your app’s memory footprint, but you can create reflection information when your app needs it.

Create reflection information by building a pipeline from an [MTL4Compiler](../mtl4compiler.md) instance with the following steps:

1. Configure the [shaderReflection](../mtl4pipelineoptions/shaderreflection.md) property of an [MTL4PipelineOptions](../mtl4pipelineoptions.md) instance.
2. Assign that instance to the [options](../mtl4pipelinedescriptor/options.md) property of an [MTL4PipelineDescriptor](../mtl4pipelinedescriptor.md) instance.
3. Create a compute pipeline state by passing that pipeline descriptor to one of the [MTL4Compiler](../mtl4compiler.md) instance’s methods.

The property is `nil` when you create a pipeline state from an[MTLDevice](../mtldevice.md) instance, such as with its [makeComputePipelineState(descriptor:options:completionHandler:)](../mtldevice/makecomputepipelinestate%28descriptor_options_completionhandler_%29.md) method.

# reflection (Objective-C)

**Framework:** Metal  
**Kind:** Instance Property  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

The compute pipeline’s reflection information, if available.

## Declaration

```objectivec
@property (readonly, nullable) MTLComputePipelineReflection * reflection;
```

<a id="discussion"></a>

## Discussion

The property is `nil` by default to help reduce your app’s memory footprint, but you can create reflection information when your app needs it.

Create reflection information by building a pipeline from an [MTL4Compiler](../mtl4compiler.md) instance with the following steps:

1. Configure the [shaderReflection](../mtl4pipelineoptions/shaderreflection.md) property of an [MTL4PipelineOptions](../mtl4pipelineoptions.md) instance.
2. Assign that instance to the [options](../mtl4pipelinedescriptor/options.md) property of an [MTL4PipelineDescriptor](../mtl4pipelinedescriptor.md) instance.
3. Create a compute pipeline state by passing that pipeline descriptor to one of the [MTL4Compiler](../mtl4compiler.md) instance’s methods.

The property is `nil` when you create a pipeline state from an[MTLDevice](../mtldevice.md) instance, such as with its [newComputePipelineStateWithDescriptor:options:completionHandler:](../mtldevice/makecomputepipelinestate%28descriptor_options_completionhandler_%29.md) method.

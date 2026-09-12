> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4pipelineoptions](https://developer.apple.com/documentation/metal/mtl4pipelineoptions)

# MTL4PipelineOptions (Swift)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides options controlling how to compile a pipeline state.

## Declaration

```swift
class MTL4PipelineOptions
```

<a id="overview"></a>

## Overview

You provide these options through the [MTL4PipelineDescriptor](mtl4pipelinedescriptor.md) class at compilation time.

## Topics

### Instance Properties

- [shaderReflection](mtl4pipelineoptions/shaderreflection.md): Controls whether to include Metal shader reflection in this pipeline.
- [shaderValidation](mtl4pipelineoptions/shadervalidation.md): Controls whether to enable or disable Metal Shader Validation for the pipeline.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

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
- [MTL4PipelineDescriptor](mtl4pipelinedescriptor.md): Base type for descriptors you use for building pipeline state objects.

# MTL4PipelineOptions (Objective-C)

**Framework:** Metal  
**Kind:** Class  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Provides options controlling how to compile a pipeline state.

## Declaration

```objectivec
@interface MTL4PipelineOptions : NSObject
```

<a id="overview"></a>

## Overview

You provide these options through the [MTL4PipelineDescriptor](mtl4pipelinedescriptor.md) class at compilation time.

## Topics

### Instance Properties

- [shaderReflection](mtl4pipelineoptions/shaderreflection.md): Controls whether to include Metal shader reflection in this pipeline.
- [shaderValidation](mtl4pipelineoptions/shadervalidation.md): Controls whether to enable or disable Metal Shader Validation for the pipeline.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../foundation/nscopying.md)

## See Also

### Pipeline harvesting

- [MTL4PipelineDataSetSerializer](mtl4pipelinedatasetserializer.md): A fast-addition container for collecting data during pipeline state creation.
- [MTL4PipelineDataSetSerializerConfiguration](mtl4pipelinedatasetserializerconfiguration.md): Configuration options for pipeline dataset serializer objects.
- [MTL4PipelineDataSetSerializerDescriptor](mtl4pipelinedatasetserializerdescriptor.md): Groups together properties to create a pipeline data set serializer.
- [MTL4PipelineDescriptor](mtl4pipelinedescriptor.md): Base type for descriptors you use for building pipeline state objects.

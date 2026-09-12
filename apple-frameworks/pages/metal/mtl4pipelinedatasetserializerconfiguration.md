> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtl4pipelinedatasetserializerconfiguration](https://developer.apple.com/documentation/metal/mtl4pipelinedatasetserializerconfiguration)

# MTL4PipelineDataSetSerializerConfiguration (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configuration options for pipeline dataset serializer objects.

## Declaration

```swift
struct MTL4PipelineDataSetSerializerConfiguration
```

<a id="overview"></a>

## Overview

Use these options to enable different functionality in instances of [MTL4PipelineDataSetSerializer](mtl4pipelinedatasetserializer.md).

You can combine these values via a logical `OR` and set it to [configuration](mtl4pipelinedatasetserializerdescriptor/configuration.md) to specify desired level of serialization support for instances of [MTL4PipelineDataSetSerializer](mtl4pipelinedatasetserializer.md).

## Topics

### Initializers

- [init(rawValue:)](mtl4pipelinedatasetserializerconfiguration/init%28rawvalue_%29.md)

### Type Properties

- [captureBinaries](mtl4pipelinedatasetserializerconfiguration/capturebinaries.md): Enables serializing pipeline binary functions.
- [captureDescriptors](mtl4pipelinedatasetserializerconfiguration/capturedescriptors.md): Enables serializing pipeline scripts.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Pipeline harvesting

- [MTL4PipelineDataSetSerializer](mtl4pipelinedatasetserializer.md): A fast-addition container for collecting data during pipeline state creation.
- [MTL4PipelineDataSetSerializerDescriptor](mtl4pipelinedatasetserializerdescriptor.md): Groups together properties to create a pipeline data set serializer.
- [MTL4PipelineDescriptor](mtl4pipelinedescriptor.md): Base type for descriptors you use for building pipeline state objects.
- [MTL4PipelineOptions](mtl4pipelineoptions.md): Provides options controlling how to compile a pipeline state.

# MTL4PipelineDataSetSerializerConfiguration (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

Configuration options for pipeline dataset serializer objects.

## Declaration

```objectivec
enum MTL4PipelineDataSetSerializerConfiguration : NSUInteger;
```

<a id="overview"></a>

## Overview

Use these options to enable different functionality in instances of [MTL4PipelineDataSetSerializer](mtl4pipelinedatasetserializer.md).

You can combine these values via a logical `OR` and set it to [configuration](mtl4pipelinedatasetserializerdescriptor/configuration.md) to specify desired level of serialization support for instances of [MTL4PipelineDataSetSerializer](mtl4pipelinedatasetserializer.md).

## Topics

### Enumeration Cases

- [MTL4PipelineDataSetSerializerConfigurationCaptureBinaries](mtl4pipelinedatasetserializerconfiguration/capturebinaries.md): Enables serializing pipeline binary functions.
- [MTL4PipelineDataSetSerializerConfigurationCaptureDescriptors](mtl4pipelinedatasetserializerconfiguration/capturedescriptors.md): Enables serializing pipeline scripts.

## See Also

### Pipeline harvesting

- [MTL4PipelineDataSetSerializer](mtl4pipelinedatasetserializer.md): A fast-addition container for collecting data during pipeline state creation.
- [MTL4PipelineDataSetSerializerDescriptor](mtl4pipelinedatasetserializerdescriptor.md): Groups together properties to create a pipeline data set serializer.
- [MTL4PipelineDescriptor](mtl4pipelinedescriptor.md): Base type for descriptors you use for building pipeline state objects.
- [MTL4PipelineOptions](mtl4pipelineoptions.md): Provides options controlling how to compile a pipeline state.

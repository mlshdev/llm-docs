> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metal/mtlpipelineoption](https://developer.apple.com/documentation/metal/mtlpipelineoption)

# MTLPipelineOption (Swift)

**Framework:** Metal  
**Kind:** Structure  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Options that determine how Metal prepares the pipeline.

## Declaration

```swift
struct MTLPipelineOption
```

## Mentioned In

- [Creating binary archives from device-built pipeline state objects](creating-binary-archives-from-device-built-pipeline-state-objects.md)

## Topics

### Retrieving argument information

- [bufferTypeInfo](mtlpipelineoption/buffertypeinfo.md): An option instance that provides detailed buffer type information for buffer arguments.
- [failOnBinaryArchiveMiss](mtlpipelineoption/failonbinaryarchivemiss.md): An option that instructs the compiler to return an error when a GPU function isn’t in a binary archive.
- [argumentInfo](mtlpipelineoption/argumentinfo.md): Deprecated. An option instance that provides argument information for textures and threadgroup memory.

### Creating compilation options

- [init(rawValue:)](mtlpipelineoption/init%28rawvalue_%29.md): Creates empty compilation options.

### Type properties

- [bindingInfo](mtlpipelineoption/bindinginfo.md): An option that provides binding information for pipeline state resources.

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

### Configuring a compute pipeline state

- [MTL4ComputePipelineDescriptor](mtl4computepipelinedescriptor.md): Describes a compute pipeline state.
- [MTLComputePipelineDescriptor](mtlcomputepipelinedescriptor.md): An instance describing the desired GPU state for a kernel call in a compute pass.
- [MTLComputePipelineState](mtlcomputepipelinestate.md): An interface that represents a GPU pipeline configuration for running kernels in a compute pass.
- [MTLStageInputOutputDescriptor](mtlstageinputoutputdescriptor.md): A description of the input and output data of a function.
- [MTLPipelineBufferDescriptor](mtlpipelinebufferdescriptor.md): The mutability options for a buffer that a render or compute pipeline uses.
- [MTLPipelineBufferDescriptorArray](mtlpipelinebufferdescriptorarray.md): An array of pipeline buffer descriptors.

# MTLPipelineOption (Objective-C)

**Framework:** Metal  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS · visionOS 1.0+

Options that determine how Metal prepares the pipeline.

## Declaration

```objectivec
enum MTLPipelineOption : NSUInteger;
```

## Mentioned In

- [Creating binary archives from device-built pipeline state objects](creating-binary-archives-from-device-built-pipeline-state-objects.md)

## Topics

### Retrieving argument information

- [MTLPipelineOptionNone](mtlpipelineoption/mtlpipelineoptionnone.md): Don’t provide any reflection information.
- [MTLPipelineOptionBufferTypeInfo](mtlpipelineoption/buffertypeinfo.md): An option instance that provides detailed buffer type information for buffer arguments.
- [MTLPipelineOptionFailOnBinaryArchiveMiss](mtlpipelineoption/failonbinaryarchivemiss.md): An option that instructs the compiler to return an error when a GPU function isn’t in a binary archive.
- [MTLPipelineOptionArgumentInfo](mtlpipelineoption/argumentinfo.md): Deprecated. An option instance that provides argument information for textures and threadgroup memory.

### Type properties

- [MTLPipelineOptionBindingInfo](mtlpipelineoption/bindinginfo.md): An option that provides binding information for pipeline state resources.

## See Also

### Configuring a compute pipeline state

- [MTL4ComputePipelineDescriptor](mtl4computepipelinedescriptor.md): Describes a compute pipeline state.
- [MTLComputePipelineDescriptor](mtlcomputepipelinedescriptor.md): An instance describing the desired GPU state for a kernel call in a compute pass.
- [MTLComputePipelineState](mtlcomputepipelinestate.md): An interface that represents a GPU pipeline configuration for running kernels in a compute pass.
- [MTLStageInputOutputDescriptor](mtlstageinputoutputdescriptor.md): A description of the input and output data of a function.
- [MTLPipelineBufferDescriptor](mtlpipelinebufferdescriptor.md): The mutability options for a buffer that a render or compute pipeline uses.
- [MTLPipelineBufferDescriptorArray](mtlpipelinebufferdescriptorarray.md): An array of pipeline buffer descriptors.

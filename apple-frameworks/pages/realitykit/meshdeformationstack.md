> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshdeformationstack](https://developer.apple.com/documentation/realitykit/meshdeformationstack)

# MeshDeformationStack

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

A set of `MeshDeformer`s to apply in order to a mesh, or a proper subset of the mesh specified by `Target`s. If at any point, a deformer in the stack updates, all deformers later in the stack will also update.

## Declaration

```swift
struct MeshDeformationStack
```

## Topics

### Creating a deformation stack

- [init(deformers:targets:)](meshdeformationstack/init%28deformers_targets_%29.md): Initializer deformers, and target configurations.

### Configuring deformation

- [deformers](meshdeformationstack/deformers.md): The `Deformers` to apply in order to a mesh.
- [targets](meshdeformationstack/targets.md): The set of `MeshScope`s that will be deformed by the `MeshDeformationStack`.

### Comparing stacks

- [==(\_:\_:)](meshdeformationstack/==%28____%29.md): Returns a Boolean value indicating whether two values are equal.

### Initializers

- [init()](meshdeformationstack/init%28%29.md): Default empty initializer

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Parameters and options

- [MeshDeformerOptions](meshdeformeroptions.md): Specifies constant options for `MeshDeformer`
- [MeshDeformerVertexOptions](meshdeformervertexoptions.md): MeshDeformerVertexOptions allows developers to specify which vertex types in the mesh to allocate in the input and output buffers for mesh deformations.
- [MeshDeformerExecutionMode](meshdeformerexecutionmode.md): Specifies which `MesDeformer.deform` function will be called when used with custom deformers.
- [MeshDeformParameter](meshdeformparameter.md): Base class for GPU and CPU custom deform function input
- [MeshScope](meshscope.md): The elements of a mesh resource that a deformation stack applies to.
- [MeshDeformParameterCPU](meshdeformparametercpu.md): convenience alias
- [MeshDeformParameterGPU](meshdeformparametergpu.md): convenience alias
- [MeshDeformParametersCPU](meshdeformparameterscpu.md): convenience alias
- [MeshDeformParametersGPU](meshdeformparametersgpu.md): convenience alias
- [MeshDeformCPUBufferInput](meshdeformcpubufferinput.md): The underlying type of deformer input data buffers for the CPU functions.
- [MeshDeformGPUBufferInput](meshdeformgpubufferinput.md): The underlying type of deformer input data buffers for the GPU functions.
- [MeshDeformCPUBufferOutput](meshdeformcpubufferoutput.md): The underlying type of deformer output data buffers for the CPU functions.
- [MeshDeformGPUBufferOutput](meshdeformgpubufferoutput.md): The underlying type of deformer input data buffers for the GPU functions.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshscope](https://developer.apple.com/documentation/realitykit/meshscope)

# MeshScope

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

The elements of a mesh resource that a deformation stack applies to.

## Declaration

```swift
struct MeshScope
```

## Topics

### Creating a mesh scope

- [model(name:part:)](meshscope/model%28name_part_%29.md): Apply to model by `name`, all parts if `part` is nil, otherwise only to the specific `part`.
- [instance(name:part:)](meshscope/instance%28name_part_%29.md): Apply to instance by `name`, all parts if `part` is nil, otherwise only to the specific `part`.

### Inspecting the scope

- [isAll](meshscope/isall.md)
- [isModel](meshscope/ismodel.md)
- [isInstance](meshscope/isinstance.md)

### Instance Properties

- [description](meshscope/description.md): A textual representation of this instance.

### Type Properties

- [all](meshscope/all.md): Apply to all models and instances.

## Relationships

### Conforms To

- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Parameters and options

- [MeshDeformerOptions](meshdeformeroptions.md): Specifies constant options for `MeshDeformer`
- [MeshDeformerVertexOptions](meshdeformervertexoptions.md): MeshDeformerVertexOptions allows developers to specify which vertex types in the mesh to allocate in the input and output buffers for mesh deformations.
- [MeshDeformerExecutionMode](meshdeformerexecutionmode.md): Specifies which `MesDeformer.deform` function will be called when used with custom deformers.
- [MeshDeformParameter](meshdeformparameter.md): Base class for GPU and CPU custom deform function input
- [MeshDeformationStack](meshdeformationstack.md): A set of `MeshDeformer`s to apply in order to a mesh, or a proper subset of the mesh specified by `Target`s. If at any point, a deformer in the stack updates, all deformers later in the stack will also update.
- [MeshDeformParameterCPU](meshdeformparametercpu.md): convenience alias
- [MeshDeformParameterGPU](meshdeformparametergpu.md): convenience alias
- [MeshDeformParametersCPU](meshdeformparameterscpu.md): convenience alias
- [MeshDeformParametersGPU](meshdeformparametersgpu.md): convenience alias
- [MeshDeformCPUBufferInput](meshdeformcpubufferinput.md): The underlying type of deformer input data buffers for the CPU functions.
- [MeshDeformGPUBufferInput](meshdeformgpubufferinput.md): The underlying type of deformer input data buffers for the GPU functions.
- [MeshDeformCPUBufferOutput](meshdeformcpubufferoutput.md): The underlying type of deformer output data buffers for the CPU functions.
- [MeshDeformGPUBufferOutput](meshdeformgpubufferoutput.md): The underlying type of deformer input data buffers for the GPU functions.

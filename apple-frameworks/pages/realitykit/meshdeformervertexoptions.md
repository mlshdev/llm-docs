> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshdeformervertexoptions](https://developer.apple.com/documentation/realitykit/meshdeformervertexoptions)

# MeshDeformerVertexOptions

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

MeshDeformerVertexOptions allows developers to specify which vertex types in the mesh to allocate in the input and output buffers for mesh deformations.

## Declaration

```swift
struct MeshDeformerVertexOptions
```

## Topics

### Specifying geometric attributes

- [positions](meshdeformervertexoptions/positions.md): Specifies positions only.
- [normals](meshdeformervertexoptions/normals.md): Specifies normals only.
- [tangents](meshdeformervertexoptions/tangents.md): Specifies tangents only.
- [bitangents](meshdeformervertexoptions/bitangents.md): Specifies bitangents only.
- [tangentFrame](meshdeformervertexoptions/tangentframe.md): Specifies all of the normalizable vertex types.

### Specifying texture coordinates

- [uvs](meshdeformervertexoptions/uvs.md): Specifies uvs only.
- [uv1s](meshdeformervertexoptions/uv1s.md): Specifies uv1s only.
- [uv2s](meshdeformervertexoptions/uv2s.md): Specifies uv2s only.
- [uv3s](meshdeformervertexoptions/uv3s.md): Specifies uv3s only.
- [uv4s](meshdeformervertexoptions/uv4s.md): Specifies uv4s only.
- [uv5s](meshdeformervertexoptions/uv5s.md): Specifies uv5s only.
- [uv6s](meshdeformervertexoptions/uv6s.md): Specifies uv6s only.
- [uv7s](meshdeformervertexoptions/uv7s.md): Specifies uv7s only.

### Storing option values

- [MeshDeformerVertexOptions.OptionStorage](meshdeformervertexoptions/optionstorage.md)

### Type Properties

- [all](meshdeformervertexoptions/all.md): Specifies all vertex types.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Parameters and options

- [MeshDeformerOptions](meshdeformeroptions.md): Specifies constant options for `MeshDeformer`
- [MeshDeformerExecutionMode](meshdeformerexecutionmode.md): Specifies which `MesDeformer.deform` function will be called when used with custom deformers.
- [MeshDeformParameter](meshdeformparameter.md): Base class for GPU and CPU custom deform function input
- [MeshDeformationStack](meshdeformationstack.md): A set of `MeshDeformer`s to apply in order to a mesh, or a proper subset of the mesh specified by `Target`s. If at any point, a deformer in the stack updates, all deformers later in the stack will also update.
- [MeshScope](meshscope.md): The elements of a mesh resource that a deformation stack applies to.
- [MeshDeformParameterCPU](meshdeformparametercpu.md): convenience alias
- [MeshDeformParameterGPU](meshdeformparametergpu.md): convenience alias
- [MeshDeformParametersCPU](meshdeformparameterscpu.md): convenience alias
- [MeshDeformParametersGPU](meshdeformparametersgpu.md): convenience alias
- [MeshDeformCPUBufferInput](meshdeformcpubufferinput.md): The underlying type of deformer input data buffers for the CPU functions.
- [MeshDeformGPUBufferInput](meshdeformgpubufferinput.md): The underlying type of deformer input data buffers for the GPU functions.
- [MeshDeformCPUBufferOutput](meshdeformcpubufferoutput.md): The underlying type of deformer output data buffers for the CPU functions.
- [MeshDeformGPUBufferOutput](meshdeformgpubufferoutput.md): The underlying type of deformer input data buffers for the GPU functions.

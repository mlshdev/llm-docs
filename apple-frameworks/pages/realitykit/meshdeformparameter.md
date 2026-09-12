> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshdeformparameter](https://developer.apple.com/documentation/realitykit/meshdeformparameter)

# MeshDeformParameter

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Base class for GPU and CPU custom deform function input

## Declaration

```swift
struct MeshDeformParameter<InputBuffer, OutputBuffer>
```

## Topics

### Accessing deformation buffers

- [inputBuffers](meshdeformparameter/inputbuffers.md): The specified input vertex data for the deformer function.
- [outputBuffers](meshdeformparameter/outputbuffers.md): The specified output vertex data for the deformer function.
- [MeshDeformParameter.VertexBuffers](meshdeformparameter/vertexbuffers.md): The vertices requested by the developer when they defined their custom deformations. These will be passed into their custom deformation functions.

## See Also

### Parameters and options

- [MeshDeformerOptions](meshdeformeroptions.md): Specifies constant options for `MeshDeformer`
- [MeshDeformerVertexOptions](meshdeformervertexoptions.md): MeshDeformerVertexOptions allows developers to specify which vertex types in the mesh to allocate in the input and output buffers for mesh deformations.
- [MeshDeformerExecutionMode](meshdeformerexecutionmode.md): Specifies which `MesDeformer.deform` function will be called when used with custom deformers.
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

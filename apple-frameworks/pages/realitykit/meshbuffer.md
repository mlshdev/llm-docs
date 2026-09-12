> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/meshbuffer](https://developer.apple.com/documentation/realitykit/meshbuffer)

# MeshBuffer

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

Mesh buffer containing elements of any type.

## Declaration

```swift
struct MeshBuffer<Element>
```

## Topics

### Creating a mesh buffer

- [init(\_:)](meshbuffer/init%28__%29-13uzl.md): Conforms when `Element` is `SIMD4<Float>`. Create a buffer from any sequence of elements.
- [init(\_:)](meshbuffer/init%28__%29-1f0ai.md): Conforms when `Element` is `UInt32`. Create buffer from an array of elements.
- [init(\_:)](meshbuffer/init%28__%29-1hyiz.md): Conforms when `Element` is `Float`. Create buffer from an array of elements.
- [init(\_:)](meshbuffer/init%28__%29-2okpc.md): Conforms when `Element` is `UInt16`. Create a buffer from any sequence of elements.
- [init(\_:)](meshbuffer/init%28__%29-3bqai.md): Conforms when `Element` is `Double`. Create buffer from an array of elements.
- [init(\_:)](meshbuffer/init%28__%29-3pbx9.md): Conforms when `Element` is `SIMD2<Float>`. Create a buffer from any sequence of elements.
- [init(\_:)](meshbuffer/init%28__%29-4ahf1.md): Conforms when `Element` is `Int16`. Create a buffer from any sequence of elements.
- [init(\_:)](meshbuffer/init%28__%29-5a11h.md): Conforms when `Element` is `SIMD3<Float>`. Create a buffer from any sequence of elements.
- [init(\_:)](meshbuffer/init%28__%29-5sh0b.md): Conforms when `Element` is `Int32`. Create buffer from an array of elements.
- [init(\_:)](meshbuffer/init%28__%29-650mf.md): Conforms when `Element` is `UInt16`. Create buffer from an array of elements.
- [init(\_:)](meshbuffer/init%28__%29-6hldv.md): Conforms when `Element` is `Int32`. Create a buffer from any sequence of elements.
- [init(\_:)](meshbuffer/init%28__%29-77mou.md): Conforms when `Element` is `SIMD2<Float>`. Create buffer from an array of elements.
- [init(\_:)](meshbuffer/init%28__%29-7d6t8.md): Conforms when `Element` is `UInt8`. Create a buffer from any sequence of elements.
- [init(\_:)](meshbuffer/init%28__%29-8m4zg.md): Conforms when `Element` is `SIMD3<Float>`. Create buffer from an array of elements.
- [init(\_:)](meshbuffer/init%28__%29-8p5ux.md): Conforms when `Element` is `UInt32`. Create a buffer from any sequence of elements.
- [init(\_:)](meshbuffer/init%28__%29-8yhn7.md): Conforms when `Element` is `Float`. Create a buffer from any sequence of elements.
- [init(\_:)](meshbuffer/init%28__%29-94e5y.md): Conforms when `Element` is `Int8`. Create a buffer from any sequence of elements.
- [init(\_:)](meshbuffer/init%28__%29-991gl.md): Conforms when `Element` is `SIMD4<Float>`. Create buffer from an array of elements.
- [init(\_:)](meshbuffer/init%28__%29-9eppl.md): Conforms when `Element` is `Double`. Create a buffer from any sequence of elements.
- [init(\_:)](meshbuffer/init%28__%29-9o6sp.md): Conforms when `Element` is `UInt8`. Create buffer from an array of elements.
- [init(\_:)](meshbuffer/init%28__%29-9tja8.md): Conforms when `Element` is `Int8`. Create buffer from an array of elements.
- [init(\_:)](meshbuffer/init%28__%29-11fcy.md): Conforms when `Element` is `Int16`. Create buffer from an array of elements.
- [init(elements:indices:)](meshbuffer/init%28elements_indices_%29-2f47d.md): Conforms when `Element` is `UInt16`. Create buffer from an array of element values and an array of indices into that value array.
- [init(elements:indices:)](meshbuffer/init%28elements_indices_%29-2nr7l.md): Conforms when `Element` is `Float`. Create buffer from an array of element values and an array of indices into that value array.
- [init(elements:indices:)](meshbuffer/init%28elements_indices_%29-2wcfg.md): Conforms when `Element` is `Int32`. Create buffer from an array of element values and an array of indices into that value array.
- [init(elements:indices:)](meshbuffer/init%28elements_indices_%29-3m3mo.md): Conforms when `Element` is `UInt8`. Create buffer from an array of element values and an array of indices into that value array.
- [init(elements:indices:)](meshbuffer/init%28elements_indices_%29-4kg29.md): Conforms when `Element` is `SIMD3<Float>`. Create buffer from an array of element values and an array of indices into that value array.
- [init(elements:indices:)](meshbuffer/init%28elements_indices_%29-4yxh4.md): Conforms when `Element` is `SIMD4<Float>`. Create buffer from an array of element values and an array of indices into that value array.
- [init(elements:indices:)](meshbuffer/init%28elements_indices_%29-5mhon.md): Conforms when `Element` is `SIMD2<Float>`. Create buffer from an array of element values and an array of indices into that value array.
- [init(elements:indices:)](meshbuffer/init%28elements_indices_%29-76tes.md): Conforms when `Element` is `UInt32`. Create buffer from an array of element values and an array of indices into that value array.
- [init(elements:indices:)](meshbuffer/init%28elements_indices_%29-7gw7i.md): Conforms when `Element` is `Int8`. Create buffer from an array of element values and an array of indices into that value array.
- [init(elements:indices:)](meshbuffer/init%28elements_indices_%29-8dbzg.md): Conforms when `Element` is `Int16`. Create buffer from an array of element values and an array of indices into that value array.
- [init(elements:indices:)](meshbuffer/init%28elements_indices_%29-97yff.md): Conforms when `Element` is `Double`. Create buffer from an array of element values and an array of indices into that value array.

### Inspecting a mesh

- [elements](meshbuffer/elements.md): Access the buffer as an array. This may create a copy if the data are not already an array.
- [rate](meshbuffer/rate.md): Rate of the buffer.

### Iterating the elements of a buffer

- [forEach(\_:)](meshbuffer/foreach%28__%29-53vhs.md): Iterate over pairs of elements.
- [forEach(\_:)](meshbuffer/foreach%28__%29-7o3tb.md): Iterate over three elements per step.
- [forEach(\_:)](meshbuffer/foreach%28__%29-xhri.md): Iterate over four elements per step.
- [usingRate(\_:)](meshbuffer/usingrate%28__%29.md): New object with updated rate.

### Initializers

- [init(\_:)](meshbuffer/init%28__%29.md): Conforms when `Element` is `MeshJointInfluence`. Create buffer from an array of elements.
- [init(elements:indices:)](meshbuffer/init%28elements_indices_%29.md): Conforms when `Element` is `MeshJointInfluence`. Create buffer from an array of element values and an array of indices into that value array.

### Instance Properties

- [count](meshbuffer/count.md): The number of elements in the buffer.

### Instance Methods

- [forEach(\_:)](meshbuffer/foreach%28__%29.md): Iterate over pairs of elements.

## Relationships

### Conforms To

- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Mesh description

- [MeshBufferContainer](meshbuffercontainer.md): Conforming objects contain a table of mesh buffers.
- [MeshBufferSemantic](meshbuffersemantic.md): A protocol that holds an identifier value for mesh buffers.
- [MeshBuffers](meshbuffers.md): An object that holds the data for an model entity’s mesh.
- [AnyMeshBuffer](anymeshbuffer.md): Mesh buffer stored in the container.
- [MeshInstanceCollection](meshinstancecollection.md): An object that holds a collection of mesh resource instances.
- [MeshModelCollection](meshmodelcollection.md): An object that holds a collection of mesh models.
- [MeshPartCollection](meshpartcollection.md): An object that holds a collection of mesh parts.

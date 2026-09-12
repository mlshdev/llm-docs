> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvoxelarray/mesh(using:)](https://developer.apple.com/documentation/modelio/mdlvoxelarray/mesh(using:))

# mesh(using:) (Swift)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Generates a closed polygon mesh around the volume of space the voxel array describes.

## Declaration

```swift
func mesh(using allocator: (any MDLMeshBufferAllocator)?) -> MDLMesh?
```

## Parameters

- `allocator`: An object responsible for allocating mesh vertex data. If `nil`, Model I/O uses an internal allocator object.

<a id="return-value"></a>

## Return Value

A new mesh object.

<a id="Discussion"></a>

## Discussion

Use this method to create a polygon mesh for use in rendering the object described by the voxel array.

The `allocator` parameter controls vertex data allocation for the mesh. For example, to use the MetalKit framework for loading vertex data into GPU buffers for rendering using Metal, pass a [MTKMeshBufferAllocator](../../metalkit/mtkmeshbufferallocator.md) object. By specifying an allocator, you can ensure that mesh data is copied a minimal number of times between being generated and being loaded into GPU memory for rendering.

# meshUsingAllocator: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Generates a closed polygon mesh around the volume of space the voxel array describes.

## Declaration

```objectivec
- (MDLMesh *) meshUsingAllocator:(id<MDLMeshBufferAllocator>) allocator;
```

## Parameters

- `allocator`: An object responsible for allocating mesh vertex data. If `nil`, Model I/O uses an internal allocator object.

<a id="return-value"></a>

## Return Value

A new mesh object.

<a id="Discussion"></a>

## Discussion

Use this method to create a polygon mesh for use in rendering the object described by the voxel array.

The `allocator` parameter controls vertex data allocation for the mesh. For example, to use the MetalKit framework for loading vertex data into GPU buffers for rendering using Metal, pass a [MTKMeshBufferAllocator](../../metalkit/mtkmeshbufferallocator.md) object. By specifying an allocator, you can ensure that mesh data is copied a minimal number of times between being generated and being loaded into GPU memory for rendering.

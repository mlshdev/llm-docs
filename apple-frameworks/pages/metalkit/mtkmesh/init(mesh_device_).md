> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtkmesh/init(mesh:device:)](https://developer.apple.com/documentation/metalkit/mtkmesh/init(mesh:device:))

# init(mesh:device:) (Swift)

**Framework:** MetalKit  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a MetalKit mesh and its submeshes from a Model I/O mesh.

## Declaration

```swift
init(mesh: MDLMesh, device: any MTLDevice) throws
```

## Parameters

- `mesh`: The source Model I/O mesh from which to create this MetalKit mesh.
- `device`: The Metal device on which to create MetalKit mesh resources.

<a id="return-value"></a>

## Return Value

A new MetalKit mesh object, or `nil` if an error occured.

<a id="Discussion"></a>

## Discussion

This initializer does *not* initialize any children meshes of the Model I/O mesh.

All vertex buffers in the source Model I/O mesh and the index buffer of each of its submeshes must have been created with a [MTKMeshBufferAllocator](../mtkmeshbufferallocator.md) object.

A Model I/O submesh may have its index type and/or geometric primitive type converted to a corresponding Metal type as listed in the tables below. If the geometric primitive type cannot be converted, an error is returned through `error`.

| MDLIndexBitDepth | MTLIndexType |
| --- | --- |
| `MDLIndexBitDepthInvalid` ![](https://developer.apple.com/images/com.apple.metalkit/spacer.png) `MDLIndexBitDepthUInt8` ![](https://developer.apple.com/images/com.apple.metalkit/spacer.png) `MDLIndexBitDepthUInt16` | `MTLIndexTypeUInt16` |
| `MDLIndexBitDepthUInt32` | `MTLIndexTypeUInt32` |

| MDLGeometryType | MTLPrimitiveType |
| --- | --- |
| `MDLGeometryTypePoints` | `MTLPrimitiveTypePoint` |
| `MDLGeometryTypeLines` | `MTLPrimitiveTypeLine` |
| `MDLGeometryTypeTriangleStrips` | `MTLPrimitiveTypeTriangleStrip` |
| `MDLGeometryTypeTriangles` ![](https://developer.apple.com/images/com.apple.metalkit/spacer.png) `MDLGeometryTypeQuads` ![](https://developer.apple.com/images/com.apple.metalkit/spacer.png) `MDLGeometryTypeVariableTopology` | `MTLPrimitiveTypeTriangle` |

> **Note**

>  In macOS, vertex buffers allocated from a [MTKMeshBufferAllocator](../mtkmeshbufferallocator.md) object are aligned to 256 bytes. Index buffers are not aligned.

# initWithMesh:device:error: (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Initializes a MetalKit mesh and its submeshes from a Model I/O mesh.

## Declaration

```objectivec
- (instancetype) initWithMesh:(MDLMesh *) mesh device:(id<MTLDevice>) device error:(NSError **) error;
```

## Parameters

- `mesh`: The source Model I/O mesh from which to create this MetalKit mesh.
- `device`: The Metal device on which to create MetalKit mesh resources.
- `error`: A pointer to an [NSError](../../foundation/nserror.md) object if an error occurred, or `nil` if the MetalKit mesh initialization succeeded.

<a id="return-value"></a>

## Return Value

A new MetalKit mesh object, or `nil` if an error occured.

<a id="Discussion"></a>

## Discussion

This initializer does *not* initialize any children meshes of the Model I/O mesh.

All vertex buffers in the source Model I/O mesh and the index buffer of each of its submeshes must have been created with a [MTKMeshBufferAllocator](../mtkmeshbufferallocator.md) object.

A Model I/O submesh may have its index type and/or geometric primitive type converted to a corresponding Metal type as listed in the tables below. If the geometric primitive type cannot be converted, an error is returned through `error`.

| MDLIndexBitDepth | MTLIndexType |
| --- | --- |
| `MDLIndexBitDepthInvalid` ![](https://developer.apple.com/images/com.apple.metalkit/spacer.png) `MDLIndexBitDepthUInt8` ![](https://developer.apple.com/images/com.apple.metalkit/spacer.png) `MDLIndexBitDepthUInt16` | `MTLIndexTypeUInt16` |
| `MDLIndexBitDepthUInt32` | `MTLIndexTypeUInt32` |

| MDLGeometryType | MTLPrimitiveType |
| --- | --- |
| `MDLGeometryTypePoints` | `MTLPrimitiveTypePoint` |
| `MDLGeometryTypeLines` | `MTLPrimitiveTypeLine` |
| `MDLGeometryTypeTriangleStrips` | `MTLPrimitiveTypeTriangleStrip` |
| `MDLGeometryTypeTriangles` ![](https://developer.apple.com/images/com.apple.metalkit/spacer.png) `MDLGeometryTypeQuads` ![](https://developer.apple.com/images/com.apple.metalkit/spacer.png) `MDLGeometryTypeVariableTopology` | `MTLPrimitiveTypeTriangle` |

> **Note**

>  In macOS, vertex buffers allocated from a [MTKMeshBufferAllocator](../mtkmeshbufferallocator.md) object are aligned to 256 bytes. Index buffers are not aligned.

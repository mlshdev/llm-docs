> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/metalkit/mtksubmesh/mesh](https://developer.apple.com/documentation/metalkit/mtksubmesh/mesh)

# mesh (Swift)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The parent mesh containing the vertex data of this submesh.

## Declaration

```swift
weak var mesh: MTKMesh? { get }
```

<a id="Discussion"></a>

## Discussion

The buffer of this parent mesh should be set in the encoder before a call to [drawIndexedPrimitives(type:indexCount:indexType:indexBuffer:indexBufferOffset:)](../../metal/mtlrendercommandencoder/drawindexedprimitives%28type_indexcount_indextype_indexbuffer_indexbufferoffset_%29.md) is made.

# mesh (Objective-C)

**Framework:** MetalKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

The parent mesh containing the vertex data of this submesh.

## Declaration

```objectivec
@property (nonatomic, weak, readonly, nullable) MTKMesh * mesh;
```

<a id="Discussion"></a>

## Discussion

The buffer of this parent mesh should be set in the encoder before a call to [drawIndexedPrimitives:indexCount:indexType:indexBuffer:indexBufferOffset:](../../metal/mtlrendercommandencoder/drawindexedprimitives%28type_indexcount_indextype_indexbuffer_indexbufferoffset_%29.md) is made.

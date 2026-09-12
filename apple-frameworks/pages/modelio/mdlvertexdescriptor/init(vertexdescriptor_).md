> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/modelio/mdlvertexdescriptor/init(vertexdescriptor:)](https://developer.apple.com/documentation/modelio/mdlvertexdescriptor/init(vertexdescriptor:))

# init(vertexDescriptor:) (Swift)

**Framework:** Model I/O  
**Kind:** Initializer  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a new vertex descriptor by performing a deep copy of the specified vertex descriptor.

## Declaration

```swift
init(vertexDescriptor: MDLVertexDescriptor)
```

## Parameters

- `vertexDescriptor`: The vertex descriptor from which to copy information.

<a id="return-value"></a>

## Return Value

A new vertex descriptor that is an indpendent copy of the specified vertex descriptor.

<a id="Discussion"></a>

## Discussion

A vertex descriptor does not own vertex data—vertex data belongs to the [vertexBuffers](../mdlmesh/vertexbuffers.md) property of the mesh that owns a vertex descriptor—so this method does not copy vertex data. A call to the [copy()](../../objectivec/nsobject-swift.class/copy%28%29.md) or [copy(with:)](../../foundation/nscopying/copy%28with_%29.md) method uses this initializer to produce a fully independent copy of the original instance.

# initWithVertexDescriptor: (Objective-C)

**Framework:** Model I/O  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Creates a new vertex descriptor by performing a deep copy of the specified vertex descriptor.

## Declaration

```objectivec
- (instancetype) initWithVertexDescriptor:(MDLVertexDescriptor *) vertexDescriptor;
```

## Parameters

- `vertexDescriptor`: The vertex descriptor from which to copy information.

<a id="return-value"></a>

## Return Value

A new vertex descriptor that is an indpendent copy of the specified vertex descriptor.

<a id="Discussion"></a>

## Discussion

A vertex descriptor does not own vertex data—vertex data belongs to the [vertexBuffers](../mdlmesh/vertexbuffers.md) property of the mesh that owns a vertex descriptor—so this method does not copy vertex data. A call to the [copy](../../objectivec/nsobject-swift.class/copy%28%29.md) or [copyWithZone:](../../foundation/nscopying/copy%28with_%29.md) method uses this initializer to produce a fully independent copy of the original instance.

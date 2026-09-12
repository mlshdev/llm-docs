> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/clone()](https://developer.apple.com/documentation/scenekit/scnnode/clone())

# clone() (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Creates a copy of the node and its children.

## Declaration

```swift
func clone() -> Self
```

<a id="Discussion"></a>

## Discussion

This method recursively copies the node and its child nodes. For a nonrecursive copy, use the inherited [copy()](../../objectivec/nsobject-swift.class/copy%28%29.md) method, which creates a copy of the node without any child nodes.

Cloning or copying a node creates a duplicate of the node object, but not the geometries, lights, cameras, and other SceneKit objects attached to it—instead, each copied node shares references to these objects.

This behavior means that you can use cloning to, for example, place the same geometry at several locations within a scene without  maintaining multiple copies of the geometry and its materials. However, it also means that changes to the objects attached to one node will affect other nodes that share the same attachments. For example, to render two copies of a node using different materials, you must copy both the node and its geometry before assigning a new material.

```objc
- (void)duplicateNode:(SCNNode *)node withMaterial:(SCNMaterial *)material
{
    SCNNode *newNode = [node clone];
    newNode.geometry = [node.geometry copy];
    newNode.geometry.firstMaterial = material;
}
```

Multiple copies of an SCNGeometry object efficiently share the same vertex data, so you can copy geometries without a significant performance penalty.

## See Also

### Copying a Node

- [flattenedClone()](flattenedclone%28%29.md): Creates an optimized copy of the node and its children.

# clone (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Creates a copy of the node and its children.

## Declaration

```objectivec
- (instancetype) clone;
```

<a id="Discussion"></a>

## Discussion

This method recursively copies the node and its child nodes. For a nonrecursive copy, use the inherited [copy](../../objectivec/nsobject-swift.class/copy%28%29.md) method, which creates a copy of the node without any child nodes.

Cloning or copying a node creates a duplicate of the node object, but not the geometries, lights, cameras, and other SceneKit objects attached to it—instead, each copied node shares references to these objects.

This behavior means that you can use cloning to, for example, place the same geometry at several locations within a scene without  maintaining multiple copies of the geometry and its materials. However, it also means that changes to the objects attached to one node will affect other nodes that share the same attachments. For example, to render two copies of a node using different materials, you must copy both the node and its geometry before assigning a new material.

```objc
- (void)duplicateNode:(SCNNode *)node withMaterial:(SCNMaterial *)material
{
    SCNNode *newNode = [node clone];
    newNode.geometry = [node.geometry copy];
    newNode.geometry.firstMaterial = material;
}
```

Multiple copies of an SCNGeometry object efficiently share the same vertex data, so you can copy geometries without a significant performance penalty.

## See Also

### Copying a Node

- [flattenedClone](flattenedclone%28%29.md): Creates an optimized copy of the node and its children.

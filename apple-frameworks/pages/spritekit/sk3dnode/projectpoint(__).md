> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sk3dnode/projectpoint(_:)](https://developer.apple.com/documentation/spritekit/sk3dnode/projectpoint(_:))

# projectPoint(\_:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Projects a point from the 3D world coordinate system of the SceneKit scene to the 2D viewport coordinate system of the SpriteKit node.

## Declaration

```swift
func projectPoint(_ point: vector_float3) -> vector_float3
```

## Parameters

- `point`: A point in the world coordinate system of the Scene Kit scene.

<a id="return-value"></a>

## Return Value

The corresponding point in the SpriteKit node’s coordinate system.

<a id="Discussion"></a>

## Discussion

The z-coordinate of the returned point describes the depth of the projected point relative to the near and far clipping planes of the viewing frustum (defined by the [pointOfView](pointofview.md) property). Projecting a point on the near clipping plane returns a point whose z-coordinate is `0.0`; projecting a point on the far clipping plane returns a point whose z-coordinate is `1.0`.

The following Swift code illustrates how you might convert the position of a SceneKit node, `sphereNode`, in 3D space to the 2D coordinates of a SpriteKit [SK3DNode](../sk3dnode.md), `node`. The code assumes that `sphereNode` is the first child node of the SceneKit scene’s [rootNode](../../scenekit/scnscene/rootnode.md).

```swift
if let sphereNode = node.scnScene?.rootNode.childNodes.first { 
    let location = node.projectPoint(vector_float3(Float(sphereNode.position.x),
                                                   Float(sphereNode.position.y),
                                                   Float(sphereNode.position.z)))
}
```

## See Also

### Projecting Points and Performing Hit-Testing

- [hitTest(\_:options:)](hittest%28__options_%29.md): Searches the Scene Kit scene for objects corresponding to a point in the rendered image.
- [unprojectPoint(\_:)](unprojectpoint%28__%29.md): Unprojects a point from the SpriteKit node’s 2D viewport coordinate system to the 3D world coordinate system of the SceneKit scene.

# projectPoint: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Projects a point from the 3D world coordinate system of the SceneKit scene to the 2D viewport coordinate system of the SpriteKit node.

## Declaration

```objectivec
- (vector_float3) projectPoint:(vector_float3) point;
```

## Parameters

- `point`: A point in the world coordinate system of the Scene Kit scene.

<a id="return-value"></a>

## Return Value

The corresponding point in the SpriteKit node’s coordinate system.

<a id="Discussion"></a>

## Discussion

The z-coordinate of the returned point describes the depth of the projected point relative to the near and far clipping planes of the viewing frustum (defined by the [pointOfView](pointofview.md) property). Projecting a point on the near clipping plane returns a point whose z-coordinate is `0.0`; projecting a point on the far clipping plane returns a point whose z-coordinate is `1.0`.

The following Swift code illustrates how you might convert the position of a SceneKit node, `sphereNode`, in 3D space to the 2D coordinates of a SpriteKit [SK3DNode](../sk3dnode.md), `node`. The code assumes that `sphereNode` is the first child node of the SceneKit scene’s [rootNode](../../scenekit/scnscene/rootnode.md).

```swift
if let sphereNode = node.scnScene?.rootNode.childNodes.first { 
    let location = node.projectPoint(vector_float3(Float(sphereNode.position.x),
                                                   Float(sphereNode.position.y),
                                                   Float(sphereNode.position.z)))
}
```

## See Also

### Projecting Points and Performing Hit-Testing

- [hitTest:options:](hittest%28__options_%29.md): Searches the Scene Kit scene for objects corresponding to a point in the rendered image.
- [unprojectPoint:](unprojectpoint%28__%29.md): Unprojects a point from the SpriteKit node’s 2D viewport coordinate system to the 3D world coordinate system of the SceneKit scene.

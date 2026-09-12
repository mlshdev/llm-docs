> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenerenderer/nodesinsidefrustum(of:)](https://developer.apple.com/documentation/scenekit/scnscenerenderer/nodesinsidefrustum(of:))

# nodesInsideFrustum(of:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns all nodes that might be visible from a specified point of view.

## Declaration

```swift
func nodesInsideFrustum(of pointOfView: SCNNode) -> [SCNNode]
```

## Parameters

- `pointOfView`: A node defining a point of view, as used by the [pointOfView](pointofview.md) property.

<a id="return-value"></a>

## Return Value

An array of nodes whose bounding boxes intersect the view frustum defined by the `pointOfView` node. If the array is empty, no nodes lie within the specified frustum.

<a id="Discussion"></a>

## Discussion

Any node containing a camera or spotlight may serve as a point of view (see the [pointOfView](pointofview.md) property for details). Such a node defines a *viewing frustum*—a portion of the scene’s coordinate space, shaped like a truncated pyramid, that encloses all points visible from that point of view.

Use this method find all nodes whose content lies within the viewing frustum defined by another node (which may or may not be the scene renderer’s current [pointOfView](pointofview.md) node).

Note that this method does not perform occlusion testing. That is, the returned array includes any node that lies within the specified viewing frustum regardless of whether that node’s contents are obscured by other geometry.

## See Also

### Working With Projected Scene Contents

- [hitTest(\_:options:)](hittest%28__options_%29.md): Searches the renderer’s scene for objects corresponding to a point in the rendered image.
- [SCNHitTestOption](../scnhittestoption.md): Options affecting the behavior of SceneKit hit-testing methods.
- [isNode(\_:insideFrustumOf:)](isnode%28__insidefrustumof_%29.md): Returns a Boolean value indicating whether a node might be visible from a specified point of view.
- [projectPoint(\_:)](projectpoint%28__%29.md): Projects a point from the 3D world coordinate system of the scene to the 2D pixel coordinate system of the renderer.
- [unprojectPoint(\_:)](unprojectpoint%28__%29.md): Unprojects a point from the 2D pixel coordinate system of the renderer to the 3D world coordinate system of the scene.

# nodesInsideFrustumWithPointOfView: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Returns all nodes that might be visible from a specified point of view.

## Declaration

```objectivec
- (NSArray<SCNNode *> *) nodesInsideFrustumWithPointOfView:(SCNNode *) pointOfView;
```

## Parameters

- `pointOfView`: A node defining a point of view, as used by the [pointOfView](pointofview.md) property.

<a id="return-value"></a>

## Return Value

An array of nodes whose bounding boxes intersect the view frustum defined by the `pointOfView` node. If the array is empty, no nodes lie within the specified frustum.

<a id="Discussion"></a>

## Discussion

Any node containing a camera or spotlight may serve as a point of view (see the [pointOfView](pointofview.md) property for details). Such a node defines a *viewing frustum*—a portion of the scene’s coordinate space, shaped like a truncated pyramid, that encloses all points visible from that point of view.

Use this method find all nodes whose content lies within the viewing frustum defined by another node (which may or may not be the scene renderer’s current [pointOfView](pointofview.md) node).

Note that this method does not perform occlusion testing. That is, the returned array includes any node that lies within the specified viewing frustum regardless of whether that node’s contents are obscured by other geometry.

## See Also

### Working With Projected Scene Contents

- [hitTest:options:](hittest%28__options_%29.md): Searches the renderer’s scene for objects corresponding to a point in the rendered image.
- [SCNHitTestOption](../scnhittestoption.md): Options affecting the behavior of SceneKit hit-testing methods.
- [isNodeInsideFrustum:withPointOfView:](isnode%28__insidefrustumof_%29.md): Returns a Boolean value indicating whether a node might be visible from a specified point of view.
- [projectPoint:](projectpoint%28__%29.md): Projects a point from the 3D world coordinate system of the scene to the 2D pixel coordinate system of the renderer.
- [unprojectPoint:](unprojectpoint%28__%29.md): Unprojects a point from the 2D pixel coordinate system of the renderer to the 3D world coordinate system of the scene.

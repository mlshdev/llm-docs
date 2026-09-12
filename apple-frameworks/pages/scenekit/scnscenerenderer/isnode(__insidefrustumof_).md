> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenerenderer/isnode(_:insidefrustumof:)](https://developer.apple.com/documentation/scenekit/scnscenerenderer/isnode(_:insidefrustumof:))

# isNode(\_:insideFrustumOf:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns a Boolean value indicating whether a node might be visible from a specified point of view.

## Declaration

```swift
func isNode(_ node: SCNNode, insideFrustumOf pointOfView: SCNNode) -> Bool
```

## Parameters

- `node`: The node whose visibility is to be tested.
- `pointOfView`: A node defining a point of view, as used by the [pointOfView](pointofview.md) property.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the bounding box of the tested node intersects the view frustum defined by the `pointOfView` node; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Any node containing a camera or spotlight may serve as a point of view (see the [pointOfView](pointofview.md) property for details). Such a node defines a *viewing frustum*—a portion of the scene’s coordinate space, shaped like a truncated pyramid, that encloses all points visible from that point of view.

Use this method to test whether a node lies within the viewing frustum defined by another node (which may or may not be the scene renderer’s current [pointOfView](pointofview.md) node). For example, in a game scene containing multiple camera nodes, you could use this method to determine which camera is currently best for viewing a moving player character.

Note that this method does not perform occlusion testing. That is, it returns [true](https://developer.apple.com/documentation/swift/true) if the tested node lies within the specified viewing frustum regardless of whether that node’s contents are obscured by other geometry.

## See Also

### Working With Projected Scene Contents

- [hitTest(\_:options:)](hittest%28__options_%29.md): Searches the renderer’s scene for objects corresponding to a point in the rendered image.
- [SCNHitTestOption](../scnhittestoption.md): Options affecting the behavior of SceneKit hit-testing methods.
- [nodesInsideFrustum(of:)](nodesinsidefrustum%28of_%29.md): Returns all nodes that might be visible from a specified point of view.
- [projectPoint(\_:)](projectpoint%28__%29.md): Projects a point from the 3D world coordinate system of the scene to the 2D pixel coordinate system of the renderer.
- [unprojectPoint(\_:)](unprojectpoint%28__%29.md): Unprojects a point from the 2D pixel coordinate system of the renderer to the 3D world coordinate system of the scene.

# isNodeInsideFrustum:withPointOfView: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Returns a Boolean value indicating whether a node might be visible from a specified point of view.

## Declaration

```objectivec
- (BOOL) isNodeInsideFrustum:(SCNNode *) node withPointOfView:(SCNNode *) pointOfView;
```

## Parameters

- `node`: The node whose visibility is to be tested.
- `pointOfView`: A node defining a point of view, as used by the [pointOfView](pointofview.md) property.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the bounding box of the tested node intersects the view frustum defined by the `pointOfView` node; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Any node containing a camera or spotlight may serve as a point of view (see the [pointOfView](pointofview.md) property for details). Such a node defines a *viewing frustum*—a portion of the scene’s coordinate space, shaped like a truncated pyramid, that encloses all points visible from that point of view.

Use this method to test whether a node lies within the viewing frustum defined by another node (which may or may not be the scene renderer’s current [pointOfView](pointofview.md) node). For example, in a game scene containing multiple camera nodes, you could use this method to determine which camera is currently best for viewing a moving player character.

Note that this method does not perform occlusion testing. That is, it returns [true](https://developer.apple.com/documentation/swift/true) if the tested node lies within the specified viewing frustum regardless of whether that node’s contents are obscured by other geometry.

## See Also

### Working With Projected Scene Contents

- [hitTest:options:](hittest%28__options_%29.md): Searches the renderer’s scene for objects corresponding to a point in the rendered image.
- [SCNHitTestOption](../scnhittestoption.md): Options affecting the behavior of SceneKit hit-testing methods.
- [nodesInsideFrustumWithPointOfView:](nodesinsidefrustum%28of_%29.md): Returns all nodes that might be visible from a specified point of view.
- [projectPoint:](projectpoint%28__%29.md): Projects a point from the 3D world coordinate system of the scene to the 2D pixel coordinate system of the renderer.
- [unprojectPoint:](unprojectpoint%28__%29.md): Unprojects a point from the 2D pixel coordinate system of the renderer to the 3D world coordinate system of the scene.

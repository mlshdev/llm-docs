> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenerenderer/projectpoint(_:)](https://developer.apple.com/documentation/scenekit/scnscenerenderer/projectpoint(_:))

# projectPoint(\_:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Projects a point from the 3D world coordinate system of the scene to the 2D pixel coordinate system of the renderer.

## Declaration

```swift
func projectPoint(_ point: SCNVector3) -> SCNVector3
```

## Parameters

- `point`: A point in the world coordinate system of the renderer’s scene.

<a id="return-value"></a>

## Return Value

The corresponding point in the screen-space (view, layer, or GPU viewport) coordinate system of the scene renderer.

<a id="Discussion"></a>

## Discussion

The z-coordinate of the returned point describes the depth of the projected point relative to the near and far clipping planes of the renderer’s viewing frustum (defined by its [pointOfView](pointofview.md) node). Projecting a point on the near clipping plane returns a point whose z-coordinate is `0.0`; projecting a point on the far clipping plane returns a point whose z-coordinate is `1.0`.

## See Also

### Working With Projected Scene Contents

- [hitTest(\_:options:)](hittest%28__options_%29.md): Searches the renderer’s scene for objects corresponding to a point in the rendered image.
- [SCNHitTestOption](../scnhittestoption.md): Options affecting the behavior of SceneKit hit-testing methods.
- [isNode(\_:insideFrustumOf:)](isnode%28__insidefrustumof_%29.md): Returns a Boolean value indicating whether a node might be visible from a specified point of view.
- [nodesInsideFrustum(of:)](nodesinsidefrustum%28of_%29.md): Returns all nodes that might be visible from a specified point of view.
- [unprojectPoint(\_:)](unprojectpoint%28__%29.md): Unprojects a point from the 2D pixel coordinate system of the renderer to the 3D world coordinate system of the scene.

# projectPoint: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Projects a point from the 3D world coordinate system of the scene to the 2D pixel coordinate system of the renderer.

## Declaration

```objectivec
- (SCNVector3) projectPoint:(SCNVector3) point;
```

## Parameters

- `point`: A point in the world coordinate system of the renderer’s scene.

<a id="return-value"></a>

## Return Value

The corresponding point in the screen-space (view, layer, or GPU viewport) coordinate system of the scene renderer.

<a id="Discussion"></a>

## Discussion

The z-coordinate of the returned point describes the depth of the projected point relative to the near and far clipping planes of the renderer’s viewing frustum (defined by its [pointOfView](pointofview.md) node). Projecting a point on the near clipping plane returns a point whose z-coordinate is `0.0`; projecting a point on the far clipping plane returns a point whose z-coordinate is `1.0`.

## See Also

### Working With Projected Scene Contents

- [hitTest:options:](hittest%28__options_%29.md): Searches the renderer’s scene for objects corresponding to a point in the rendered image.
- [SCNHitTestOption](../scnhittestoption.md): Options affecting the behavior of SceneKit hit-testing methods.
- [isNodeInsideFrustum:withPointOfView:](isnode%28__insidefrustumof_%29.md): Returns a Boolean value indicating whether a node might be visible from a specified point of view.
- [nodesInsideFrustumWithPointOfView:](nodesinsidefrustum%28of_%29.md): Returns all nodes that might be visible from a specified point of view.
- [unprojectPoint:](unprojectpoint%28__%29.md): Unprojects a point from the 2D pixel coordinate system of the renderer to the 3D world coordinate system of the scene.

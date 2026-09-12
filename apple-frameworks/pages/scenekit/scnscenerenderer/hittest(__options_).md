> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnscenerenderer/hittest(_:options:)](https://developer.apple.com/documentation/scenekit/scnscenerenderer/hittest(_:options:))

# hitTest(\_:options:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Searches the renderer’s scene for objects corresponding to a point in the rendered image.

## Declaration

```swift
func hitTest(_ point: CGPoint, options: [SCNHitTestOption : Any]? = nil) -> [SCNHitTestResult]
```

## Parameters

- `point`: A point in the screen-space (view, layer, or GPU viewport) coordinate system of the scene renderer.
- `options`: A dictionary of options affecting the search. See Hit Testing Options Keys for acceptable values.

<a id="return-value"></a>

## Return Value

An array of [SCNHitTestResult](../scnhittestresult.md) objects representing search results.

<a id="Discussion"></a>

## Discussion

A 2D point in the rendered screen coordinate space can refer to any point along a line segment in the 3D scene coordinate space. Hit-testing is the process of finding elements of a scene located along this line segment. For example, you can use this method to find the geometry corresponding to a click event in a SceneKit view.

## See Also

### Working With Projected Scene Contents

- [SCNHitTestOption](../scnhittestoption.md): Options affecting the behavior of SceneKit hit-testing methods.
- [isNode(\_:insideFrustumOf:)](isnode%28__insidefrustumof_%29.md): Returns a Boolean value indicating whether a node might be visible from a specified point of view.
- [nodesInsideFrustum(of:)](nodesinsidefrustum%28of_%29.md): Returns all nodes that might be visible from a specified point of view.
- [projectPoint(\_:)](projectpoint%28__%29.md): Projects a point from the 3D world coordinate system of the scene to the 2D pixel coordinate system of the renderer.
- [unprojectPoint(\_:)](unprojectpoint%28__%29.md): Unprojects a point from the 2D pixel coordinate system of the renderer to the 3D world coordinate system of the scene.

# hitTest:options: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Searches the renderer’s scene for objects corresponding to a point in the rendered image.

## Declaration

```objectivec
- (NSArray<SCNHitTestResult *> *) hitTest:(CGPoint) point options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `point`: A point in the screen-space (view, layer, or GPU viewport) coordinate system of the scene renderer.
- `options`: A dictionary of options affecting the search. See Hit Testing Options Keys for acceptable values.

<a id="return-value"></a>

## Return Value

An array of [SCNHitTestResult](../scnhittestresult.md) objects representing search results.

<a id="Discussion"></a>

## Discussion

A 2D point in the rendered screen coordinate space can refer to any point along a line segment in the 3D scene coordinate space. Hit-testing is the process of finding elements of a scene located along this line segment. For example, you can use this method to find the geometry corresponding to a click event in a SceneKit view.

## See Also

### Working With Projected Scene Contents

- [SCNHitTestOption](../scnhittestoption.md): Options affecting the behavior of SceneKit hit-testing methods.
- [isNodeInsideFrustum:withPointOfView:](isnode%28__insidefrustumof_%29.md): Returns a Boolean value indicating whether a node might be visible from a specified point of view.
- [nodesInsideFrustumWithPointOfView:](nodesinsidefrustum%28of_%29.md): Returns all nodes that might be visible from a specified point of view.
- [projectPoint:](projectpoint%28__%29.md): Projects a point from the 3D world coordinate system of the scene to the 2D pixel coordinate system of the renderer.
- [unprojectPoint:](unprojectpoint%28__%29.md): Unprojects a point from the 2D pixel coordinate system of the renderer to the 3D world coordinate system of the scene.

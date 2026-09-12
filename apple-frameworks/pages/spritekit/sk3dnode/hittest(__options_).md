> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/sk3dnode/hittest(_:options:)](https://developer.apple.com/documentation/spritekit/sk3dnode/hittest(_:options:))

# hitTest(\_:options:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Searches the Scene Kit scene for objects corresponding to a point in the rendered image.

## Declaration

```swift
func hitTest(_ point: CGPoint, options: [String : Any]? = nil) -> [SCNHitTestResult]
```

## Parameters

- `point`: A point in the viewport coordinate system of the SpriteKit node.
- `options`: A dictionary of options affecting the search. See Hit Testing Options Keys for acceptable values.

<a id="return-value"></a>

## Return Value

An array of [SCNHitTestResult](../../scenekit/scnhittestresult.md) objects representing search results.

<a id="Discussion"></a>

## Discussion

A point in the SpriteKit node’s 2D viewport coordinate space can refer to any point along a line segment in the 3D SceneKit coordinate space. Hit-testing is the process of finding elements of a scene located along this line segment. For example, you can use this method to find the geometry corresponding to a touch event.

## See Also

### Projecting Points and Performing Hit-Testing

- [projectPoint(\_:)](projectpoint%28__%29.md): Projects a point from the 3D world coordinate system of the SceneKit scene to the 2D viewport coordinate system of the SpriteKit node.
- [unprojectPoint(\_:)](unprojectpoint%28__%29.md): Unprojects a point from the SpriteKit node’s 2D viewport coordinate system to the 3D world coordinate system of the SceneKit scene.

# hitTest:options: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Searches the Scene Kit scene for objects corresponding to a point in the rendered image.

## Declaration

```objectivec
- (NSArray<SCNHitTestResult *> *) hitTest:(CGPoint) point options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `point`: A point in the viewport coordinate system of the SpriteKit node.
- `options`: A dictionary of options affecting the search. See Hit Testing Options Keys for acceptable values.

<a id="return-value"></a>

## Return Value

An array of [SCNHitTestResult](../../scenekit/scnhittestresult.md) objects representing search results.

<a id="Discussion"></a>

## Discussion

A point in the SpriteKit node’s 2D viewport coordinate space can refer to any point along a line segment in the 3D SceneKit coordinate space. Hit-testing is the process of finding elements of a scene located along this line segment. For example, you can use this method to find the geometry corresponding to a touch event.

## See Also

### Projecting Points and Performing Hit-Testing

- [projectPoint:](projectpoint%28__%29.md): Projects a point from the 3D world coordinate system of the SceneKit scene to the 2D viewport coordinate system of the SpriteKit node.
- [unprojectPoint:](unprojectpoint%28__%29.md): Unprojects a point from the SpriteKit node’s 2D viewport coordinate system to the 3D world coordinate system of the SceneKit scene.

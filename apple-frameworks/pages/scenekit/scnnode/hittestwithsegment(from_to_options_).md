> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/hittestwithsegment(from:to:options:)](https://developer.apple.com/documentation/scenekit/scnnode/hittestwithsegment(from:to:options:))

# hitTestWithSegment(from:to:options:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Searches the node’s child node subtree for objects intersecting a line segment between two specified points.

## Declaration

```swift
func hitTestWithSegment(from pointA: SCNVector3, to pointB: SCNVector3, options: [String : Any]? = nil) -> [SCNHitTestResult]
```

## Parameters

- `pointA`: An endpoint of the line segment to search along, specified in the node’s local coordinate system.
- `pointB`: The other endpoint of the line segment to search along, specified in the node’s local coordinate system.
- `options`: A dictionary of options affecting the search. See Hit Testing Options Keys for acceptable values.

<a id="return-value"></a>

## Return Value

An array of [SCNHitTestResult](../scnhittestresult.md) objects representing search results.

<a id="Discussion"></a>

## Discussion

Hit-testing is the process of finding elements of a scene located along a specified line segment in the scene’s coordinate space (or that of a particular node in the scene). For example, you can use this method to determine whether a projectile launched by a game character will hit its target.

To search for the scene element corresponding to a two-dimensional point in the rendered image, use the renderer’s [hitTest(\_:options:)](../scnscenerenderer/hittest%28__options_%29.md) method instead.

## See Also

### Hit-Testing

- [SCNHitTestOption](../scnhittestoption.md): Options affecting the behavior of SceneKit hit-testing methods.

# hitTestWithSegmentFromPoint:toPoint:options: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

Searches the node’s child node subtree for objects intersecting a line segment between two specified points.

## Declaration

```objectivec
- (NSArray<SCNHitTestResult *> *) hitTestWithSegmentFromPoint:(SCNVector3) pointA toPoint:(SCNVector3) pointB options:(NSDictionary<NSString *,id> *) options;
```

## Parameters

- `pointA`: An endpoint of the line segment to search along, specified in the node’s local coordinate system.
- `pointB`: The other endpoint of the line segment to search along, specified in the node’s local coordinate system.
- `options`: A dictionary of options affecting the search. See Hit Testing Options Keys for acceptable values.

<a id="return-value"></a>

## Return Value

An array of [SCNHitTestResult](../scnhittestresult.md) objects representing search results.

<a id="Discussion"></a>

## Discussion

Hit-testing is the process of finding elements of a scene located along a specified line segment in the scene’s coordinate space (or that of a particular node in the scene). For example, you can use this method to determine whether a projectile launched by a game character will hit its target.

To search for the scene element corresponding to a two-dimensional point in the rendered image, use the renderer’s [hitTest:options:](../scnscenerenderer/hittest%28__options_%29.md) method instead.

## See Also

### Hit-Testing

- [SCNHitTestOption](../scnhittestoption.md): Options affecting the behavior of SceneKit hit-testing methods.

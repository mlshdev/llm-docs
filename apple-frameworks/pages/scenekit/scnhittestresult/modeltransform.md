> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnhittestresult/modeltransform](https://developer.apple.com/documentation/scenekit/scnhittestresult/modeltransform)

# modelTransform (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The world transform matrix of the node containing the intersection.

## Declaration

```swift
var modelTransform: SCNMatrix4 { get }
```

```swift
var modelTransform: SCNMatrix4 { get }
```

<a id="Discussion"></a>

## Discussion

Use this matrix to transform vectors from the local coordinate space of the node whose geometry is intersected by the search ray to the scene’s world coordinate system.

## See Also

### Retrieving Information About a Hit-Test Result

- [node](node.md): The node whose geometry intersects the search ray.
- [geometryIndex](geometryindex.md): The index of the geometry element whose surface the search ray intersects.
- [faceIndex](faceindex.md): The index of the primitive in the geometry element intersected by the search ray.
- [localCoordinates](localcoordinates.md): The point of intersection between the geometry and the search ray, in the local coordinate system of the node containing the geometry.
- [worldCoordinates](worldcoordinates.md): The point of intersection between the geometry and the search ray, in the scene’s world coordinate system.
- [localNormal](localnormal.md): The surface normal vector at the point of intersection, in the local coordinate system of the node containing the geometry intersected by the search ray.
- [worldNormal](worldnormal.md): The surface normal vector at the point of intersection, in the scene’s world coordinate system.
- [textureCoordinates(withMappingChannel:)](texturecoordinates%28withmappingchannel_%29.md): Returns the texture coordinates at the point of intersection for the specified texture mapping channel.

# modelTransform (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The world transform matrix of the node containing the intersection.

## Declaration

```objectivec
@property (nonatomic, readonly) SCNMatrix4 modelTransform;
```

```objectivec
@property (nonatomic, readonly) SCNMatrix4 modelTransform;
```

<a id="Discussion"></a>

## Discussion

Use this matrix to transform vectors from the local coordinate space of the node whose geometry is intersected by the search ray to the scene’s world coordinate system.

## See Also

### Retrieving Information About a Hit-Test Result

- [node](node.md): The node whose geometry intersects the search ray.
- [geometryIndex](geometryindex.md): The index of the geometry element whose surface the search ray intersects.
- [faceIndex](faceindex.md): The index of the primitive in the geometry element intersected by the search ray.
- [localCoordinates](localcoordinates.md): The point of intersection between the geometry and the search ray, in the local coordinate system of the node containing the geometry.
- [worldCoordinates](worldcoordinates.md): The point of intersection between the geometry and the search ray, in the scene’s world coordinate system.
- [localNormal](localnormal.md): The surface normal vector at the point of intersection, in the local coordinate system of the node containing the geometry intersected by the search ray.
- [worldNormal](worldnormal.md): The surface normal vector at the point of intersection, in the scene’s world coordinate system.
- [textureCoordinatesWithMappingChannel:](texturecoordinates%28withmappingchannel_%29.md): Returns the texture coordinates at the point of intersection for the specified texture mapping channel.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnhittestresult/localcoordinates](https://developer.apple.com/documentation/scenekit/scnhittestresult/localcoordinates)

# localCoordinates (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The point of intersection between the geometry and the search ray, in the local coordinate system of the node containing the geometry.

## Declaration

```swift
var localCoordinates: SCNVector3 { get }
```

## See Also

### Retrieving Information About a Hit-Test Result

- [node](node.md): The node whose geometry intersects the search ray.
- [geometryIndex](geometryindex.md): The index of the geometry element whose surface the search ray intersects.
- [faceIndex](faceindex.md): The index of the primitive in the geometry element intersected by the search ray.
- [worldCoordinates](worldcoordinates.md): The point of intersection between the geometry and the search ray, in the scene’s world coordinate system.
- [localNormal](localnormal.md): The surface normal vector at the point of intersection, in the local coordinate system of the node containing the geometry intersected by the search ray.
- [worldNormal](worldnormal.md): The surface normal vector at the point of intersection, in the scene’s world coordinate system.
- [modelTransform](modeltransform.md): The world transform matrix of the node containing the intersection.
- [textureCoordinates(withMappingChannel:)](texturecoordinates%28withmappingchannel_%29.md): Returns the texture coordinates at the point of intersection for the specified texture mapping channel.

# localCoordinates (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The point of intersection between the geometry and the search ray, in the local coordinate system of the node containing the geometry.

## Declaration

```objectivec
@property (nonatomic, readonly) SCNVector3 localCoordinates;
```

## See Also

### Retrieving Information About a Hit-Test Result

- [node](node.md): The node whose geometry intersects the search ray.
- [geometryIndex](geometryindex.md): The index of the geometry element whose surface the search ray intersects.
- [faceIndex](faceindex.md): The index of the primitive in the geometry element intersected by the search ray.
- [worldCoordinates](worldcoordinates.md): The point of intersection between the geometry and the search ray, in the scene’s world coordinate system.
- [localNormal](localnormal.md): The surface normal vector at the point of intersection, in the local coordinate system of the node containing the geometry intersected by the search ray.
- [worldNormal](worldnormal.md): The surface normal vector at the point of intersection, in the scene’s world coordinate system.
- [modelTransform](modeltransform.md): The world transform matrix of the node containing the intersection.
- [textureCoordinatesWithMappingChannel:](texturecoordinates%28withmappingchannel_%29.md): Returns the texture coordinates at the point of intersection for the specified texture mapping channel.

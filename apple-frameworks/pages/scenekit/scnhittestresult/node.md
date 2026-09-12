> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnhittestresult/node](https://developer.apple.com/documentation/scenekit/scnhittestresult/node)

# node (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The node whose geometry intersects the search ray.

## Declaration

```swift
var node: SCNNode { get }
```

## See Also

### Retrieving Information About a Hit-Test Result

- [geometryIndex](geometryindex.md): The index of the geometry element whose surface the search ray intersects.
- [faceIndex](faceindex.md): The index of the primitive in the geometry element intersected by the search ray.
- [localCoordinates](localcoordinates.md): The point of intersection between the geometry and the search ray, in the local coordinate system of the node containing the geometry.
- [worldCoordinates](worldcoordinates.md): The point of intersection between the geometry and the search ray, in the scene’s world coordinate system.
- [localNormal](localnormal.md): The surface normal vector at the point of intersection, in the local coordinate system of the node containing the geometry intersected by the search ray.
- [worldNormal](worldnormal.md): The surface normal vector at the point of intersection, in the scene’s world coordinate system.
- [modelTransform](modeltransform.md): The world transform matrix of the node containing the intersection.
- [textureCoordinates(withMappingChannel:)](texturecoordinates%28withmappingchannel_%29.md): Returns the texture coordinates at the point of intersection for the specified texture mapping channel.

# node (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The node whose geometry intersects the search ray.

## Declaration

```objectivec
@property (nonatomic, readonly) SCNNode * node;
```

## See Also

### Retrieving Information About a Hit-Test Result

- [geometryIndex](geometryindex.md): The index of the geometry element whose surface the search ray intersects.
- [faceIndex](faceindex.md): The index of the primitive in the geometry element intersected by the search ray.
- [localCoordinates](localcoordinates.md): The point of intersection between the geometry and the search ray, in the local coordinate system of the node containing the geometry.
- [worldCoordinates](worldcoordinates.md): The point of intersection between the geometry and the search ray, in the scene’s world coordinate system.
- [localNormal](localnormal.md): The surface normal vector at the point of intersection, in the local coordinate system of the node containing the geometry intersected by the search ray.
- [worldNormal](worldnormal.md): The surface normal vector at the point of intersection, in the scene’s world coordinate system.
- [modelTransform](modeltransform.md): The world transform matrix of the node containing the intersection.
- [textureCoordinatesWithMappingChannel:](texturecoordinates%28withmappingchannel_%29.md): Returns the texture coordinates at the point of intersection for the specified texture mapping channel.

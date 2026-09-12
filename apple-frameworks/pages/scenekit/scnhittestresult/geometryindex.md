> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnhittestresult/geometryindex](https://developer.apple.com/documentation/scenekit/scnhittestresult/geometryindex)

# geometryIndex (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The index of the geometry element whose surface the search ray intersects.

## Declaration

```swift
var geometryIndex: Int { get }
```

<a id="Discussion"></a>

## Discussion

Every [SCNGeometry](../scngeometry.md) object contains one or more [SCNGeometryElement](../scngeometryelement.md) objects that define how its vertices connect to form a surface. This property provides the index of the geometry element intersecting the search ray. For more information about that geometry element, use the geometry’s [element(at:)](../scngeometry/element%28at_%29.md) method.

## See Also

### Retrieving Information About a Hit-Test Result

- [node](node.md): The node whose geometry intersects the search ray.
- [faceIndex](faceindex.md): The index of the primitive in the geometry element intersected by the search ray.
- [localCoordinates](localcoordinates.md): The point of intersection between the geometry and the search ray, in the local coordinate system of the node containing the geometry.
- [worldCoordinates](worldcoordinates.md): The point of intersection between the geometry and the search ray, in the scene’s world coordinate system.
- [localNormal](localnormal.md): The surface normal vector at the point of intersection, in the local coordinate system of the node containing the geometry intersected by the search ray.
- [worldNormal](worldnormal.md): The surface normal vector at the point of intersection, in the scene’s world coordinate system.
- [modelTransform](modeltransform.md): The world transform matrix of the node containing the intersection.
- [textureCoordinates(withMappingChannel:)](texturecoordinates%28withmappingchannel_%29.md): Returns the texture coordinates at the point of intersection for the specified texture mapping channel.

# geometryIndex (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

The index of the geometry element whose surface the search ray intersects.

## Declaration

```objectivec
@property (nonatomic, readonly) NSInteger geometryIndex;
```

<a id="Discussion"></a>

## Discussion

Every [SCNGeometry](../scngeometry.md) object contains one or more [SCNGeometryElement](../scngeometryelement.md) objects that define how its vertices connect to form a surface. This property provides the index of the geometry element intersecting the search ray. For more information about that geometry element, use the geometry’s [geometryElementAtIndex:](../scngeometry/element%28at_%29.md) method.

## See Also

### Retrieving Information About a Hit-Test Result

- [node](node.md): The node whose geometry intersects the search ray.
- [faceIndex](faceindex.md): The index of the primitive in the geometry element intersected by the search ray.
- [localCoordinates](localcoordinates.md): The point of intersection between the geometry and the search ray, in the local coordinate system of the node containing the geometry.
- [worldCoordinates](worldcoordinates.md): The point of intersection between the geometry and the search ray, in the scene’s world coordinate system.
- [localNormal](localnormal.md): The surface normal vector at the point of intersection, in the local coordinate system of the node containing the geometry intersected by the search ray.
- [worldNormal](worldnormal.md): The surface normal vector at the point of intersection, in the scene’s world coordinate system.
- [modelTransform](modeltransform.md): The world transform matrix of the node containing the intersection.
- [textureCoordinatesWithMappingChannel:](texturecoordinates%28withmappingchannel_%29.md): Returns the texture coordinates at the point of intersection for the specified texture mapping channel.

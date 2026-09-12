> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnhittestresult/texturecoordinates(withmappingchannel:)](https://developer.apple.com/documentation/scenekit/scnhittestresult/texturecoordinates(withmappingchannel:))

# textureCoordinates(withMappingChannel:) (Swift)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Returns the texture coordinates at the point of intersection for the specified texture mapping channel.

## Declaration

```swift
func textureCoordinates(withMappingChannel channel: Int) -> CGPoint
```

## Parameters

- `channel`: The index of the mapping channel in which to look up texture coordinates.

<a id="return-value"></a>

## Return Value

The texture coordinates at the point of intersection, or [CGPointZero](../../coregraphics/cgpointzero.md) if the geometry does not have a texture coordinate source for the specified channel.

<a id="Discussion"></a>

## Discussion

An [SCNGeometry](../scngeometry.md) object can contain multiple sources of texture coordinates, or texture mapping channels. (With multiple channels, you can map texture images for different material properties in different ways.) To use the texture coordinates of a hit-test result, specify which texture coordinate source to look up coordinates in.

For example, to add “scorch marks” to a game character hit by a laser, you might modify a texture image mapped to the [multiply](../scnmaterial/multiply.md) property of the geometry’s material. Use the [mappingChannel](../scnmaterialproperty/mappingchannel.md) index from that material property as the `channel` parameter when calling [textureCoordinates(withMappingChannel:)](texturecoordinates%28withmappingchannel_%29.md) to ensure that you modify the correct location in the texture image.

## See Also

### Retrieving Information About a Hit-Test Result

- [node](node.md): The node whose geometry intersects the search ray.
- [geometryIndex](geometryindex.md): The index of the geometry element whose surface the search ray intersects.
- [faceIndex](faceindex.md): The index of the primitive in the geometry element intersected by the search ray.
- [localCoordinates](localcoordinates.md): The point of intersection between the geometry and the search ray, in the local coordinate system of the node containing the geometry.
- [worldCoordinates](worldcoordinates.md): The point of intersection between the geometry and the search ray, in the scene’s world coordinate system.
- [localNormal](localnormal.md): The surface normal vector at the point of intersection, in the local coordinate system of the node containing the geometry intersected by the search ray.
- [worldNormal](worldnormal.md): The surface normal vector at the point of intersection, in the scene’s world coordinate system.
- [modelTransform](modeltransform.md): The world transform matrix of the node containing the intersection.

# textureCoordinatesWithMappingChannel: (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the texture coordinates at the point of intersection for the specified texture mapping channel.

## Declaration

```objectivec
- (CGPoint) textureCoordinatesWithMappingChannel:(NSInteger) channel;
```

## Parameters

- `channel`: The index of the mapping channel in which to look up texture coordinates.

<a id="return-value"></a>

## Return Value

The texture coordinates at the point of intersection, or [CGPointZero](../../coregraphics/cgpointzero.md) if the geometry does not have a texture coordinate source for the specified channel.

<a id="Discussion"></a>

## Discussion

An [SCNGeometry](../scngeometry.md) object can contain multiple sources of texture coordinates, or texture mapping channels. (With multiple channels, you can map texture images for different material properties in different ways.) To use the texture coordinates of a hit-test result, specify which texture coordinate source to look up coordinates in.

For example, to add “scorch marks” to a game character hit by a laser, you might modify a texture image mapped to the [multiply](../scnmaterial/multiply.md) property of the geometry’s material. Use the [mappingChannel](../scnmaterialproperty/mappingchannel.md) index from that material property as the `channel` parameter when calling [textureCoordinatesWithMappingChannel:](texturecoordinates%28withmappingchannel_%29.md) to ensure that you modify the correct location in the texture image.

## See Also

### Retrieving Information About a Hit-Test Result

- [node](node.md): The node whose geometry intersects the search ray.
- [geometryIndex](geometryindex.md): The index of the geometry element whose surface the search ray intersects.
- [faceIndex](faceindex.md): The index of the primitive in the geometry element intersected by the search ray.
- [localCoordinates](localcoordinates.md): The point of intersection between the geometry and the search ray, in the local coordinate system of the node containing the geometry.
- [worldCoordinates](worldcoordinates.md): The point of intersection between the geometry and the search ray, in the scene’s world coordinate system.
- [localNormal](localnormal.md): The surface normal vector at the point of intersection, in the local coordinate system of the node containing the geometry intersected by the search ray.
- [worldNormal](worldnormal.md): The surface normal vector at the point of intersection, in the scene’s world coordinate system.
- [modelTransform](modeltransform.md): The world transform matrix of the node containing the intersection.

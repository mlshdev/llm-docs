> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnhittestresult](https://developer.apple.com/documentation/scenekit/scnhittestresult)

# SCNHitTestResult (Swift)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Information about the result of a scene-space or view-space search for scene elements.

## Declaration

```swift
class SCNHitTestResult
```

<a id="overview"></a>

## Overview

Hit-testing is the process of finding elements of a scene located at a specified point, or along a specified line segment (or *ray*). An [SCNHitTestResult](scnhittestresult.md) object provides details about one result from a hit-test search. There are three ways to perform a hit-test search. Use the [hitTest(\_:options:)](scnscenerenderer/hittest%28__options_%29.md) method of an [SCNView](scnview.md) object (or other scene renderer), the [hitTestWithSegment(from:to:options:)](scnnode/hittestwithsegment%28from_to_options_%29.md) method of a node, or the [rayTestWithSegment(from:to:options:)](scnphysicsworld/raytestwithsegment%28from_to_options_%29.md) method of your scene’s physics world.

When you perform a hit-test search, SceneKit looks for [SCNGeometry](scngeometry.md) objects along the ray you specify. For each intersection between the ray and and a geometry, SceneKit creates a hit-test result to provide information about both the [SCNNode](scnnode.md) object containing the geometry and the location of the intersection on the geometry’s surface.

## Topics

### Retrieving Information About a Hit-Test Result

- [node](scnhittestresult/node.md): The node whose geometry intersects the search ray.
- [geometryIndex](scnhittestresult/geometryindex.md): The index of the geometry element whose surface the search ray intersects.
- [faceIndex](scnhittestresult/faceindex.md): The index of the primitive in the geometry element intersected by the search ray.
- [localCoordinates](scnhittestresult/localcoordinates.md): The point of intersection between the geometry and the search ray, in the local coordinate system of the node containing the geometry.
- [worldCoordinates](scnhittestresult/worldcoordinates.md): The point of intersection between the geometry and the search ray, in the scene’s world coordinate system.
- [localNormal](scnhittestresult/localnormal.md): The surface normal vector at the point of intersection, in the local coordinate system of the node containing the geometry intersected by the search ray.
- [worldNormal](scnhittestresult/worldnormal.md): The surface normal vector at the point of intersection, in the scene’s world coordinate system.
- [modelTransform](scnhittestresult/modeltransform.md): The world transform matrix of the node containing the intersection.
- [textureCoordinates(withMappingChannel:)](scnhittestresult/texturecoordinates%28withmappingchannel_%29.md): Returns the texture coordinates at the point of intersection for the specified texture mapping channel.

### Instance Properties

- [boneNode](scnhittestresult/bonenode.md)
- [simdLocalCoordinates](scnhittestresult/simdlocalcoordinates.md)
- [simdLocalNormal](scnhittestresult/simdlocalnormal.md)
- [simdModelTransform](scnhittestresult/simdmodeltransform.md)
- [simdWorldCoordinates](scnhittestresult/simdworldcoordinates.md)
- [simdWorldNormal](scnhittestresult/simdworldnormal.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Display and Interactivity

- [SCNSceneRenderer](scnscenerenderer.md): Methods and properties common to the [SCNView](scnview.md), [SCNLayer](scnlayer.md), and [SCNRenderer](scnrenderer.md) classes.
- [SCNSceneRendererDelegate](scnscenerendererdelegate.md): Methods your app can implement to participate in SceneKit’s animation loop or perform additional rendering.
- [SCNLayer](scnlayer.md): Deprecated. A Core Animation layer that renders a SceneKit scene as its content.
- [SCNRenderer](scnrenderer.md): A renderer for displaying a SceneKit scene in an existing Metal workflow or OpenGL context.

# SCNHitTestResult (Objective-C)

**Framework:** SceneKit  
**Kind:** Class  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Information about the result of a scene-space or view-space search for scene elements.

## Declaration

```objectivec
@interface SCNHitTestResult : NSObject
```

<a id="overview"></a>

## Overview

Hit-testing is the process of finding elements of a scene located at a specified point, or along a specified line segment (or *ray*). An [SCNHitTestResult](scnhittestresult.md) object provides details about one result from a hit-test search. There are three ways to perform a hit-test search. Use the [hitTest:options:](scnscenerenderer/hittest%28__options_%29.md) method of an [SCNView](scnview.md) object (or other scene renderer), the [hitTestWithSegmentFromPoint:toPoint:options:](scnnode/hittestwithsegment%28from_to_options_%29.md) method of a node, or the [rayTestWithSegmentFromPoint:toPoint:options:](scnphysicsworld/raytestwithsegment%28from_to_options_%29.md) method of your scene’s physics world.

When you perform a hit-test search, SceneKit looks for [SCNGeometry](scngeometry.md) objects along the ray you specify. For each intersection between the ray and and a geometry, SceneKit creates a hit-test result to provide information about both the [SCNNode](scnnode.md) object containing the geometry and the location of the intersection on the geometry’s surface.

## Topics

### Retrieving Information About a Hit-Test Result

- [node](scnhittestresult/node.md): The node whose geometry intersects the search ray.
- [geometryIndex](scnhittestresult/geometryindex.md): The index of the geometry element whose surface the search ray intersects.
- [faceIndex](scnhittestresult/faceindex.md): The index of the primitive in the geometry element intersected by the search ray.
- [localCoordinates](scnhittestresult/localcoordinates.md): The point of intersection between the geometry and the search ray, in the local coordinate system of the node containing the geometry.
- [worldCoordinates](scnhittestresult/worldcoordinates.md): The point of intersection between the geometry and the search ray, in the scene’s world coordinate system.
- [localNormal](scnhittestresult/localnormal.md): The surface normal vector at the point of intersection, in the local coordinate system of the node containing the geometry intersected by the search ray.
- [worldNormal](scnhittestresult/worldnormal.md): The surface normal vector at the point of intersection, in the scene’s world coordinate system.
- [modelTransform](scnhittestresult/modeltransform.md): The world transform matrix of the node containing the intersection.
- [textureCoordinatesWithMappingChannel:](scnhittestresult/texturecoordinates%28withmappingchannel_%29.md): Returns the texture coordinates at the point of intersection for the specified texture mapping channel.

### Instance Properties

- [boneNode](scnhittestresult/bonenode.md)
- [simdLocalCoordinates](scnhittestresult/simdlocalcoordinates.md)
- [simdLocalNormal](scnhittestresult/simdlocalnormal.md)
- [simdModelTransform](scnhittestresult/simdmodeltransform.md)
- [simdWorldCoordinates](scnhittestresult/simdworldcoordinates.md)
- [simdWorldNormal](scnhittestresult/simdworldnormal.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

## See Also

### Display and Interactivity

- [SCNSceneRenderer](scnscenerenderer.md): Methods and properties common to the [SCNView](scnview.md), [SCNLayer](scnlayer.md), and [SCNRenderer](scnrenderer.md) classes.
- [SCNSceneRendererDelegate](scnscenerendererdelegate.md): Methods your app can implement to participate in SceneKit’s animation loop or perform additional rendering.
- [SCNLayer](scnlayer.md): Deprecated. A Core Animation layer that renders a SceneKit scene as its content.
- [SCNRenderer](scnrenderer.md): A renderer for displaying a SceneKit scene in an existing Metal workflow or OpenGL context.

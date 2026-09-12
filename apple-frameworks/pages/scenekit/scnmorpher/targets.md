> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnmorpher/targets](https://developer.apple.com/documentation/scenekit/scnmorpher/targets)

# targets (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The array of target geometries to morph between.

## Declaration

```swift
var targets: [SCNGeometry] { get set }
```

<a id="Discussion"></a>

## Discussion

An array of [SCNGeometry](../scngeometry.md) objects.

A morpher blends between a base geometry, specified in the [geometry](../scnnode/geometry.md) property of the node the morpher is attached to, and one or more target geometries. The base geometry and all target geometries must be topologically identical—that is, they must contain the same number and structural arrangement of vertices.

# targets (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS · visionOS · watchOS

The array of target geometries to morph between.

## Declaration

```objectivec
@property (nonatomic, copy) NSArray<SCNGeometry *> * targets;
```

<a id="Discussion"></a>

## Discussion

An array of [SCNGeometry](../scngeometry.md) objects.

A morpher blends between a base geometry, specified in the [geometry](../scnnode/geometry.md) property of the node the morpher is attached to, and one or more target geometries. The base geometry and all target geometries must be topologically identical—that is, they must contain the same number and structural arrangement of vertices.

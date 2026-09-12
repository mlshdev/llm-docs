> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/worldright](https://developer.apple.com/documentation/scenekit/scnnode/worldright)

# worldRight (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The “right” (+X) direction vector relative to the node, expressed in world space.

## Declaration

```swift
var worldRight: SCNVector3 { get }
```

<a id="Discussion"></a>

## Discussion

Reading this property is equivalent to reading the [localRight](localright.md) class property and using the [convertVector(\_:to:)](convertvector%28__to_%29.md) or [convertVector(\_:from:)](convertvector%28__from_%29.md) method to convert that vector from the node’s local coordinate space to the scene’s world coordinate space.

## See Also

### Related Documentation

- [simdWorldRight](simdworldright.md): The “right” (+X) direction vector relative to the node, expressed in world space.

### Calculating Node-Relative Transforms (SceneKit Types)

- [localRight](localright.md): The direction SceneKit treats as “right” in local space for all nodes.
- [localUp](localup.md): The direction SceneKit treats as “up” in local space for all nodes.
- [localFront](localfront.md): The unit vector SceneKit treats as “forward” in local space for all nodes.
- [worldUp](worldup.md): The “up” (+Y) direction vector relative to the node, expressed in world space.
- [worldFront](worldfront.md): The “forward” (-Z) direction vector relative to the node, expressed in world space.

# worldRight (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The “right” (+X) direction vector relative to the node, expressed in world space.

## Declaration

```objectivec
@property (nonatomic, readonly) SCNVector3 worldRight;
```

<a id="Discussion"></a>

## Discussion

Reading this property is equivalent to reading the [localRight](localright.md) class property and using the [convertVector:toNode:](convertvector%28__to_%29.md) or [convertVector:fromNode:](convertvector%28__from_%29.md) method to convert that vector from the node’s local coordinate space to the scene’s world coordinate space.

## See Also

### Related Documentation

- [simdWorldRight](simdworldright.md): The “right” (+X) direction vector relative to the node, expressed in world space.

### Calculating Node-Relative Transforms (SceneKit Types)

- [localRight](localright.md): The direction SceneKit treats as “right” in local space for all nodes.
- [localUp](localup.md): The direction SceneKit treats as “up” in local space for all nodes.
- [localFront](localfront.md): The unit vector SceneKit treats as “forward” in local space for all nodes.
- [worldUp](worldup.md): The “up” (+Y) direction vector relative to the node, expressed in world space.
- [worldFront](worldfront.md): The “forward” (-Z) direction vector relative to the node, expressed in world space.

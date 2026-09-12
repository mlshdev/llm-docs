> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/simdworldfront](https://developer.apple.com/documentation/scenekit/scnnode/simdworldfront)

# simdWorldFront (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The “forward” (-Z) direction vector relative to the node, expressed in world space.

## Declaration

```swift
var simdWorldFront: simd_float3 { get }
```

<a id="Discussion"></a>

## Discussion

Reading this property is equivalent to reading the [simdLocalFront](simdlocalfront.md) class property and using the [simdConvertVector(\_:to:)](simdconvertvector%28__to_%29.md) or [simdConvertVector(\_:from:)](simdconvertvector%28__from_%29.md) method to convert that vector from the node’s local coordinate space to the scene’s world coordinate space.

## See Also

### Related Documentation

- [worldFront](worldfront.md): The “forward” (-Z) direction vector relative to the node, expressed in world space.

### Calculating Node-Relative Transforms

- [simdLocalRight](simdlocalright.md): The direction SceneKit treats as “right” in local space for all nodes.
- [simdLocalUp](simdlocalup.md): The direction SceneKit treats as “up” in local space for all nodes.
- [simdLocalFront](simdlocalfront.md): The unit vector SceneKit treats as “forward” in local space for all nodes.
- [simdWorldRight](simdworldright.md): The “right” (+X) direction vector relative to the node, expressed in world space.
- [simdWorldUp](simdworldup.md): The “up” (+Y) direction vector relative to the node, expressed in world space.

# simdWorldFront (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The “forward” (-Z) direction vector relative to the node, expressed in world space.

## Declaration

```objectivec
@property (nonatomic, readonly) simd_float3 simdWorldFront;
```

<a id="Discussion"></a>

## Discussion

Reading this property is equivalent to reading the [simdLocalFront](simdlocalfront.md) class property and using the [simdConvertVector:toNode:](simdconvertvector%28__to_%29.md) or [simdConvertVector:fromNode:](simdconvertvector%28__from_%29.md) method to convert that vector from the node’s local coordinate space to the scene’s world coordinate space.

## See Also

### Related Documentation

- [worldFront](worldfront.md): The “forward” (-Z) direction vector relative to the node, expressed in world space.

### Calculating Node-Relative Transforms

- [simdLocalRight](simdlocalright.md): The direction SceneKit treats as “right” in local space for all nodes.
- [simdLocalUp](simdlocalup.md): The direction SceneKit treats as “up” in local space for all nodes.
- [simdLocalFront](simdlocalfront.md): The unit vector SceneKit treats as “forward” in local space for all nodes.
- [simdWorldRight](simdworldright.md): The “right” (+X) direction vector relative to the node, expressed in world space.
- [simdWorldUp](simdworldup.md): The “up” (+Y) direction vector relative to the node, expressed in world space.

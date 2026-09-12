> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/simdlocalright](https://developer.apple.com/documentation/scenekit/scnnode/simdlocalright)

# simdLocalRight (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The direction SceneKit treats as “right” in local space for all nodes.

## Declaration

```swift
class var simdLocalRight: simd_float3 { get }
```

<a id="Discussion"></a>

## Discussion

No SceneKit features depend directly on this direction’s definition—it’s simply a natural consequence of recognizing “forward” and “up” directions for use with cameras, directional lighting, and relative orientation operations.

This vector is always `(1, 0, 0)` for all nodes, but you can use this class property when it’s convenient to refer to directions symbolically.

## See Also

### Related Documentation

- [localRight](localright.md): The direction SceneKit treats as “right” in local space for all nodes.

### Calculating Node-Relative Transforms

- [simdLocalUp](simdlocalup.md): The direction SceneKit treats as “up” in local space for all nodes.
- [simdLocalFront](simdlocalfront.md): The unit vector SceneKit treats as “forward” in local space for all nodes.
- [simdWorldRight](simdworldright.md): The “right” (+X) direction vector relative to the node, expressed in world space.
- [simdWorldUp](simdworldup.md): The “up” (+Y) direction vector relative to the node, expressed in world space.
- [simdWorldFront](simdworldfront.md): The “forward” (-Z) direction vector relative to the node, expressed in world space.

# simdLocalRight (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The direction SceneKit treats as “right” in local space for all nodes.

## Declaration

```objectivec
@property (class, nonatomic, readonly) simd_float3 simdLocalRight;
```

<a id="Discussion"></a>

## Discussion

No SceneKit features depend directly on this direction’s definition—it’s simply a natural consequence of recognizing “forward” and “up” directions for use with cameras, directional lighting, and relative orientation operations.

This vector is always `(1, 0, 0)` for all nodes, but you can use this class property when it’s convenient to refer to directions symbolically.

## See Also

### Related Documentation

- [localRight](localright.md): The direction SceneKit treats as “right” in local space for all nodes.

### Calculating Node-Relative Transforms

- [simdLocalUp](simdlocalup.md): The direction SceneKit treats as “up” in local space for all nodes.
- [simdLocalFront](simdlocalfront.md): The unit vector SceneKit treats as “forward” in local space for all nodes.
- [simdWorldRight](simdworldright.md): The “right” (+X) direction vector relative to the node, expressed in world space.
- [simdWorldUp](simdworldup.md): The “up” (+Y) direction vector relative to the node, expressed in world space.
- [simdWorldFront](simdworldfront.md): The “forward” (-Z) direction vector relative to the node, expressed in world space.

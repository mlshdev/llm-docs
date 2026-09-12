> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnnode/localright](https://developer.apple.com/documentation/scenekit/scnnode/localright)

# localRight (Swift)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The direction SceneKit treats as “right” in local space for all nodes.

## Declaration

```swift
class var localRight: SCNVector3 { get }
```

<a id="Discussion"></a>

## Discussion

No SceneKit features depend directly on this direction’s definition—it’s simply a natural consequence of recognizing “forward” and “up” directions for use with cameras, directional lighting, and relative orientation operations.

This vector is always `(1, 0, 0)` for all nodes, but you can use this class property when it’s convenient to refer to directions symbolically.

## See Also

### Related Documentation

- [simdLocalRight](simdlocalright.md): The direction SceneKit treats as “right” in local space for all nodes.

### Calculating Node-Relative Transforms (SceneKit Types)

- [localUp](localup.md): The direction SceneKit treats as “up” in local space for all nodes.
- [localFront](localfront.md): The unit vector SceneKit treats as “forward” in local space for all nodes.
- [worldRight](worldright.md): The “right” (+X) direction vector relative to the node, expressed in world space.
- [worldUp](worldup.md): The “up” (+Y) direction vector relative to the node, expressed in world space.
- [worldFront](worldfront.md): The “forward” (-Z) direction vector relative to the node, expressed in world space.

# localRight (Objective-C)

**Framework:** SceneKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The direction SceneKit treats as “right” in local space for all nodes.

## Declaration

```objectivec
@property (class, nonatomic, readonly) SCNVector3 localRight;
```

<a id="Discussion"></a>

## Discussion

No SceneKit features depend directly on this direction’s definition—it’s simply a natural consequence of recognizing “forward” and “up” directions for use with cameras, directional lighting, and relative orientation operations.

This vector is always `(1, 0, 0)` for all nodes, but you can use this class property when it’s convenient to refer to directions symbolically.

## See Also

### Related Documentation

- [simdLocalRight](simdlocalright.md): The direction SceneKit treats as “right” in local space for all nodes.

### Calculating Node-Relative Transforms (SceneKit Types)

- [localUp](localup.md): The direction SceneKit treats as “up” in local space for all nodes.
- [localFront](localfront.md): The unit vector SceneKit treats as “forward” in local space for all nodes.
- [worldRight](worldright.md): The “right” (+X) direction vector relative to the node, expressed in world space.
- [worldUp](worldup.md): The “up” (+Y) direction vector relative to the node, expressed in world space.
- [worldFront](worldfront.md): The “forward” (-Z) direction vector relative to the node, expressed in world space.

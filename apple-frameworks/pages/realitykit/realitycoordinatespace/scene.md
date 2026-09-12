> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/realitycoordinatespace/scene](https://developer.apple.com/documentation/realitykit/realitycoordinatespace/scene)

# scene

**Framework:** RealityKit  
**Kind:** Type Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

The coordinate space that represents ARKit world space.

## Declaration

```swift
static var scene: SceneRealityCoordinateSpace { get }
```

<a id="discussion"></a>

## Discussion

In a visionOS window or volume, or when using the [virtual](../realityviewcamera/virtual.md) camera on any other platform, this space represents the center of the scene’s owning [RealityView](../realityview.md).

When in a visionOS Immersive Space, or using the `RealityViewCamera/worldTracking` camera in iOS, the `scene` coordinate space is the [ARKit](../../arkit.md) world origin.

> **Note**

> This static type is equivalent to a [SceneRealityCoordinateSpace](../scenerealitycoordinatespace.md) instance.

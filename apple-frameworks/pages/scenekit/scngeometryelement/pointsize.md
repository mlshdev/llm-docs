> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometryelement/pointsize](https://developer.apple.com/documentation/scenekit/scngeometryelement/pointsize)

# pointSize (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The width of each point in the geometry element, as measured in the geometry’s local 3D coordinate space.

## Declaration

```swift
var pointSize: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Some visual effects call for rendering a geometry as a collection of individual points—that is, a point cloud, not a solid surface or wireframe mesh. When you use this option, SceneKit can render each point as a small 2D surface that always faces the camera. By applying a texture or custom shader to that surface, you can efficiently render many small objects at once.

To render a geometry element as a point cloud, you must set three properties: [pointSize](pointsize.md), [minimumPointScreenSpaceRadius](minimumpointscreenspaceradius.md), and [maximumPointScreenSpaceRadius](maximumpointscreenspaceradius.md). Use [pointSize](pointsize.md) to determine how large each point appears in world space, so that points farther away appear as smaller 2D surfaces. Use the minimum and maximum radius properties to ensure that the on-screen rendering of each point fits within a certain range of pixel sizes.

## See Also

### Rendering Point Clouds

- [minimumPointScreenSpaceRadius](minimumpointscreenspaceradius.md): The smallest radius, measured in screen points, at which to render any point in the geometry element.
- [maximumPointScreenSpaceRadius](maximumpointscreenspaceradius.md): The largest radius, measured in screen points, at which to render any point in the geometry element.

# pointSize (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The width of each point in the geometry element, as measured in the geometry’s local 3D coordinate space.

## Declaration

```objectivec
@property (nonatomic) CGFloat pointSize;
```

<a id="Discussion"></a>

## Discussion

Some visual effects call for rendering a geometry as a collection of individual points—that is, a point cloud, not a solid surface or wireframe mesh. When you use this option, SceneKit can render each point as a small 2D surface that always faces the camera. By applying a texture or custom shader to that surface, you can efficiently render many small objects at once.

To render a geometry element as a point cloud, you must set three properties: [pointSize](pointsize.md), [minimumPointScreenSpaceRadius](minimumpointscreenspaceradius.md), and [maximumPointScreenSpaceRadius](maximumpointscreenspaceradius.md). Use [pointSize](pointsize.md) to determine how large each point appears in world space, so that points farther away appear as smaller 2D surfaces. Use the minimum and maximum radius properties to ensure that the on-screen rendering of each point fits within a certain range of pixel sizes.

## See Also

### Rendering Point Clouds

- [minimumPointScreenSpaceRadius](minimumpointscreenspaceradius.md): The smallest radius, measured in screen points, at which to render any point in the geometry element.
- [maximumPointScreenSpaceRadius](maximumpointscreenspaceradius.md): The largest radius, measured in screen points, at which to render any point in the geometry element.

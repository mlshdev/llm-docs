> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scngeometryelement/minimumpointscreenspaceradius](https://developer.apple.com/documentation/scenekit/scngeometryelement/minimumpointscreenspaceradius)

# minimumPointScreenSpaceRadius (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The smallest radius, measured in screen points, at which to render any point in the geometry element.

## Declaration

```swift
var minimumPointScreenSpaceRadius: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Some visual effects call for rendering a geometry as a collection of individual points—that is, a point cloud, not a solid surface or wireframe mesh. When you use this option, SceneKit can render each point as a small 2D surface that always faces the camera. By applying a texture or custom shader to that surface, you can efficiently render many small objects at once.

To render a geometry element as a point cloud, you must set three properties: [pointSize](pointsize.md), [minimumPointScreenSpaceRadius](minimumpointscreenspaceradius.md), and [maximumPointScreenSpaceRadius](maximumpointscreenspaceradius.md). Use [pointSize](pointsize.md) to determine how large each point appears in world space, so that points farther away appear as smaller 2D surfaces. Use the minimum and maximum radius properties to ensure that the on-screen rendering of each point fits within a certain range of pixel sizes.

For example, to render a point cloud where each point is always one pixel wide (like a field of stars), set both the minimum and maximum sizes to one pixel. To render a group of objects whose screen sizes vary with perspective (like a set of images representing planets), set the minimum size to one pixel and the maximum size to a much larger value.

## See Also

### Rendering Point Clouds

- [pointSize](pointsize.md): The width of each point in the geometry element, as measured in the geometry’s local 3D coordinate space.
- [maximumPointScreenSpaceRadius](maximumpointscreenspaceradius.md): The largest radius, measured in screen points, at which to render any point in the geometry element.

# minimumPointScreenSpaceRadius (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+ · watchOS 4.0+

The smallest radius, measured in screen points, at which to render any point in the geometry element.

## Declaration

```objectivec
@property (nonatomic) CGFloat minimumPointScreenSpaceRadius;
```

<a id="Discussion"></a>

## Discussion

Some visual effects call for rendering a geometry as a collection of individual points—that is, a point cloud, not a solid surface or wireframe mesh. When you use this option, SceneKit can render each point as a small 2D surface that always faces the camera. By applying a texture or custom shader to that surface, you can efficiently render many small objects at once.

To render a geometry element as a point cloud, you must set three properties: [pointSize](pointsize.md), [minimumPointScreenSpaceRadius](minimumpointscreenspaceradius.md), and [maximumPointScreenSpaceRadius](maximumpointscreenspaceradius.md). Use [pointSize](pointsize.md) to determine how large each point appears in world space, so that points farther away appear as smaller 2D surfaces. Use the minimum and maximum radius properties to ensure that the on-screen rendering of each point fits within a certain range of pixel sizes.

For example, to render a point cloud where each point is always one pixel wide (like a field of stars), set both the minimum and maximum sizes to one pixel. To render a group of objects whose screen sizes vary with perspective (like a set of images representing planets), set the minimum size to one pixel and the maximum size to a much larger value.

## See Also

### Rendering Point Clouds

- [pointSize](pointsize.md): The width of each point in the geometry element, as measured in the geometry’s local 3D coordinate space.
- [maximumPointScreenSpaceRadius](maximumpointscreenspaceradius.md): The largest radius, measured in screen points, at which to render any point in the geometry element.

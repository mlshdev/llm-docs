> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnboundingvolume/boundingsphere](https://developer.apple.com/documentation/scenekit/scnboundingvolume/boundingsphere)

# boundingSphere

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The center point and radius of the object’s bounding sphere.

## Declaration

```swift
var boundingSphere: (center: SCNVector3, radius: Float) { get }
```

<a id="Discussion"></a>

## Discussion

Scene Kit defines a bounding sphere in the local coordinate space using a center point and a radius. For example, if a node’s bounding sphere has the center point `{3, 1, 4}` and radius `2.0`, all points in the vertex data of node’s geometry (and any geometry attached to its child nodes) lie within `2.0` units of the center point.

The coordinates provided when reading this property are valid only if the object has a volume to be measured. For a geometry containing no vertex data or a node containing no geometry (and whose child nodes, if any, contain no geometry), the values `center` and `radius` are both zero.

## See Also

### Measuring an Object’s Bounding Volume

- [boundingBox](boundingbox.md): Deprecated. The minimum and maximum corner points of the object’s bounding box.

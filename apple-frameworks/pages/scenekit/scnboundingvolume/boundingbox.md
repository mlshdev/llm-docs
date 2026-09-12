> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnboundingvolume/boundingbox](https://developer.apple.com/documentation/scenekit/scnboundingvolume/boundingbox)

# boundingBox

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

The minimum and maximum corner points of the object’s bounding box.

## Declaration

```swift
var boundingBox: (min: SCNVector3, max: SCNVector3) { get set }
```

<a id="Discussion"></a>

## Discussion

Scene Kit defines a bounding box in the local coordinate space using two points identifying its corners, which implicitly determine six axis-aligned planes marking its limits. For example, if a geometry’s bounding box has the minimum corner `{-1, 0, 2}` and the maximum corner `{3, 4, 5}`, all points in the geometry’s vertex data have an x-coordinate value between `-1.0` and `3.0`, inclusive.

The coordinates provided when reading this property are valid only if the object has a volume to be measured. For a geometry containing no vertex data or a node containing no geometry, the values `min` and `max` are both zero.

By default, Scene Kit automatically computes the bounding volumes of nodes and geometries and uses this information to assist in rendering. Setting a new value for this property overrides the default bounding box.

## See Also

### Measuring an Object’s Bounding Volume

- [boundingSphere](boundingsphere.md): Deprecated. The center point and radius of the object’s bounding sphere.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnboundingvolume/getboundingspherecenter:radius:](https://developer.apple.com/documentation/scenekit/scnboundingvolume/getboundingspherecenter:radius:)

# getBoundingSphereCenter:radius:

**Interface language:** Objective-C

**Framework:** SceneKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

Gets the center point and radius of the object’s bounding sphere.

## Declaration

```objectivec
- (BOOL) getBoundingSphereCenter:(SCNVector3 *) center radius:(CGFloat *) radius;
```

## Parameters

- `center`: On output, the center point of the bounding sphere.
- `radius`: On output, the radius of the bounding sphere.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the object has a nonzero volume; otherwise, [false](https://developer.apple.com/documentation/swift/false).

<a id="Discussion"></a>

## Discussion

Scene Kit defines a bounding sphere in the local coordinate space using a center point and a radius. For example, if a node’s bounding sphere has the center point `{3, 1, 4}` and radius `2.0`, all points in the vertex data of node’s geometry (and any geometry attached to its child nodes) lie within `2.0` units of the center point.

The coordinates provided by this method are valid only if the object has a volume to be measured. If called on a geometry containing no vertex data or a node containing no geometry (and whose child nodes, if any, contain no geometry), this method returns NO, indicating that the values `*center` and `*radius` are undefined.

## See Also

### Measuring an Object’s Bounding Volume

- [getBoundingBoxMin:max:](getboundingboxmin_max_.md): Deprecated. Gets the minimum and maximum corner points of the object’s bounding box.

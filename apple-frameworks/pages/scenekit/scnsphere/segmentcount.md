> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/scenekit/scnsphere/segmentcount](https://developer.apple.com/documentation/scenekit/scnsphere/segmentcount)

# segmentCount (Swift)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS 8.0+ (deprecated in 26.0) · iPadOS 8.0+ (deprecated in 26.0) · Mac Catalyst 13.1+ (deprecated in 26.0) · macOS 10.8+ (deprecated in 26.0) · tvOS 9.0+ (deprecated in 26.0) · visionOS 1.0+ (deprecated in 26.0) · watchOS 3.0+ (deprecated in 26.0)

A number determining the detail of the polygon mesh SceneKit uses to render the sphere. Animatable.

## Declaration

```swift
var segmentCount: Int { get set }
```

<a id="Discussion"></a>

## Discussion

If the sphere’s [isGeodesic](isgeodesic.md) property is [false](https://developer.apple.com/documentation/swift/false), its segment count determines the number of subdivisions along its polar and azimuth angles, similar to the latitude and longitude system on a globe of the Earth. For example, if the segment count is `24`, the circular horizontal cross section through the center of the sphere has 24 segments around its circumference, and a semicircle reaching from one pole to another through a vertical cross section also has 24 segments.

If the sphere’s [isGeodesic](isgeodesic.md) property is [true](https://developer.apple.com/documentation/swift/true), SceneKit creates the sphere’s surface by successively subdividing the faces of an icosahedron (or twenty-sided polyhedron). Each subdivision quadruples the number of polygons in the surface. The number of subdivisions increases logarithmically with the segment count, so that the total number of polygons or vertices for a geodesic sphere is similar to that for a non-geodesic sphere of the same segment count.

The default segment count is `48`. Setting this property’s value to a number less than `3` results in undefined behavior.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting Geometric Detail

- [isGeodesic](isgeodesic.md): A Boolean value specifying whether SceneKit uses a geodesic polygon mesh to render the sphere.

# segmentCount (Objective-C)

**Framework:** SceneKit  
**Kind:** Instance Property  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

A number determining the detail of the polygon mesh SceneKit uses to render the sphere. Animatable.

## Declaration

```objectivec
@property (nonatomic) NSInteger segmentCount;
```

<a id="Discussion"></a>

## Discussion

If the sphere’s [geodesic](isgeodesic.md) property is [false](https://developer.apple.com/documentation/swift/false), its segment count determines the number of subdivisions along its polar and azimuth angles, similar to the latitude and longitude system on a globe of the Earth. For example, if the segment count is `24`, the circular horizontal cross section through the center of the sphere has 24 segments around its circumference, and a semicircle reaching from one pole to another through a vertical cross section also has 24 segments.

If the sphere’s [geodesic](isgeodesic.md) property is [true](https://developer.apple.com/documentation/swift/true), SceneKit creates the sphere’s surface by successively subdividing the faces of an icosahedron (or twenty-sided polyhedron). Each subdivision quadruples the number of polygons in the surface. The number of subdivisions increases logarithmically with the segment count, so that the total number of polygons or vertices for a geodesic sphere is similar to that for a non-geodesic sphere of the same segment count.

The default segment count is `48`. Setting this property’s value to a number less than `3` results in undefined behavior.

You can animate changes to this property’s value. See [Animating SceneKit Content](../animating-scenekit-content.md).

## See Also

### Adjusting Geometric Detail

- [geodesic](isgeodesic.md): A Boolean value specifying whether SceneKit uses a geodesic polygon mesh to render the sphere.

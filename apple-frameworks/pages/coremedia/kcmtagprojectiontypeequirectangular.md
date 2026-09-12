> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/kcmtagprojectiontypeequirectangular](https://developer.apple.com/documentation/coremedia/kcmtagprojectiontypeequirectangular)

# kCMTagProjectionTypeEquirectangular

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A value for projection tags indicating that display is on a 360 degree equirectangular projection.

## Declaration

```objectivec
extern const CMTag kCMTagProjectionTypeEquirectangular;
```

<a id="Discussion"></a>

## Discussion

This value is for use in tags with the [kCMTagCategory_ProjectionType](cmtagcategory/kcmtagcategory_projectiontype.md) category. The video frames map onto the interior of a 3D sphere projection.

## See Also

### Projection Surfaces

- [kCMTagProjectionTypeRectangular](kcmtagprojectiontyperectangular.md): A value for projection tags indicating that display is on a flat rectangular surface.
- [kCMTagProjectionTypeFisheye](kcmtagprojectiontypefisheye.md): Video content displays as a fisheye projection.

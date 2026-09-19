> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coremedia/kcmtagprojectiontypefisheye

# kCMTagProjectionTypeFisheye

**Interface language:** Objective-C

**Framework:** Core Media  
**Kind:** Global Variable  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Video content displays as a fisheye projection.

## Declaration

```objectivec
extern const CMTag kCMTagProjectionTypeFisheye;
```

<a id="Discussion"></a>

## Discussion

This value is for use in tags with the [kCMTagCategory_ProjectionType](cmtagcategory/kcmtagcategory_projectiontype.md) category.

## See Also

### Projection Surfaces

- [kCMTagProjectionTypeRectangular](kcmtagprojectiontyperectangular.md): A value for projection tags indicating that display is on a flat rectangular surface.
- [kCMTagProjectionTypeEquirectangular](kcmtagprojectiontypeequirectangular.md): A value for projection tags indicating that display is on a 360 degree equirectangular projection.

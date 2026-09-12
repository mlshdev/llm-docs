> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coremedia/cmprojectiontype/rectangular](https://developer.apple.com/documentation/coremedia/cmprojectiontype/rectangular)

# CMProjectionType.rectangular (Swift)

**Framework:** Core Media  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Video content displays on a flat, rectangular 2D surface.

## Declaration

```swift
case rectangular
```

<a id="Discussion"></a>

## Discussion

Rectangular projection is equivalent to displaying as a 2D texture in the world.

Rectangular projection is the default for 3D video when a channel or buffer has no projection metadata.

## See Also

### Projection Surfaces

- [CMProjectionType.equirectangular](equirectangular.md): Video content displays as a 360 degree equirectangular projection.
- [CMProjectionType.halfEquirectangular](halfequirectangular.md): Video content displays as a 180 degree equirectangular projection.
- [CMProjectionType.fisheye](fisheye.md): Video content displays as a fisheye projection.

# kCMProjectionType_Rectangular (Objective-C)

**Framework:** Core Media  
**Kind:** Enumeration Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

Video content displays on a flat, rectangular 2D surface.

## Declaration

```objectivec
kCMProjectionType_Rectangular
```

<a id="Discussion"></a>

## Discussion

Rectangular projection is equivalent to displaying as a 2D texture in the world.

Rectangular projection is the default for 3D video when a channel or buffer has no projection metadata.

## See Also

### Projection Surfaces

- [kCMProjectionType_Equirectangular](equirectangular.md): Video content displays as a 360 degree equirectangular projection.
- [kCMProjectionType_HalfEquirectangular](halfequirectangular.md): Video content displays as a 180 degree equirectangular projection.
- [kCMProjectionType_Fisheye](fisheye.md): Video content displays as a fisheye projection.

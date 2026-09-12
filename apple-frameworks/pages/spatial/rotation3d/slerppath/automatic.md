> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotation3d/slerppath/automatic](https://developer.apple.com/documentation/spatial/rotation3d/slerppath/automatic)

# Rotation3D.SlerpPath.automatic

**Framework:** Spatial  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Spherical linear interpolation along the automatically selected arc between two rotations.

## Declaration

```swift
case automatic
```

<a id="Discussion"></a>

## Discussion

For angular separations that are less than or equal to 180°, the spherical linear interpolation along the shortest arc between two rotations, otherwise along the longest arc.

## See Also

### Enumeration Cases

- [Rotation3D.SlerpPath.shortest](shortest.md): Spherical linear interpolation along the shortest arc between two rotations.
- [Rotation3D.SlerpPath.longest](longest.md): Spherical linear interpolation along the longest arc between two rotations.

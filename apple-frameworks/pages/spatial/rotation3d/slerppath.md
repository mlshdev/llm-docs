> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/rotation3d/slerppath](https://developer.apple.com/documentation/spatial/rotation3d/slerppath)

# Rotation3D.SlerpPath

**Framework:** Spatial  
**Kind:** Enumeration  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Constants that define the arc that a slerp operation takes.

## Declaration

```swift
enum SlerpPath
```

## Topics

### Enumeration Cases

- [Rotation3D.SlerpPath.automatic](slerppath/automatic.md): Spherical linear interpolation along the automatically selected arc between two rotations.
- [Rotation3D.SlerpPath.shortest](slerppath/shortest.md): Spherical linear interpolation along the shortest arc between two rotations.
- [Rotation3D.SlerpPath.longest](slerppath/longest.md): Spherical linear interpolation along the longest arc between two rotations.

### Instance Methods

- [hash(into:)](hash%28into_%29.md): Hashes the essential components of this value by feeding them into the given hasher.

### Operator Functions

- [==(\_:\_:)](==%28____%29.md): Returns a Boolean value that indicates whether two values are equal.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Transforming a 3D rotation structure

- [slerp(from:to:t:along:)](slerp%28from_to_t_along_%29.md): Returns the spherical linear interpolation along either the shortest or the longest arc between two rotations.
- [inverse](inverse.md): The inverse of the rotation.
- [identity](identity.md): The identity rotation.

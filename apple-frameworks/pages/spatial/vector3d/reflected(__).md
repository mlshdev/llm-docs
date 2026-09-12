> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/vector3d/reflected(_:)](https://developer.apple.com/documentation/spatial/vector3d/reflected(_:))

# reflected(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns the reflection direction of the incident vector and a specified unit normal vector.

## Declaration

```swift
func reflected(_ normal: Vector3D) -> Vector3D
```

## Parameters

- `normal`: The unit normal vector.

## See Also

### Geometry functions

- [cross(\_:)](cross%28__%29.md): Returns the cross product of the vector and the specified vector.
- [dot(\_:)](dot%28__%29.md): Returns the dot product of the vector and the specified vector.
- [length](length.md): The length of the vector.
- [lengthSquared](lengthsquared.md): The square of the length of the vector.
- [normalize()](normalize%28%29.md): Normalizes the mutable vector.
- [normalized](normalized.md): A new vector that represents the normalized copy of the current vector.
- [projected(\_:)](projected%28__%29.md): Returns the vector projected onto the specified vector.

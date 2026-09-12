> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/volumetric/union(_:)](https://developer.apple.com/documentation/spatial/volumetric/union(_:))

# union(\_:)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS · watchOS 9.0+

Returns the smallest volumetric entity that contains the two source entities.

## Declaration

```swift
func union(_ other: Self) -> Self
```

## Parameters

- `other`: The volumetric entity that the function compares against.

## See Also

### Instance methods

- [contains(\_:)](contains%28__%29.md): Returns a Boolean value that indicates whether the entity contains the specified volumetric entity.
- [contains(point:)](contains%28point_%29.md): Returns a Boolean value that indicates whether this volume contains the specified point.
- [contains(anyOf:)](contains%28anyof_%29.md): Returns a Boolean value that indicates whether this volume contains any of the specified points.
- [formIntersection(\_:)](formintersection%28__%29.md): Sets the primitive to the intersection of itself and the specified primitive.
- [formUnion(\_:)](formunion%28__%29.md): Sets the primitive to the union of itself and the specified primitive.
- [intersection(\_:)](intersection%28__%29.md): Returns the intersection of two volumetric entities.

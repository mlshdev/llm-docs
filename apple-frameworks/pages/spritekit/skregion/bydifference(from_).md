> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skregion/bydifference(from:)](https://developer.apple.com/documentation/spritekit/skregion/bydifference(from:))

# byDifference(from:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a new region created by subtracting the contents of another region from this region.

## Declaration

```swift
func byDifference(from region: SKRegion) -> Self
```

## Parameters

- `region`: The region to subtract.

<a id="return-value"></a>

## Return Value

A new region whose contents include all points in the current region that are not also included in the second region.

## See Also

### Creating and Initializing Region Objects

- [infinite()](infinite%28%29.md): Returns a region that defines a region that includes all points.
- [init(size:)](init%28size_%29.md): Initializes a new region with a rectangular area.
- [init(radius:)](init%28radius_%29.md): Initializes a new region with a circular area.
- [init(path:)](init%28path_%29.md): Initializes a new region using a Core Graphics path.
- [inverse()](inverse%28%29.md): Returns a new region that is the mathematical inverse of an existing region.
- [byIntersection(with:)](byintersection%28with_%29.md): Returns a new region created by intersecting the contents of this region with another region.
- [byUnion(with:)](byunion%28with_%29.md): Returns a new region created by combining the contents of this region with another region.

# regionByDifferenceFromRegion: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a new region created by subtracting the contents of another region from this region.

## Declaration

```objectivec
- (instancetype) regionByDifferenceFromRegion:(SKRegion *) region;
```

## Parameters

- `region`: The region to subtract.

<a id="return-value"></a>

## Return Value

A new region whose contents include all points in the current region that are not also included in the second region.

## See Also

### Creating and Initializing Region Objects

- [infiniteRegion](infinite%28%29.md): Returns a region that defines a region that includes all points.
- [initWithSize:](init%28size_%29.md): Initializes a new region with a rectangular area.
- [initWithRadius:](init%28radius_%29.md): Initializes a new region with a circular area.
- [initWithPath:](init%28path_%29.md): Initializes a new region using a Core Graphics path.
- [inverseRegion](inverse%28%29.md): Returns a new region that is the mathematical inverse of an existing region.
- [regionByIntersectionWithRegion:](byintersection%28with_%29.md): Returns a new region created by intersecting the contents of this region with another region.
- [regionByUnionWithRegion:](byunion%28with_%29.md): Returns a new region created by combining the contents of this region with another region.

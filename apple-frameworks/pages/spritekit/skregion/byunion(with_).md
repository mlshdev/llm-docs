> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skregion/byunion(with:)](https://developer.apple.com/documentation/spritekit/skregion/byunion(with:))

# byUnion(with:) (Swift)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a new region created by combining the contents of this region with another region.

## Declaration

```swift
func byUnion(with region: SKRegion) -> Self
```

## Parameters

- `region`: The region to combine with the current region.

<a id="return-value"></a>

## Return Value

A new region whose contents include all points that are included in either region.

## See Also

### Creating and Initializing Region Objects

- [infinite()](infinite%28%29.md): Returns a region that defines a region that includes all points.
- [init(size:)](init%28size_%29.md): Initializes a new region with a rectangular area.
- [init(radius:)](init%28radius_%29.md): Initializes a new region with a circular area.
- [init(path:)](init%28path_%29.md): Initializes a new region using a Core Graphics path.
- [inverse()](inverse%28%29.md): Returns a new region that is the mathematical inverse of an existing region.
- [byDifference(from:)](bydifference%28from_%29.md): Returns a new region created by subtracting the contents of another region from this region.
- [byIntersection(with:)](byintersection%28with_%29.md): Returns a new region created by intersecting the contents of this region with another region.

# regionByUnionWithRegion: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a new region created by combining the contents of this region with another region.

## Declaration

```objectivec
- (instancetype) regionByUnionWithRegion:(SKRegion *) region;
```

## Parameters

- `region`: The region to combine with the current region.

<a id="return-value"></a>

## Return Value

A new region whose contents include all points that are included in either region.

## See Also

### Creating and Initializing Region Objects

- [infiniteRegion](infinite%28%29.md): Returns a region that defines a region that includes all points.
- [initWithSize:](init%28size_%29.md): Initializes a new region with a rectangular area.
- [initWithRadius:](init%28radius_%29.md): Initializes a new region with a circular area.
- [initWithPath:](init%28path_%29.md): Initializes a new region using a Core Graphics path.
- [inverseRegion](inverse%28%29.md): Returns a new region that is the mathematical inverse of an existing region.
- [regionByDifferenceFromRegion:](bydifference%28from_%29.md): Returns a new region created by subtracting the contents of another region from this region.
- [regionByIntersectionWithRegion:](byintersection%28with_%29.md): Returns a new region created by intersecting the contents of this region with another region.

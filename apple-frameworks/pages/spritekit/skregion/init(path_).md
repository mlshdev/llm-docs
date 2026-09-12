> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skregion/init(path:)](https://developer.apple.com/documentation/spritekit/skregion/init(path:))

# init(path:) (Swift)

**Framework:** SpriteKit  
**Kind:** Initializer  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Initializes a new region using a Core Graphics path.

## Declaration

```swift
init(path: CGPath)
```

## Parameters

- `path`: A path that defines the new region’s shape. The path is assumed to use the even-odd winding rule.

<a id="return-value"></a>

## Return Value

A newly initialized region.

## See Also

### Creating and Initializing Region Objects

- [infinite()](infinite%28%29.md): Returns a region that defines a region that includes all points.
- [init(size:)](init%28size_%29.md): Initializes a new region with a rectangular area.
- [init(radius:)](init%28radius_%29.md): Initializes a new region with a circular area.
- [inverse()](inverse%28%29.md): Returns a new region that is the mathematical inverse of an existing region.
- [byDifference(from:)](bydifference%28from_%29.md): Returns a new region created by subtracting the contents of another region from this region.
- [byIntersection(with:)](byintersection%28with_%29.md): Returns a new region created by intersecting the contents of this region with another region.
- [byUnion(with:)](byunion%28with_%29.md): Returns a new region created by combining the contents of this region with another region.

# initWithPath: (Objective-C)

**Framework:** SpriteKit  
**Kind:** Instance Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Initializes a new region using a Core Graphics path.

## Declaration

```objectivec
- (instancetype) initWithPath:(CGPathRef) path;
```

## Parameters

- `path`: A path that defines the new region’s shape. The path is assumed to use the even-odd winding rule.

<a id="return-value"></a>

## Return Value

A newly initialized region.

## See Also

### Creating and Initializing Region Objects

- [infiniteRegion](infinite%28%29.md): Returns a region that defines a region that includes all points.
- [initWithSize:](init%28size_%29.md): Initializes a new region with a rectangular area.
- [initWithRadius:](init%28radius_%29.md): Initializes a new region with a circular area.
- [inverseRegion](inverse%28%29.md): Returns a new region that is the mathematical inverse of an existing region.
- [regionByDifferenceFromRegion:](bydifference%28from_%29.md): Returns a new region created by subtracting the contents of another region from this region.
- [regionByIntersectionWithRegion:](byintersection%28with_%29.md): Returns a new region created by intersecting the contents of this region with another region.
- [regionByUnionWithRegion:](byunion%28with_%29.md): Returns a new region created by combining the contents of this region with another region.

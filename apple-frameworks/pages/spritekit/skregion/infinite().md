> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spritekit/skregion/infinite()](https://developer.apple.com/documentation/spritekit/skregion/infinite())

# infinite() (Swift)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a region that defines a region that includes all points.

## Declaration

```swift
class func infinite() -> Self
```

<a id="return-value"></a>

## Return Value

Returns a singleton region that covers an infinite area.

## See Also

### Creating and Initializing Region Objects

- [init(size:)](init%28size_%29.md): Initializes a new region with a rectangular area.
- [init(radius:)](init%28radius_%29.md): Initializes a new region with a circular area.
- [init(path:)](init%28path_%29.md): Initializes a new region using a Core Graphics path.
- [inverse()](inverse%28%29.md): Returns a new region that is the mathematical inverse of an existing region.
- [byDifference(from:)](bydifference%28from_%29.md): Returns a new region created by subtracting the contents of another region from this region.
- [byIntersection(with:)](byintersection%28with_%29.md): Returns a new region created by intersecting the contents of this region with another region.
- [byUnion(with:)](byunion%28with_%29.md): Returns a new region created by combining the contents of this region with another region.

# infiniteRegion (Objective-C)

**Framework:** SpriteKit  
**Kind:** Type Method  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 1.0+

Returns a region that defines a region that includes all points.

## Declaration

```objectivec
+ (instancetype) infiniteRegion;
```

<a id="return-value"></a>

## Return Value

Returns a singleton region that covers an infinite area.

## See Also

### Creating and Initializing Region Objects

- [initWithSize:](init%28size_%29.md): Initializes a new region with a rectangular area.
- [initWithRadius:](init%28radius_%29.md): Initializes a new region with a circular area.
- [initWithPath:](init%28path_%29.md): Initializes a new region using a Core Graphics path.
- [inverseRegion](inverse%28%29.md): Returns a new region that is the mathematical inverse of an existing region.
- [regionByDifferenceFromRegion:](bydifference%28from_%29.md): Returns a new region created by subtracting the contents of another region from this region.
- [regionByIntersectionWithRegion:](byintersection%28with_%29.md): Returns a new region created by intersecting the contents of this region with another region.
- [regionByUnionWithRegion:](byunion%28with_%29.md): Returns a new region created by combining the contents of this region with another region.

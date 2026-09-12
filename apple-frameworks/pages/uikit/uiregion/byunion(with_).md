> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiregion/byunion(with:)](https://developer.apple.com/documentation/uikit/uiregion/byunion(with:))

# byUnion(with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns a new region containing the combined areas of the specified region and the current region.

## Declaration

```swift
func byUnion(with region: UIRegion) -> Self
```

## Parameters

- `region`: The region to be combined with the current region.

<a id="return-value"></a>

## Return Value

A new region that contains the points from both the current region and the shape specified by the `region` parameter.

<a id="Discussion"></a>

## Discussion

Combining any region with the infinite region returns the infinite region.

## See Also

### Creating complex regions

- [inverse()](inverse%28%29.md): Returns a new region that’s the mathematical inverse of the current region.
- [byDifference(from:)](bydifference%28from_%29.md): Returns a new region created by subtracting the specified region from the current region.
- [byIntersection(with:)](byintersection%28with_%29.md): Returns a new region containing only the area occupied by both the specified region and current region.

# regionByUnionWithRegion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns a new region containing the combined areas of the specified region and the current region.

## Declaration

```objectivec
- (instancetype) regionByUnionWithRegion:(UIRegion *) region;
```

## Parameters

- `region`: The region to be combined with the current region.

<a id="return-value"></a>

## Return Value

A new region that contains the points from both the current region and the shape specified by the `region` parameter.

<a id="Discussion"></a>

## Discussion

Combining any region with the infinite region returns the infinite region.

## See Also

### Creating complex regions

- [inverseRegion](inverse%28%29.md): Returns a new region that’s the mathematical inverse of the current region.
- [regionByDifferenceFromRegion:](bydifference%28from_%29.md): Returns a new region created by subtracting the specified region from the current region.
- [regionByIntersectionWithRegion:](byintersection%28with_%29.md): Returns a new region containing only the area occupied by both the specified region and current region.

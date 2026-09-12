> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiregion/byintersection(with:)](https://developer.apple.com/documentation/uikit/uiregion/byintersection(with:))

# byIntersection(with:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns a new region containing only the area occupied by both the specified region and current region.

## Declaration

```swift
func byIntersection(with region: UIRegion) -> Self
```

## Parameters

- `region`: The region to be intersected with the current region.

<a id="return-value"></a>

## Return Value

A new region that contains only the points that are in both the current region and the shape specified by the `region` parameter.

## See Also

### Creating complex regions

- [inverse()](inverse%28%29.md): Returns a new region that’s the mathematical inverse of the current region.
- [byDifference(from:)](bydifference%28from_%29.md): Returns a new region created by subtracting the specified region from the current region.
- [byUnion(with:)](byunion%28with_%29.md): Returns a new region containing the combined areas of the specified region and the current region.

# regionByIntersectionWithRegion: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns a new region containing only the area occupied by both the specified region and current region.

## Declaration

```objectivec
- (instancetype) regionByIntersectionWithRegion:(UIRegion *) region;
```

## Parameters

- `region`: The region to be intersected with the current region.

<a id="return-value"></a>

## Return Value

A new region that contains only the points that are in both the current region and the shape specified by the `region` parameter.

## See Also

### Creating complex regions

- [inverseRegion](inverse%28%29.md): Returns a new region that’s the mathematical inverse of the current region.
- [regionByDifferenceFromRegion:](bydifference%28from_%29.md): Returns a new region created by subtracting the specified region from the current region.
- [regionByUnionWithRegion:](byunion%28with_%29.md): Returns a new region containing the combined areas of the specified region and the current region.

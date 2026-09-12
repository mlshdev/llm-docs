> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiregion/inverse()](https://developer.apple.com/documentation/uikit/uiregion/inverse())

# inverse() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns a new region that’s the mathematical inverse of the current region.

## Declaration

```swift
func inverse() -> Self
```

<a id="return-value"></a>

## Return Value

A new region whose contents include all points that are not in the current region.

<a id="Discussion"></a>

## Discussion

The inverse of the infinite region is an empty region.

## See Also

### Creating complex regions

- [byDifference(from:)](bydifference%28from_%29.md): Returns a new region created by subtracting the specified region from the current region.
- [byIntersection(with:)](byintersection%28with_%29.md): Returns a new region containing only the area occupied by both the specified region and current region.
- [byUnion(with:)](byunion%28with_%29.md): Returns a new region containing the combined areas of the specified region and the current region.

# inverseRegion (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.1+ · tvOS 9.0+ · visionOS 1.0+

Returns a new region that’s the mathematical inverse of the current region.

## Declaration

```objectivec
- (instancetype) inverseRegion;
```

<a id="return-value"></a>

## Return Value

A new region whose contents include all points that are not in the current region.

<a id="Discussion"></a>

## Discussion

The inverse of the infinite region is an empty region.

## See Also

### Creating complex regions

- [regionByDifferenceFromRegion:](bydifference%28from_%29.md): Returns a new region created by subtracting the specified region from the current region.
- [regionByIntersectionWithRegion:](byintersection%28with_%29.md): Returns a new region containing only the area occupied by both the specified region and current region.
- [regionByUnionWithRegion:](byunion%28with_%29.md): Returns a new region containing the combined areas of the specified region and the current region.

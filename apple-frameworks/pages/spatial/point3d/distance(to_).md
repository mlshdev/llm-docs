> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/spatial/point3d/distance(to:)](https://developer.apple.com/documentation/spatial/point3d/distance(to:))

# distance(to:) (Swift)

**Framework:** Spatial  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the distance between two points.

## Declaration

```swift
func distance(to other: Point3D) -> Double
```

## Parameters

- `other`: The point to calculate the distance to.

<a id="return-value"></a>

## Return Value

The distance between two points.

# SPPoint3DDistanceToPoint (Objective-C)

**Framework:** Spatial  
**Kind:** Function  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 16.0+ · visionOS 1.0+ · watchOS 9.0+

Returns the distance between two points.

## Declaration

```objectivec
static double SPPoint3DDistanceToPoint(SPPoint3D point, SPPoint3D other);
```

## Parameters

- `point`: The point to calculate the distance from.
- `other`: The point to calculate the distance to.

<a id="return-value"></a>

## Return Value

The distance between two points.

## See Also

### Checking characteristics

- [SPPoint3DIsFinite](../sppoint3disfinite.md)
- [SPPoint3DIsNaN](../sppoint3disnan.md)
- [SPPoint3DIsZero](../sppoint3diszero.md)

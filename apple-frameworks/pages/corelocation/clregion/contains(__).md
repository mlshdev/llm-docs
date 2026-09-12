> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clregion/contains(_:)](https://developer.apple.com/documentation/corelocation/clregion/contains(_:))

# contains(\_:) (Swift)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** macOS 10.7+ (deprecated in 10.10) · watchOS 2.0+ (deprecated in 2.0)

Returns a Boolean value indicating whether the region contains the specified coordinate.

> Use [contains(\_:)](../clcircularregion/contains%28__%29.md) in [CLCircularRegion](../clcircularregion.md) instead.

## Declaration

```swift
func contains(_ coordinate: CLLocationCoordinate2D) -> Bool
```

## Parameters

- `coordinate`: The coordinate to test against the region.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the coordinate lies within the region’s boundaries or [false](https://developer.apple.com/documentation/swift/false) if it does not.

<a id="Discussion"></a>

## Discussion

In iOS, use a [CLCircularRegion](../clcircularregion.md) object to manage geographic regions.

## See Also

### Deprecated

- [init(circularRegionWithCenter:radius:identifier:)](init%28circularregionwithcenter_radius_identifier_%29.md): Deprecated. Initializes and returns a region object defining a circular area.
- [center](center.md): Deprecated. The center point of the region.
- [radius](radius.md): Deprecated. The radius (measured in meters) that defines the region’s outer boundary.

# containsCoordinate: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 7.0) · iPadOS 4.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.10) · watchOS 2.0+ (deprecated in 2.0)

Returns a Boolean value indicating whether the region contains the specified coordinate.

> Use [containsCoordinate:](../clcircularregion/contains%28__%29.md) in [CLCircularRegion](../clcircularregion.md) instead.

## Declaration

```objectivec
- (BOOL) containsCoordinate:(CLLocationCoordinate2D) coordinate;
```

## Parameters

- `coordinate`: The coordinate to test against the region.

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) if the coordinate lies within the region’s boundaries or [false](https://developer.apple.com/documentation/swift/false) if it does not.

<a id="Discussion"></a>

## Discussion

In iOS, use a [CLCircularRegion](../clcircularregion.md) object to manage geographic regions.

## See Also

### Deprecated

- [initCircularRegionWithCenter:radius:identifier:](init%28circularregionwithcenter_radius_identifier_%29.md): Deprecated. Initializes and returns a region object defining a circular area.
- [center](center.md): Deprecated. The center point of the region.
- [radius](radius.md): Deprecated. The radius (measured in meters) that defines the region’s outer boundary.

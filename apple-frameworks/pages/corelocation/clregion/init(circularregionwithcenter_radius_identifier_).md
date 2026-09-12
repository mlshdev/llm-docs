> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clregion/init(circularregionwithcenter:radius:identifier:)](https://developer.apple.com/documentation/corelocation/clregion/init(circularregionwithcenter:radius:identifier:))

# init(circularRegionWithCenter:radius:identifier:) (Swift)

**Framework:** Core Location  
**Kind:** Initializer  
**Availability:** macOS 10.7+ (deprecated in 10.10) · watchOS 2.0+ (deprecated in 2.0)

Initializes and returns a region object defining a circular area.

> Use [init(center:radius:identifier:)](../clcircularregion/init%28center_radius_identifier_%29.md) in [CLCircularRegion](../clcircularregion.md) instead.

## Declaration

```swift
init(circularRegionWithCenter center: CLLocationCoordinate2D, radius: CLLocationDistance, identifier: String)
```

## Parameters

- `center`: The center point of the region.
- `radius`: The distance (measured in meters) from the center point that marks the boundary of the region.
- `identifier`: A unique identifier to associate with the region object. You use this identifier to differentiate regions within your application. This value must not be `nil`.

<a id="return-value"></a>

## Return Value

An initialized region object.

<a id="Discussion"></a>

## Discussion

In iOS, use a [CLCircularRegion](../clcircularregion.md) object to manage geographic regions.

## See Also

### Deprecated

- [contains(\_:)](contains%28__%29.md): Deprecated. Returns a Boolean value indicating whether the region contains the specified coordinate.
- [center](center.md): Deprecated. The center point of the region.
- [radius](radius.md): Deprecated. The radius (measured in meters) that defines the region’s outer boundary.

# initCircularRegionWithCenter:radius:identifier: (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 7.0) · iPadOS 4.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.10) · watchOS 2.0+ (deprecated in 2.0)

Initializes and returns a region object defining a circular area.

> Use [initWithCenter:radius:identifier:](../clcircularregion/init%28center_radius_identifier_%29.md) in [CLCircularRegion](../clcircularregion.md) instead.

## Declaration

```objectivec
- (instancetype) initCircularRegionWithCenter:(CLLocationCoordinate2D) center radius:(CLLocationDistance) radius identifier:(NSString *) identifier;
```

## Parameters

- `center`: The center point of the region.
- `radius`: The distance (measured in meters) from the center point that marks the boundary of the region.
- `identifier`: A unique identifier to associate with the region object. You use this identifier to differentiate regions within your application. This value must not be `nil`.

<a id="return-value"></a>

## Return Value

An initialized region object.

<a id="Discussion"></a>

## Discussion

In iOS, use a [CLCircularRegion](../clcircularregion.md) object to manage geographic regions.

## See Also

### Deprecated

- [containsCoordinate:](contains%28__%29.md): Deprecated. Returns a Boolean value indicating whether the region contains the specified coordinate.
- [center](center.md): Deprecated. The center point of the region.
- [radius](radius.md): Deprecated. The radius (measured in meters) that defines the region’s outer boundary.

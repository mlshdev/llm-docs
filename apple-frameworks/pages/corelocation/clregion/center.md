> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/corelocation/clregion/center](https://developer.apple.com/documentation/corelocation/clregion/center)

# center (Swift)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** macOS 10.7+ (deprecated in 10.10) · watchOS 2.0+ (deprecated in 2.0)

The center point of the region.

> Use [center](../clcircularregion/center.md) in [CLCircularRegion](../clcircularregion.md) instead.

## Declaration

```swift
var center: CLLocationCoordinate2D { get }
```

<a id="Discussion"></a>

## Discussion

In iOS, use a [CLCircularRegion](../clcircularregion.md) object to manage geographic regions.

## See Also

### Deprecated

- [init(circularRegionWithCenter:radius:identifier:)](init%28circularregionwithcenter_radius_identifier_%29.md): Deprecated. Initializes and returns a region object defining a circular area.
- [contains(\_:)](contains%28__%29.md): Deprecated. Returns a Boolean value indicating whether the region contains the specified coordinate.
- [radius](radius.md): Deprecated. The radius (measured in meters) that defines the region’s outer boundary.

# center (Objective-C)

**Framework:** Core Location  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 7.0) · iPadOS 4.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.7+ (deprecated in 10.10) · watchOS 2.0+ (deprecated in 2.0)

The center point of the region.

> Use [center](../clcircularregion/center.md) in [CLCircularRegion](../clcircularregion.md) instead.

## Declaration

```objectivec
@property (atomic, readonly) CLLocationCoordinate2D center;
```

<a id="Discussion"></a>

## Discussion

In iOS, use a [CLCircularRegion](../clcircularregion.md) object to manage geographic regions.

## See Also

### Deprecated

- [initCircularRegionWithCenter:radius:identifier:](init%28circularregionwithcenter_radius_identifier_%29.md): Deprecated. Initializes and returns a region object defining a circular area.
- [containsCoordinate:](contains%28__%29.md): Deprecated. Returns a Boolean value indicating whether the region contains the specified coordinate.
- [radius](radius.md): Deprecated. The radius (measured in meters) that defines the region’s outer boundary.

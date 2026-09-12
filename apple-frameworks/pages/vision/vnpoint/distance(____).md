> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vnpoint/distance(_:_:)](https://developer.apple.com/documentation/vision/vnpoint/distance(_:_:))

# distance(\_:\_:) (Swift)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 14.0) · iPadOS 14.0+ (deprecated in 14.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · macOS 11.0+ (deprecated in 11.0) · tvOS 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Calculates the distance between two points.

> Use [distance(\_:)](distance%28__%29.md) instead.

## Declaration

```swift
class func distance(_ point1: VNPoint, _ point2: VNPoint) -> Double
```

## Parameters

- `point1`: The first point.
- `point2`: The second point.

<a id="return-value"></a>

## Return Value

The calculated distance.

## See Also

### Calculating Distance

- [distance(\_:)](distance%28__%29.md): Returns the distance to another point.

# distanceBetweenPoint:point: (Objective-C)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 14.0) · iPadOS 14.0+ (deprecated in 14.0) · Mac Catalyst 14.0+ (deprecated in 14.0) · macOS 11.0+ (deprecated in 11.0) · tvOS 14.0+ (deprecated in 14.0) · visionOS 1.0+ (deprecated in 1.0)

Calculates the distance between two points.

> Use [distanceToPoint:](distance%28__%29.md) instead.

## Declaration

```objectivec
+ (double) distanceBetweenPoint:(VNPoint *) point1 point:(VNPoint *) point2;
```

## Parameters

- `point1`: The first point.
- `point2`: The second point.

<a id="return-value"></a>

## Return Value

The calculated distance.

## See Also

### Calculating Distance

- [distanceToPoint:](distance%28__%29.md): Returns the distance to another point.

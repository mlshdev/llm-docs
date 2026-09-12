> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkcircle/init(maprect:)](https://developer.apple.com/documentation/mapkit/mkcircle/init(maprect:))

# init(mapRect:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Creates and returns a circle object that derives the circular area from the specified rectangle.

## Declaration

```swift
convenience init(mapRect: MKMapRect)
```

## Parameters

- `mapRect`: The map rectangle that determines the circular area. The initializer uses the center point of the rectangle as the center point of the circle. If the rectangle isn’t a square, the method uses the longest side of the rectangle to define the radius of the resulting circle.

<a id="return-value"></a>

## Return Value

A circle overlay object.

## See Also

### Creating a circle overlay

- [init(center:radius:)](init%28center_radius_%29.md): Creates and returns a circle object using the specified coordinate and radius.

# circleWithMapRect: (Objective-C)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

Creates and returns a circle object that derives the circular area from the specified rectangle.

## Declaration

```objectivec
+ (instancetype) circleWithMapRect:(MKMapRect) mapRect;
```

## Parameters

- `mapRect`: The map rectangle that determines the circular area. The initializer uses the center point of the rectangle as the center point of the circle. If the rectangle isn’t a square, the method uses the longest side of the rectangle to define the radius of the resulting circle.

<a id="return-value"></a>

## Return Value

A circle overlay object.

## See Also

### Creating a circle overlay

- [circleWithCenterCoordinate:radius:](init%28center_radius_%29.md): Creates and returns a circle object using the specified coordinate and radius.

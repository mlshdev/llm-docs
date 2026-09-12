> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlayrenderer/point(for:)](https://developer.apple.com/documentation/mapkit/mkoverlayrenderer/point(for:))

# point(for:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Returns the point in the overlay renderer’s drawing area corresponding to the specified point on the map.

## Declaration

```swift
func point(for mapPoint: MKMapPoint) -> CGPoint
```

## Parameters

- `mapPoint`: A point on the two-dimensional map projection. If you have a coordinate value (latitude and longitude), you can use the [init(\_:)](../mkmappoint/init%28__%29.md) function to convert that coordinate to a map point.

<a id="return-value"></a>

## Return Value

The point in the overlay’s drawing area that corresponds to the map point.

<a id="Discussion"></a>

## Discussion

You may call this method safely from your view’s [draw(\_:zoomScale:in:)](draw%28__zoomscale_in_%29.md) method.

## See Also

### Converting points on the map

- [mapPoint(for:)](mappoint%28for_%29.md): Returns the point on the map that corresponds to the specified point in the overlay renderer’s drawing area.
- [rect(for:)](rect%28for_%29.md): Returns the rectangle in the overlay renderer’s drawing area corresponding to the specified rectangle on the map.
- [mapRect(for:)](maprect%28for_%29.md): Returns the rectangle on the map that corresponds to the specified rectangle in the overlay renderer’s drawing area.

# pointForMapPoint: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Returns the point in the overlay renderer’s drawing area corresponding to the specified point on the map.

## Declaration

```objectivec
- (CGPoint) pointForMapPoint:(MKMapPoint) mapPoint;
```

## Parameters

- `mapPoint`: A point on the two-dimensional map projection. If you have a coordinate value (latitude and longitude), you can use the [MKMapPointForCoordinate](../mkmappoint/init%28__%29.md) function to convert that coordinate to a map point.

<a id="return-value"></a>

## Return Value

The point in the overlay’s drawing area that corresponds to the map point.

<a id="Discussion"></a>

## Discussion

You may call this method safely from your view’s [drawMapRect:zoomScale:inContext:](draw%28__zoomscale_in_%29.md) method.

## See Also

### Converting points on the map

- [mapPointForPoint:](mappoint%28for_%29.md): Returns the point on the map that corresponds to the specified point in the overlay renderer’s drawing area.
- [rectForMapRect:](rect%28for_%29.md): Returns the rectangle in the overlay renderer’s drawing area corresponding to the specified rectangle on the map.
- [mapRectForRect:](maprect%28for_%29.md): Returns the rectangle on the map that corresponds to the specified rectangle in the overlay renderer’s drawing area.

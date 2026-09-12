> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlayview/pointformappoint:](https://developer.apple.com/documentation/mapkit/mkoverlayview/pointformappoint:)

# pointForMapPoint:

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 7.0) · iPadOS 4.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Returns the point in the overlay view that corresponds to specified point on the map.

> Use an [MKOverlayRenderer](../mkoverlayrenderer.md) object instead.

## Declaration

```objectivec
- (CGPoint) pointForMapPoint:(MKMapPoint) mapPoint;
```

## Parameters

- `mapPoint`: A point on the two-dimensional map projection. If you have a coordinate value (latitude and longitude), you can use the [MKMapPointForCoordinate](../mkmappoint/init%28__%29.md) function to convert that coordinate to a map point.

<a id="return-value"></a>

## Return Value

The point in the receiver’s coordinate system that corresponds to the map point.

<a id="Discussion"></a>

## Discussion

Because the bounds and frame rectangles of an overlay view do not change after the view has been created, you may call this method from multiple threads simultaneously. Therefore, you may call this method safely from your view’s [drawMapRect:zoomScale:inContext:](drawmaprect_zoomscale_incontext_.md) method.

## See Also

### Converting points on the map

- [mapPointForPoint:](mappointforpoint_.md): Deprecated. Returns the map point that corresponds to the specified point in the overlay view.
- [rectForMapRect:](rectformaprect_.md): Deprecated. Returns the rectangle in the overlay view that corresponds to the specified rectangle on the map.
- [mapRectForRect:](maprectforrect_.md): Deprecated. Returns the map rectangle that corresponds to the rectangle in the overlay view’s coordinate system.

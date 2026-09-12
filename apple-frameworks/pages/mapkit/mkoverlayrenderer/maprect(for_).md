> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlayrenderer/maprect(for:)](https://developer.apple.com/documentation/mapkit/mkoverlayrenderer/maprect(for:))

# mapRect(for:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Returns the rectangle on the map that corresponds to the specified rectangle in the overlay renderer’s drawing area.

## Declaration

```swift
func mapRect(for rect: CGRect) -> MKMapRect
```

## Parameters

- `rect`: The rectangle in the overlay’s drawing area that you want to convert.

<a id="return-value"></a>

## Return Value

The rectangle on the two-dimensional map projection corresponding to the specified rectangle.

<a id="Discussion"></a>

## Discussion

You may call this method safely from your view’s [draw(\_:zoomScale:in:)](draw%28__zoomscale_in_%29.md) method.

## See Also

### Converting points on the map

- [point(for:)](point%28for_%29.md): Returns the point in the overlay renderer’s drawing area corresponding to the specified point on the map.
- [mapPoint(for:)](mappoint%28for_%29.md): Returns the point on the map that corresponds to the specified point in the overlay renderer’s drawing area.
- [rect(for:)](rect%28for_%29.md): Returns the rectangle in the overlay renderer’s drawing area corresponding to the specified rectangle on the map.

# mapRectForRect: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Returns the rectangle on the map that corresponds to the specified rectangle in the overlay renderer’s drawing area.

## Declaration

```objectivec
- (MKMapRect) mapRectForRect:(CGRect) rect;
```

## Parameters

- `rect`: The rectangle in the overlay’s drawing area that you want to convert.

<a id="return-value"></a>

## Return Value

The rectangle on the two-dimensional map projection corresponding to the specified rectangle.

<a id="Discussion"></a>

## Discussion

You may call this method safely from your view’s [drawMapRect:zoomScale:inContext:](draw%28__zoomscale_in_%29.md) method.

## See Also

### Converting points on the map

- [pointForMapPoint:](point%28for_%29.md): Returns the point in the overlay renderer’s drawing area corresponding to the specified point on the map.
- [mapPointForPoint:](mappoint%28for_%29.md): Returns the point on the map that corresponds to the specified point in the overlay renderer’s drawing area.
- [rectForMapRect:](rect%28for_%29.md): Returns the rectangle in the overlay renderer’s drawing area corresponding to the specified rectangle on the map.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlayrenderer/rect(for:)](https://developer.apple.com/documentation/mapkit/mkoverlayrenderer/rect(for:))

# rect(for:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Returns the rectangle in the overlay renderer’s drawing area corresponding to the specified rectangle on the map.

## Declaration

```swift
func rect(for mapRect: MKMapRect) -> CGRect
```

## Parameters

- `mapRect`: A rectangle on the two-dimensional map projection.

<a id="return-value"></a>

## Return Value

The rectangle in the overlay’s drawing area that corresponds to the map rectangle.

<a id="Discussion"></a>

## Discussion

You may call this method safely from your view’s [draw(\_:zoomScale:in:)](draw%28__zoomscale_in_%29.md) method.

## See Also

### Converting points on the map

- [point(for:)](point%28for_%29.md): Returns the point in the overlay renderer’s drawing area corresponding to the specified point on the map.
- [mapPoint(for:)](mappoint%28for_%29.md): Returns the point on the map that corresponds to the specified point in the overlay renderer’s drawing area.
- [mapRect(for:)](maprect%28for_%29.md): Returns the rectangle on the map that corresponds to the specified rectangle in the overlay renderer’s drawing area.

# rectForMapRect: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Returns the rectangle in the overlay renderer’s drawing area corresponding to the specified rectangle on the map.

## Declaration

```objectivec
- (CGRect) rectForMapRect:(MKMapRect) mapRect;
```

## Parameters

- `mapRect`: A rectangle on the two-dimensional map projection.

<a id="return-value"></a>

## Return Value

The rectangle in the overlay’s drawing area that corresponds to the map rectangle.

<a id="Discussion"></a>

## Discussion

You may call this method safely from your view’s [drawMapRect:zoomScale:inContext:](draw%28__zoomscale_in_%29.md) method.

## See Also

### Converting points on the map

- [pointForMapPoint:](point%28for_%29.md): Returns the point in the overlay renderer’s drawing area corresponding to the specified point on the map.
- [mapPointForPoint:](mappoint%28for_%29.md): Returns the point on the map that corresponds to the specified point in the overlay renderer’s drawing area.
- [mapRectForRect:](maprect%28for_%29.md): Returns the rectangle on the map that corresponds to the specified rectangle in the overlay renderer’s drawing area.

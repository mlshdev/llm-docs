> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/convert(_:tocoordinatefrom:)](https://developer.apple.com/documentation/mapkit/mkmapview/convert(_:tocoordinatefrom:))

# convert(\_:toCoordinateFrom:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Converts a point in the specified view’s coordinate system to a map coordinate.

## Declaration

```swift
func convert(_ point: CGPoint, toCoordinateFrom view: UIView?) -> CLLocationCoordinate2D
```

```swift
func convert(_ point: CGPoint, toCoordinateFrom view: NSView?) -> CLLocationCoordinate2D
```

## Parameters

- `point`: The point you want to convert.
- `view`: The view that serves as the reference coordinate system for the `point` parameter.

<a id="return-value"></a>

## Return Value

The map coordinate at the specified point.

## See Also

### Converting map coordinates

- [convert(\_:toPointTo:)](convert%28__topointto_%29.md): Converts a map coordinate to a point in the specified view.
- [convert(\_:toRectTo:)](convert%28__torectto_%29.md): Converts a map region to a rectangle in the specified view.
- [convert(\_:toRegionFrom:)](convert%28__toregionfrom_%29.md): Converts a rectangle in the specified view’s coordinate system to a map region.

# convertPoint:toCoordinateFromView: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Converts a point in the specified view’s coordinate system to a map coordinate.

## Declaration

```objectivec
- (CLLocationCoordinate2D) convertPoint:(CGPoint) point toCoordinateFromView:(UIView *) view;
```

```objectivec
- (CLLocationCoordinate2D) convertPoint:(CGPoint) point toCoordinateFromView:(NSView *) view;
```

## Parameters

- `point`: The point you want to convert.
- `view`: The view that serves as the reference coordinate system for the `point` parameter.

<a id="return-value"></a>

## Return Value

The map coordinate at the specified point.

## See Also

### Converting map coordinates

- [convertCoordinate:toPointToView:](convert%28__topointto_%29.md): Converts a map coordinate to a point in the specified view.
- [convertRegion:toRectToView:](convert%28__torectto_%29.md): Converts a map region to a rectangle in the specified view.
- [convertRect:toRegionFromView:](convert%28__toregionfrom_%29.md): Converts a rectangle in the specified view’s coordinate system to a map region.

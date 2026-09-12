> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/convert(_:topointto:)](https://developer.apple.com/documentation/mapkit/mkmapview/convert(_:topointto:))

# convert(\_:toPointTo:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Converts a map coordinate to a point in the specified view.

## Declaration

```swift
func convert(_ coordinate: CLLocationCoordinate2D, toPointTo view: UIView?) -> CGPoint
```

```swift
func convert(_ coordinate: CLLocationCoordinate2D, toPointTo view: NSView?) -> CGPoint
```

## Parameters

- `coordinate`: The map coordinate that you want to find the corresponding point for.
- `view`: The view where you want to locate the specified map coordinate. If this parameter is `nil`, the method specifies the returned point in the window’s coordinate system. If `view` isn’t `nil`, the point belongs to the same window as the map view.

<a id="return-value"></a>

## Return Value

The point (in the appropriate view or window coordinate system) corresponding to the specified latitude and longitude value.

## See Also

### Converting map coordinates

- [convert(\_:toCoordinateFrom:)](convert%28__tocoordinatefrom_%29.md): Converts a point in the specified view’s coordinate system to a map coordinate.
- [convert(\_:toRectTo:)](convert%28__torectto_%29.md): Converts a map region to a rectangle in the specified view.
- [convert(\_:toRegionFrom:)](convert%28__toregionfrom_%29.md): Converts a rectangle in the specified view’s coordinate system to a map region.

# convertCoordinate:toPointToView: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Converts a map coordinate to a point in the specified view.

## Declaration

```objectivec
- (CGPoint) convertCoordinate:(CLLocationCoordinate2D) coordinate toPointToView:(UIView *) view;
```

```objectivec
- (CGPoint) convertCoordinate:(CLLocationCoordinate2D) coordinate toPointToView:(NSView *) view;
```

## Parameters

- `coordinate`: The map coordinate that you want to find the corresponding point for.
- `view`: The view where you want to locate the specified map coordinate. If this parameter is `nil`, the method specifies the returned point in the window’s coordinate system. If `view` isn’t `nil`, the point belongs to the same window as the map view.

<a id="return-value"></a>

## Return Value

The point (in the appropriate view or window coordinate system) corresponding to the specified latitude and longitude value.

## See Also

### Converting map coordinates

- [convertPoint:toCoordinateFromView:](convert%28__tocoordinatefrom_%29.md): Converts a point in the specified view’s coordinate system to a map coordinate.
- [convertRegion:toRectToView:](convert%28__torectto_%29.md): Converts a map region to a rectangle in the specified view.
- [convertRect:toRegionFromView:](convert%28__toregionfrom_%29.md): Converts a rectangle in the specified view’s coordinate system to a map region.

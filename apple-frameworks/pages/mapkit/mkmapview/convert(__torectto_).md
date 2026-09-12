> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/convert(_:torectto:)](https://developer.apple.com/documentation/mapkit/mkmapview/convert(_:torectto:))

# convert(\_:toRectTo:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Converts a map region to a rectangle in the specified view.

## Declaration

```swift
func convert(_ region: MKCoordinateRegion, toRectTo view: UIView?) -> CGRect
```

```swift
func convert(_ region: MKCoordinateRegion, toRectTo view: NSView?) -> CGRect
```

## Parameters

- `region`: The map region that you want to find the corresponding view rectangle for.
- `view`: The view where you want to locate the specified map region. If this parameter is `nil`, the method specifies the returned rectangle in the window’s coordinate system. If `view` isn’t `nil`, the rectangle belongs to the same window as the map view.

<a id="return-value"></a>

## Return Value

The rectangle corresponding to the specified map region.

## See Also

### Converting map coordinates

- [convert(\_:toPointTo:)](convert%28__topointto_%29.md): Converts a map coordinate to a point in the specified view.
- [convert(\_:toCoordinateFrom:)](convert%28__tocoordinatefrom_%29.md): Converts a point in the specified view’s coordinate system to a map coordinate.
- [convert(\_:toRegionFrom:)](convert%28__toregionfrom_%29.md): Converts a rectangle in the specified view’s coordinate system to a map region.

# convertRegion:toRectToView: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Converts a map region to a rectangle in the specified view.

## Declaration

```objectivec
- (CGRect) convertRegion:(MKCoordinateRegion) region toRectToView:(UIView *) view;
```

```objectivec
- (CGRect) convertRegion:(MKCoordinateRegion) region toRectToView:(NSView *) view;
```

## Parameters

- `region`: The map region that you want to find the corresponding view rectangle for.
- `view`: The view where you want to locate the specified map region. If this parameter is `nil`, the method specifies the returned rectangle in the window’s coordinate system. If `view` isn’t `nil`, the rectangle belongs to the same window as the map view.

<a id="return-value"></a>

## Return Value

The rectangle corresponding to the specified map region.

## See Also

### Converting map coordinates

- [convertCoordinate:toPointToView:](convert%28__topointto_%29.md): Converts a map coordinate to a point in the specified view.
- [convertPoint:toCoordinateFromView:](convert%28__tocoordinatefrom_%29.md): Converts a point in the specified view’s coordinate system to a map coordinate.
- [convertRect:toRegionFromView:](convert%28__toregionfrom_%29.md): Converts a rectangle in the specified view’s coordinate system to a map region.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/convert(_:toregionfrom:)](https://developer.apple.com/documentation/mapkit/mkmapview/convert(_:toregionfrom:))

# convert(\_:toRegionFrom:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Converts a rectangle in the specified view’s coordinate system to a map region.

## Declaration

```swift
func convert(_ rect: CGRect, toRegionFrom view: UIView?) -> MKCoordinateRegion
```

```swift
func convert(_ rect: CGRect, toRegionFrom view: NSView?) -> MKCoordinateRegion
```

## Parameters

- `rect`: The rectangle you want to convert.
- `view`: The view that serves as the reference coordinate system for the `rect` parameter.

<a id="return-value"></a>

## Return Value

The map region corresponding to the specified view rectangle.

## See Also

### Converting map coordinates

- [convert(\_:toPointTo:)](convert%28__topointto_%29.md): Converts a map coordinate to a point in the specified view.
- [convert(\_:toCoordinateFrom:)](convert%28__tocoordinatefrom_%29.md): Converts a point in the specified view’s coordinate system to a map coordinate.
- [convert(\_:toRectTo:)](convert%28__torectto_%29.md): Converts a map region to a rectangle in the specified view.

# convertRect:toRegionFromView: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Converts a rectangle in the specified view’s coordinate system to a map region.

## Declaration

```objectivec
- (MKCoordinateRegion) convertRect:(CGRect) rect toRegionFromView:(UIView *) view;
```

```objectivec
- (MKCoordinateRegion) convertRect:(CGRect) rect toRegionFromView:(NSView *) view;
```

## Parameters

- `rect`: The rectangle you want to convert.
- `view`: The view that serves as the reference coordinate system for the `rect` parameter.

<a id="return-value"></a>

## Return Value

The map region corresponding to the specified view rectangle.

## See Also

### Converting map coordinates

- [convertCoordinate:toPointToView:](convert%28__topointto_%29.md): Converts a map coordinate to a point in the specified view.
- [convertPoint:toCoordinateFromView:](convert%28__tocoordinatefrom_%29.md): Converts a point in the specified view’s coordinate system to a map coordinate.
- [convertRegion:toRectToView:](convert%28__torectto_%29.md): Converts a map region to a rectangle in the specified view.

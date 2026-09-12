> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/maprectthatfits(_:edgepadding:)](https://developer.apple.com/documentation/mapkit/mkmapview/maprectthatfits(_:edgepadding:))

# mapRectThatFits(\_:edgePadding:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Returns a centered, inset map rectangle with the same aspect ratio as the map view’s frame.

## Declaration

```swift
func mapRectThatFits(_ mapRect: MKMapRect, edgePadding insets: UIEdgeInsets) -> MKMapRect
```

```swift
func mapRectThatFits(_ mapRect: MKMapRect, edgePadding insets: NSEdgeInsets) -> MKMapRect
```

## Parameters

- `mapRect`: The initial map rectangle with the width and height you want to adjust.
- `insets`: The distance (in screen points) by which to inset the returned rectangle from the actual boundaries of the map view’s frame.

<a id="return-value"></a>

## Return Value

MapKit centers the map rectangle on the same point of the map, and adjusts the width and height to fit in the map view’s frame, minus its inset values.

## See Also

### Adjusting map regions and rectangles

- [regionThatFits(\_:)](regionthatfits%28__%29.md): Adjusts the aspect ratio of the specified region to ensure that it fits in the map view’s frame.
- [mapRectThatFits(\_:)](maprectthatfits%28__%29.md): Returns a centered map rectangle with the same aspect ratio as the map view’s frame.

# mapRectThatFits:edgePadding: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Returns a centered, inset map rectangle with the same aspect ratio as the map view’s frame.

## Declaration

```objectivec
- (MKMapRect) mapRectThatFits:(MKMapRect) mapRect edgePadding:(UIEdgeInsets) insets;
```

```objectivec
- (MKMapRect) mapRectThatFits:(MKMapRect) mapRect edgePadding:(NSEdgeInsets) insets;
```

## Parameters

- `mapRect`: The initial map rectangle with the width and height you want to adjust.
- `insets`: The distance (in screen points) by which to inset the returned rectangle from the actual boundaries of the map view’s frame.

<a id="return-value"></a>

## Return Value

MapKit centers the map rectangle on the same point of the map, and adjusts the width and height to fit in the map view’s frame, minus its inset values.

## See Also

### Adjusting map regions and rectangles

- [regionThatFits:](regionthatfits%28__%29.md): Adjusts the aspect ratio of the specified region to ensure that it fits in the map view’s frame.
- [mapRectThatFits:](maprectthatfits%28__%29.md): Returns a centered map rectangle with the same aspect ratio as the map view’s frame.

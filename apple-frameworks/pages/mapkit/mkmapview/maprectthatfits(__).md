> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/maprectthatfits(_:)](https://developer.apple.com/documentation/mapkit/mkmapview/maprectthatfits(_:))

# mapRectThatFits(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Returns a centered map rectangle with the same aspect ratio as the map view’s frame.

## Declaration

```swift
func mapRectThatFits(_ mapRect: MKMapRect) -> MKMapRect
```

## Parameters

- `mapRect`: The initial map rectangle whose width and height you want to adjust to the view frame.

<a id="return-value"></a>

## Return Value

MapKit centers the map rectangle on the same point of the map, and adjusts the width and height to fit in the map view’s frame.

<a id="Discussion"></a>

## Discussion

Returns a map rectangle with the same aspect ratio as the map view’s frame, centered at the same location as the specified map rectangle.

You can use this method to normalize map rectangle values before displaying the corresponding area. This method returns a new map rectangle that both contains the specified rectangle and fits neatly inside the map view’s frame.

## See Also

### Adjusting map regions and rectangles

- [regionThatFits(\_:)](regionthatfits%28__%29.md): Adjusts the aspect ratio of the specified region to ensure that it fits in the map view’s frame.
- [mapRectThatFits(\_:edgePadding:)](maprectthatfits%28__edgepadding_%29.md): Returns a centered, inset map rectangle with the same aspect ratio as the map view’s frame.

# mapRectThatFits: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Returns a centered map rectangle with the same aspect ratio as the map view’s frame.

## Declaration

```objectivec
- (MKMapRect) mapRectThatFits:(MKMapRect) mapRect;
```

## Parameters

- `mapRect`: The initial map rectangle whose width and height you want to adjust to the view frame.

<a id="return-value"></a>

## Return Value

MapKit centers the map rectangle on the same point of the map, and adjusts the width and height to fit in the map view’s frame.

<a id="Discussion"></a>

## Discussion

Returns a map rectangle with the same aspect ratio as the map view’s frame, centered at the same location as the specified map rectangle.

You can use this method to normalize map rectangle values before displaying the corresponding area. This method returns a new map rectangle that both contains the specified rectangle and fits neatly inside the map view’s frame.

## See Also

### Adjusting map regions and rectangles

- [regionThatFits:](regionthatfits%28__%29.md): Adjusts the aspect ratio of the specified region to ensure that it fits in the map view’s frame.
- [mapRectThatFits:edgePadding:](maprectthatfits%28__edgepadding_%29.md): Returns a centered, inset map rectangle with the same aspect ratio as the map view’s frame.

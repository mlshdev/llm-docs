> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/regionthatfits(_:)](https://developer.apple.com/documentation/mapkit/mkmapview/regionthatfits(_:))

# regionThatFits(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Adjusts the aspect ratio of the specified region to ensure that it fits in the map view’s frame.

## Declaration

```swift
func regionThatFits(_ region: MKCoordinateRegion) -> MKCoordinateRegion
```

## Parameters

- `region`: The initial region whose span you want to adjust.

<a id="return-value"></a>

## Return Value

A region that is still centered on the same point of the map but whose span values are adjusted to fit in the map view’s frame.

<a id="Discussion"></a>

## Discussion

You can use this method to normalize the region values before displaying them in the map. This method returns a new region that both contains the specified region and fits neatly inside the map view’s frame.

## See Also

### Adjusting map regions and rectangles

- [mapRectThatFits(\_:)](maprectthatfits%28__%29.md): Returns a centered map rectangle with the same aspect ratio as the map view’s frame.
- [mapRectThatFits(\_:edgePadding:)](maprectthatfits%28__edgepadding_%29.md): Returns a centered, inset map rectangle with the same aspect ratio as the map view’s frame.

# regionThatFits: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Adjusts the aspect ratio of the specified region to ensure that it fits in the map view’s frame.

## Declaration

```objectivec
- (MKCoordinateRegion) regionThatFits:(MKCoordinateRegion) region;
```

## Parameters

- `region`: The initial region whose span you want to adjust.

<a id="return-value"></a>

## Return Value

A region that is still centered on the same point of the map but whose span values are adjusted to fit in the map view’s frame.

<a id="Discussion"></a>

## Discussion

You can use this method to normalize the region values before displaying them in the map. This method returns a new region that both contains the specified region and fits neatly inside the map view’s frame.

## See Also

### Adjusting map regions and rectangles

- [mapRectThatFits:](maprectthatfits%28__%29.md): Returns a centered map rectangle with the same aspect ratio as the map view’s frame.
- [mapRectThatFits:edgePadding:](maprectthatfits%28__edgepadding_%29.md): Returns a centered, inset map rectangle with the same aspect ratio as the map view’s frame.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/addoverlays(_:level:)](https://developer.apple.com/documentation/mapkit/mkmapview/addoverlays(_:level:))

# addOverlays(\_:level:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Adds an array of overlay objects to the map at the specified level.

## Declaration

```swift
func addOverlays(_ overlays: [any MKOverlay], level: MKOverlayLevel)
```

## Parameters

- `overlays`: The array of overlay objects to add. Each object in the array must conform to the [MKOverlay](../mkoverlay.md) protocol.
- `level`: The map level at which to place the overlays. For a list of possible values for this parameter, see [MKOverlayLevel](../mkoverlaylevel.md).

<a id="Discussion"></a>

## Discussion

Positioning an overlay at a specific level places that overlay’s visual representation in front of or behind other map content such as map labels and point-of-interest icons.

This method adds the specified overlays to the end of the list of overlay objects at the given level. Adding the overlays also causes the map view to begin monitoring the area they represent. As soon as the bounding rectangle of an overlay intersects the visible portion of the map, the map view calls your delegate’s [mapView(\_:rendererFor:)](../mkmapviewdelegate/mapview%28__rendererfor_%29.md) method to get the renderer object to use when drawing that overlay.

To remove multiple overlays from a map, use the [removeOverlays(\_:)](removeoverlays%28__%29.md) method.

## See Also

### Adding and inserting overlays

- [addOverlay(\_:level:)](addoverlay%28__level_%29.md): Adds the overlay object to the map at the specified level.
- [addOverlay(\_:)](addoverlay%28__%29.md): Adds a single overlay object to the map.
- [addOverlays(\_:)](addoverlays%28__%29.md): Adds an array of overlay objects to the map.
- [insertOverlay(\_:at:level:)](insertoverlay%28__at_level_%29.md): Inserts an overlay object into the level at the specified index.
- [insertOverlay(\_:at:)](insertoverlay%28__at_%29.md): Inserts an overlay object into the list associated with the map.
- [insertOverlay(\_:above:)](insertoverlay%28__above_%29.md): Inserts one overlay object above another.
- [insertOverlay(\_:below:)](insertoverlay%28__below_%29.md): Inserts one overlay object below another.
- [exchangeOverlay(\_:with:)](exchangeoverlay%28__with_%29.md): Exchanges the positions of two overlay objects.
- [exchangeOverlay(at:withOverlayAt:)](exchangeoverlay%28at_withoverlayat_%29.md): Exchanges the position of two overlay objects at the specified index.

# addOverlays:level: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Adds an array of overlay objects to the map at the specified level.

## Declaration

```objectivec
- (void) addOverlays:(NSArray<id<MKOverlay>> *) overlays level:(MKOverlayLevel) level;
```

## Parameters

- `overlays`: The array of overlay objects to add. Each object in the array must conform to the [MKOverlay](../mkoverlay.md) protocol.
- `level`: The map level at which to place the overlays. For a list of possible values for this parameter, see [MKOverlayLevel](../mkoverlaylevel.md).

<a id="Discussion"></a>

## Discussion

Positioning an overlay at a specific level places that overlay’s visual representation in front of or behind other map content such as map labels and point-of-interest icons.

This method adds the specified overlays to the end of the list of overlay objects at the given level. Adding the overlays also causes the map view to begin monitoring the area they represent. As soon as the bounding rectangle of an overlay intersects the visible portion of the map, the map view calls your delegate’s [mapView:rendererForOverlay:](../mkmapviewdelegate/mapview%28__rendererfor_%29.md) method to get the renderer object to use when drawing that overlay.

To remove multiple overlays from a map, use the [removeOverlays:](removeoverlays%28__%29.md) method.

## See Also

### Adding and inserting overlays

- [addOverlay:level:](addoverlay%28__level_%29.md): Adds the overlay object to the map at the specified level.
- [addOverlay:](addoverlay%28__%29.md): Adds a single overlay object to the map.
- [addOverlays:](addoverlays%28__%29.md): Adds an array of overlay objects to the map.
- [insertOverlay:atIndex:level:](insertoverlay%28__at_level_%29.md): Inserts an overlay object into the level at the specified index.
- [insertOverlay:atIndex:](insertoverlay%28__at_%29.md): Inserts an overlay object into the list associated with the map.
- [insertOverlay:aboveOverlay:](insertoverlay%28__above_%29.md): Inserts one overlay object above another.
- [insertOverlay:belowOverlay:](insertoverlay%28__below_%29.md): Inserts one overlay object below another.
- [exchangeOverlay:withOverlay:](exchangeoverlay%28__with_%29.md): Exchanges the positions of two overlay objects.
- [exchangeOverlayAtIndex:withOverlayAtIndex:](exchangeoverlay%28at_withoverlayat_%29.md): Exchanges the position of two overlay objects at the specified index.

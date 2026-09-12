> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/addoverlay(_:)](https://developer.apple.com/documentation/mapkit/mkmapview/addoverlay(_:))

# addOverlay(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Adds a single overlay object to the map.

## Declaration

```swift
func addOverlay(_ overlay: any MKOverlay)
```

## Parameters

- `overlay`: The overlay object to add. This object needs to conform to the [MKOverlay](../mkoverlay.md) protocol.

<a id="Discussion"></a>

## Discussion

The map view adds the specified object to the group of overlay objects in the [MKOverlayLevel.aboveLabels](../mkoverlaylevel/abovelabels.md) level. Adding an overlay causes the map view to begin monitoring the area that the overlay represents. As soon as the bounding rectangle of an overlay intersects the visible portion of the map, the map view adds a corresponding overlay view to the map. Implement the [mapView(\_:rendererFor:)](../mkmapviewdelegate/mapview%28__rendererfor_%29.md) method of the map view’s delegate object to provide the overlay view.

To remove an overlay from a map, use the [removeOverlay(\_:)](removeoverlay%28__%29.md) method.

## See Also

### Related Documentation

- [removeOverlay(\_:)](removeoverlay%28__%29.md): Removes a single overlay object from the map.
- [removeOverlays(\_:)](removeoverlays%28__%29.md): Removes one or more overlay objects from the map.

### Adding and inserting overlays

- [addOverlay(\_:level:)](addoverlay%28__level_%29.md): Adds the overlay object to the map at the specified level.
- [addOverlays(\_:level:)](addoverlays%28__level_%29.md): Adds an array of overlay objects to the map at the specified level.
- [addOverlays(\_:)](addoverlays%28__%29.md): Adds an array of overlay objects to the map.
- [insertOverlay(\_:at:level:)](insertoverlay%28__at_level_%29.md): Inserts an overlay object into the level at the specified index.
- [insertOverlay(\_:at:)](insertoverlay%28__at_%29.md): Inserts an overlay object into the list associated with the map.
- [insertOverlay(\_:above:)](insertoverlay%28__above_%29.md): Inserts one overlay object above another.
- [insertOverlay(\_:below:)](insertoverlay%28__below_%29.md): Inserts one overlay object below another.
- [exchangeOverlay(\_:with:)](exchangeoverlay%28__with_%29.md): Exchanges the positions of two overlay objects.
- [exchangeOverlay(at:withOverlayAt:)](exchangeoverlay%28at_withoverlayat_%29.md): Exchanges the position of two overlay objects at the specified index.

# addOverlay: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Adds a single overlay object to the map.

## Declaration

```objectivec
- (void) addOverlay:(id<MKOverlay>) overlay;
```

## Parameters

- `overlay`: The overlay object to add. This object needs to conform to the [MKOverlay](../mkoverlay.md) protocol.

<a id="Discussion"></a>

## Discussion

The map view adds the specified object to the group of overlay objects in the [MKOverlayLevelAboveLabels](../mkoverlaylevel/abovelabels.md) level. Adding an overlay causes the map view to begin monitoring the area that the overlay represents. As soon as the bounding rectangle of an overlay intersects the visible portion of the map, the map view adds a corresponding overlay view to the map. Implement the [mapView:rendererForOverlay:](../mkmapviewdelegate/mapview%28__rendererfor_%29.md) method of the map view’s delegate object to provide the overlay view.

To remove an overlay from a map, use the [removeOverlay:](removeoverlay%28__%29.md) method.

## See Also

### Related Documentation

- [removeOverlay:](removeoverlay%28__%29.md): Removes a single overlay object from the map.
- [removeOverlays:](removeoverlays%28__%29.md): Removes one or more overlay objects from the map.

### Adding and inserting overlays

- [addOverlay:level:](addoverlay%28__level_%29.md): Adds the overlay object to the map at the specified level.
- [addOverlays:level:](addoverlays%28__level_%29.md): Adds an array of overlay objects to the map at the specified level.
- [addOverlays:](addoverlays%28__%29.md): Adds an array of overlay objects to the map.
- [insertOverlay:atIndex:level:](insertoverlay%28__at_level_%29.md): Inserts an overlay object into the level at the specified index.
- [insertOverlay:atIndex:](insertoverlay%28__at_%29.md): Inserts an overlay object into the list associated with the map.
- [insertOverlay:aboveOverlay:](insertoverlay%28__above_%29.md): Inserts one overlay object above another.
- [insertOverlay:belowOverlay:](insertoverlay%28__below_%29.md): Inserts one overlay object below another.
- [exchangeOverlay:withOverlay:](exchangeoverlay%28__with_%29.md): Exchanges the positions of two overlay objects.
- [exchangeOverlayAtIndex:withOverlayAtIndex:](exchangeoverlay%28at_withoverlayat_%29.md): Exchanges the position of two overlay objects at the specified index.

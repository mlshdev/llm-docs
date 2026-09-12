> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapviewdelegate/mapview(_:selectionaccessoryfor:)](https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/mapview(_:selectionaccessoryfor:))

# mapView(\_:selectionAccessoryFor:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Specifies the accessory to display for a selected annotation

## Declaration

```swift
optional func mapView(_ mapView: MKMapView, selectionAccessoryFor annotation: any MKAnnotation) -> MKSelectionAccessory?
```

## Parameters

- `mapView`: The map view that requests the selection accessory.
- `annotation`: The annotation.

<a id="Discussion"></a>

## Discussion

Called for all selected annotations. Not all types of annotations support displaying selection accessories. For example, the map item detail selection accessory is only supported for [MKMapItemAnnotation](../mkmapitemannotation.md) and [MKMapFeatureAnnotation](../mkmapfeatureannotation.md). Please return \`nil\` for annotations where a selection accessory is not desired.

No accessory will be displayed if…

- nil is returned
- [mapView(\_:selectionAccessoryFor:)](mapview%28__selectionaccessoryfor_%29.md) is not implemented
- the accessory returned is not supported for \`annotation\`

## See Also

### Managing the display of overlays

- [mapView(\_:rendererFor:)](mapview%28__rendererfor_%29.md): Asks the delegate for a renderer object to use when drawing the specified overlay.
- [mapView(\_:didAdd:)](mapview%28__didadd_%29-793gj.md): Tells the delegate when the map view adds one or more renderer objects to the map.
- [mapView(\_:viewFor:)](mapview%28__viewfor_%29-6j267.md): Deprecated. Asks the delegate for the overlay view to use when displaying the specified overlay object.
- [mapView(\_:didAddOverlayViews:)](mapview%28__didaddoverlayviews_%29.md): Deprecated. Tells the delegate when the map adds one or more overlay views to the map.

# mapView:selectionAccessoryForAnnotation: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · visionOS 2.0+

Specifies the accessory to display for a selected annotation

## Declaration

```objectivec
- (MKSelectionAccessory *) mapView:(MKMapView *) mapView selectionAccessoryForAnnotation:(id<MKAnnotation>) annotation;
```

## Parameters

- `mapView`: The map view that requests the selection accessory.
- `annotation`: The annotation.

<a id="Discussion"></a>

## Discussion

Called for all selected annotations. Not all types of annotations support displaying selection accessories. For example, the map item detail selection accessory is only supported for [MKMapItemAnnotation](../mkmapitemannotation.md) and [MKMapFeatureAnnotation](../mkmapfeatureannotation.md). Please return \`nil\` for annotations where a selection accessory is not desired.

No accessory will be displayed if…

- nil is returned
- [mapView:selectionAccessoryForAnnotation:](mapview%28__selectionaccessoryfor_%29.md) is not implemented
- the accessory returned is not supported for \`annotation\`

## See Also

### Managing the display of overlays

- [mapView:rendererForOverlay:](mapview%28__rendererfor_%29.md): Asks the delegate for a renderer object to use when drawing the specified overlay.
- [mapView:didAddOverlayRenderers:](mapview%28__didadd_%29-793gj.md): Tells the delegate when the map view adds one or more renderer objects to the map.
- [mapView:viewForOverlay:](mapview%28__viewfor_%29-6j267.md): Deprecated. Asks the delegate for the overlay view to use when displaying the specified overlay object.
- [mapView:didAddOverlayViews:](mapview%28__didaddoverlayviews_%29.md): Deprecated. Tells the delegate when the map adds one or more overlay views to the map.

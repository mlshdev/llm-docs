> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapviewdelegate/mapview(_:didadd:)-793gj](https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/mapview(_:didadd:)-793gj)

# mapView(\_:didAdd:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Tells the delegate when the map view adds one or more renderer objects to the map.

## Declaration

```swift
optional func mapView(_ mapView: MKMapView, didAdd renderers: [MKOverlayRenderer])
```

## Parameters

- `mapView`: The map view that adds the renderer objects.
- `renderers`: The renderer objects that the map view adds.

<a id="Discussion"></a>

## Discussion

The map view adds renderer objects when it needs them to draw their contents, which might be prior to those contents appearing onscreen. It calls this method to let you know that the renderer is active and in use. By the time the map view calls this method, it has already added specified renderers to the map.

## See Also

### Managing the display of overlays

- [mapView(\_:selectionAccessoryFor:)](mapview%28__selectionaccessoryfor_%29.md): Specifies the accessory to display for a selected annotation
- [mapView(\_:rendererFor:)](mapview%28__rendererfor_%29.md): Asks the delegate for a renderer object to use when drawing the specified overlay.
- [mapView(\_:viewFor:)](mapview%28__viewfor_%29-6j267.md): Deprecated. Asks the delegate for the overlay view to use when displaying the specified overlay object.
- [mapView(\_:didAddOverlayViews:)](mapview%28__didaddoverlayviews_%29.md): Deprecated. Tells the delegate when the map adds one or more overlay views to the map.

# mapView:didAddOverlayRenderers: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Tells the delegate when the map view adds one or more renderer objects to the map.

## Declaration

```objectivec
- (void) mapView:(MKMapView *) mapView didAddOverlayRenderers:(NSArray<MKOverlayRenderer *> *) renderers;
```

## Parameters

- `mapView`: The map view that adds the renderer objects.
- `renderers`: The renderer objects that the map view adds.

<a id="Discussion"></a>

## Discussion

The map view adds renderer objects when it needs them to draw their contents, which might be prior to those contents appearing onscreen. It calls this method to let you know that the renderer is active and in use. By the time the map view calls this method, it has already added specified renderers to the map.

## See Also

### Managing the display of overlays

- [mapView:selectionAccessoryForAnnotation:](mapview%28__selectionaccessoryfor_%29.md): Specifies the accessory to display for a selected annotation
- [mapView:rendererForOverlay:](mapview%28__rendererfor_%29.md): Asks the delegate for a renderer object to use when drawing the specified overlay.
- [mapView:viewForOverlay:](mapview%28__viewfor_%29-6j267.md): Deprecated. Asks the delegate for the overlay view to use when displaying the specified overlay object.
- [mapView:didAddOverlayViews:](mapview%28__didaddoverlayviews_%29.md): Deprecated. Tells the delegate when the map adds one or more overlay views to the map.

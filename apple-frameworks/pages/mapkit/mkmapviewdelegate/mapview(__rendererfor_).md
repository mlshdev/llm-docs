> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapviewdelegate/mapview(_:rendererfor:)](https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/mapview(_:rendererfor:))

# mapView(\_:rendererFor:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Asks the delegate for a renderer object to use when drawing the specified overlay.

## Declaration

```swift
optional func mapView(_ mapView: MKMapView, rendererFor overlay: any MKOverlay) -> MKOverlayRenderer
```

## Parameters

- `mapView`: The map view that requests the renderer object.
- `overlay`: The overlay object that the map view is about to display.

<a id="return-value"></a>

## Return Value

The renderer to use when presenting the specified overlay on the map.

<a id="Discussion"></a>

## Discussion

Implement this method and use it to provide an appropriate renderer object for your overlays. The renderer object is responsible for drawing the contents of your overlay when the map view requests it to. MapKit supports many different types of standard renderer objects and you may also define your own custom renderers.

## See Also

### Managing the display of overlays

- [mapView(\_:selectionAccessoryFor:)](mapview%28__selectionaccessoryfor_%29.md): Specifies the accessory to display for a selected annotation
- [mapView(\_:didAdd:)](mapview%28__didadd_%29-793gj.md): Tells the delegate when the map view adds one or more renderer objects to the map.
- [mapView(\_:viewFor:)](mapview%28__viewfor_%29-6j267.md): Deprecated. Asks the delegate for the overlay view to use when displaying the specified overlay object.
- [mapView(\_:didAddOverlayViews:)](mapview%28__didaddoverlayviews_%29.md): Deprecated. Tells the delegate when the map adds one or more overlay views to the map.

# mapView:rendererForOverlay: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Asks the delegate for a renderer object to use when drawing the specified overlay.

## Declaration

```objectivec
- (MKOverlayRenderer *) mapView:(MKMapView *) mapView rendererForOverlay:(id<MKOverlay>) overlay;
```

## Parameters

- `mapView`: The map view that requests the renderer object.
- `overlay`: The overlay object that the map view is about to display.

<a id="return-value"></a>

## Return Value

The renderer to use when presenting the specified overlay on the map.

<a id="Discussion"></a>

## Discussion

Implement this method and use it to provide an appropriate renderer object for your overlays. The renderer object is responsible for drawing the contents of your overlay when the map view requests it to. MapKit supports many different types of standard renderer objects and you may also define your own custom renderers.

## See Also

### Managing the display of overlays

- [mapView:selectionAccessoryForAnnotation:](mapview%28__selectionaccessoryfor_%29.md): Specifies the accessory to display for a selected annotation
- [mapView:didAddOverlayRenderers:](mapview%28__didadd_%29-793gj.md): Tells the delegate when the map view adds one or more renderer objects to the map.
- [mapView:viewForOverlay:](mapview%28__viewfor_%29-6j267.md): Deprecated. Asks the delegate for the overlay view to use when displaying the specified overlay object.
- [mapView:didAddOverlayViews:](mapview%28__didaddoverlayviews_%29.md): Deprecated. Tells the delegate when the map adds one or more overlay views to the map.

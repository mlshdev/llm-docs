> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapviewdelegate/mapview(_:viewfor:)-6j267](https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/mapview(_:viewfor:)-6j267)

# mapView(\_:viewFor:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 13.0) · iPadOS 4.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Asks the delegate for the overlay view to use when displaying the specified overlay object.

> Implement the [mapView(\_:rendererFor:)](mapview%28__rendererfor_%29.md) method instead.

## Declaration

```swift
optional func mapView(_ mapView: MKMapView, viewFor overlay: any MKOverlay) -> MKOverlayView
```

## Parameters

- `mapView`: The map view that requests the overlay view.
- `overlay`: The object representing the overlay that the map view is about to display.

<a id="return-value"></a>

## Return Value

The view to use when presenting the specified overlay on the map. If you return `nil`, no view  displays for the specified overlay object.

## See Also

### Methods

- [view(for:)](../mkmapview/view%28for_%29-38z60.md): Deprecated. Returns the view associated with the overlay object, if any.
- [mapView(\_:didAddOverlayViews:)](mapview%28__didaddoverlayviews_%29.md): Deprecated. Tells the delegate when the map adds one or more overlay views to the map.

# mapView:viewForOverlay: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 13.0) · iPadOS 4.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Asks the delegate for the overlay view to use when displaying the specified overlay object.

> Implement the [mapView:rendererForOverlay:](mapview%28__rendererfor_%29.md) method instead.

## Declaration

```objectivec
- (MKOverlayView *) mapView:(MKMapView *) mapView viewForOverlay:(id<MKOverlay>) overlay;
```

## Parameters

- `mapView`: The map view that requests the overlay view.
- `overlay`: The object representing the overlay that the map view is about to display.

<a id="return-value"></a>

## Return Value

The view to use when presenting the specified overlay on the map. If you return `nil`, no view  displays for the specified overlay object.

## See Also

### Methods

- [viewForOverlay:](../mkmapview/view%28for_%29-38z60.md): Deprecated. Returns the view associated with the overlay object, if any.
- [mapView:didAddOverlayViews:](mapview%28__didaddoverlayviews_%29.md): Deprecated. Tells the delegate when the map adds one or more overlay views to the map.

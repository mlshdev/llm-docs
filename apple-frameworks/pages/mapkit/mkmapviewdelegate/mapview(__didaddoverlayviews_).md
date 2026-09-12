> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapviewdelegate/mapview(_:didaddoverlayviews:)](https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/mapview(_:didaddoverlayviews:))

# mapView(\_:didAddOverlayViews:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 13.0) · iPadOS 4.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate when the map adds one or more overlay views to the map.

> Implement the [mapView(\_:didAdd:)](mapview%28__didadd_%29-793gj.md) method instead.

## Declaration

```swift
optional func mapView(_ mapView: MKMapView, didAddOverlayViews overlayViews: [Any])
```

## Parameters

- `mapView`: The map view that adds the overlay views.
- `overlayViews`: An array of [MKOverlayView](../mkoverlayview.md) objects representing the views that the map view adds.

<a id="Discussion"></a>

## Discussion

By the time the map view calls this method, MapKit has added the specified views to the map.

## See Also

### Methods

- [view(for:)](../mkmapview/view%28for_%29-38z60.md): Deprecated. Returns the view associated with the overlay object, if any.
- [mapView(\_:viewFor:)](mapview%28__viewfor_%29-6j267.md): Deprecated. Asks the delegate for the overlay view to use when displaying the specified overlay object.

# mapView:didAddOverlayViews: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 13.0) · iPadOS 4.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate when the map adds one or more overlay views to the map.

> Implement the [mapView:didAddOverlayRenderers:](mapview%28__didadd_%29-793gj.md) method instead.

## Declaration

```objectivec
- (void) mapView:(MKMapView *) mapView didAddOverlayViews:(NSArray *) overlayViews;
```

## Parameters

- `mapView`: The map view that adds the overlay views.
- `overlayViews`: An array of [MKOverlayView](../mkoverlayview.md) objects representing the views that the map view adds.

<a id="Discussion"></a>

## Discussion

By the time the map view calls this method, MapKit has added the specified views to the map.

## See Also

### Methods

- [viewForOverlay:](../mkmapview/view%28for_%29-38z60.md): Deprecated. Returns the view associated with the overlay object, if any.
- [mapView:viewForOverlay:](mapview%28__viewfor_%29-6j267.md): Deprecated. Asks the delegate for the overlay view to use when displaying the specified overlay object.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapviewdelegate/mapview(_:didadd:)-44xon](https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/mapview(_:didadd:)-44xon)

# mapView(\_:didAdd:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Tells the delegate when the map view adds one or more annotation views to the map.

## Declaration

```swift
optional func mapView(_ mapView: MKMapView, didAdd views: [MKAnnotationView])
```

## Parameters

- `mapView`: The map view that adds the annotation views.
- `views`: An array of `MKAnnotationView` objects representing the views that the map view adds.

<a id="Discussion"></a>

## Discussion

By the time the map view calls this method, MapKit has added the specified views to the map.

## See Also

### Managing annotation views

- [mapView(\_:viewFor:)](mapview%28__viewfor_%29-8humz.md): Returns the view associated with the specified annotation object.
- [mapView(\_:annotationView:calloutAccessoryControlTapped:)](mapview%28__annotationview_calloutaccessorycontroltapped_%29.md): Tells the delegate when the user taps one of the annotation view’s accessory buttons.
- [mapView(\_:clusterAnnotationForMemberAnnotations:)](mapview%28__clusterannotationformemberannotations_%29.md): Asks the delegate to provide a cluster annotation object for the specified annotations.

# mapView:didAddAnnotationViews: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Tells the delegate when the map view adds one or more annotation views to the map.

## Declaration

```objectivec
- (void) mapView:(MKMapView *) mapView didAddAnnotationViews:(NSArray<MKAnnotationView *> *) views;
```

## Parameters

- `mapView`: The map view that adds the annotation views.
- `views`: An array of `MKAnnotationView` objects representing the views that the map view adds.

<a id="Discussion"></a>

## Discussion

By the time the map view calls this method, MapKit has added the specified views to the map.

## See Also

### Managing annotation views

- [mapView:viewForAnnotation:](mapview%28__viewfor_%29-8humz.md): Returns the view associated with the specified annotation object.
- [mapView:annotationView:calloutAccessoryControlTapped:](mapview%28__annotationview_calloutaccessorycontroltapped_%29.md): Tells the delegate when the user taps one of the annotation view’s accessory buttons.
- [mapView:clusterAnnotationForMemberAnnotations:](mapview%28__clusterannotationformemberannotations_%29.md): Asks the delegate to provide a cluster annotation object for the specified annotations.

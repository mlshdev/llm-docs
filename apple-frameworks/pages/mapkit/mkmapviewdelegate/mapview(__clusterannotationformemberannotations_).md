> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapviewdelegate/mapview(_:clusterannotationformemberannotations:)](https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/mapview(_:clusterannotationformemberannotations:))

# mapView(\_:clusterAnnotationForMemberAnnotations:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Asks the delegate to provide a cluster annotation object for the specified annotations.

## Declaration

```swift
optional func mapView(_ mapView: MKMapView, clusterAnnotationForMemberAnnotations memberAnnotations: [any MKAnnotation]) -> MKClusterAnnotation
```

## Parameters

- `mapView`: The map view containing the specified annotations.
- `memberAnnotations`: The annotations for the map to cluster together. The returned [MKClusterAnnotation](../mkclusterannotation.md) object needs to include the specific annotations in this parameter.

<a id="return-value"></a>

## Return Value

The cluster annotation object.

<a id="Discussion"></a>

## Discussion

Use this method to customize the cluster annotations that display on your map. Typically, MapKit creates cluster annotation objects automatically when one or more annotations with the same cluster identifier are too close together. However, you can implement this method and return a custom cluster annotation object for the specified set of annotations.

## See Also

### Managing annotation views

- [mapView(\_:viewFor:)](mapview%28__viewfor_%29-8humz.md): Returns the view associated with the specified annotation object.
- [mapView(\_:didAdd:)](mapview%28__didadd_%29-44xon.md): Tells the delegate when the map view adds one or more annotation views to the map.
- [mapView(\_:annotationView:calloutAccessoryControlTapped:)](mapview%28__annotationview_calloutaccessorycontroltapped_%29.md): Tells the delegate when the user taps one of the annotation view’s accessory buttons.

# mapView:clusterAnnotationForMemberAnnotations: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Asks the delegate to provide a cluster annotation object for the specified annotations.

## Declaration

```objectivec
- (MKClusterAnnotation *) mapView:(MKMapView *) mapView clusterAnnotationForMemberAnnotations:(NSArray<id<MKAnnotation>> *) memberAnnotations;
```

## Parameters

- `mapView`: The map view containing the specified annotations.
- `memberAnnotations`: The annotations for the map to cluster together. The returned [MKClusterAnnotation](../mkclusterannotation.md) object needs to include the specific annotations in this parameter.

<a id="return-value"></a>

## Return Value

The cluster annotation object.

<a id="Discussion"></a>

## Discussion

Use this method to customize the cluster annotations that display on your map. Typically, MapKit creates cluster annotation objects automatically when one or more annotations with the same cluster identifier are too close together. However, you can implement this method and return a custom cluster annotation object for the specified set of annotations.

## See Also

### Managing annotation views

- [mapView:viewForAnnotation:](mapview%28__viewfor_%29-8humz.md): Returns the view associated with the specified annotation object.
- [mapView:didAddAnnotationViews:](mapview%28__didadd_%29-44xon.md): Tells the delegate when the map view adds one or more annotation views to the map.
- [mapView:annotationView:calloutAccessoryControlTapped:](mapview%28__annotationview_calloutaccessorycontroltapped_%29.md): Tells the delegate when the user taps one of the annotation view’s accessory buttons.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapviewdelegate/mapview(_:diddeselect:)-4ldss](https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/mapview(_:diddeselect:)-4ldss)

# mapView(\_:didDeselect:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Tells the delegate when the user deselects one or more annotations.

## Declaration

```swift
optional func mapView(_ mapView: MKMapView, didDeselect annotation: any MKAnnotation)
```

## Parameters

- `mapView`: The map view containing the annotation view.
- `annotation`: The deselected annotation view.

## See Also

### Selecting annotations and annotations views

- [mapView(\_:didSelect:)](mapview%28__didselect_%29-41by3.md): Tells the delegate when the user selects one or more of its annotation views.
- [mapView(\_:didDeselect:)](mapview%28__diddeselect_%29-yo7q.md): Tells the delegate when the user deselects one or more of its annotation views.
- [mapView(\_:didSelect:)](mapview%28__didselect_%29-9km43.md): Tells the delegate when the user selects one or more annotations.
- [selectableMapFeatures](../mkmapview/selectablemapfeatures.md): The property that describes which selectable features the map responds to.

# mapView:didDeselectAnnotation: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · visionOS 1.0+

Tells the delegate when the user deselects one or more annotations.

## Declaration

```objectivec
- (void) mapView:(MKMapView *) mapView didDeselectAnnotation:(id<MKAnnotation>) annotation;
```

## Parameters

- `mapView`: The map view containing the annotation view.
- `annotation`: The deselected annotation view.

## See Also

### Selecting annotations and annotations views

- [mapView:didSelectAnnotationView:](mapview%28__didselect_%29-41by3.md): Tells the delegate when the user selects one or more of its annotation views.
- [mapView:didDeselectAnnotationView:](mapview%28__diddeselect_%29-yo7q.md): Tells the delegate when the user deselects one or more of its annotation views.
- [mapView:didSelectAnnotation:](mapview%28__didselect_%29-9km43.md): Tells the delegate when the user selects one or more annotations.
- [selectableMapFeatures](../mkmapview/selectablemapfeatures.md): The property that describes which selectable features the map responds to.

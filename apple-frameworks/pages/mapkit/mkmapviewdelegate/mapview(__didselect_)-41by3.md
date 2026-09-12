> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapviewdelegate/mapview(_:didselect:)-41by3](https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/mapview(_:didselect:)-41by3)

# mapView(\_:didSelect:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Tells the delegate when the user selects one or more of its annotation views.

## Declaration

```swift
optional func mapView(_ mapView: MKMapView, didSelect view: MKAnnotationView)
```

## Parameters

- `mapView`: The map view containing the annotation view.
- `view`: The selected annotation view.

<a id="Discussion"></a>

## Discussion

You can use this method to track changes in the selection state of annotation views.

## See Also

### Selecting annotations and annotations views

- [mapView(\_:didDeselect:)](mapview%28__diddeselect_%29-yo7q.md): Tells the delegate when the user deselects one or more of its annotation views.
- [mapView(\_:didDeselect:)](mapview%28__diddeselect_%29-4ldss.md): Tells the delegate when the user deselects one or more annotations.
- [mapView(\_:didSelect:)](mapview%28__didselect_%29-9km43.md): Tells the delegate when the user selects one or more annotations.
- [selectableMapFeatures](../mkmapview/selectablemapfeatures.md): The property that describes which selectable features the map responds to.

# mapView:didSelectAnnotationView: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Tells the delegate when the user selects one or more of its annotation views.

## Declaration

```objectivec
- (void) mapView:(MKMapView *) mapView didSelectAnnotationView:(MKAnnotationView *) view;
```

## Parameters

- `mapView`: The map view containing the annotation view.
- `view`: The selected annotation view.

<a id="Discussion"></a>

## Discussion

You can use this method to track changes in the selection state of annotation views.

## See Also

### Selecting annotations and annotations views

- [mapView:didDeselectAnnotationView:](mapview%28__diddeselect_%29-yo7q.md): Tells the delegate when the user deselects one or more of its annotation views.
- [mapView:didDeselectAnnotation:](mapview%28__diddeselect_%29-4ldss.md): Tells the delegate when the user deselects one or more annotations.
- [mapView:didSelectAnnotation:](mapview%28__didselect_%29-9km43.md): Tells the delegate when the user selects one or more annotations.
- [selectableMapFeatures](../mkmapview/selectablemapfeatures.md): The property that describes which selectable features the map responds to.

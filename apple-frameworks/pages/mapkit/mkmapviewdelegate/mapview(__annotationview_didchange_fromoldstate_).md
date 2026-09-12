> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapviewdelegate/mapview(_:annotationview:didchange:fromoldstate:)](https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/mapview(_:annotationview:didchange:fromoldstate:))

# mapView(\_:annotationView:didChange:fromOldState:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

Tells the delegate when the drag state of one of its annotation views changes.

## Declaration

```swift
optional func mapView(_ mapView: MKMapView, annotationView view: MKAnnotationView, didChange newState: MKAnnotationView.DragState, fromOldState oldState: MKAnnotationView.DragState)
```

## Parameters

- `mapView`: The map view containing the annotation view.
- `view`: The annotation view whose drag state changed.
- `newState`: The new drag state of the annotation view.
- `oldState`: The previous drag state of the annotation view.

<a id="Discussion"></a>

## Discussion

The drag state typically changes in response to user interactions with the annotation view. However, the annotation view itself is responsible for changing that state as well.

# mapView:annotationView:didChangeDragState:fromOldState: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

Tells the delegate when the drag state of one of its annotation views changes.

## Declaration

```objectivec
- (void) mapView:(MKMapView *) mapView annotationView:(MKAnnotationView *) view didChangeDragState:(MKAnnotationViewDragState) newState fromOldState:(MKAnnotationViewDragState) oldState;
```

## Parameters

- `mapView`: The map view containing the annotation view.
- `view`: The annotation view whose drag state changed.
- `newState`: The new drag state of the annotation view.
- `oldState`: The previous drag state of the annotation view.

<a id="Discussion"></a>

## Discussion

The drag state typically changes in response to user interactions with the annotation view. However, the annotation view itself is responsible for changing that state as well.

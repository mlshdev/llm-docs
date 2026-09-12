> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapviewdelegate/mapview(_:annotationview:calloutaccessorycontroltapped:)](https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/mapview(_:annotationview:calloutaccessorycontroltapped:))

# mapView(\_:annotationView:calloutAccessoryControlTapped:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate when the user taps one of the annotation view’s accessory buttons.

## Declaration

```swift
optional func mapView(_ mapView: MKMapView, annotationView view: MKAnnotationView, calloutAccessoryControlTapped control: UIControl)
```

## Parameters

- `mapView`: The map view containing the specified annotation view.
- `view`: The annotation view with the button that the person taps.
- `control`: The control that the person taps.

<a id="Discussion"></a>

## Discussion

Accessory views contain custom content and the map view positions it on either side of the annotation title text. If a view you specify is a descendant of the [UIControl](../../uikit/uicontrol.md) class, the map view calls this method as a convenience whenever the user taps your view. You can use this method to respond to taps and perform any actions associated with that control. For example, if your control displays additional information about the annotation, you can use this method to present a modal panel with that information.

If your custom accessory views aren’t descendants of the [UIControl](../../uikit/uicontrol.md) class, the map view doesn’t call this method.

## See Also

### Managing annotation views

- [mapView(\_:viewFor:)](mapview%28__viewfor_%29-8humz.md): Returns the view associated with the specified annotation object.
- [mapView(\_:didAdd:)](mapview%28__didadd_%29-44xon.md): Tells the delegate when the map view adds one or more annotation views to the map.
- [mapView(\_:clusterAnnotationForMemberAnnotations:)](mapview%28__clusterannotationformemberannotations_%29.md): Asks the delegate to provide a cluster annotation object for the specified annotations.

# mapView:annotationView:calloutAccessoryControlTapped: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Tells the delegate when the user taps one of the annotation view’s accessory buttons.

## Declaration

```objectivec
- (void) mapView:(MKMapView *) mapView annotationView:(MKAnnotationView *) view calloutAccessoryControlTapped:(UIControl *) control;
```

## Parameters

- `mapView`: The map view containing the specified annotation view.
- `view`: The annotation view with the button that the person taps.
- `control`: The control that the person taps.

<a id="Discussion"></a>

## Discussion

Accessory views contain custom content and the map view positions it on either side of the annotation title text. If a view you specify is a descendant of the [UIControl](../../uikit/uicontrol.md) class, the map view calls this method as a convenience whenever the user taps your view. You can use this method to respond to taps and perform any actions associated with that control. For example, if your control displays additional information about the annotation, you can use this method to present a modal panel with that information.

If your custom accessory views aren’t descendants of the [UIControl](../../uikit/uicontrol.md) class, the map view doesn’t call this method.

## See Also

### Managing annotation views

- [mapView:viewForAnnotation:](mapview%28__viewfor_%29-8humz.md): Returns the view associated with the specified annotation object.
- [mapView:didAddAnnotationViews:](mapview%28__didadd_%29-44xon.md): Tells the delegate when the map view adds one or more annotation views to the map.
- [mapView:clusterAnnotationForMemberAnnotations:](mapview%28__clusterannotationformemberannotations_%29.md): Asks the delegate to provide a cluster annotation object for the specified annotations.

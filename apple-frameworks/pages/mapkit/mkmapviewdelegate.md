> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapviewdelegate](https://developer.apple.com/documentation/mapkit/mkmapviewdelegate)

# MKMapViewDelegate (Swift)

**Framework:** MapKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Optional methods that you use to receive map-related update messages.

## Declaration

```swift
@MainActor protocol MKMapViewDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

Because many map operations require the [MKMapView](mkmapview.md) class to load data asynchronously, the map view calls these methods to notify your app when specific operations complete. The map view also uses these methods to request annotation and overlay views, and to manage interactions with those views.

Before releasing an [MKMapView](mkmapview.md) object that you set a delegate for, remember to set that object’s [delegate](mkmapview/delegate.md) property to `nil`. MapKit calls all of your delegate methods on the app’s main thread.

## Topics

### Responding to map position changes

- [mapView(\_:regionWillChangeAnimated:)](mkmapviewdelegate/mapview%28__regionwillchangeanimated_%29.md): Tells the delegate when the region the map view is displaying is about to change.
- [mapViewDidChangeVisibleRegion(\_:)](mkmapviewdelegate/mapviewdidchangevisibleregion%28__%29.md): Tells the delegate when the map view’s visible region changes.
- [mapView(\_:regionDidChangeAnimated:)](mkmapviewdelegate/mapview%28__regiondidchangeanimated_%29.md): Tells the delegate when the region the map view is displaying changes.

### Loading the map data

- [mapViewWillStartLoadingMap(\_:)](mkmapviewdelegate/mapviewwillstartloadingmap%28__%29.md): Tells the delegate that the specified map view is about to retrieve some map data.
- [mapViewDidFinishLoadingMap(\_:)](mkmapviewdelegate/mapviewdidfinishloadingmap%28__%29.md): Tells the delegate when the specified map view successfully loads the needed map data.
- [mapViewDidFailLoadingMap(\_:withError:)](mkmapviewdelegate/mapviewdidfailloadingmap%28__witherror_%29.md): Tells the delegate that the specified view is unable to load the map data.
- [mapViewWillStartRenderingMap(\_:)](mkmapviewdelegate/mapviewwillstartrenderingmap%28__%29.md): Tells the delegate that the map view is about to start rendering some of its tiles.
- [mapViewDidFinishRenderingMap(\_:fullyRendered:)](mkmapviewdelegate/mapviewdidfinishrenderingmap%28__fullyrendered_%29.md): Tells the delegate when the map view finishes rendering all visible tiles.

### Tracking the user’s location

- [mapViewWillStartLocatingUser(\_:)](mkmapviewdelegate/mapviewwillstartlocatinguser%28__%29.md): Tells the delegate that the map view is about to start tracking the user’s location.
- [mapViewDidStopLocatingUser(\_:)](mkmapviewdelegate/mapviewdidstoplocatinguser%28__%29.md): Tells the delegate when the map view stops tracking the user’s location.
- [mapView(\_:didUpdate:)](mkmapviewdelegate/mapview%28__didupdate_%29.md): Tells the delegate when the map view updates the user’s location.
- [mapView(\_:didFailToLocateUserWithError:)](mkmapviewdelegate/mapview%28__didfailtolocateuserwitherror_%29.md): Tells the delegate when an attempt to locate the user’s location fails.
- [mapView(\_:didChange:animated:)](mkmapviewdelegate/mapview%28__didchange_animated_%29.md): Tells the delegate when the user-tracking mode changes.

### Managing annotation views

- [mapView(\_:viewFor:)](mkmapviewdelegate/mapview%28__viewfor_%29-8humz.md): Returns the view associated with the specified annotation object.
- [mapView(\_:didAdd:)](mkmapviewdelegate/mapview%28__didadd_%29-44xon.md): Tells the delegate when the map view adds one or more annotation views to the map.
- [mapView(\_:annotationView:calloutAccessoryControlTapped:)](mkmapviewdelegate/mapview%28__annotationview_calloutaccessorycontroltapped_%29.md): Tells the delegate when the user taps one of the annotation view’s accessory buttons.
- [mapView(\_:clusterAnnotationForMemberAnnotations:)](mkmapviewdelegate/mapview%28__clusterannotationformemberannotations_%29.md): Asks the delegate to provide a cluster annotation object for the specified annotations.

### Dragging an annotation view

- [mapView(\_:annotationView:didChange:fromOldState:)](mkmapviewdelegate/mapview%28__annotationview_didchange_fromoldstate_%29.md): Tells the delegate when the drag state of one of its annotation views changes.

### Selecting annotations and annotations views

- [mapView(\_:didSelect:)](mkmapviewdelegate/mapview%28__didselect_%29-41by3.md): Tells the delegate when the user selects one or more of its annotation views.
- [mapView(\_:didDeselect:)](mkmapviewdelegate/mapview%28__diddeselect_%29-yo7q.md): Tells the delegate when the user deselects one or more of its annotation views.
- [mapView(\_:didDeselect:)](mkmapviewdelegate/mapview%28__diddeselect_%29-4ldss.md): Tells the delegate when the user deselects one or more annotations.
- [mapView(\_:didSelect:)](mkmapviewdelegate/mapview%28__didselect_%29-9km43.md): Tells the delegate when the user selects one or more annotations.
- [selectableMapFeatures](mkmapview/selectablemapfeatures.md): The property that describes which selectable features the map responds to.

### Managing the display of overlays

- [mapView(\_:selectionAccessoryFor:)](mkmapviewdelegate/mapview%28__selectionaccessoryfor_%29.md): Specifies the accessory to display for a selected annotation
- [mapView(\_:rendererFor:)](mkmapviewdelegate/mapview%28__rendererfor_%29.md): Asks the delegate for a renderer object to use when drawing the specified overlay.
- [mapView(\_:didAdd:)](mkmapviewdelegate/mapview%28__didadd_%29-793gj.md): Tells the delegate when the map view adds one or more renderer objects to the map.
- [mapView(\_:viewFor:)](mkmapviewdelegate/mapview%28__viewfor_%29-6j267.md): Deprecated. Asks the delegate for the overlay view to use when displaying the specified overlay object.
- [mapView(\_:didAddOverlayViews:)](mkmapviewdelegate/mapview%28__didaddoverlayviews_%29.md): Deprecated. Tells the delegate when the map adds one or more overlay views to the map.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Customizing the map view behavior

- [delegate](mkmapview/delegate.md): The receiver’s delegate.

# MKMapViewDelegate (Objective-C)

**Framework:** MapKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Optional methods that you use to receive map-related update messages.

## Declaration

```objectivec
@protocol MKMapViewDelegate <NSObject>
```

<a id="overview"></a>

## Overview

Because many map operations require the [MKMapView](mkmapview.md) class to load data asynchronously, the map view calls these methods to notify your app when specific operations complete. The map view also uses these methods to request annotation and overlay views, and to manage interactions with those views.

Before releasing an [MKMapView](mkmapview.md) object that you set a delegate for, remember to set that object’s [delegate](mkmapview/delegate.md) property to `nil`. MapKit calls all of your delegate methods on the app’s main thread.

## Topics

### Responding to map position changes

- [mapView:regionWillChangeAnimated:](mkmapviewdelegate/mapview%28__regionwillchangeanimated_%29.md): Tells the delegate when the region the map view is displaying is about to change.
- [mapViewDidChangeVisibleRegion:](mkmapviewdelegate/mapviewdidchangevisibleregion%28__%29.md): Tells the delegate when the map view’s visible region changes.
- [mapView:regionDidChangeAnimated:](mkmapviewdelegate/mapview%28__regiondidchangeanimated_%29.md): Tells the delegate when the region the map view is displaying changes.

### Loading the map data

- [mapViewWillStartLoadingMap:](mkmapviewdelegate/mapviewwillstartloadingmap%28__%29.md): Tells the delegate that the specified map view is about to retrieve some map data.
- [mapViewDidFinishLoadingMap:](mkmapviewdelegate/mapviewdidfinishloadingmap%28__%29.md): Tells the delegate when the specified map view successfully loads the needed map data.
- [mapViewDidFailLoadingMap:withError:](mkmapviewdelegate/mapviewdidfailloadingmap%28__witherror_%29.md): Tells the delegate that the specified view is unable to load the map data.
- [mapViewWillStartRenderingMap:](mkmapviewdelegate/mapviewwillstartrenderingmap%28__%29.md): Tells the delegate that the map view is about to start rendering some of its tiles.
- [mapViewDidFinishRenderingMap:fullyRendered:](mkmapviewdelegate/mapviewdidfinishrenderingmap%28__fullyrendered_%29.md): Tells the delegate when the map view finishes rendering all visible tiles.

### Tracking the user’s location

- [mapViewWillStartLocatingUser:](mkmapviewdelegate/mapviewwillstartlocatinguser%28__%29.md): Tells the delegate that the map view is about to start tracking the user’s location.
- [mapViewDidStopLocatingUser:](mkmapviewdelegate/mapviewdidstoplocatinguser%28__%29.md): Tells the delegate when the map view stops tracking the user’s location.
- [mapView:didUpdateUserLocation:](mkmapviewdelegate/mapview%28__didupdate_%29.md): Tells the delegate when the map view updates the user’s location.
- [mapView:didFailToLocateUserWithError:](mkmapviewdelegate/mapview%28__didfailtolocateuserwitherror_%29.md): Tells the delegate when an attempt to locate the user’s location fails.
- [mapView:didChangeUserTrackingMode:animated:](mkmapviewdelegate/mapview%28__didchange_animated_%29.md): Tells the delegate when the user-tracking mode changes.

### Managing annotation views

- [mapView:viewForAnnotation:](mkmapviewdelegate/mapview%28__viewfor_%29-8humz.md): Returns the view associated with the specified annotation object.
- [mapView:didAddAnnotationViews:](mkmapviewdelegate/mapview%28__didadd_%29-44xon.md): Tells the delegate when the map view adds one or more annotation views to the map.
- [mapView:annotationView:calloutAccessoryControlTapped:](mkmapviewdelegate/mapview%28__annotationview_calloutaccessorycontroltapped_%29.md): Tells the delegate when the user taps one of the annotation view’s accessory buttons.
- [mapView:clusterAnnotationForMemberAnnotations:](mkmapviewdelegate/mapview%28__clusterannotationformemberannotations_%29.md): Asks the delegate to provide a cluster annotation object for the specified annotations.

### Dragging an annotation view

- [mapView:annotationView:didChangeDragState:fromOldState:](mkmapviewdelegate/mapview%28__annotationview_didchange_fromoldstate_%29.md): Tells the delegate when the drag state of one of its annotation views changes.

### Selecting annotations and annotations views

- [mapView:didSelectAnnotationView:](mkmapviewdelegate/mapview%28__didselect_%29-41by3.md): Tells the delegate when the user selects one or more of its annotation views.
- [mapView:didDeselectAnnotationView:](mkmapviewdelegate/mapview%28__diddeselect_%29-yo7q.md): Tells the delegate when the user deselects one or more of its annotation views.
- [mapView:didDeselectAnnotation:](mkmapviewdelegate/mapview%28__diddeselect_%29-4ldss.md): Tells the delegate when the user deselects one or more annotations.
- [mapView:didSelectAnnotation:](mkmapviewdelegate/mapview%28__didselect_%29-9km43.md): Tells the delegate when the user selects one or more annotations.
- [selectableMapFeatures](mkmapview/selectablemapfeatures.md): The property that describes which selectable features the map responds to.

### Managing the display of overlays

- [mapView:selectionAccessoryForAnnotation:](mkmapviewdelegate/mapview%28__selectionaccessoryfor_%29.md): Specifies the accessory to display for a selected annotation
- [mapView:rendererForOverlay:](mkmapviewdelegate/mapview%28__rendererfor_%29.md): Asks the delegate for a renderer object to use when drawing the specified overlay.
- [mapView:didAddOverlayRenderers:](mkmapviewdelegate/mapview%28__didadd_%29-793gj.md): Tells the delegate when the map view adds one or more renderer objects to the map.
- [mapView:viewForOverlay:](mkmapviewdelegate/mapview%28__viewfor_%29-6j267.md): Deprecated. Asks the delegate for the overlay view to use when displaying the specified overlay object.
- [mapView:didAddOverlayViews:](mkmapviewdelegate/mapview%28__didaddoverlayviews_%29.md): Deprecated. Tells the delegate when the map adds one or more overlay views to the map.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Customizing the map view behavior

- [delegate](mkmapview/delegate.md): The receiver’s delegate.

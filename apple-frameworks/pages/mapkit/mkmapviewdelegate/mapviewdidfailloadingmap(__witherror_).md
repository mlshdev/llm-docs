> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapviewdelegate/mapviewdidfailloadingmap(_:witherror:)](https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/mapviewdidfailloadingmap(_:witherror:))

# mapViewDidFailLoadingMap(\_:withError:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Tells the delegate that the specified view is unable to load the map data.

## Declaration

```swift
optional func mapViewDidFailLoadingMap(_ mapView: MKMapView, withError error: any Error)
```

## Parameters

- `mapView`: The map view that starts the load operation.
- `error`: The reason that the map view can’t load the map data.

<a id="Discussion"></a>

## Discussion

The map view might call this method in situations where the device doesn’t have access to the network or is unable to load the map data for some reason. The map view may also call this method if a request for additional map tiles comes in while a previous request for tiles is pending. You can use this message to notify the user that the map data is unavailable.

## See Also

### Loading the map data

- [mapViewWillStartLoadingMap(\_:)](mapviewwillstartloadingmap%28__%29.md): Tells the delegate that the specified map view is about to retrieve some map data.
- [mapViewDidFinishLoadingMap(\_:)](mapviewdidfinishloadingmap%28__%29.md): Tells the delegate when the specified map view successfully loads the needed map data.
- [mapViewWillStartRenderingMap(\_:)](mapviewwillstartrenderingmap%28__%29.md): Tells the delegate that the map view is about to start rendering some of its tiles.
- [mapViewDidFinishRenderingMap(\_:fullyRendered:)](mapviewdidfinishrenderingmap%28__fullyrendered_%29.md): Tells the delegate when the map view finishes rendering all visible tiles.

# mapViewDidFailLoadingMap:withError: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Tells the delegate that the specified view is unable to load the map data.

## Declaration

```objectivec
- (void) mapViewDidFailLoadingMap:(MKMapView *) mapView withError:(NSError *) error;
```

## Parameters

- `mapView`: The map view that starts the load operation.
- `error`: The reason that the map view can’t load the map data.

<a id="Discussion"></a>

## Discussion

The map view might call this method in situations where the device doesn’t have access to the network or is unable to load the map data for some reason. The map view may also call this method if a request for additional map tiles comes in while a previous request for tiles is pending. You can use this message to notify the user that the map data is unavailable.

## See Also

### Loading the map data

- [mapViewWillStartLoadingMap:](mapviewwillstartloadingmap%28__%29.md): Tells the delegate that the specified map view is about to retrieve some map data.
- [mapViewDidFinishLoadingMap:](mapviewdidfinishloadingmap%28__%29.md): Tells the delegate when the specified map view successfully loads the needed map data.
- [mapViewWillStartRenderingMap:](mapviewwillstartrenderingmap%28__%29.md): Tells the delegate that the map view is about to start rendering some of its tiles.
- [mapViewDidFinishRenderingMap:fullyRendered:](mapviewdidfinishrenderingmap%28__fullyrendered_%29.md): Tells the delegate when the map view finishes rendering all visible tiles.

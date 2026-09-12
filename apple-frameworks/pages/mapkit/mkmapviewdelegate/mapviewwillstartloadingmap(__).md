> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapviewdelegate/mapviewwillstartloadingmap(_:)](https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/mapviewwillstartloadingmap(_:))

# mapViewWillStartLoadingMap(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Tells the delegate that the specified map view is about to retrieve some map data.

## Declaration

```swift
optional func mapViewWillStartLoadingMap(_ mapView: MKMapView)
```

## Parameters

- `mapView`: The map view that begins loading the data.

<a id="Discussion"></a>

## Discussion

The map view calls this method whenever it needs to download a new group of map tiles from the server. This typically occurs whenever you expose portions of the map by panning or zooming the content. You can use this method to mark the time that it takes for the map view to load the data.

## See Also

### Loading the map data

- [mapViewDidFinishLoadingMap(\_:)](mapviewdidfinishloadingmap%28__%29.md): Tells the delegate when the specified map view successfully loads the needed map data.
- [mapViewDidFailLoadingMap(\_:withError:)](mapviewdidfailloadingmap%28__witherror_%29.md): Tells the delegate that the specified view is unable to load the map data.
- [mapViewWillStartRenderingMap(\_:)](mapviewwillstartrenderingmap%28__%29.md): Tells the delegate that the map view is about to start rendering some of its tiles.
- [mapViewDidFinishRenderingMap(\_:fullyRendered:)](mapviewdidfinishrenderingmap%28__fullyrendered_%29.md): Tells the delegate when the map view finishes rendering all visible tiles.

# mapViewWillStartLoadingMap: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Tells the delegate that the specified map view is about to retrieve some map data.

## Declaration

```objectivec
- (void) mapViewWillStartLoadingMap:(MKMapView *) mapView;
```

## Parameters

- `mapView`: The map view that begins loading the data.

<a id="Discussion"></a>

## Discussion

The map view calls this method whenever it needs to download a new group of map tiles from the server. This typically occurs whenever you expose portions of the map by panning or zooming the content. You can use this method to mark the time that it takes for the map view to load the data.

## See Also

### Loading the map data

- [mapViewDidFinishLoadingMap:](mapviewdidfinishloadingmap%28__%29.md): Tells the delegate when the specified map view successfully loads the needed map data.
- [mapViewDidFailLoadingMap:withError:](mapviewdidfailloadingmap%28__witherror_%29.md): Tells the delegate that the specified view is unable to load the map data.
- [mapViewWillStartRenderingMap:](mapviewwillstartrenderingmap%28__%29.md): Tells the delegate that the map view is about to start rendering some of its tiles.
- [mapViewDidFinishRenderingMap:fullyRendered:](mapviewdidfinishrenderingmap%28__fullyrendered_%29.md): Tells the delegate when the map view finishes rendering all visible tiles.

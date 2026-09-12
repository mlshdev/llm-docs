> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapviewdelegate/mapviewdidfinishloadingmap(_:)](https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/mapviewdidfinishloadingmap(_:))

# mapViewDidFinishLoadingMap(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Tells the delegate when the specified map view successfully loads the needed map data.

## Declaration

```swift
optional func mapViewDidFinishLoadingMap(_ mapView: MKMapView)
```

## Parameters

- `mapView`: The map view that starts the load operation.

<a id="Discussion"></a>

## Discussion

The map view calls this method when it finishes reloading the map tiles associated with the current request. The map view requests map tiles when a new visible area scrolls into view and tiles aren’t already available. The map may also request map tiles for portions of the map that aren’t currently visible. For example, the map view may load tiles immediately surrounding the currently visible area as needed to handle small pans by the user.

## See Also

### Loading the map data

- [mapViewWillStartLoadingMap(\_:)](mapviewwillstartloadingmap%28__%29.md): Tells the delegate that the specified map view is about to retrieve some map data.
- [mapViewDidFailLoadingMap(\_:withError:)](mapviewdidfailloadingmap%28__witherror_%29.md): Tells the delegate that the specified view is unable to load the map data.
- [mapViewWillStartRenderingMap(\_:)](mapviewwillstartrenderingmap%28__%29.md): Tells the delegate that the map view is about to start rendering some of its tiles.
- [mapViewDidFinishRenderingMap(\_:fullyRendered:)](mapviewdidfinishrenderingmap%28__fullyrendered_%29.md): Tells the delegate when the map view finishes rendering all visible tiles.

# mapViewDidFinishLoadingMap: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Tells the delegate when the specified map view successfully loads the needed map data.

## Declaration

```objectivec
- (void) mapViewDidFinishLoadingMap:(MKMapView *) mapView;
```

## Parameters

- `mapView`: The map view that starts the load operation.

<a id="Discussion"></a>

## Discussion

The map view calls this method when it finishes reloading the map tiles associated with the current request. The map view requests map tiles when a new visible area scrolls into view and tiles aren’t already available. The map may also request map tiles for portions of the map that aren’t currently visible. For example, the map view may load tiles immediately surrounding the currently visible area as needed to handle small pans by the user.

## See Also

### Loading the map data

- [mapViewWillStartLoadingMap:](mapviewwillstartloadingmap%28__%29.md): Tells the delegate that the specified map view is about to retrieve some map data.
- [mapViewDidFailLoadingMap:withError:](mapviewdidfailloadingmap%28__witherror_%29.md): Tells the delegate that the specified view is unable to load the map data.
- [mapViewWillStartRenderingMap:](mapviewwillstartrenderingmap%28__%29.md): Tells the delegate that the map view is about to start rendering some of its tiles.
- [mapViewDidFinishRenderingMap:fullyRendered:](mapviewdidfinishrenderingmap%28__fullyrendered_%29.md): Tells the delegate when the map view finishes rendering all visible tiles.

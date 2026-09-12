> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapviewdelegate/mapviewdidfinishrenderingmap(_:fullyrendered:)](https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/mapviewdidfinishrenderingmap(_:fullyrendered:))

# mapViewDidFinishRenderingMap(\_:fullyRendered:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Tells the delegate when the map view finishes rendering all visible tiles.

## Declaration

```swift
optional func mapViewDidFinishRenderingMap(_ mapView: MKMapView, fullyRendered: Bool)
```

## Parameters

- `mapView`: The map view rendering its tiles.
- `fullyRendered`: This parameter is [true](https://developer.apple.com/documentation/swift/true) if the map view is able to render all tiles completely, or [false](https://developer.apple.com/documentation/swift/false) if errors prevent the map view from rendering all tiles.

<a id="Discussion"></a>

## Discussion

This method lets you know when the map view finishes rendering all of the currently visible tiles to the best of its ability. The map view calls this method regardless of whether the view renders all tiles successfully. If there are errors loading one or more tiles that prevent the map view from rendering them, MapKit sets the `fullyRendered` parameter to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Loading the map data

- [mapViewWillStartLoadingMap(\_:)](mapviewwillstartloadingmap%28__%29.md): Tells the delegate that the specified map view is about to retrieve some map data.
- [mapViewDidFinishLoadingMap(\_:)](mapviewdidfinishloadingmap%28__%29.md): Tells the delegate when the specified map view successfully loads the needed map data.
- [mapViewDidFailLoadingMap(\_:withError:)](mapviewdidfailloadingmap%28__witherror_%29.md): Tells the delegate that the specified view is unable to load the map data.
- [mapViewWillStartRenderingMap(\_:)](mapviewwillstartrenderingmap%28__%29.md): Tells the delegate that the map view is about to start rendering some of its tiles.

# mapViewDidFinishRenderingMap:fullyRendered: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Tells the delegate when the map view finishes rendering all visible tiles.

## Declaration

```objectivec
- (void) mapViewDidFinishRenderingMap:(MKMapView *) mapView fullyRendered:(BOOL) fullyRendered;
```

## Parameters

- `mapView`: The map view rendering its tiles.
- `fullyRendered`: This parameter is [true](https://developer.apple.com/documentation/swift/true) if the map view is able to render all tiles completely, or [false](https://developer.apple.com/documentation/swift/false) if errors prevent the map view from rendering all tiles.

<a id="Discussion"></a>

## Discussion

This method lets you know when the map view finishes rendering all of the currently visible tiles to the best of its ability. The map view calls this method regardless of whether the view renders all tiles successfully. If there are errors loading one or more tiles that prevent the map view from rendering them, MapKit sets the `fullyRendered` parameter to [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Loading the map data

- [mapViewWillStartLoadingMap:](mapviewwillstartloadingmap%28__%29.md): Tells the delegate that the specified map view is about to retrieve some map data.
- [mapViewDidFinishLoadingMap:](mapviewdidfinishloadingmap%28__%29.md): Tells the delegate when the specified map view successfully loads the needed map data.
- [mapViewDidFailLoadingMap:withError:](mapviewdidfailloadingmap%28__witherror_%29.md): Tells the delegate that the specified view is unable to load the map data.
- [mapViewWillStartRenderingMap:](mapviewwillstartrenderingmap%28__%29.md): Tells the delegate that the map view is about to start rendering some of its tiles.

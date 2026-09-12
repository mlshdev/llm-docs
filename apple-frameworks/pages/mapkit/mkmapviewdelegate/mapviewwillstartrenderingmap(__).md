> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapviewdelegate/mapviewwillstartrenderingmap(_:)](https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/mapviewwillstartrenderingmap(_:))

# mapViewWillStartRenderingMap(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Tells the delegate that the map view is about to start rendering some of its tiles.

## Declaration

```swift
optional func mapViewWillStartRenderingMap(_ mapView: MKMapView)
```

## Parameters

- `mapView`: The map view that’s about to start rendering.

<a id="Discussion"></a>

## Discussion

The map view calls this method when the map reveals one or more tiles that require rendering.

## See Also

### Loading the map data

- [mapViewWillStartLoadingMap(\_:)](mapviewwillstartloadingmap%28__%29.md): Tells the delegate that the specified map view is about to retrieve some map data.
- [mapViewDidFinishLoadingMap(\_:)](mapviewdidfinishloadingmap%28__%29.md): Tells the delegate when the specified map view successfully loads the needed map data.
- [mapViewDidFailLoadingMap(\_:withError:)](mapviewdidfailloadingmap%28__witherror_%29.md): Tells the delegate that the specified view is unable to load the map data.
- [mapViewDidFinishRenderingMap(\_:fullyRendered:)](mapviewdidfinishrenderingmap%28__fullyrendered_%29.md): Tells the delegate when the map view finishes rendering all visible tiles.

# mapViewWillStartRenderingMap: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Tells the delegate that the map view is about to start rendering some of its tiles.

## Declaration

```objectivec
- (void) mapViewWillStartRenderingMap:(MKMapView *) mapView;
```

## Parameters

- `mapView`: The map view that’s about to start rendering.

<a id="Discussion"></a>

## Discussion

The map view calls this method when the map reveals one or more tiles that require rendering.

## See Also

### Loading the map data

- [mapViewWillStartLoadingMap:](mapviewwillstartloadingmap%28__%29.md): Tells the delegate that the specified map view is about to retrieve some map data.
- [mapViewDidFinishLoadingMap:](mapviewdidfinishloadingmap%28__%29.md): Tells the delegate when the specified map view successfully loads the needed map data.
- [mapViewDidFailLoadingMap:withError:](mapviewdidfailloadingmap%28__witherror_%29.md): Tells the delegate that the specified view is unable to load the map data.
- [mapViewDidFinishRenderingMap:fullyRendered:](mapviewdidfinishrenderingmap%28__fullyrendered_%29.md): Tells the delegate when the map view finishes rendering all visible tiles.

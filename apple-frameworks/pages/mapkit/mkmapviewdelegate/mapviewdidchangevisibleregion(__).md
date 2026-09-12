> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapviewdelegate/mapviewdidchangevisibleregion(_:)](https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/mapviewdidchangevisibleregion(_:))

# mapViewDidChangeVisibleRegion(\_:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Tells the delegate when the map view’s visible region changes.

## Declaration

```swift
optional func mapViewDidChangeVisibleRegion(_ mapView: MKMapView)
```

## Parameters

- `mapView`: The map view with the visible region that changes.

<a id="Discussion"></a>

## Discussion

Use this method to update the map in response to intermediate changes to the region. The map view calls this method each time the value of its visible region changes.

> **Important**

>  Because the map may call this method many times during the scrolling of the map, your implementation needs to be lightweight. Use this method to record the new region values or to make fast updates to your app’s interface. Don’t start any long-running synchronous tasks in this method.

## See Also

### Responding to map position changes

- [mapView(\_:regionWillChangeAnimated:)](mapview%28__regionwillchangeanimated_%29.md): Tells the delegate when the region the map view is displaying is about to change.
- [mapView(\_:regionDidChangeAnimated:)](mapview%28__regiondidchangeanimated_%29.md): Tells the delegate when the region the map view is displaying changes.

# mapViewDidChangeVisibleRegion: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · macOS 10.13+ · tvOS 11.0+ · visionOS 1.0+

Tells the delegate when the map view’s visible region changes.

## Declaration

```objectivec
- (void) mapViewDidChangeVisibleRegion:(MKMapView *) mapView;
```

## Parameters

- `mapView`: The map view with the visible region that changes.

<a id="Discussion"></a>

## Discussion

Use this method to update the map in response to intermediate changes to the region. The map view calls this method each time the value of its visible region changes.

> **Important**

>  Because the map may call this method many times during the scrolling of the map, your implementation needs to be lightweight. Use this method to record the new region values or to make fast updates to your app’s interface. Don’t start any long-running synchronous tasks in this method.

## See Also

### Responding to map position changes

- [mapView:regionWillChangeAnimated:](mapview%28__regionwillchangeanimated_%29.md): Tells the delegate when the region the map view is displaying is about to change.
- [mapView:regionDidChangeAnimated:](mapview%28__regiondidchangeanimated_%29.md): Tells the delegate when the region the map view is displaying changes.

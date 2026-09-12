> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapviewdelegate/mapview(_:regiondidchangeanimated:)](https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/mapview(_:regiondidchangeanimated:))

# mapView(\_:regionDidChangeAnimated:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Tells the delegate when the region the map view is displaying changes.

## Declaration

```swift
optional func mapView(_ mapView: MKMapView, regionDidChangeAnimated animated: Bool)
```

## Parameters

- `mapView`: The map view with the visible region that changes.
- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the map view animates the change to the new region.

<a id="Discussion"></a>

## Discussion

The map view calls this method at the end of a change to the map’s visible region.

## See Also

### Responding to map position changes

- [mapView(\_:regionWillChangeAnimated:)](mapview%28__regionwillchangeanimated_%29.md): Tells the delegate when the region the map view is displaying is about to change.
- [mapViewDidChangeVisibleRegion(\_:)](mapviewdidchangevisibleregion%28__%29.md): Tells the delegate when the map view’s visible region changes.

# mapView:regionDidChangeAnimated: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Tells the delegate when the region the map view is displaying changes.

## Declaration

```objectivec
- (void) mapView:(MKMapView *) mapView regionDidChangeAnimated:(BOOL) animated;
```

## Parameters

- `mapView`: The map view with the visible region that changes.
- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the map view animates the change to the new region.

<a id="Discussion"></a>

## Discussion

The map view calls this method at the end of a change to the map’s visible region.

## See Also

### Responding to map position changes

- [mapView:regionWillChangeAnimated:](mapview%28__regionwillchangeanimated_%29.md): Tells the delegate when the region the map view is displaying is about to change.
- [mapViewDidChangeVisibleRegion:](mapviewdidchangevisibleregion%28__%29.md): Tells the delegate when the map view’s visible region changes.

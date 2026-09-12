> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapviewdelegate/mapview(_:regionwillchangeanimated:)](https://developer.apple.com/documentation/mapkit/mkmapviewdelegate/mapview(_:regionwillchangeanimated:))

# mapView(\_:regionWillChangeAnimated:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Tells the delegate when the region the map view is displaying is about to change.

## Declaration

```swift
optional func mapView(_ mapView: MKMapView, regionWillChangeAnimated animated: Bool)
```

## Parameters

- `mapView`: The map view with the visible region that’s about to change.
- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the map view animates the change to the new region. If [false](https://developer.apple.com/documentation/swift/false), the map view makes the change immediately.

<a id="Discussion"></a>

## Discussion

The framework calls this method at the beginning of a change to the map’s visible region.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Responding to map position changes

- [mapViewDidChangeVisibleRegion(\_:)](mapviewdidchangevisibleregion%28__%29.md): Tells the delegate when the map view’s visible region changes.
- [mapView(\_:regionDidChangeAnimated:)](mapview%28__regiondidchangeanimated_%29.md): Tells the delegate when the region the map view is displaying changes.

# mapView:regionWillChangeAnimated: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Tells the delegate when the region the map view is displaying is about to change.

## Declaration

```objectivec
- (void) mapView:(MKMapView *) mapView regionWillChangeAnimated:(BOOL) animated;
```

## Parameters

- `mapView`: The map view with the visible region that’s about to change.
- `animated`: If [true](https://developer.apple.com/documentation/swift/true), the map view animates the change to the new region. If [false](https://developer.apple.com/documentation/swift/false), the map view makes the change immediately.

<a id="Discussion"></a>

## Discussion

The framework calls this method at the beginning of a change to the map’s visible region.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)

### Responding to map position changes

- [mapViewDidChangeVisibleRegion:](mapviewdidchangevisibleregion%28__%29.md): Tells the delegate when the map view’s visible region changes.
- [mapView:regionDidChangeAnimated:](mapview%28__regiondidchangeanimated_%29.md): Tells the delegate when the region the map view is displaying changes.

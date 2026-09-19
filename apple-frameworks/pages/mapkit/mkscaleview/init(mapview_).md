> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/mapkit/mkscaleview/init(mapview:)

# init(mapView:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Creates a scale view and associates it with the specified map view.

## Declaration

```swift
convenience init(mapView: MKMapView?)
```

## Parameters

- `mapView`: The map to associate with the scale view. The scale view automatically updates to reflect the scale of this map.

<a id="return-value"></a>

## Return Value

An initialized scale view.

# scaleViewWithMapView: (Objective-C)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · tvOS 11.0+ · visionOS 1.0+

Creates a scale view and associates it with the specified map view.

## Declaration

```objectivec
+ (instancetype) scaleViewWithMapView:(MKMapView *) mapView;
```

## Parameters

- `mapView`: The map to associate with the scale view. The scale view automatically updates to reflect the scale of this map.

<a id="return-value"></a>

## Return Value

An initialized scale view.

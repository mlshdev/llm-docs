> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkcompassbutton/init(mapview:)](https://developer.apple.com/documentation/mapkit/mkcompassbutton/init(mapview:))

# init(mapView:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 11.0+ · visionOS 1.0+

Creates a compass button and associates it with the specified map view.

## Declaration

```swift
convenience init(mapView: MKMapView?)
```

## Parameters

- `mapView`: The map to associate with the compass button. The compass button reflects the orientation of this map, and tapping the button reorients the map appropriately.

<a id="return-value"></a>

## Return Value

An initialized compass button.

# compassButtonWithMapView: (Objective-C)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.0+ · macOS 11.0+ · visionOS 1.0+

Creates a compass button and associates it with the specified map view.

## Declaration

```objectivec
+ (instancetype) compassButtonWithMapView:(MKMapView *) mapView;
```

## Parameters

- `mapView`: The map to associate with the compass button. The compass button reflects the orientation of this map, and tapping the button reorients the map appropriately.

<a id="return-value"></a>

## Return Value

An initialized compass button.

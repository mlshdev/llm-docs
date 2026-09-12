> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkusertrackingbutton/init(mapview:)](https://developer.apple.com/documentation/mapkit/mkusertrackingbutton/init(mapview:))

# init(mapView:) (Swift)

**Framework:** MapKit  
**Kind:** Initializer  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the button with the map view that it should control.

## Declaration

```swift
convenience init(mapView: MKMapView?)
```

## Parameters

- `mapView`: The mapView to associate with the button. Taps on the button change the appearance of this map view.

<a id="return-value"></a>

## Return Value

An initialized [MKUserTrackingButton](../mkusertrackingbutton.md) object.

# userTrackingButtonWithMapView: (Objective-C)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Initializes the button with the map view that it should control.

## Declaration

```objectivec
+ (instancetype) userTrackingButtonWithMapView:(MKMapView *) mapView;
```

## Parameters

- `mapView`: The mapView to associate with the button. Taps on the button change the appearance of this map view.

<a id="return-value"></a>

## Return Value

An initialized [MKUserTrackingButton](../mkusertrackingbutton.md) object.

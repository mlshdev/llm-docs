> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/setcamera(_:animated:)](https://developer.apple.com/documentation/mapkit/mkmapview/setcamera(_:animated:))

# setCamera(\_:animated:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Changes the camera to use for determining the map’s viewing parameters, and optionally animates the change.

## Declaration

```swift
func setCamera(_ camera: MKMapCamera, animated: Bool)
```

## Parameters

- `camera`: The camera object containing the viewing angle information. This parameter can’t be `nil`.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) if you want the map view to animate the change in viewing angle, or [false](https://developer.apple.com/documentation/swift/false) if you want the map to reflect the changes without animations.

## See Also

### Configuring the map display

- [camera](camera.md): The camera to use for determining the appearance of the map.
- [showsCompass](showscompass.md): A Boolean value that indicates whether the map displays a compass control.
- [showsPitchControl](showspitchcontrol.md): A Boolean value that indicates whether the map displays the pitch control.
- [showsScale](showsscale.md): A Boolean value that indicates whether the map shows scale information.
- [showsZoomControls](showszoomcontrols.md): A Boolean value that indicates whether the map displays zoom controls.
- [showsBuildings](showsbuildings.md): Deprecated. A Boolean value that indicates whether the map displays extruded building information on supported map types.
- [showsPointsOfInterest](showspointsofinterest.md): Deprecated. A Boolean value that indicates whether the map displays point-of-interest information.
- [pointOfInterestFilter](pointofinterestfilter.md): Deprecated. The filter to use for determining the points of interest that appear on the map.
- [showsTraffic](showstraffic.md): Deprecated. A Boolean value that indicates whether the map displays traffic information.

# setCamera:animated: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

Changes the camera to use for determining the map’s viewing parameters, and optionally animates the change.

## Declaration

```objectivec
- (void) setCamera:(MKMapCamera *) camera animated:(BOOL) animated;
```

## Parameters

- `camera`: The camera object containing the viewing angle information. This parameter can’t be `nil`.
- `animated`: Specify [true](https://developer.apple.com/documentation/swift/true) if you want the map view to animate the change in viewing angle, or [false](https://developer.apple.com/documentation/swift/false) if you want the map to reflect the changes without animations.

## See Also

### Configuring the map display

- [camera](camera.md): The camera to use for determining the appearance of the map.
- [showsCompass](showscompass.md): A Boolean value that indicates whether the map displays a compass control.
- [showsPitchControl](showspitchcontrol.md): A Boolean value that indicates whether the map displays the pitch control.
- [showsScale](showsscale.md): A Boolean value that indicates whether the map shows scale information.
- [showsZoomControls](showszoomcontrols.md): A Boolean value that indicates whether the map displays zoom controls.
- [showsBuildings](showsbuildings.md): Deprecated. A Boolean value that indicates whether the map displays extruded building information on supported map types.
- [showsPointsOfInterest](showspointsofinterest.md): Deprecated. A Boolean value that indicates whether the map displays point-of-interest information.
- [pointOfInterestFilter](pointofinterestfilter.md): Deprecated. The filter to use for determining the points of interest that appear on the map.
- [showsTraffic](showstraffic.md): Deprecated. A Boolean value that indicates whether the map displays traffic information.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/showszoomcontrols](https://developer.apple.com/documentation/mapkit/mkmapview/showszoomcontrols)

# showsZoomControls (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.9+

A Boolean value that indicates whether the map displays zoom controls.

## Declaration

```swift
var showsZoomControls: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

In macOS, use this property to show or hide the controls that let users change the zoom level of the map.

## See Also

### Configuring the map display

- [setCamera(\_:animated:)](setcamera%28__animated_%29.md): Changes the camera to use for determining the map’s viewing parameters, and optionally animates the change.
- [camera](camera.md): The camera to use for determining the appearance of the map.
- [showsCompass](showscompass.md): A Boolean value that indicates whether the map displays a compass control.
- [showsPitchControl](showspitchcontrol.md): A Boolean value that indicates whether the map displays the pitch control.
- [showsScale](showsscale.md): A Boolean value that indicates whether the map shows scale information.
- [showsBuildings](showsbuildings.md): Deprecated. A Boolean value that indicates whether the map displays extruded building information on supported map types.
- [showsPointsOfInterest](showspointsofinterest.md): Deprecated. A Boolean value that indicates whether the map displays point-of-interest information.
- [pointOfInterestFilter](pointofinterestfilter.md): Deprecated. The filter to use for determining the points of interest that appear on the map.
- [showsTraffic](showstraffic.md): Deprecated. A Boolean value that indicates whether the map displays traffic information.

# showsZoomControls (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.1+ · macOS 10.9+

A Boolean value that indicates whether the map displays zoom controls.

## Declaration

```objectivec
@property (nonatomic) BOOL showsZoomControls;
```

<a id="Discussion"></a>

## Discussion

In macOS, use this property to show or hide the controls that let users change the zoom level of the map.

## See Also

### Configuring the map display

- [setCamera:animated:](setcamera%28__animated_%29.md): Changes the camera to use for determining the map’s viewing parameters, and optionally animates the change.
- [camera](camera.md): The camera to use for determining the appearance of the map.
- [showsCompass](showscompass.md): A Boolean value that indicates whether the map displays a compass control.
- [showsPitchControl](showspitchcontrol.md): A Boolean value that indicates whether the map displays the pitch control.
- [showsScale](showsscale.md): A Boolean value that indicates whether the map shows scale information.
- [showsBuildings](showsbuildings.md): Deprecated. A Boolean value that indicates whether the map displays extruded building information on supported map types.
- [showsPointsOfInterest](showspointsofinterest.md): Deprecated. A Boolean value that indicates whether the map displays point-of-interest information.
- [pointOfInterestFilter](pointofinterestfilter.md): Deprecated. The filter to use for determining the points of interest that appear on the map.
- [showsTraffic](showstraffic.md): Deprecated. A Boolean value that indicates whether the map displays traffic information.

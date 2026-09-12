> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/camera](https://developer.apple.com/documentation/mapkit/mkmapview/camera)

# camera (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The camera to use for determining the appearance of the map.

## Declaration

```swift
@NSCopying var camera: MKMapCamera { get set }
```

<a id="Discussion"></a>

## Discussion

A camera object defines a point above the map’s surface from which to view the map. Applying a camera to a map can have the effect of giving the map a 3D-like appearance. You can use a camera to rotate the map so that it orients to match the user’s heading or to apply a pitch angle to tilt the plane of the map. You can check the map’s [isPitchEnabled](ispitchenabled.md) property to determine whether the map can use pitch.

Assigning a new camera to this property updates the map immediately and without animating the change. If you want to animate changes in camera position, use the [setCamera(\_:animated:)](setcamera%28__animated_%29.md) method instead.

Don’t set this property to `nil`. To restore the map to a flat appearance, apply a camera with a pitch angle of `0`, which yields a camera looking straight down onto the map surface.

## See Also

### Configuring the map display

- [setCamera(\_:animated:)](setcamera%28__animated_%29.md): Changes the camera to use for determining the map’s viewing parameters, and optionally animates the change.
- [showsCompass](showscompass.md): A Boolean value that indicates whether the map displays a compass control.
- [showsPitchControl](showspitchcontrol.md): A Boolean value that indicates whether the map displays the pitch control.
- [showsScale](showsscale.md): A Boolean value that indicates whether the map shows scale information.
- [showsZoomControls](showszoomcontrols.md): A Boolean value that indicates whether the map displays zoom controls.
- [showsBuildings](showsbuildings.md): Deprecated. A Boolean value that indicates whether the map displays extruded building information on supported map types.
- [showsPointsOfInterest](showspointsofinterest.md): Deprecated. A Boolean value that indicates whether the map displays point-of-interest information.
- [pointOfInterestFilter](pointofinterestfilter.md): Deprecated. The filter to use for determining the points of interest that appear on the map.
- [showsTraffic](showstraffic.md): Deprecated. A Boolean value that indicates whether the map displays traffic information.

# camera (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The camera to use for determining the appearance of the map.

## Declaration

```objectivec
@property (nonatomic, copy) MKMapCamera * camera;
```

<a id="Discussion"></a>

## Discussion

A camera object defines a point above the map’s surface from which to view the map. Applying a camera to a map can have the effect of giving the map a 3D-like appearance. You can use a camera to rotate the map so that it orients to match the user’s heading or to apply a pitch angle to tilt the plane of the map. You can check the map’s [pitchEnabled](ispitchenabled.md) property to determine whether the map can use pitch.

Assigning a new camera to this property updates the map immediately and without animating the change. If you want to animate changes in camera position, use the [setCamera:animated:](setcamera%28__animated_%29.md) method instead.

Don’t set this property to `nil`. To restore the map to a flat appearance, apply a camera with a pitch angle of `0`, which yields a camera looking straight down onto the map surface.

## See Also

### Configuring the map display

- [setCamera:animated:](setcamera%28__animated_%29.md): Changes the camera to use for determining the map’s viewing parameters, and optionally animates the change.
- [showsCompass](showscompass.md): A Boolean value that indicates whether the map displays a compass control.
- [showsPitchControl](showspitchcontrol.md): A Boolean value that indicates whether the map displays the pitch control.
- [showsScale](showsscale.md): A Boolean value that indicates whether the map shows scale information.
- [showsZoomControls](showszoomcontrols.md): A Boolean value that indicates whether the map displays zoom controls.
- [showsBuildings](showsbuildings.md): Deprecated. A Boolean value that indicates whether the map displays extruded building information on supported map types.
- [showsPointsOfInterest](showspointsofinterest.md): Deprecated. A Boolean value that indicates whether the map displays point-of-interest information.
- [pointOfInterestFilter](pointofinterestfilter.md): Deprecated. The filter to use for determining the points of interest that appear on the map.
- [showsTraffic](showstraffic.md): Deprecated. A Boolean value that indicates whether the map displays traffic information.

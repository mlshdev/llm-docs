> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/pointofinterestfilter](https://developer.apple.com/documentation/mapkit/mkmapview/pointofinterestfilter)

# pointOfInterestFilter (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The filter to use for determining the points of interest that appear on the map.

> Use one of the map configurations that support an [MKPointOfInterestFilter](../mkpointofinterestfilter.md), such as  [MKStandardMapConfiguration](../mkstandardmapconfiguration.md) or [MKHybridMapConfiguration](../mkhybridmapconfiguration.md) instead.

## Declaration

```swift
@NSCopying var pointOfInterestFilter: MKPointOfInterestFilter? { get set }
```

## See Also

### Configuring the map display

- [setCamera(\_:animated:)](setcamera%28__animated_%29.md): Changes the camera to use for determining the map’s viewing parameters, and optionally animates the change.
- [camera](camera.md): The camera to use for determining the appearance of the map.
- [showsCompass](showscompass.md): A Boolean value that indicates whether the map displays a compass control.
- [showsPitchControl](showspitchcontrol.md): A Boolean value that indicates whether the map displays the pitch control.
- [showsScale](showsscale.md): A Boolean value that indicates whether the map shows scale information.
- [showsZoomControls](showszoomcontrols.md): A Boolean value that indicates whether the map displays zoom controls.
- [showsBuildings](showsbuildings.md): Deprecated. A Boolean value that indicates whether the map displays extruded building information on supported map types.
- [showsPointsOfInterest](showspointsofinterest.md): Deprecated. A Boolean value that indicates whether the map displays point-of-interest information.
- [showsTraffic](showstraffic.md): Deprecated. A Boolean value that indicates whether the map displays traffic information.

# pointOfInterestFilter (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ (deprecated in 27.0) · iPadOS 13.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.15+ (deprecated in 27.0) · tvOS 13.0+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The filter to use for determining the points of interest that appear on the map.

> Use one of the map configurations that support an [MKPointOfInterestFilter](../mkpointofinterestfilter.md), such as  [MKStandardMapConfiguration](../mkstandardmapconfiguration.md) or [MKHybridMapConfiguration](../mkhybridmapconfiguration.md) instead.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) MKPointOfInterestFilter * pointOfInterestFilter;
```

## See Also

### Configuring the map display

- [setCamera:animated:](setcamera%28__animated_%29.md): Changes the camera to use for determining the map’s viewing parameters, and optionally animates the change.
- [camera](camera.md): The camera to use for determining the appearance of the map.
- [showsCompass](showscompass.md): A Boolean value that indicates whether the map displays a compass control.
- [showsPitchControl](showspitchcontrol.md): A Boolean value that indicates whether the map displays the pitch control.
- [showsScale](showsscale.md): A Boolean value that indicates whether the map shows scale information.
- [showsZoomControls](showszoomcontrols.md): A Boolean value that indicates whether the map displays zoom controls.
- [showsBuildings](showsbuildings.md): Deprecated. A Boolean value that indicates whether the map displays extruded building information on supported map types.
- [showsPointsOfInterest](showspointsofinterest.md): Deprecated. A Boolean value that indicates whether the map displays point-of-interest information.
- [showsTraffic](showstraffic.md): Deprecated. A Boolean value that indicates whether the map displays traffic information.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/showstraffic](https://developer.apple.com/documentation/mapkit/mkmapview/showstraffic)

# showsTraffic (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0) · tvOS 9.2+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A Boolean value that indicates whether the map displays traffic information.

> Use [MKStandardMapConfiguration](../mkstandardmapconfiguration.md) or [MKHybridMapConfiguration](../mkhybridmapconfiguration.md) and configure the `showsTraffic` property instead.

## Declaration

```swift
var showsTraffic: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

The [mapType](maptype.md) property must be set to [MKMapType.standard](../mkmaptype/standard.md) or [MKMapType.hybrid](../mkmaptype/hybrid.md) for traffic information to be shown. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

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
- [pointOfInterestFilter](pointofinterestfilter.md): Deprecated. The filter to use for determining the points of interest that appear on the map.

# showsTraffic (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 9.0+ (deprecated in 27.0) · iPadOS 9.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.11+ (deprecated in 27.0) · tvOS 9.2+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A Boolean value that indicates whether the map displays traffic information.

> Use [MKStandardMapConfiguration](../mkstandardmapconfiguration.md) or [MKHybridMapConfiguration](../mkhybridmapconfiguration.md) and configure the `showsTraffic` property instead.

## Declaration

```objectivec
@property (nonatomic) BOOL showsTraffic;
```

<a id="Discussion"></a>

## Discussion

The [mapType](maptype.md) property must be set to [MKMapTypeStandard](../mkmaptype/standard.md) or [MKMapTypeHybrid](../mkmaptype/hybrid.md) for traffic information to be shown. The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

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
- [pointOfInterestFilter](pointofinterestfilter.md): Deprecated. The filter to use for determining the points of interest that appear on the map.

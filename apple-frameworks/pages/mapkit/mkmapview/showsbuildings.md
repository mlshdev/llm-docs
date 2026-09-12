> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapview/showsbuildings](https://developer.apple.com/documentation/mapkit/mkmapview/showsbuildings)

# showsBuildings (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.9+ (deprecated in 27.0) · tvOS 9.2+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A Boolean value that indicates whether the map displays extruded building information on supported map types.

> Use [MKStandardMapConfiguration](../mkstandardmapconfiguration.md) instead.

## Declaration

```swift
var showsBuildings: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  In iOS 16 and macOS 13, and later, when overlay content is present, this property has no effect and the map renders buildings and trees as transparent. This enables content to be clearly visible while preserving the context of the surroundings.

When this property is [true](https://developer.apple.com/documentation/swift/true) and the camera has a pitch angle greater than zero, the map extrudes buildings so that they extend above the map plane, creating a 3D effect. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

To display extruded buildings, set the [mapType](maptype.md) property to [MKMapType.standard](../mkmaptype/standard.md) or [MKMapType.mutedStandard](../mkmaptype/mutedstandard.md).

## See Also

### Configuring the map display

- [setCamera(\_:animated:)](setcamera%28__animated_%29.md): Changes the camera to use for determining the map’s viewing parameters, and optionally animates the change.
- [camera](camera.md): The camera to use for determining the appearance of the map.
- [showsCompass](showscompass.md): A Boolean value that indicates whether the map displays a compass control.
- [showsPitchControl](showspitchcontrol.md): A Boolean value that indicates whether the map displays the pitch control.
- [showsScale](showsscale.md): A Boolean value that indicates whether the map shows scale information.
- [showsZoomControls](showszoomcontrols.md): A Boolean value that indicates whether the map displays zoom controls.
- [showsPointsOfInterest](showspointsofinterest.md): Deprecated. A Boolean value that indicates whether the map displays point-of-interest information.
- [pointOfInterestFilter](pointofinterestfilter.md): Deprecated. The filter to use for determining the points of interest that appear on the map.
- [showsTraffic](showstraffic.md): Deprecated. A Boolean value that indicates whether the map displays traffic information.

# showsBuildings (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.9+ (deprecated in 27.0) · tvOS 9.2+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A Boolean value that indicates whether the map displays extruded building information on supported map types.

> Use [MKStandardMapConfiguration](../mkstandardmapconfiguration.md) instead.

## Declaration

```objectivec
@property (nonatomic) BOOL showsBuildings;
```

<a id="Discussion"></a>

## Discussion

> **Note**

>  In iOS 16 and macOS 13, and later, when overlay content is present, this property has no effect and the map renders buildings and trees as transparent. This enables content to be clearly visible while preserving the context of the surroundings.

When this property is [true](https://developer.apple.com/documentation/swift/true) and the camera has a pitch angle greater than zero, the map extrudes buildings so that they extend above the map plane, creating a 3D effect. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

To display extruded buildings, set the [mapType](maptype.md) property to [MKMapTypeStandard](../mkmaptype/standard.md) or [MKMapTypeMutedStandard](../mkmaptype/mutedstandard.md).

## See Also

### Configuring the map display

- [setCamera:animated:](setcamera%28__animated_%29.md): Changes the camera to use for determining the map’s viewing parameters, and optionally animates the change.
- [camera](camera.md): The camera to use for determining the appearance of the map.
- [showsCompass](showscompass.md): A Boolean value that indicates whether the map displays a compass control.
- [showsPitchControl](showspitchcontrol.md): A Boolean value that indicates whether the map displays the pitch control.
- [showsScale](showsscale.md): A Boolean value that indicates whether the map shows scale information.
- [showsZoomControls](showszoomcontrols.md): A Boolean value that indicates whether the map displays zoom controls.
- [showsPointsOfInterest](showspointsofinterest.md): Deprecated. A Boolean value that indicates whether the map displays point-of-interest information.
- [pointOfInterestFilter](pointofinterestfilter.md): Deprecated. The filter to use for determining the points of interest that appear on the map.
- [showsTraffic](showstraffic.md): Deprecated. A Boolean value that indicates whether the map displays traffic information.

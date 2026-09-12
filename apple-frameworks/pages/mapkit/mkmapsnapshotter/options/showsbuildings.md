> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapsnapshotter/options/showsbuildings](https://developer.apple.com/documentation/mapkit/mkmapsnapshotter/options/showsbuildings)

# showsBuildings (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.9+ (deprecated in 27.0) · tvOS 9.2+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A Boolean that indicates whether the map displays extruded building information.

> MapKit no longer supports this option.

## Declaration

```swift
var showsBuildings: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When you set this property to [true](https://developer.apple.com/documentation/swift/true) and the camera has a pitch angle greater than 0, the map extrudes buildings so that they appear to extend above the map plane, creating a 3D effect. You need to set the [mapType](maptype.md) property must to [MKMapType.standard](../../mkmaptype/standard.md) for the map to display extruded buildings. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the map data

- [preferredConfiguration](preferredconfiguration.md): The map configuration style to use for snapshots.
- [mapType](maptype.md): Deprecated. The map’s visual style.
- [pointOfInterestFilter](pointofinterestfilter.md): Deprecated. The filter to use for determining the points of interest that appear in the snapshot.
- [showsPointsOfInterest](showspointsofinterest.md): Deprecated. A Boolean value that indicates whether the map displays point-of-interest information.

# showsBuildings (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ (deprecated in 27.0) · iPadOS 7.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · macOS 10.9+ (deprecated in 27.0) · tvOS 9.2+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

A Boolean that indicates whether the map displays extruded building information.

> MapKit no longer supports this option.

## Declaration

```objectivec
@property (nonatomic) BOOL showsBuildings;
```

<a id="Discussion"></a>

## Discussion

When you set this property to [true](https://developer.apple.com/documentation/swift/true) and the camera has a pitch angle greater than 0, the map extrudes buildings so that they appear to extend above the map plane, creating a 3D effect. You need to set the [mapType](maptype.md) property must to [MKMapTypeStandard](../../mkmaptype/standard.md) for the map to display extruded buildings. The default value of this property is [true](https://developer.apple.com/documentation/swift/true).

## See Also

### Configuring the map data

- [preferredConfiguration](preferredconfiguration.md): The map configuration style to use for snapshots.
- [mapType](maptype.md): Deprecated. The map’s visual style.
- [pointOfInterestFilter](pointofinterestfilter.md): Deprecated. The filter to use for determining the points of interest that appear in the snapshot.
- [showsPointsOfInterest](showspointsofinterest.md): Deprecated. A Boolean value that indicates whether the map displays point-of-interest information.

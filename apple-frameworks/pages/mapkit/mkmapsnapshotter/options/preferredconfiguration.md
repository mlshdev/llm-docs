> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkmapsnapshotter/options/preferredconfiguration](https://developer.apple.com/documentation/mapkit/mkmapsnapshotter/options/preferredconfiguration)

# preferredConfiguration (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The map configuration style to use for snapshots.

## Declaration

```swift
@NSCopying var preferredConfiguration: MKMapConfiguration { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to one of the [MKMapConfiguration](../../mkmapconfiguration.md) subclasses to configure the map style to use when making map snapshots.

## See Also

### Configuring the map data

- [mapType](maptype.md): Deprecated. The map’s visual style.
- [showsBuildings](showsbuildings.md): Deprecated. A Boolean that indicates whether the map displays extruded building information.
- [pointOfInterestFilter](pointofinterestfilter.md): Deprecated. The filter to use for determining the points of interest that appear in the snapshot.
- [showsPointsOfInterest](showspointsofinterest.md): Deprecated. A Boolean value that indicates whether the map displays point-of-interest information.

# preferredConfiguration (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The map configuration style to use for snapshots.

## Declaration

```objectivec
@property (nonatomic, copy) MKMapConfiguration * preferredConfiguration;
```

<a id="Discussion"></a>

## Discussion

Set this property to one of the [MKMapConfiguration](../../mkmapconfiguration.md) subclasses to configure the map style to use when making map snapshots.

## See Also

### Configuring the map data

- [mapType](maptype.md): Deprecated. The map’s visual style.
- [showsBuildings](showsbuildings.md): Deprecated. A Boolean that indicates whether the map displays extruded building information.
- [pointOfInterestFilter](pointofinterestfilter.md): Deprecated. The filter to use for determining the points of interest that appear in the snapshot.
- [showsPointsOfInterest](showspointsofinterest.md): Deprecated. A Boolean value that indicates whether the map displays point-of-interest information.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapstyle/standard(elevation:emphasis:pointsofinterest:showstraffic:)](https://developer.apple.com/documentation/mapkit/mapstyle/standard(elevation:emphasis:pointsofinterest:showstraffic:))

# standard(elevation:emphasis:pointsOfInterest:showsTraffic:)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Creates a standard map style that includes the elevation, point of interest, and traffic characteristics you specify.

## Declaration

```swift
static func standard(elevation: MapStyle.Elevation = .automatic, emphasis: MapStyle.StandardEmphasis = .automatic, pointsOfInterest: PointOfInterestCategories = .all, showsTraffic: Bool = false) -> MapStyle
```

## Parameters

- `elevation`: One of the [MapStyle.Elevation](elevation.md) values that determines whether the framework renders map elevation.
- `emphasis`: One of the [MapStyle.StandardEmphasis](standardemphasis.md) values that controls how the framework emphasizes map features.
- `pointsOfInterest`: A collection of [PointOfInterestCategories](../pointofinterestcategories.md) displayed on the map.
- `showsTraffic`: A Boolean value that indicates whether the map displays traffic.

<a id="return-value"></a>

## Return Value

A [MapStyle](../mapstyle.md) with the configuration you specified.

## See Also

### Creating map styles

- [hybrid(elevation:pointsOfInterest:showsTraffic:)](hybrid%28elevation_pointsofinterest_showstraffic_%29.md): Creates a hybrid map style that includes the elevation, point of interest, and traffic characteristics you specify.
- [imagery(elevation:)](imagery%28elevation_%29.md): Creates a map style based on satellite imagery with the elevation characteristics you specify.
- [MapStyle.Elevation](elevation.md): Values you use to determine whether a map renders elevation.
- [MapStyle.StandardEmphasis](standardemphasis.md): Values that control how the framework emphasizes map features.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapstyle/imagery(elevation:)](https://developer.apple.com/documentation/mapkit/mapstyle/imagery(elevation:))

# imagery(elevation:)

**Framework:** MapKit  
**Kind:** Type Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Creates a map style based on satellite imagery with the elevation characteristics you specify.

## Declaration

```swift
static func imagery(elevation: MapStyle.Elevation = .automatic) -> MapStyle
```

## Parameters

- `elevation`: One of the [MapStyle.Elevation](elevation.md) values that determines how the map renders elevation.

<a id="return-value"></a>

## Return Value

A [MapStyle](../mapstyle.md) with the elevation style you specified.

<a id="Discussion"></a>

## Discussion

> **Note**

>  In watchOS, depending on rendering calculations, MapKit may render the map using the Standard map style rather than requested Hybrid or Imagery styles.

## See Also

### Creating map styles

- [hybrid(elevation:pointsOfInterest:showsTraffic:)](hybrid%28elevation_pointsofinterest_showstraffic_%29.md): Creates a hybrid map style that includes the elevation, point of interest, and traffic characteristics you specify.
- [standard(elevation:emphasis:pointsOfInterest:showsTraffic:)](standard%28elevation_emphasis_pointsofinterest_showstraffic_%29.md): Creates a standard map style that includes the elevation, point of interest, and traffic characteristics you specify.
- [MapStyle.Elevation](elevation.md): Values you use to determine whether a map renders elevation.
- [MapStyle.StandardEmphasis](standardemphasis.md): Values that control how the framework emphasizes map features.

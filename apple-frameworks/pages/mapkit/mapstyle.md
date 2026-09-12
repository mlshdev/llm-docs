> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapstyle](https://developer.apple.com/documentation/mapkit/mapstyle)

# MapStyle

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A style that you can apply to a map.

## Declaration

```swift
struct MapStyle
```

## Topics

### Creating map styles

- [hybrid(elevation:pointsOfInterest:showsTraffic:)](mapstyle/hybrid%28elevation_pointsofinterest_showstraffic_%29.md): Creates a hybrid map style that includes the elevation, point of interest, and traffic characteristics you specify.
- [imagery(elevation:)](mapstyle/imagery%28elevation_%29.md): Creates a map style based on satellite imagery with the elevation characteristics you specify.
- [standard(elevation:emphasis:pointsOfInterest:showsTraffic:)](mapstyle/standard%28elevation_emphasis_pointsofinterest_showstraffic_%29.md): Creates a standard map style that includes the elevation, point of interest, and traffic characteristics you specify.
- [MapStyle.Elevation](mapstyle/elevation.md): Values you use to determine whether a map renders elevation.
- [MapStyle.StandardEmphasis](mapstyle/standardemphasis.md): Values that control how the framework emphasizes map features.

### Map styles

- [hybrid](mapstyle/hybrid.md): A map style that represents a satellite image of the area, including the paths of roads with their names layered on top.
- [imagery](mapstyle/imagery.md): A map style that represents a satellite image of the area the map displays.
- [standard](mapstyle/standard.md): A map style that represents the default map presentation, which is a street map that shows the position of all roads and some road names, depending upon the zoom level of the map.

## See Also

### Essentials

- [Map](map.md): A view that displays an embedded map interface.

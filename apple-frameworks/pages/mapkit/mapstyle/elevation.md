> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapstyle/elevation](https://developer.apple.com/documentation/mapkit/mapstyle/elevation)

# MapStyle.Elevation

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

Values you use to determine whether a map renders elevation.

## Declaration

```swift
struct Elevation
```

## Topics

### Elevation styles

- [automatic](elevation/automatic.md): The default elevation style, that renders a flat, 2D map.
- [flat](elevation/flat.md): A value that renders a flat, 2D map.
- [realistic](elevation/realistic.md): A value that renders a realistic, 3D map.

## See Also

### Creating map styles

- [hybrid(elevation:pointsOfInterest:showsTraffic:)](hybrid%28elevation_pointsofinterest_showstraffic_%29.md): Creates a hybrid map style that includes the elevation, point of interest, and traffic characteristics you specify.
- [imagery(elevation:)](imagery%28elevation_%29.md): Creates a map style based on satellite imagery with the elevation characteristics you specify.
- [standard(elevation:emphasis:pointsOfInterest:showsTraffic:)](standard%28elevation_emphasis_pointsofinterest_showstraffic_%29.md): Creates a standard map style that includes the elevation, point of interest, and traffic characteristics you specify.
- [MapStyle.StandardEmphasis](standardemphasis.md): Values that control how the framework emphasizes map features.

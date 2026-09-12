> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mktileoverlay/maximumz](https://developer.apple.com/documentation/mapkit/mktileoverlay/maximumz)

# maximumZ (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The maximum zoom level that the tiles of this overlay object support.

## Declaration

```swift
var maximumZ: Int { get set }
```

<a id="Discussion"></a>

## Discussion

If you use different overlay objects to represent different tiles at different zoom levels, use this property to specify the maximum zoom level that this overlay’s tiles support. At zoom level 0, tiles cover the entire world map; at zoom level 1, tiles cover 1/4 of the world; at zoom level 2, tiles cover 1/16 of the world, and so on. The map doesn’t attempt to load tiles for a zoom level greater than the value that this property specifies.

The default value of this property is `21`. Setting the value of this property to a number greater than the default doesn’t ensure the use of those extra zoom levels.

## See Also

### Accessing the tile attributes

- [tileSize](tilesize.md): The size (in pixels) of your tile images.
- [isGeometryFlipped](isgeometryflipped.md): A Boolean value that indicates the orientation of tile indexes along the y-axis.
- [minimumZ](minimumz.md): The minimum zoom level that the tiles of this overlay object support.
- [canReplaceMapContent](canreplacemapcontent.md): A Boolean value that indicates whether the tile content is fully opaque.

# maximumZ (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The maximum zoom level that the tiles of this overlay object support.

## Declaration

```objectivec
@property (atomic) NSInteger maximumZ;
```

<a id="Discussion"></a>

## Discussion

If you use different overlay objects to represent different tiles at different zoom levels, use this property to specify the maximum zoom level that this overlay’s tiles support. At zoom level 0, tiles cover the entire world map; at zoom level 1, tiles cover 1/4 of the world; at zoom level 2, tiles cover 1/16 of the world, and so on. The map doesn’t attempt to load tiles for a zoom level greater than the value that this property specifies.

The default value of this property is `21`. Setting the value of this property to a number greater than the default doesn’t ensure the use of those extra zoom levels.

## See Also

### Accessing the tile attributes

- [tileSize](tilesize.md): The size (in pixels) of your tile images.
- [geometryFlipped](isgeometryflipped.md): A Boolean value that indicates the orientation of tile indexes along the y-axis.
- [minimumZ](minimumz.md): The minimum zoom level that the tiles of this overlay object support.
- [canReplaceMapContent](canreplacemapcontent.md): A Boolean value that indicates whether the tile content is fully opaque.

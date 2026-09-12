> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mktileoverlay/isgeometryflipped](https://developer.apple.com/documentation/mapkit/mktileoverlay/isgeometryflipped)

# isGeometryFlipped (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

A Boolean value that indicates the orientation of tile indexes along the y-axis.

## Declaration

```swift
var isGeometryFlipped: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

When set to [false](https://developer.apple.com/documentation/swift/false), tile indexes start in the upper-left corner of the map and proceed down and to the right. Thus, the tile at `(0, 0)`is in the upper-left corner of the map, the tile at `(1, 0)` is to its immediate right and the tile at `(0, 1)` is immediately below it. Setting this property to [true](https://developer.apple.com/documentation/swift/true) causes the map to start indexes at the lower-left corner of the map and proceed up and to the right.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing the tile attributes

- [tileSize](tilesize.md): The size (in pixels) of your tile images.
- [minimumZ](minimumz.md): The minimum zoom level that the tiles of this overlay object support.
- [maximumZ](maximumz.md): The maximum zoom level that the tiles of this overlay object support.
- [canReplaceMapContent](canreplacemapcontent.md): A Boolean value that indicates whether the tile content is fully opaque.

# geometryFlipped (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

A Boolean value that indicates the orientation of tile indexes along the y-axis.

## Declaration

```objectivec
@property (atomic, getter=isGeometryFlipped) BOOL geometryFlipped;
```

<a id="Discussion"></a>

## Discussion

When set to [false](https://developer.apple.com/documentation/swift/false), tile indexes start in the upper-left corner of the map and proceed down and to the right. Thus, the tile at `(0, 0)`is in the upper-left corner of the map, the tile at `(1, 0)` is to its immediate right and the tile at `(0, 1)` is immediately below it. Setting this property to [true](https://developer.apple.com/documentation/swift/true) causes the map to start indexes at the lower-left corner of the map and proceed up and to the right.

The default value of this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing the tile attributes

- [tileSize](tilesize.md): The size (in pixels) of your tile images.
- [minimumZ](minimumz.md): The minimum zoom level that the tiles of this overlay object support.
- [maximumZ](maximumz.md): The maximum zoom level that the tiles of this overlay object support.
- [canReplaceMapContent](canreplacemapcontent.md): A Boolean value that indicates whether the tile content is fully opaque.

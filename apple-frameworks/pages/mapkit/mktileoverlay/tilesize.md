> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mktileoverlay/tilesize](https://developer.apple.com/documentation/mapkit/mktileoverlay/tilesize)

# tileSize (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The size (in pixels) of your tile images.

## Declaration

```swift
var tileSize: CGSize { get set }
```

<a id="Discussion"></a>

## Discussion

On Retina displays, the system renders images pixel for pixel and doesn’t scale them. This means that if the tile size is 256 x 256 pixels and the scale factor is `2.0`, the system renders the image as if it is 128 x 128 points in size. This behavior causes the tile to appear smaller, but preserves the original image data.

The default tile size is 256 x 256 pixels.

## See Also

### Accessing the tile attributes

- [isGeometryFlipped](isgeometryflipped.md): A Boolean value that indicates the orientation of tile indexes along the y-axis.
- [minimumZ](minimumz.md): The minimum zoom level that the tiles of this overlay object support.
- [maximumZ](maximumz.md): The maximum zoom level that the tiles of this overlay object support.
- [canReplaceMapContent](canreplacemapcontent.md): A Boolean value that indicates whether the tile content is fully opaque.

# tileSize (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The size (in pixels) of your tile images.

## Declaration

```objectivec
@property (atomic) CGSize tileSize;
```

<a id="Discussion"></a>

## Discussion

On Retina displays, the system renders images pixel for pixel and doesn’t scale them. This means that if the tile size is 256 x 256 pixels and the scale factor is `2.0`, the system renders the image as if it is 128 x 128 points in size. This behavior causes the tile to appear smaller, but preserves the original image data.

The default tile size is 256 x 256 pixels.

## See Also

### Accessing the tile attributes

- [geometryFlipped](isgeometryflipped.md): A Boolean value that indicates the orientation of tile indexes along the y-axis.
- [minimumZ](minimumz.md): The minimum zoom level that the tiles of this overlay object support.
- [maximumZ](maximumz.md): The maximum zoom level that the tiles of this overlay object support.
- [canReplaceMapContent](canreplacemapcontent.md): A Boolean value that indicates whether the tile content is fully opaque.

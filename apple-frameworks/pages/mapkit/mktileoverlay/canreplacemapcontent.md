> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mktileoverlay/canreplacemapcontent](https://developer.apple.com/documentation/mapkit/mktileoverlay/canreplacemapcontent)

# canReplaceMapContent (Swift)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

A Boolean value that indicates whether the tile content is fully opaque.

## Declaration

```swift
var canReplaceMapContent: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

If the tile content you provide can cover the entire drawing area with opaque content, set this property to [true](https://developer.apple.com/documentation/swift/true). Doing so serves as a hint to the map view that it doesn’t need to draw any additional content underneath your tiles. Set this property to [false](https://developer.apple.com/documentation/swift/false) if your tiles contain any transparency.

The default value for this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing the tile attributes

- [tileSize](tilesize.md): The size (in pixels) of your tile images.
- [isGeometryFlipped](isgeometryflipped.md): A Boolean value that indicates the orientation of tile indexes along the y-axis.
- [minimumZ](minimumz.md): The minimum zoom level that the tiles of this overlay object support.
- [maximumZ](maximumz.md): The maximum zoom level that the tiles of this overlay object support.

# canReplaceMapContent (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Property  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

A Boolean value that indicates whether the tile content is fully opaque.

## Declaration

```objectivec
@property (nonatomic) BOOL canReplaceMapContent;
```

<a id="Discussion"></a>

## Discussion

If the tile content you provide can cover the entire drawing area with opaque content, set this property to [true](https://developer.apple.com/documentation/swift/true). Doing so serves as a hint to the map view that it doesn’t need to draw any additional content underneath your tiles. Set this property to [false](https://developer.apple.com/documentation/swift/false) if your tiles contain any transparency.

The default value for this property is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Accessing the tile attributes

- [tileSize](tilesize.md): The size (in pixels) of your tile images.
- [geometryFlipped](isgeometryflipped.md): A Boolean value that indicates the orientation of tile indexes along the y-axis.
- [minimumZ](minimumz.md): The minimum zoom level that the tiles of this overlay object support.
- [maximumZ](maximumz.md): The maximum zoom level that the tiles of this overlay object support.

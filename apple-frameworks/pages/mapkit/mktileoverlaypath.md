> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mktileoverlaypath](https://developer.apple.com/documentation/mapkit/mktileoverlaypath)

# MKTileOverlayPath (Swift)

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Values that specify the path indexes for a single overlay tile.

## Declaration

```swift
struct MKTileOverlayPath
```

## Topics

### Creating a tile overlay path

- [init()](mktileoverlaypath/init%28%29.md): Creates a new tile overlay path.
- [init(x:y:z:contentScaleFactor:)](mktileoverlaypath/init%28x_y_z_contentscalefactor_%29.md): Creates a new overlay path with the specified indexes and content scale factor.

### Instance properties

- [x](mktileoverlaypath/x.md): The index of the tile along the x-axis of the map.
- [y](mktileoverlaypath/y.md): The index of the tile along the y-axis of the map.
- [z](mktileoverlaypath/z.md): The index of the tile along the z-axis of the map.
- [contentScaleFactor](mktileoverlaypath/contentscalefactor.md): The tile’s intended screen scale factor.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)

## See Also

### Customizing the loading of tiles

- [urlTemplate](mktileoverlay/urltemplate.md): The template for generating tile image URLs.
- [url(forTilePath:)](mktileoverlay/url%28fortilepath_%29.md): Returns the URL to use to access the specified tile.
- [loadTile(at:result:)](mktileoverlay/loadtile%28at_result_%29.md): Loads the specified tile asynchronously.

# MKTileOverlayPath (Objective-C)

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Values that specify the path indexes for a single overlay tile.

## Declaration

```objectivec
typedef struct { ... } MKTileOverlayPath;
```

## Topics

### Instance properties

- [x](mktileoverlaypath/x.md): The index of the tile along the x-axis of the map.
- [y](mktileoverlaypath/y.md): The index of the tile along the y-axis of the map.
- [z](mktileoverlaypath/z.md): The index of the tile along the z-axis of the map.
- [contentScaleFactor](mktileoverlaypath/contentscalefactor.md): The tile’s intended screen scale factor.

## See Also

### Customizing the loading of tiles

- [URLTemplate](mktileoverlay/urltemplate.md): The template for generating tile image URLs.
- [URLForTilePath:](mktileoverlay/url%28fortilepath_%29.md): Returns the URL to use to access the specified tile.
- [loadTileAtPath:result:](mktileoverlay/loadtile%28at_result_%29.md): Loads the specified tile asynchronously.

> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mktileoverlay/url(fortilepath:)](https://developer.apple.com/documentation/mapkit/mktileoverlay/url(fortilepath:))

# url(forTilePath:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Returns the URL to use to access the specified tile.

## Declaration

```swift
func url(forTilePath path: MKTileOverlayPath) -> URL
```

## Parameters

- `path`: The path structure that identifies the specific tile you want. This structure incorporates the tile’s x-y coordinate at a given zoom level and scale factor.

<a id="return-value"></a>

## Return Value

The URL to use to retrieve the tile.

<a id="Discussion"></a>

## Discussion

The default implementation of this method uses the template string you provide at initialization time to build a URL to the specified tile image. Subclasses can override this method and use a different scheme to provide URLs for tiles. You can locate the tiles either on a local file system or on a remote server.

## See Also

### Related Documentation

- [init(urlTemplate:)](init%28urltemplate_%29-9s8h7.md): Creates and returns a tile overlay object using the specified tile-access template.

### Customizing the loading of tiles

- [urlTemplate](urltemplate.md): The template for generating tile image URLs.
- [loadTile(at:result:)](loadtile%28at_result_%29.md): Loads the specified tile asynchronously.
- [MKTileOverlayPath](../mktileoverlaypath.md): Values that specify the path indexes for a single overlay tile.

# URLForTilePath: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Returns the URL to use to access the specified tile.

## Declaration

```objectivec
- (NSURL *) URLForTilePath:(MKTileOverlayPath) path;
```

## Parameters

- `path`: The path structure that identifies the specific tile you want. This structure incorporates the tile’s x-y coordinate at a given zoom level and scale factor.

<a id="return-value"></a>

## Return Value

The URL to use to retrieve the tile.

<a id="Discussion"></a>

## Discussion

The default implementation of this method uses the template string you provide at initialization time to build a URL to the specified tile image. Subclasses can override this method and use a different scheme to provide URLs for tiles. You can locate the tiles either on a local file system or on a remote server.

## See Also

### Related Documentation

- [initWithURLTemplate:](init%28urltemplate_%29-9s8h7.md): Creates and returns a tile overlay object using the specified tile-access template.

### Customizing the loading of tiles

- [URLTemplate](urltemplate.md): The template for generating tile image URLs.
- [loadTileAtPath:result:](loadtile%28at_result_%29.md): Loads the specified tile asynchronously.
- [MKTileOverlayPath](../mktileoverlaypath.md): Values that specify the path indexes for a single overlay tile.

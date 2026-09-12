> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mktileoverlay/loadtile(at:result:)](https://developer.apple.com/documentation/mapkit/mktileoverlay/loadtile(at:result:))

# loadTile(at:result:) (Swift)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS

Loads the specified tile asynchronously.

## Declaration

```swift
func loadTile(at path: MKTileOverlayPath, result: @escaping @Sendable (Data?, (any Error)?) -> Void)
```

```swift
func loadTile(at path: MKTileOverlayPath) async throws -> Data
```

## Parameters

- `path`: The path structure that identifies the specific tile you want. This structure incorporates the tile’s x-y coordinate at a given zoom level and scale factor.
- `result`: The completion block to call when the tile data is available. The method can execute this block on any queue and takes the following parameters:

  - The `tileData` parameter contains the raw data that loads from the corresponding image file. You can use this data to initialize an image object. If an error occurs, this parameter is `nil`.
  - The `error` parameter contains an error object if there is a problem loading the tile image. If no errors occur, this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

The default implementation of this method uses the [url(forTilePath:)](url%28fortilepath_%29.md) method to retrieve the URL for the specified tile and then loads that tile into memory asynchronously using a [URLSession](../../foundation/urlsession.md) object. The specified tile may be located either on the local file system or on a remote server. Subclasses may override this method and implement their own custom tile-loading behavior.

When a tile overlay renderer (that is, an instance of [MKTileOverlayRenderer](../mktileoverlayrenderer.md)) needs to display tiles, it uses this method to request the data for each tile.

## See Also

### Customizing the loading of tiles

- [urlTemplate](urltemplate.md): The template for generating tile image URLs.
- [url(forTilePath:)](url%28fortilepath_%29.md): Returns the URL to use to access the specified tile.
- [MKTileOverlayPath](../mktileoverlaypath.md): Values that specify the path indexes for a single overlay tile.

# loadTileAtPath:result: (Objective-C)

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · tvOS · visionOS · watchOS

Loads the specified tile asynchronously.

## Declaration

```objectivec
- (void) loadTileAtPath:(MKTileOverlayPath) path result:(void (^)(NSData *tileData, NSError *error)) result;
```

## Parameters

- `path`: The path structure that identifies the specific tile you want. This structure incorporates the tile’s x-y coordinate at a given zoom level and scale factor.
- `result`: The completion block to call when the tile data is available. The method can execute this block on any queue and takes the following parameters:

  - The `tileData` parameter contains the raw data that loads from the corresponding image file. You can use this data to initialize an image object. If an error occurs, this parameter is `nil`.
  - The `error` parameter contains an error object if there is a problem loading the tile image. If no errors occur, this parameter is `nil`.

<a id="Discussion"></a>

## Discussion

The default implementation of this method uses the [URLForTilePath:](url%28fortilepath_%29.md) method to retrieve the URL for the specified tile and then loads that tile into memory asynchronously using a [NSURLSession](../../foundation/urlsession.md) object. The specified tile may be located either on the local file system or on a remote server. Subclasses may override this method and implement their own custom tile-loading behavior.

When a tile overlay renderer (that is, an instance of [MKTileOverlayRenderer](../mktileoverlayrenderer.md)) needs to display tiles, it uses this method to request the data for each tile.

## See Also

### Customizing the loading of tiles

- [URLTemplate](urltemplate.md): The template for generating tile image URLs.
- [URLForTilePath:](url%28fortilepath_%29.md): Returns the URL to use to access the specified tile.
- [MKTileOverlayPath](../mktileoverlaypath.md): Values that specify the path indexes for a single overlay tile.

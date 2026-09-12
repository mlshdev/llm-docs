> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mktileoverlay](https://developer.apple.com/documentation/mapkit/mktileoverlay)

# MKTileOverlay (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

An overlay that covers an area of the map with tiles of bitmap images.

## Declaration

```swift
class MKTileOverlay
```

<a id="overview"></a>

## Overview

You use tile overlay objects to represent your own tile-based content and to coordinate the display of that content in a map view. Your tiles can supplement the underlying map content or replace it completely. A tile overlay object coordinates the loading and management of the tiles, and a corresponding [MKTileOverlayRenderer](mktileoverlayrenderer.md) object handles the actual drawing of the tiles on the map.

You can use a single tile overlay object to represent all of the tiles at one or more zoom levels of the map. The default tile overlay object uses a template string to build URLs so that it can locate the map tiles it needs. Each URL incorporates the x and y index of the map tile, the zoom level it’s intended for, and the scale factor corresponding to the screen resolution on which to display the tile. The default class lets you specify map tiles with indexes that start in either the upper-left corner or lower-left corner of the map. If you use a different indexing scheme for your tiles, you can also subclass and override the [url(forTilePath:)](mktileoverlay/url%28fortilepath_%29.md) or [loadTile(at:result:)](mktileoverlay/loadtile%28at_result_%29.md) methods to map between the requested tile and your custom indexing scheme.

## Topics

### Creating a tile overlay

- [init(urlTemplate:)](mktileoverlay/init%28urltemplate_%29-9s8h7.md): Creates and returns a tile overlay object using the specified tile-access template.

### Accessing the tile attributes

- [tileSize](mktileoverlay/tilesize.md): The size (in pixels) of your tile images.
- [isGeometryFlipped](mktileoverlay/isgeometryflipped.md): A Boolean value that indicates the orientation of tile indexes along the y-axis.
- [minimumZ](mktileoverlay/minimumz.md): The minimum zoom level that the tiles of this overlay object support.
- [maximumZ](mktileoverlay/maximumz.md): The maximum zoom level that the tiles of this overlay object support.
- [canReplaceMapContent](mktileoverlay/canreplacemapcontent.md): A Boolean value that indicates whether the tile content is fully opaque.

### Customizing the loading of tiles

- [urlTemplate](mktileoverlay/urltemplate.md): The template for generating tile image URLs.
- [url(forTilePath:)](mktileoverlay/url%28fortilepath_%29.md): Returns the URL to use to access the specified tile.
- [loadTile(at:result:)](mktileoverlay/loadtile%28at_result_%29.md): Loads the specified tile asynchronously.
- [MKTileOverlayPath](mktileoverlaypath.md): Values that specify the path indexes for a single overlay tile.

### Initializers

- [init(URLTemplate:)](mktileoverlay/init%28urltemplate_%29-1wri0.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [MKAnnotation](mkannotation.md)
- [MKOverlay](mkoverlay.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Tiled image overlays

- [MKTileOverlayRenderer](mktileoverlayrenderer.md): The renderer for a tile overlay that handles the drawing of bitmap images on the map surface.

# MKTileOverlay (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

An overlay that covers an area of the map with tiles of bitmap images.

## Declaration

```objectivec
@interface MKTileOverlay : NSObject
```

<a id="overview"></a>

## Overview

You use tile overlay objects to represent your own tile-based content and to coordinate the display of that content in a map view. Your tiles can supplement the underlying map content or replace it completely. A tile overlay object coordinates the loading and management of the tiles, and a corresponding [MKTileOverlayRenderer](mktileoverlayrenderer.md) object handles the actual drawing of the tiles on the map.

You can use a single tile overlay object to represent all of the tiles at one or more zoom levels of the map. The default tile overlay object uses a template string to build URLs so that it can locate the map tiles it needs. Each URL incorporates the x and y index of the map tile, the zoom level it’s intended for, and the scale factor corresponding to the screen resolution on which to display the tile. The default class lets you specify map tiles with indexes that start in either the upper-left corner or lower-left corner of the map. If you use a different indexing scheme for your tiles, you can also subclass and override the [URLForTilePath:](mktileoverlay/url%28fortilepath_%29.md) or [loadTileAtPath:result:](mktileoverlay/loadtile%28at_result_%29.md) methods to map between the requested tile and your custom indexing scheme.

## Topics

### Creating a tile overlay

- [initWithURLTemplate:](mktileoverlay/init%28urltemplate_%29-9s8h7.md): Creates and returns a tile overlay object using the specified tile-access template.

### Accessing the tile attributes

- [tileSize](mktileoverlay/tilesize.md): The size (in pixels) of your tile images.
- [geometryFlipped](mktileoverlay/isgeometryflipped.md): A Boolean value that indicates the orientation of tile indexes along the y-axis.
- [minimumZ](mktileoverlay/minimumz.md): The minimum zoom level that the tiles of this overlay object support.
- [maximumZ](mktileoverlay/maximumz.md): The maximum zoom level that the tiles of this overlay object support.
- [canReplaceMapContent](mktileoverlay/canreplacemapcontent.md): A Boolean value that indicates whether the tile content is fully opaque.

### Customizing the loading of tiles

- [URLTemplate](mktileoverlay/urltemplate.md): The template for generating tile image URLs.
- [URLForTilePath:](mktileoverlay/url%28fortilepath_%29.md): Returns the URL to use to access the specified tile.
- [loadTileAtPath:result:](mktileoverlay/loadtile%28at_result_%29.md): Loads the specified tile asynchronously.
- [MKTileOverlayPath](mktileoverlaypath.md): Values that specify the path indexes for a single overlay tile.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [MKOverlay](mkoverlay.md)

## See Also

### Tiled image overlays

- [MKTileOverlayRenderer](mktileoverlayrenderer.md): The renderer for a tile overlay that handles the drawing of bitmap images on the map surface.

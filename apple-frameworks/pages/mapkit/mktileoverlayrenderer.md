> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mktileoverlayrenderer](https://developer.apple.com/documentation/mapkit/mktileoverlayrenderer)

# MKTileOverlayRenderer (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The renderer for a tile overlay that handles the drawing of bitmap images on the map surface.

## Declaration

```swift
class MKTileOverlayRenderer
```

<a id="overview"></a>

## Overview

You create instances of this class when tile overlays become visible on the map view. A renderer works closely with its associated tile overlay object to coordinate the loading and drawing of tiles at appropriate times.

For information about how to specify the tiles to display on the map, see [MKTileOverlay](mktileoverlay.md).

## Topics

### Creating a tile renderer

- [init(tileOverlay:)](mktileoverlayrenderer/init%28tileoverlay_%29.md): Initializes and returns a tile renderer with the specified overlay object.

### Reloading the tile data

- [reloadData()](mktileoverlayrenderer/reloaddata%28%29.md): Forces the tile overlay renderer to reload and redisplay the tiles.

## Relationships

### Inherits From

- [MKOverlayRenderer](mkoverlayrenderer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Tiled image overlays

- [MKTileOverlay](mktileoverlay.md): An overlay that covers an area of the map with tiles of bitmap images.

# MKTileOverlayRenderer (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The renderer for a tile overlay that handles the drawing of bitmap images on the map surface.

## Declaration

```objectivec
@interface MKTileOverlayRenderer : MKOverlayRenderer
```

<a id="overview"></a>

## Overview

You create instances of this class when tile overlays become visible on the map view. A renderer works closely with its associated tile overlay object to coordinate the loading and drawing of tiles at appropriate times.

For information about how to specify the tiles to display on the map, see [MKTileOverlay](mktileoverlay.md).

## Topics

### Creating a tile renderer

- [initWithTileOverlay:](mktileoverlayrenderer/init%28tileoverlay_%29.md): Initializes and returns a tile renderer with the specified overlay object.

### Reloading the tile data

- [reloadData](mktileoverlayrenderer/reloaddata%28%29.md): Forces the tile overlay renderer to reload and redisplay the tiles.

## Relationships

### Inherits From

- [MKOverlayRenderer](mkoverlayrenderer.md)

## See Also

### Tiled image overlays

- [MKTileOverlay](mktileoverlay.md): An overlay that covers an area of the map with tiles of bitmap images.

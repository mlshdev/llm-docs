> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catiledlayer](https://developer.apple.com/documentation/quartzcore/catiledlayer)

# CATiledLayer (Swift)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A layer that provides a way to asynchronously provide tiles of the layer’s content, potentially cached at multiple levels of detail.

## Declaration

```swift
class CATiledLayer
```

<a id="overview"></a>

## Overview

As more data is required by the renderer, the layer’s [draw(in:)](calayer/draw%28in_%29.md) method is called on one or more background threads to supply the drawing operations to fill in one tile of data. The clip bounds and current transformation matrix (CTM) of the drawing context can be used to determine the bounds and resolution of the tile being requested.

Regions of the layer may be invalidated using the [setNeedsDisplay(\_:)](calayer/setneedsdisplay%28__%29.md) method however the update will be asynchronous. While the next display update will most likely not contain the updated content, a future update will.

> **Important**

>  Do not attempt to directly modify the [contents](calayer/contents.md) property of a [CATiledLayer](catiledlayer.md) object. Doing so disables the ability of a tiled layer to asynchronously provide tiled content, effectively turning the layer into a regular [CALayer](calayer.md) object.

## Topics

### Visual Fade

- [fadeDuration()](catiledlayer/fadeduration%28%29.md): The time, in seconds, that newly added images take to “fade-in” to the rendered representation of the tiled layer.

### Levels of detail

- [levelsOfDetail](catiledlayer/levelsofdetail.md): The number of levels of detail maintained by this layer.
- [levelsOfDetailBias](catiledlayer/levelsofdetailbias.md): The number of magnified levels of detail for this layer.

### Layer tile size

- [tileSize](catiledlayer/tilesize.md): The maximum size of each tile used to create the layer’s content.

## Relationships

### Inherits From

- [CALayer](calayer.md)

### Conforms To

- [CAMediaTiming](camediatiming.md)
- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Advanced Layer Options

- [CAScrollLayer](cascrolllayer.md): A layer that displays scrollable content larger than its own bounds.
- [CATransformLayer](catransformlayer.md): Objects used to create true 3D layer hierarchies, rather than the flattened hierarchy rendering model used by other layer types.
- [CAReplicatorLayer](careplicatorlayer.md): A layer that creates a specified number of sublayer copies with varying geometric, temporal, and color transformations.

# CATiledLayer (Objective-C)

**Framework:** Core Animation  
**Kind:** Class  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

A layer that provides a way to asynchronously provide tiles of the layer’s content, potentially cached at multiple levels of detail.

## Declaration

```objectivec
@interface CATiledLayer : CALayer
```

<a id="overview"></a>

## Overview

As more data is required by the renderer, the layer’s [drawInContext:](calayer/draw%28in_%29.md) method is called on one or more background threads to supply the drawing operations to fill in one tile of data. The clip bounds and current transformation matrix (CTM) of the drawing context can be used to determine the bounds and resolution of the tile being requested.

Regions of the layer may be invalidated using the [setNeedsDisplayInRect:](calayer/setneedsdisplay%28__%29.md) method however the update will be asynchronous. While the next display update will most likely not contain the updated content, a future update will.

> **Important**

>  Do not attempt to directly modify the [contents](calayer/contents.md) property of a [CATiledLayer](catiledlayer.md) object. Doing so disables the ability of a tiled layer to asynchronously provide tiled content, effectively turning the layer into a regular [CALayer](calayer.md) object.

## Topics

### Visual Fade

- [fadeDuration](catiledlayer/fadeduration%28%29.md): The time, in seconds, that newly added images take to “fade-in” to the rendered representation of the tiled layer.

### Levels of detail

- [levelsOfDetail](catiledlayer/levelsofdetail.md): The number of levels of detail maintained by this layer.
- [levelsOfDetailBias](catiledlayer/levelsofdetailbias.md): The number of magnified levels of detail for this layer.

### Layer tile size

- [tileSize](catiledlayer/tilesize.md): The maximum size of each tile used to create the layer’s content.

## Relationships

### Inherits From

- [CALayer](calayer.md)

## See Also

### Advanced Layer Options

- [CAScrollLayer](cascrolllayer.md): A layer that displays scrollable content larger than its own bounds.
- [CATransformLayer](catransformlayer.md): Objects used to create true 3D layer hierarchies, rather than the flattened hierarchy rendering model used by other layer types.
- [CAReplicatorLayer](careplicatorlayer.md): A layer that creates a specified number of sublayer copies with varying geometric, temporal, and color transformations.

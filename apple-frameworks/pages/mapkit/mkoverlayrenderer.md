> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlayrenderer](https://developer.apple.com/documentation/mapkit/mkoverlayrenderer)

# MKOverlayRenderer (Swift)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The shared infrastructure for drawing overlays on the map surface.

## Declaration

```swift
class MKOverlayRenderer
```

<a id="overview"></a>

## Overview

An overlay renderer draws the visual representation of an overlay object — that is, an object that conforms to the [MKOverlay](mkoverlay.md) protocol. This class defines the drawing infrastructure the map view uses. Subclasses need to override the [draw(\_:zoomScale:in:)](mkoverlayrenderer/draw%28__zoomscale_in_%29.md) method to draw the contents of the overlay.

The MapKit framework provides several concrete instances of overlay renderers. Specifically, it provides renderers for each of the concrete overlay objects. You can use one of these existing renderers or define your own subclasses if you want to draw the overlay contents differently.

You can subclass `MKOverlayRenderer` to create overlays based on custom shapes, content, or drawing techniques. The only method subclasses need to override is the [draw(\_:zoomScale:in:)](mkoverlayrenderer/draw%28__zoomscale_in_%29.md) method. However, if your class contains content that may not be ready for drawing right away, you need to also override the [canDraw(\_:zoomScale:)](mkoverlayrenderer/candraw%28__zoomscale_%29.md) method and use it to report when your class is ready and able to draw.

The map view may tile large overlays and distribute the rendering of each tile to separate threads. Therefore, the implementation of your [draw(\_:zoomScale:in:)](mkoverlayrenderer/draw%28__zoomscale_in_%29.md) method needs to be safe to run from background threads and from multiple threads simultaneously.

## Topics

### Creating an overlay view

- [init(overlay:)](mkoverlayrenderer/init%28overlay_%29.md): Creates and returns the overlay renderer and associates it with the specified overlay object.

### Attributes of the overlay

- [overlay](mkoverlayrenderer/overlay.md): The overlay object containing the data for drawing.
- [alpha](mkoverlayrenderer/alpha.md): The amount of transparency to apply to the overlay.
- [contentScaleFactor](mkoverlayrenderer/contentscalefactor.md): The scale factor for drawing the overlay’s content.
- [blendMode](mkoverlayrenderer/blendmode.md): The blend mode to apply to the overlay.

### Converting points on the map

- [point(for:)](mkoverlayrenderer/point%28for_%29.md): Returns the point in the overlay renderer’s drawing area corresponding to the specified point on the map.
- [mapPoint(for:)](mkoverlayrenderer/mappoint%28for_%29.md): Returns the point on the map that corresponds to the specified point in the overlay renderer’s drawing area.
- [rect(for:)](mkoverlayrenderer/rect%28for_%29.md): Returns the rectangle in the overlay renderer’s drawing area corresponding to the specified rectangle on the map.
- [mapRect(for:)](mkoverlayrenderer/maprect%28for_%29.md): Returns the rectangle on the map that corresponds to the specified rectangle in the overlay renderer’s drawing area.

### Drawing the overlay

- [canDraw(\_:zoomScale:)](mkoverlayrenderer/candraw%28__zoomscale_%29.md): Returns a Boolean value that indicates whether the overlay view is ready to draw its content.
- [draw(\_:zoomScale:in:)](mkoverlayrenderer/draw%28__zoomscale_in_%29.md): Draws the overlay’s contents at the specified location on the map.
- [setNeedsDisplay()](mkoverlayrenderer/setneedsdisplay%28%29.md): Invalidates the entire contents of the overlay for all zoom scales.
- [setNeedsDisplay(\_:)](mkoverlayrenderer/setneedsdisplay%28__%29.md): Invalidates the specified portion of the overlay at all zoom scales.
- [setNeedsDisplay(\_:zoomScale:)](mkoverlayrenderer/setneedsdisplay%28__zoomscale_%29.md): Invalidates the specified portion of the overlay, but only at the specified zoom scale.

### Types

- [MKZoomScale](mkzoomscale.md): A scale factor to use in conjunction with a map.
- [MKRoadWidthAtZoomScale(\_:)](mkroadwidthatzoomscale%28__%29.md): Returns the width (in screen points) of roads on a map at the specified zoom level.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MKOverlayPathRenderer](mkoverlaypathrenderer.md)
- [MKTileOverlayRenderer](mktileoverlayrenderer.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Shared behavior

- [MKOverlay](mkoverlay.md): An interface for associating content with a specific map region.
- [MKShape](mkshape.md): An abstract class that defines the basic properties for all shape-based overlay objects.
- [MKMultiPoint](mkmultipoint.md): An abstract class that defines the common behavior that open and closed polygon overlays share.
- [MKPlacemark](mkplacemark.md): Deprecated. A user-friendly description of a location on the map.

# MKOverlayRenderer (Objective-C)

**Framework:** MapKit  
**Kind:** Class  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+

The shared infrastructure for drawing overlays on the map surface.

## Declaration

```objectivec
@interface MKOverlayRenderer : NSObject
```

<a id="overview"></a>

## Overview

An overlay renderer draws the visual representation of an overlay object — that is, an object that conforms to the [MKOverlay](mkoverlay.md) protocol. This class defines the drawing infrastructure the map view uses. Subclasses need to override the [drawMapRect:zoomScale:inContext:](mkoverlayrenderer/draw%28__zoomscale_in_%29.md) method to draw the contents of the overlay.

The MapKit framework provides several concrete instances of overlay renderers. Specifically, it provides renderers for each of the concrete overlay objects. You can use one of these existing renderers or define your own subclasses if you want to draw the overlay contents differently.

You can subclass `MKOverlayRenderer` to create overlays based on custom shapes, content, or drawing techniques. The only method subclasses need to override is the [drawMapRect:zoomScale:inContext:](mkoverlayrenderer/draw%28__zoomscale_in_%29.md) method. However, if your class contains content that may not be ready for drawing right away, you need to also override the [canDrawMapRect:zoomScale:](mkoverlayrenderer/candraw%28__zoomscale_%29.md) method and use it to report when your class is ready and able to draw.

The map view may tile large overlays and distribute the rendering of each tile to separate threads. Therefore, the implementation of your [drawMapRect:zoomScale:inContext:](mkoverlayrenderer/draw%28__zoomscale_in_%29.md) method needs to be safe to run from background threads and from multiple threads simultaneously.

## Topics

### Creating an overlay view

- [initWithOverlay:](mkoverlayrenderer/init%28overlay_%29.md): Creates and returns the overlay renderer and associates it with the specified overlay object.

### Attributes of the overlay

- [overlay](mkoverlayrenderer/overlay.md): The overlay object containing the data for drawing.
- [alpha](mkoverlayrenderer/alpha.md): The amount of transparency to apply to the overlay.
- [contentScaleFactor](mkoverlayrenderer/contentscalefactor.md): The scale factor for drawing the overlay’s content.
- [blendMode](mkoverlayrenderer/blendmode.md): The blend mode to apply to the overlay.

### Converting points on the map

- [pointForMapPoint:](mkoverlayrenderer/point%28for_%29.md): Returns the point in the overlay renderer’s drawing area corresponding to the specified point on the map.
- [mapPointForPoint:](mkoverlayrenderer/mappoint%28for_%29.md): Returns the point on the map that corresponds to the specified point in the overlay renderer’s drawing area.
- [rectForMapRect:](mkoverlayrenderer/rect%28for_%29.md): Returns the rectangle in the overlay renderer’s drawing area corresponding to the specified rectangle on the map.
- [mapRectForRect:](mkoverlayrenderer/maprect%28for_%29.md): Returns the rectangle on the map that corresponds to the specified rectangle in the overlay renderer’s drawing area.

### Drawing the overlay

- [canDrawMapRect:zoomScale:](mkoverlayrenderer/candraw%28__zoomscale_%29.md): Returns a Boolean value that indicates whether the overlay view is ready to draw its content.
- [drawMapRect:zoomScale:inContext:](mkoverlayrenderer/draw%28__zoomscale_in_%29.md): Draws the overlay’s contents at the specified location on the map.
- [setNeedsDisplay](mkoverlayrenderer/setneedsdisplay%28%29.md): Invalidates the entire contents of the overlay for all zoom scales.
- [setNeedsDisplayInMapRect:](mkoverlayrenderer/setneedsdisplay%28__%29.md): Invalidates the specified portion of the overlay at all zoom scales.
- [setNeedsDisplayInMapRect:zoomScale:](mkoverlayrenderer/setneedsdisplay%28__zoomscale_%29.md): Invalidates the specified portion of the overlay, but only at the specified zoom scale.

### Types

- [MKZoomScale](mkzoomscale.md): A scale factor to use in conjunction with a map.
- [MKRoadWidthAtZoomScale](mkroadwidthatzoomscale%28__%29.md): Returns the width (in screen points) of roads on a map at the specified zoom level.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Inherited By

- [MKOverlayPathRenderer](mkoverlaypathrenderer.md)
- [MKTileOverlayRenderer](mktileoverlayrenderer.md)

## See Also

### Shared behavior

- [MKOverlay](mkoverlay.md): An interface for associating content with a specific map region.
- [MKShape](mkshape.md): An abstract class that defines the basic properties for all shape-based overlay objects.
- [MKMultiPoint](mkmultipoint.md): An abstract class that defines the common behavior that open and closed polygon overlays share.
- [MKPlacemark](mkplacemark.md): Deprecated. A user-friendly description of a location on the map.

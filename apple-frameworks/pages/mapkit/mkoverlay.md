> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkoverlay](https://developer.apple.com/documentation/mapkit/mkoverlay)

# MKOverlay (Swift)

**Framework:** MapKit  
**Kind:** Protocol  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

An interface for associating content with a specific map region.

## Declaration

```swift
protocol MKOverlay : MKAnnotation
```

<a id="overview"></a>

## Overview

*Overlay objects* are data objects that define the geographic data to cover. MapKit defines several concrete classes that adopt this protocol and define standard shapes like rectangles, circles, and polygons. You might use overlays to define the geographic boundaries of a national park or trace a bus route along city streets. You add an overlay to your map view by calling its [addOverlay(\_:)](mkmapview/addoverlay%28__%29.md) method or any other map view method for adding overlays to the map. When the overlay’s region intersects the visible portion of the map, the map view calls the [mapView(\_:rendererFor:)](mkmapviewdelegate/mapview%28__rendererfor_%29.md) method of its delegate to obtain the renderer object responsible for drawing the overlay.

If you add an overlay to a map view as an annotation, instead of adding it as an overlay, the map view treats your overlay as an annotation. Specifically, it displays your overlay only when its [coordinate](mkoverlay/coordinate.md) is in the visible map region, rather than displaying the overlay when any portion of its covered area is visible.

## Topics

### Describing the overlay geometry

- [coordinate](mkoverlay/coordinate.md): The approximate center point of the overlay area.
- [boundingMapRect](mkoverlay/boundingmaprect.md): The projected rectangle that encompasses the overlay.

### Determining map intersections

- [intersects(\_:)](mkoverlay/intersects%28__%29.md): Returns a Boolean value that indicates whether the specified rectangle intersects the overlay’s shape.

### Optimizing map rendering

- [canReplaceMapContent()](mkoverlay/canreplacemapcontent%28%29.md): Returns a Boolean value that indicates whether the overlay content replaces the underlying map content.

## Relationships

### Inherits From

- [MKAnnotation](mkannotation.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

### Conforming Types

- [MKCircle](mkcircle.md)
- [MKGeodesicPolyline](mkgeodesicpolyline.md)
- [MKMultiPolygon](mkmultipolygon.md)
- [MKMultiPolyline](mkmultipolyline.md)
- [MKPolygon](mkpolygon.md)
- [MKPolyline](mkpolyline.md)
- [MKTileOverlay](mktileoverlay.md)

## See Also

### Shared behavior

- [MKOverlayRenderer](mkoverlayrenderer.md): The shared infrastructure for drawing overlays on the map surface.
- [MKShape](mkshape.md): An abstract class that defines the basic properties for all shape-based overlay objects.
- [MKMultiPoint](mkmultipoint.md): An abstract class that defines the common behavior that open and closed polygon overlays share.
- [MKPlacemark](mkplacemark.md): Deprecated. A user-friendly description of a location on the map.

# MKOverlay (Objective-C)

**Framework:** MapKit  
**Kind:** Protocol  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · tvOS 9.2+ · visionOS 1.0+ · watchOS 1.0+

An interface for associating content with a specific map region.

## Declaration

```objectivec
@protocol MKOverlay <MKAnnotation>
```

<a id="overview"></a>

## Overview

*Overlay objects* are data objects that define the geographic data to cover. MapKit defines several concrete classes that adopt this protocol and define standard shapes like rectangles, circles, and polygons. You might use overlays to define the geographic boundaries of a national park or trace a bus route along city streets. You add an overlay to your map view by calling its [addOverlay:](mkmapview/addoverlay%28__%29.md) method or any other map view method for adding overlays to the map. When the overlay’s region intersects the visible portion of the map, the map view calls the [mapView:rendererForOverlay:](mkmapviewdelegate/mapview%28__rendererfor_%29.md) method of its delegate to obtain the renderer object responsible for drawing the overlay.

If you add an overlay to a map view as an annotation, instead of adding it as an overlay, the map view treats your overlay as an annotation. Specifically, it displays your overlay only when its [coordinate](mkoverlay/coordinate.md) is in the visible map region, rather than displaying the overlay when any portion of its covered area is visible.

## Topics

### Describing the overlay geometry

- [coordinate](mkoverlay/coordinate.md): The approximate center point of the overlay area.
- [boundingMapRect](mkoverlay/boundingmaprect.md): The projected rectangle that encompasses the overlay.

### Determining map intersections

- [intersectsMapRect:](mkoverlay/intersects%28__%29.md): Returns a Boolean value that indicates whether the specified rectangle intersects the overlay’s shape.

### Optimizing map rendering

- [canReplaceMapContent](mkoverlay/canreplacemapcontent%28%29.md): Returns a Boolean value that indicates whether the overlay content replaces the underlying map content.

## Relationships

### Inherits From

- [MKAnnotation](mkannotation.md)

### Conforming Types

- [MKCircle](mkcircle.md)
- [MKMultiPolygon](mkmultipolygon.md)
- [MKMultiPolyline](mkmultipolyline.md)
- [MKPolygon](mkpolygon.md)
- [MKPolyline](mkpolyline.md)
- [MKTileOverlay](mktileoverlay.md)

## See Also

### Shared behavior

- [MKOverlayRenderer](mkoverlayrenderer.md): The shared infrastructure for drawing overlays on the map surface.
- [MKShape](mkshape.md): An abstract class that defines the basic properties for all shape-based overlay objects.
- [MKMultiPoint](mkmultipoint.md): An abstract class that defines the common behavior that open and closed polygon overlays share.
- [MKPlacemark](mkplacemark.md): Deprecated. A user-friendly description of a location on the map.

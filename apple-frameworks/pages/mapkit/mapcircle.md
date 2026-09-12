> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mapcircle](https://developer.apple.com/documentation/mapkit/mapcircle)

# MapCircle

**Framework:** MapKit  
**Kind:** Structure  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS · watchOS 10.0+

A circular overlay with a configurable radius that you center on a geographic coordinate.

## Declaration

```swift
struct MapCircle
```

<a id="overview"></a>

## Overview

Use this view to create circular overlays in the closure you provide to the `content` parameter in [Map](map.md) initializers.

## Topics

### Creating a map circle

- [init(\_:)](mapcircle/init%28__%29.md): Creates a circle overlay from an existing map circle object.
- [init(center:radius:)](mapcircle/init%28center_radius_%29.md): Creates a circle with the center coordinate and radius you specify.
- [init(mapRect:)](mapcircle/init%28maprect_%29.md): Creates the largest possible circle centered within the given map rectangle.

### Styling the circle

- [foregroundStyle(\_:)](mapcontent/foregroundstyle%28__%29.md): Specifies the shape style used to fill content in drawing map overlays.
- [stroke(\_:lineWidth:)](mapcontent/stroke%28__linewidth_%29.md): Applies the given shape style to drawn map overlays using the line width you specify.
- [stroke(\_:style:)](mapcontent/stroke%28__style_%29.md): Applies the given shape style to drawn map overlays using the stroke style you specify.
- [stroke(lineWidth:)](mapcontent/stroke%28linewidth_%29.md): Applies the given stoke drawn map overlays using the line width you specify.
- [strokeStyle(style:)](mapcontent/strokestyle%28style_%29.md): Applies the given stroke style to drawn map overlays.

### Setting the overlay level

- [mapOverlayLevel(level:)](mapcontent/mapoverlaylevel%28level_%29.md): Specifies the position of overlays relative to other map content.

### Type aliases

- [Body](mapcontent/body-swift.associatedtype.md): The content and behavior of the view.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [MapContent](mapcontent.md)

## See Also

### Annotations and overlays

- [Annotation](annotation.md): A customizable annotation used to indicate a location on a map.
- [MapPolygon](mappolygon.md): A closed polygon overlay.
- [MapPolyline](mappolyline.md): An open polygon overlay consisting of one or more connected line segments.
- [Marker](marker.md): A balloon-shaped annotation that marks a map location.
- [UserAnnotation](userannotation.md): Displays the person’s current location on the map.
